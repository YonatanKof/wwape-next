<script setup>
const nuxtApp = useNuxtApp();
nuxtApp.$pageMetaTags();
</script>
<template>
	<main>
		<IntroText
			:is-on="true"
			title="World Wide Ape"
			text="I’m <i>Yonatan Ben Knaan</i>, a family man, graphic designer, friend, and an alright dude from <i>Tel Aviv</i>, the cultural capital of the flaming <i>middle east</i>."
			text2="If life is an <i>RPG</i> and you’re an <i>NPC</i>, then I’m a multiclass product designer and amateur illustrator, developer, photographer, and bedroom DJ."
		/>
	</main>
</template>