<script setup>
const nuxtApp = useNuxtApp();
nuxtApp.$pageMetaTags();
</script>
<template>
	<main>
		<IntroText
			:is-on="true"
			title="World Wide Ape"
			text="I’m Yonatan Ben Knaan, a full-stack graphic artist, friend, lover, family man, upright simian, an alright dude, and a mismatched persona, from <i>Tel Aviv</i>, the cultural capital of the flaming <i>Middle East</i>."
			text2="<strong>Weird bio:</strong> If life is an <i>RPG</i> and you’re an <i>NPC</i>, then I’m a multiclass; professional <strong>product designer</strong> and an amateur illustrator, developer, photographer, tinkerer, and bedroom DJ."
		/>
	</main>
</template>
