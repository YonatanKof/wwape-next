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
		<IntroText :is-on="true"
			title="World Wide Ape"
			text="I'm Yonatan:  a mismatched persona, friend, family man, designer, developer, illustrator, music lover, photographer, maker and an alright dude."
			text2="So happy you're here! Please enjoy my site 🔥"
			/>
			<!-- text2="This site is under contraction 🚧 expect much more design articles and a few blog posts soon" -->
	</main>
</template>
