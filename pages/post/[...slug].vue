<!-- This is a single post -->
<script setup>
// const { toc } = useContent();
const { path } = useRoute();
const cleanPath = path.replace(/\/+$/, '');
// For the previous & next items
const [prev, next] = await queryContent('/post')
	.only(['_path', 'title', 'social_image'])
	.sort({ date: -1 })
	.findSurround(cleanPath);
// Data for the meta tags ↓
const { data, error } = await useAsyncData(cleanPath, async () => {
	// Remove a trailing slash in case the browser adds it, it might break the routing
	// fetch document where the document path matches with the current route
	let article = queryContent('/post').where({ _path: cleanPath }).findOne();
	return {
		article: await article,
	};
});

const config = useRuntimeConfig();
// const siteTitle = `A post by ${config.public.siteOwnerName} of the ${config.public.siteName}`;

// Set the meta
const dynamicUrl = config.public.baseUrl;
const image = dynamicUrl + data.value?.article?.social_image || '/images/index-social.jpg';
const cleanDescription = data.value?.article?.description.replace(/<[^>]*>/g, '');

const nuxtApp = useNuxtApp();
nuxtApp.$pageMetaTags({
	metaTitle: `A post by ${config.public.siteOwnerName} of the ${config.public.siteName}`,
	metaArticleAuthor: '["' + config.public.baseUrl + '"]',
	metaTitleData: data.value?.article?.title,
	metaDesc: cleanDescription,
	metaImg: image,
	metaImgAlt: data.value?.article?.image_alt,
	metaOgType: 'article',
	metaPublishedTime: data.value?.article?.date.split('T')[0],
	metaModifiedTime: data.value?.article?.updated.split('T')[0],
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
							<h3 id="sub-title" v-html="doc.description"></h3>
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
					<!-- <pre>{{ toc }}</pre> -->
					<!-- <ul v-if="toc && toc.links">
						<li v-for="link in toc.links" :key="link.text">
							<a :href="`#${link.id}`">
								{{ link.text }}
							</a>
							<ul v-if="link.children">
								<li v-for="child in link.children" :key="child.id">
									<a :href="`#${child.id}`">
										{{ child.text }}
									</a>
								</li>
							</ul>
						</li>
					</ul> -->
					<span class="content-renderer"><ContentRenderer :value="doc" /></span>
				</article>
				<!-- <SeeMore :prev="prev" :next="next" /> -->
			</template>
			<template #not-found>
				<ErrorMsg />
			</template>
		</ContentDoc>
	</main>
</template>

<style lang="scss" scoped>
main {
	max-width: var(--display-width-md);
	margin-inline: auto;
}
h1 {
	margin-block-end: var(--space-s);
}
section {
	display: grid;
	grid-template-columns: 4fr 1fr 6fr;
	grid-template-rows: var(--space-2xl) auto var(--space-2xl);
	height: min-content;
	margin-block-end: var(--space-m);
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
