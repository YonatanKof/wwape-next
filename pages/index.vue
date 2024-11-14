<script setup>
const nuxtApp = useNuxtApp();
nuxtApp.$pageMetaTags({});
</script>
<template>
	<main class="main-index">
		<IntroText
			:is-on="true"
			text="I’m <i>Yonatan Kof</i>, a creative and an alright dude from <i>Tel Aviv</i>, the cultural capital of the flaming <i>Middle East</i>."
			text2="In the RPG of life I'm a <i>full-stack <strong>designer</strong> (product, ops, design system, branding)</i> and an amateur illustrator, developer, artist, photographer, and DJ."
			
		/>
	</main>
</template>