<!-- This is a single post -->
<script setup>
definePageMeta({
	layout: 'simple',
});
// const pageDesc = `Pepperi Page Builder, by ${config.public.siteOwnerName}`;
// const pageImg = '/misc/melio-social.jpg';
// const pageAlt = 'Cover image Pepperi Page Builder';
// useHead({
// 	title: 'Pepperi Page Builder',
// });

const { path } = useRoute();

const { data } = await useAsyncData('equal', () => {
	return queryContent('work').where({}).find();
});

const config = useRuntimeConfig();
const siteTitle = `A post by ${config.public.siteOwnerName} form the ${config.public.siteName}`;

// Set the meta
const dynamicUrl = config.public.baseUrl;
const canonicalPath = dynamicUrl + (path + '/').replace(/\/+$/, '/');
const image = dynamicUrl + data.value?.article?.social_image || '/images/index-social.jpg';

const { $formatDate } = useNuxtApp();

useHead({
	titleTemplate: (titleChunk) => {
		return titleChunk ? `${titleChunk} - ` + siteTitle : siteTitle;
	},
	meta: [
		{ name: 'description', content: data.value?.article?.description },
		{
			property: 'article:published_time',
			content: data.value?.article?.updated.split('T')[0] || data.value?.article?.date.split('T')[0],
		},
		// OG
		{ hid: 'og:title', property: 'og:title', content: data.value?.article?.title + ` - ` + siteTitle },
		{ hid: 'og:url', property: 'og:url', content: canonicalPath },
		{ hid: 'og:description', property: 'og:description', content: data.value?.article?.description },
		{ hid: 'og:image', name: 'image', property: 'og:image', content: image },
		{ hid: 'og:type', property: 'og:type', content: 'article' },
		{ hid: 'og:image:type', property: 'og:image:type', content: `image/jpeg` },
		{ hid: 'og:image:width', property: 'og:image:width', content: 1200 },
		{ hid: 'og:image:height', property: 'og:image:height', content: 630 },
		{ hid: 'og:image:alt', property: 'og:image:alt', content: data.value?.article?.image_alt },
		// Twitter
		{ hid: 'twitter:card', name: 'twitter:card', content: 'summary_large_image' },
		{ hid: 'twitter:creator', name: 'twitter:creator', content: '@yonatankof' },
		{ hid: 'twitter:title', name: 'twitter:title', content: data.value?.article?.title + ` - ` + siteTitle },
		{ hid: 'twitter:description', name: 'twitter:description', content: data.value?.article?.description },
		{ hid: 'twitter:url', name: 'twitter:url', content: canonicalPath },
		{ hid: 'twitter:image', name: 'twitter:image', content: image },
		{ hid: 'twitter:image:width', name: 'twitter:image:width', content: 1200 },
		{ hid: 'twitter:image:height', name: 'twitter:image:height', content: 630 },
		{ hid: 'twitter:image:alt', name: 'twitter:image:alt', content: data.value?.article?.image_alt },
	],
	link: [
		{
			hid: 'canonical',
			rel: 'canonical',
			href: canonicalPath,
		},
	],
});
</script>

<template>
	<main>
		<ContentDoc>
			<template v-slot="{ doc }">
				<article>
					<section id="article-header">
						<div id="article-info">
							<h1 id="title">{{ doc.title }}</h1>
							<hr />
							<span class="dates">
								<p>Posted {{ $formatDate(doc.date) }}</p>
								<p v-if="doc.updated">•</p>
								<p v-if="doc.updated">Updated {{ $formatDate(doc.updated) }}</p>
							</span>
							<hr />
							<h3 id="sub-title">{{ doc.description }}</h3>
						</div>
						<UnLazyImage
							id="article-image"
							:thumbhash="doc.cover_image_thumbhash"
							:src="doc.cover_image"
							:alt="doc.image_alt"
							:height="doc.cover_image_height"
							auto-sizes
						/>
					</section>
					<hr />
					<span class="content-renderer"><ContentRenderer :value="doc" /></span>
				</article>
			</template>
			<template #not-found>
				<ErrorMsg />
			</template>
		</ContentDoc>
	</main>
</template>

<style lang="scss" scoped>
// main {
// 	max-width: var(--display-width-lg);
// 	margin-inline: auto;
// }
h1 {
	margin-block-end: var(--space-s);
}
section {
	display: grid;
	grid-template-columns: 2fr 1fr 6fr;
	grid-template-rows: var(--space-2xl) auto var(--space-2xl);
	height: min-content;
	margin-block-end: var(--space-m);
	@media (width <= $display-width-lg) {
		grid-template-columns: 4fr 1fr 6fr;
	}
	@media (width <= $display-width-md) {
		grid-template-columns: 5fr 1fr 6fr;
	}
	@media (width <= $display-width-sm) {
		grid-template-columns: var(--space-5xl) 1fr var(--space-5xl);
		grid-template-rows: var(--space-5xl) auto 1fr;
	}
	@media (width <= $display-width-xs) {
		grid-template-columns: var(--space-2xl) 1fr var(--space-2xl);
		grid-template-rows: var(--space-6xl) auto 1fr;
	}
	@media (width <= $display-width-2xs) {
		grid-template-columns: var(--space-s) 1fr var(--space-s);
	}
}
#article-info {
	background-color: var(--color-sys-invert-highlight-slight);
	backdrop-filter: blur(7px);
	background-image: radial-gradient(var(--color-sys-invert-highlight) 1px, transparent 1px);
	background-size: 3px 3px;
	grid-column: 1 / span 2;
	grid-row: 1 / span 2;
	padding: calc(var(--space-s) + var(--space-3xs));
	z-index: 10;
	border-radius: var(--border-radius-sm);
	height: min-content;
	@media (width <= $display-width-sm) {
		padding: var(--space-s);
	}
}
#article-image {
	grid-column: 2 / span 2;
	grid-row: 2 / span 2;
}
#title {
	font-size: var(--step-4);
}
#sub-title {
	font-family: var(--font-body);
	font-size: var(--step-0);
	margin-block-start: var(--space-s);
	font-variation-settings: unset;
	line-height: 1.5;
	@media (width <= $display-width-2xs) {
		font-size: var(--step--1);
	}
}

article {
	margin-block-end: var(--space-s);
}
main {
	margin-block-end: var(--space-l);
}
.dates {
	display: flex;
	flex-direction: row;
	gap: var(--space-2xs);
}
.dates > p {
	color: var(--color-sys-slight);
	font-size: var(--step--1);
	margin-block-end: unset;
	@media (width <= $display-width-sm) {
		font-size: var(--step--3);
	}
}
#error {
	height: 100%;
}
#error,
#link-buttons {
	@include flex-center($flex-direction: column, $justify-content: center, $gap: var(--space-2xs));
}
hr:last-of-type {
	margin-block-end: var(--space-s);
}
</style>
