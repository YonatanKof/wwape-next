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
		<IntroText
			title="World Wide Ape"
			text="Hi, I'm Yonatan; a friend, a family man, a designer, a developer, an illustrator, a maker, a mismatched persona and an alright dude – Welcome to my site 👋"
			text2="This site is under contraction 🚧 expect much more design articles and a few blog posts soon"
		/>
	</main>
</template>