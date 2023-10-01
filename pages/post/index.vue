<script setup>
const config = useRuntimeConfig();
useHead({
	title: 'Posts',
});
useSeoMeta({
	ogType: 'website',
	description: () => `Amazing posts by ${config.public.siteOwnerName}`,
	ogDescription: () => `Amazing posts by ${config.public.siteOwnerName}`,
	twitterDescription: () => `Amazing posts by ${config.public.siteOwnerName}`,
	image: '/images/posts.png',
	ogImage: '/images/posts.png',
	twitterImage: '/images/posts.png',
	imageAlt: 'Social cover for this site posts page',
	ogImageAlt: 'Social cover for this site posts page',
	twitterImageAlt: 'Social cover for this site posts page',
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
