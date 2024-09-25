<script setup>
definePageMeta({
	layout: 'simple',
});
const show = ref(false);
const config = useRuntimeConfig();
const pageDesc = `CV, ${config.public.siteOwnerName}`;
const pageImg = '/misc/cv-social.jpg';
const pageAlt = 'My CV cover image';
useHead({
	title: `CV, ` + config.public.siteOwnerName,
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
</script>
<template>
	<section>
		<h1>CV</h1>
	</section>
</template>