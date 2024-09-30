<script setup lang="ts">
import { ModalsContainer } from 'vue-final-modal';
</script>
<template>
	<main class="main-app">
		<div class="main-warp">
			<AppHeader />
			<NuxtPage />
			<ModalsContainer />
			<AppFooter />
		</div>
	</main>
</template>
<style lang="scss">
.main-app {
	min-height: 100vh;
	background: radial-gradient(ellipse at bottom right, var(--color-brand-dim), transparent 50%);
}
.main-warp {
	min-height: 100dvh;
	display: grid;
	@include display-width;
	grid-template-rows: auto 1fr auto;
}
</style>
