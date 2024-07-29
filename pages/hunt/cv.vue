<script setup>
definePageMeta({
	layout: 'simple',
});
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
	<main>
		<h1>CV</h1>
		<KofCv class="cv" />
	</main>
</template>
<style scoped>
main {
	height: calc(100vh - var(--header-height));
	gap: var(--space-s);
	display: grid;
	grid-template-rows: auto 1fr;
}
.cv {
	max-height: calc(100% - var(--space-s));
}
</style>
