<script setup>
const config = useRuntimeConfig();
const pageDesc = `An amazing site by ${config.public.siteOwnerName}`;
const pageImg = '/images/index-social.jpg';
const pageAlt = 'Social cover for this site main page';
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
		<IntroText
			title="World Wide Ape"
			text="Hi, I'm Yonatan; a friend, a family man, a designer, a developer, an illustrator, a maker, a mismatched persona and an alright dude – Welcome to my site 👋"
			text2="This site is under contraction 🚧 expect much more design articles and a few blog posts soon"
		/>
	</main>
</template>
