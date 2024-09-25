<script setup>
const config = useRuntimeConfig();
const pageDesc = `Amazing posts by ${config.public.siteOwnerName} of the ${config.public.siteName}`;
const pageImg = '/images/posts-social.jpg';
const pageAlt = 'Social cover for this site posts page';
useHead({
	title: `Posts by ${config.public.siteOwnerName} of the ${config.public.siteName}`,
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
		<IntroText title="Posts" text="Welcome to my posts page, where I share insights and stories from my creative journey – design tips, personal projects, dev stuff, and more"/>
		<ItemList :design-data="data" />
	</div>
</template>
