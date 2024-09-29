<script setup>
const config = useRuntimeConfig();

const nuxtApp = useNuxtApp();
nuxtApp.$pageMetaTags({
	metaTitle: `Amazing design work and illustrations by ${config.public.siteOwnerName} of the ${config.public.siteName}`,
	metaDesc: 'Browse a collection of personal design projects and illustrations that explore creativity in everyday life. Simple, expressive, and visually engaging pieces that reflect a unique artistic style',
	metaImg: '/images/designs-social.jpg',
	metaImgAlt: 'Social cover for this site design page',
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
		<IntroText title="Art & Design" text="Please explore some of my artwork, design projects, illustrations, motion graphics, and collages, I created over the years"/>
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