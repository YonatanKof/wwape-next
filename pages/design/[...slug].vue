<script setup>
const { path } = useRoute();
const cleanPath = path.replace(/\/+$/, '');
// For the previous & next items
const [prev, next] = await queryContent('/design')
	.only(['_path', 'title', 'social_image'])
	.sort({ date: -1 })
	.findSurround(cleanPath);
// Data for the meta tags ↓
const { data, error } = await useAsyncData(cleanPath, async () => {
	// Remove a trailing slash in case the browser adds it, it might break the routing
	// fetch document where the document path matches with the current route
	let article = queryContent('/design').where({ _path: cleanPath }).findOne();
	return {
		article: await article,
	};
});
// Set the meta
const baseUrl = 'https://wwape.com';
const canonicalPath = baseUrl + (path + '/').replace(/\/+$/, '/');
const image = data.value?.article?.social_image.src || '/images/main.png';

const config = useRuntimeConfig();
const siteTitle = `A design by ${config.public.siteOwnerName}`;

const { $formatDate } = useNuxtApp();

useHead({
	titleTemplate: (titleChunk) => {
		return titleChunk ? `${titleChunk} - ` + siteTitle : siteTitle;
	},
	// title: data.value?.article?.title,
	meta: [
		{ name: 'description', content: data.value?.article?.description },
		{
			property: 'article:published_time',
			content: data.value?.article?.updated.split('T')[0] || data.value?.article?.date.split('T')[0],
		},
		// OG
		// { hid: 'og:title', property: 'og:title', content: data.value?.article?.title },
		{ hid: 'og:url', property: 'og:url', content: canonicalPath },
		{ hid: 'og:description', property: 'og:description', content: data.value?.article?.description },
		{ hid: 'og:image', name: 'image', property: 'og:image', content: image },
		{ hid: 'og:type', property: 'og:type', content: 'Article' },
		// { hid: 'og:image:type', property: 'og:image:type', content: `image/${data.value?.article?.social_image.mime}` },
		// { hid: 'og:image:width', property: 'og:image:width', content: data.value?.article?.social_image.width || 190 },
		// { hid: 'og:image:height', property: 'og:image:height', content: data.value?.article?.social_image.height || 190 },
		{ hid: 'og:image:alt', property: 'og:image:alt', content: data.value?.article?.social_image.alt },
		// Twitter
		{ hid: 'twitter:card', name: 'twitter:card', content: 'summary_large_image' },
		// { hid: 'twitter:title', name: 'twitter:title', content: data.value?.article?.title },
		{ hid: 'twitter:url', name: 'twitter:url', content: canonicalPath },
		{ hid: 'twitter:description', name: 'twitter:description', content: data.value?.article?.description },
		{ hid: 'twitter:image', name: 'twitter:image', content: image },
		{ hid: 'twitter:image:alt', name: 'twitter:image:alt', content: data.value?.article?.social_image.alt },
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
		<ContentDoc v-slot="{ doc }">
			<article>
				<h1 id="title">{{ doc.title }}</h1>
				<hr />
				<span class="dates">
					<p>Created {{ $formatDate(doc.date) }}</p>
					<p v-if="doc.updated">•</p>
					<p v-if="doc.updated">Updated {{ $formatDate(doc.updated) }}</p>
				</span>
				<hr />
				<ContentRenderer :value="doc" />
			</article>
		</ContentDoc>
		<SeeMore :prev="prev" :next="next" />
	</main>
</template>
<style lang="scss" scoped>
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
	font-size: var(--step--1);
	margin-block-end: unset;
}
@media (width <= $display-width-narrow) {
	.dates > p {
		font-size: var(--step--3);
	}
}
</style>
