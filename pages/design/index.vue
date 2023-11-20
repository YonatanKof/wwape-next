<script setup>
const config = useRuntimeConfig();
useHead({
	title: 'Designs',
});
useSeoMeta({
	ogType: 'website',
	description: () => `Amazing designs by ${config.public.siteOwnerName}`,
	ogDescription: () => `Amazing designs by ${config.public.siteOwnerName}`,
	twitterDescription: () => `Amazing designs by ${config.public.siteOwnerName}`,
	image: '/images/designs.png',
	ogImage: '/images/designs.png',
	twitterImage: '/images/designs.png',
	imageAlt: 'Social cover for this site designs page',
	ogImageAlt: 'Social cover for this site designs page',
	twitterImageAlt: 'Social cover for this site designs page',
	twitterCard: 'summary_large_image',
	twitterSite: '@yonatankof',
});
// Find the number of blogs present
const designCountLimit = 20;
const { data } = await useAsyncData(`content-/design`, async () => {
	const _designs = await queryContent('/design').only('title').find();
	return Math.ceil(_designs.length / designCountLimit);
});
</script>
<template>
	<main>
		<IntroText title="Art & Design" text="Please enjoy some art, design, illustration, motion graphics created throughout the years"/>
		<section id="main">
			<ContentQuery
				path="/design"
				:only="['title', 'date', '_path', 'cover_image', 'cover_image_thumbhash', 'cover_image_height', 'image_alt']"
				:sort="{
					date: -1,
				}"
				:limit="designCountLimit"
				v-slot="{ data }"
			>
				<ItemList :design-data="data" />
			</ContentQuery>
			<Pagination
				v-if="data > 1"
				:currentPage="1"
				:totalPages="data"
				:nextPage="data > 1"
				baseUrl="/design"
				pageUrl="/design/page/"
			/>
		</section>
	</main>
</template>