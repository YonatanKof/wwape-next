<script setup>
const nuxtApp = useNuxtApp();
nuxtApp.$pageMetaTags();
</script>
<template>
	<main>
		<IntroText
			:is-on="true"
			title="World Wide Ape"
			text="I’m <strong>Yonatan Ben Knaan</strong>, a graphic designer, friend, lover, family man, upright simian, an alright dude, and a mismatched persona from <i>Tel Aviv</i>, the cultural capital of the flaming <i>Middle East</i>."
			text2="If life is an <i>RPG</i> and you’re an <i>NPC</i>, then I’m a multiclass: professional <strong>full-stack product designer</strong> and an amateur illustrator, developer, photographer, tinkerer, and bedroom DJ."
		/>
		<div>
			<h2>Theme Settings</h2>
			<ColorPicker cssVariable="--color-sys-main" label="Main System Color" />
			<ColorPicker cssVariable="--color-sys-invert-main" label="Inverted Main Color" />
			<ColorPicker cssVariable="--color-brand-main" label="Brand Color" />
		</div>
	</main>
</template>
