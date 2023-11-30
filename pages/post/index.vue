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
	return queryContent('post').where({}).find();
});
</script>
<template>
	<div>
		<h1>Posts</h1>
		<ItemList :design-data="data" masonryMaxColumns="2"/>
	</div>
</template>
