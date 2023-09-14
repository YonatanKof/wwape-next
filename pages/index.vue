<script setup>
const config = useRuntimeConfig();
useSeoMeta({
	ogType: 'website',
	description: () => `An amazing site by ${config.public.siteOwnerName}`,
	ogDescription: () => `An amazing site by ${config.public.siteOwnerName}`,
	twitterDescription: () => `An amazing site by ${config.public.siteOwnerName}`,
	image: '/images/main.png',
	ogImage: '/images/main.png',
	twitterImage: '/images/main.png',
	imageAlt: 'Social cover for this site main page',
	ogImageAlt: 'Social cover for this site main page',
	twitterImageAlt: 'Social cover for this site main page',
	twitterCard: 'summary_large_image',
	twitterSite: '@yonatankof',
});
</script>
<template>
	<main>
		<h1>Index</h1>
		<MyComp>
			<code>You slot!</code><br />
			<h3>I love you</h3>
		</MyComp>
	</main>
</template>
