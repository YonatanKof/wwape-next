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
			text="I'm Yonatan, a mismatched persona, friend, lover, family man and an alright dude form Tel Aviv, the culture capital of the land of the killer Jews."
			text2="If life is a RPG and you're an NPC, so I'm a multiclass; graphic/brand/product designer, illustrator, developer, photographer and maker."
			/>
			<!-- text2="So happy you're here! Please enjoy my site 🔥" -->
			<!-- text2="This site is under contraction 🚧 expect much more design articles and a few blog posts soon" -->
	</main>
</template>
