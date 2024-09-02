<script setup>
const config = useRuntimeConfig();
const pageDesc = `Amazing designs by ${config.public.siteOwnerName} from the ${config.public.siteName}`;
const pageImg = '/images/designs-social.jpg';
const pageAlt = 'Social cover for this site designs page';

useHead({
	title: `Designs by ${config.public.siteOwnerName}`,
});
useSeoMeta({
	ogType: 'website',
	description: () => pageDesc,
	ogDescription: () => pageDesc,
	twitterDescription: () => pageDesc,
	image: pageImg,
	ogImage: pageImg,
	twitterImage: pageImg,
	imageAlt: pageAlt,
	ogImageAlt: pageAlt,
	twitterImageAlt: pageAlt,
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
		<IntroText title="Art & Design" text="Please enjoy some art, design, illustration, motion graphics & collage I created throughout the years"/>
		<section id="main">
			<ContentQuery
				path="/design"
				:only="['title', 'date', '_path', 'cover_image', 'cover_image_thumbhash', 'cover_image_height', 'image_alt', 'description']"
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