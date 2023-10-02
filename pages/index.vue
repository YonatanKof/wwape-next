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
		<h1>Welcome to my site 👋</h1>
		<p>I'm Yonatan and here's a nice description: a friend, a family man, a designer, a developer, an illustrator, a maker, a mismatched persona and an all-around alright dude (not necessarily in this order)</p>
	</main>
</template>
