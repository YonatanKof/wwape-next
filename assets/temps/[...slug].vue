<!-- This is a single post -->
<script setup>
definePageMeta({
	layout: 'simple',
});
const { path } = useRoute();
const cleanPath = path.replace(/\/+$/, '');
// Data for the meta tags ↓
const { data, error } = await useAsyncData(cleanPath, async () => {
	// Remove a trailing slash in case the browser adds it, it might break the routing
	// fetch document where the document path matches with the current route
	let article = queryContent('/hunt').where({ _path: cleanPath }).findOne();
	return {
		article: await article,
	};
});

const config = useRuntimeConfig();
const siteTitle = `A post by ${config.public.siteOwnerName} of the ${config.public.siteName}`;

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
const goHome = () => clearError({ redirect: '/' });
const goDesign = () => clearError({ redirect: '/design' });
const goPost = () => clearError({ redirect: '/hunt' });
</script>

<template>
	<main>
		<ContentDoc>
			<template v-slot="{ doc }">
				<article>
					<section id="article-header">
						<div id="article-info">
							<h1 id="title">{{ doc.title }}</h1>
						</div>
						<!-- <UnLazyImage
							id="article-image"
							:thumbhash="doc.cover_image_thumbhash"
							:src="doc.cover_image"
							:alt="doc.image_alt"
							:height="doc.cover_image_height"
							auto-sizes
						/> -->
					</section>
					<!-- <hr /> -->
					<span class="content-renderer"><ContentRenderer :value="doc" /></span>
				</article>
			</template>
		</ContentDoc>
	</main>
</template>

<style lang="scss" scoped>

section {

	@media (width <= $display-width-xs) {
		grid-template-columns: var(--space-2xl) 1fr var(--space-2xl);
		grid-template-rows: var(--space-6xl) auto 1fr;
	}
	@media (width <= $display-width-2xs) {
		grid-template-columns: var(--space-s) 1fr var(--space-s);
	}
}
#article-image {
	max-width: 20rem;
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
@media print {
	#article-image,
	#toc {
		display: none !important;
	}
}
</style>
