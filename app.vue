<script setup lang="ts">
import { ModalsContainer } from 'vue-final-modal'
const config = useRuntimeConfig();
// const siteTitle = config.public.siteOwnerName + ' of the ' + config.public.siteName;
useHead({
	// titleTemplate: (titleChunk) => {
	// 	return titleChunk ? `${titleChunk} - ` + siteTitle : siteTitle;
	// },
	meta: [
		{ property: 'author', content: config.public.siteOwnerName },
		{ name: 'google-site-verification', content: 'BT5cxk7V5QYzpwQdodAb49ZrNuxGDvD4lii_fgV-uZE' },
	],
});
</script>

<template>
	<main class="main-app">
		<AppHeader />
		<NuxtPage />
		<ModalsContainer />
		<AppFooter />
	</main>
</template>
<style lang="scss">
.main-app {
	height: 100dvh;
	display: grid;
	grid-template-rows: auto 1fr auto;
	@include display-width;
}
.page-enter-active,
.page-leave-active,
.layout-enter-active,
.layout-leave-active {
	transition: opacity 0.14s, filter 0.07s;
}
.page-enter-from,
.page-leave-to,
.layout-enter-from,
.layout-leave-to {
	opacity: 0;
	filter: blur(0.25rem);
}
.pop-enter-active,
.pop-leave-active {
	transition: opacity 0.4s, transform 0.4s;
}
.pop-enter-from {
	opacity: 0;
	transform: translateX(calc(var(--space-8xl) * -1));
}
.pop-leave-to {
	opacity: 0;
	transform: translateX(var(--space-8xl));
}
</style>
