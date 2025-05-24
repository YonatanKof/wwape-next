<script setup>
import { ModalsContainer } from 'vue-final-modal';
useHead({
	meta: [
		{ name: 'google-site-verification', content: 'BT5cxk7V5QYzpwQdodAb49ZrNuxGDvD4lii_fgV-uZE' },
		{ name: 'msvalidate.01', content: '3557D72FD47371EEA2248ADDA0463742' },
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
	transition: opacity 0.3s, transform 0.3s;
}
.page-enter-from,
.layout-enter-from{
	opacity: 0;
	transform: translateX(calc(var(--space-s) * -1));
}
.page-leave-to,
.layout-leave-to {
	opacity: 0;
	transform: translateX(var(--space-s));
}
</style>
