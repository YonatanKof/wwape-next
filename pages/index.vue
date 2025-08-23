<script setup>
const nuxtApp = useNuxtApp();
nuxtApp.$pageMetaTags();

const { data: design } = await useAsyncData('design-date', () => {
	return queryContent('design').limit(5).only(['title', 'cover_image', 'image_alt']).sort({ date: -1 }).where({}).find();
});
const { data: post } = await useAsyncData('post-date', () => {
	return queryContent('post').limit(3).only(['title', 'description']).sort({ date: -1 }).where({}).find();
});
</script>
<template>
	<main>
		<IntroText
			:is-on="true"
			title="World Wide Ape"
			text="I’m <i>Yonatan Ben Knaan</i>, a graphic designer and an alright dude from <i>Tel Aviv</i>, the cultural capital of the flaming <i>middle east</i>."
			/>
	</main>
</template>
