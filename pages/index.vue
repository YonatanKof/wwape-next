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
			text="I’m Yonatan, a mismatched persona, friend, lover, family man, and an alright dude from <i>Tel Aviv</i>, the cultural capital of the flaming <i>Middle East</i>."
			text2="If life is an <i>RPG</i> and you’re an <i>NPC</i>, then I’m a multiclass player: a professional product designer and an amateur illustrator, developer, photographer, tinkerer, and bedroom DJ."
			/>
	</main>
</template>
