<script setup>
const config = useRuntimeConfig();
const pageDesc = `Amazing posts by ${config.public.siteOwnerName}`;
const pageImg = '/images/posts-social.jpg';
const pageAlt = 'Social cover for this site posts page';
useHead({
	title: 'Posts',
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
const { data } = await useAsyncData('equal', () => {
	return queryContent('post').sort({ date: -1 }).where({}).find();
});
</script>
<template>
	<div>
		<IntroText title="Posts" text="Please enjoy some content I've written throughout the years"/>
		<ItemList :design-data="data" />
	</div>
</template>
