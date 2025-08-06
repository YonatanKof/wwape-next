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
			text="I’m <i>Yonatan Ben Knaan</i>, a family man, graphic designer, friend, and an alright dude from <i>Tel Aviv</i>, the cultural capital of the flaming <i>middle east</i>."
			text2="If life is an <i>RPG</i> and you’re an <i>NPC</i>, then I’m a multiclass product designer and amateur illustrator, developer, photographer, and bedroom DJ."
		/>
		<ShowContentPreview :content-data="design" title="Latest design works" link-to="design"/>
		<ShowContentPreview :content-data="post" title="Latest articles" link-to="post" link/>
	</main>
</template>
