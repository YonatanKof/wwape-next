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
		<IntroText title="Work" text="Welcome to my work page..."/>
		<ItemList :design-data="data" />
	</div>
</template>
