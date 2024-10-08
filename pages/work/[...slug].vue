<!-- This is a single post -->
<script setup>
const { path } = useRoute();
const cleanPath = path.replace(/\/+$/, '');

const { data, error } = await useAsyncData(cleanPath, async () => {
	// Remove a trailing slash in case the browser adds it, it might break the routing
	// fetch document where the document path matches with the current route
	let article = queryContent('/design').where({ _path: cleanPath }).findOne();
	return {
		article: await article,
	};
});

const config = useRuntimeConfig();

// Set the meta
const dynamicUrl = config.public.baseUrl;
const image = dynamicUrl + data.value?.article?.social_image || '/images/index-social.jpg';
const cleanDescription = data.value?.article?.description.replace(/<[^>]*>/g, '');

const { $formatDate } = useNuxtApp();

const nuxtApp = useNuxtApp();
nuxtApp.$pageMetaTags({
	metaTitle: `A post by ${config.public.siteOwnerName} of the ${config.public.siteName}`,
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
				<main>
					<section id="article-header">
						<div id="article-info">
							<h1 id="title">{{ doc.title }}</h1>
							<h3 id="sub-title">{{ doc.description }}</h3>
							<span class="dates">
								<p>Posted {{ $formatDate(doc.date) }}</p>
								<p v-if="doc.updated">•</p>
								<p v-if="doc.updated">Updated {{ $formatDate(doc.updated) }}</p>
							</span>
						</div>
					</section>
					<span class="content-renderer"><ContentRenderer :value="doc" /></span>
				</main>
			</template>
			<template #not-found>
				<ErrorMsg />
			</template>
		</ContentDoc>
	</main>
</template>

<style lang="scss" scoped>
main {
	max-width: var(--display-width-lg);
	margin-inline: auto;
}
h1 {
	margin-block-end: var(--space-s);
}
section {
	display: grid;
	height: min-content;
	//margin-block-end: var(--space-m);
}
#sub-title {
	font-family: var(--font-body);
	font-size: var(--step-2);
	// margin-block-start: var(--space-s);
	font-variation-settings: unset;
	line-height: 1.5;
	max-width: 50ch;
	margin-block-end: var(--space-2xs);
	// @media (width <= $display-width-2xs) {
	// 	font-size: var(--step--1);
	// }
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
