<script setup lang="ts">
import { ModalsContainer } from 'vue-final-modal';
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
</style>
