<script setup>
const config = useRuntimeConfig();

const nuxtApp = useNuxtApp();
nuxtApp.$pageMetaTags({
	metaTitle: `Amazing product works by ${config.public.siteOwnerName} of the ${config.public.siteName}`,
	metaDesc: 'Browse a collection of professional design projects ...',
	metaImg: '/images/posts-social.jpg',
	metaImgAlt: 'Social cover for this site work page',
});
const { data } = await useAsyncData('equal', () => {
	return queryContent('work').sort({ date: -1 }).where({}).find();
});
</script>
<template>
	<div>
		<IntroText 
			title="UX, Product & Brand Design"
			text="Crafting digital products, design systems & brands that get the job done for 15+ years. From design thinking to design ops – I always focus on valuable, efficient solutions."
			text2="See it in action 👇"
		/>
		<ItemList title-size="var(--step-1)" :design-data="data" :show-date="false"/>
	</div>
</template>