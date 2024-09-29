<script setup>
const config = useRuntimeConfig();
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
const dynamicUrl = config.public.baseUrl;
const image = dynamicUrl + data.value?.article?.social_image || '/images/index-social.jpg';

const { $formatDate } = useNuxtApp();

// Clean the description from HTML tags
const cleanDescription = data.value?.article?.description.replace(/<[^>]*>/g, '');

const nuxtApp = useNuxtApp();
nuxtApp.$pageMetaTags({
	metaTitle: `A design by ${config.public.siteOwnerName} of the ${config.public.siteName}`,
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
					<h1 id="title">{{ doc.title }}</h1>
					<hr />
					<span class="dates">
						<p>Created {{ $formatDate(doc.date) }}</p>
						<p v-if="doc.updated">•</p>
						<p v-if="doc.updated">Updated {{ $formatDate(doc.updated) }}</p>
					</span>
					<hr />
					<span class="content-renderer"><ContentRenderer :value="doc" /></span>
				</article>
				<SeeMore :prev="prev" :next="next" />
			</template>
			<template #not-found>
				<ErrorMsg />
			</template>
		</ContentDoc>
	</main>
</template>

<style lang="scss" scoped>
h1 {
	margin-block-end: var(--space-s);
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
	@media (width <= $display-width-xs) {
		font-size: var(--step--3);
	}
}
#error{
	height: 100%;
}
#error, #link-buttons {
	@include flex-center($flex-direction: column, $justify-content: center, $gap: var(--space-2xs));
}
</style>
