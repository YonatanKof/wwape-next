<script setup lang="ts"></script>
<template>
	<main class="simple-warp">
		<main class="simple-app">
			<AppHeader :isSimple="true" />
			<NuxtPage />
			<AppFooter />
		</main>
	</main>
</template>
<style lang="scss">
.simple-warp {
	min-height: 100vh;
	background: radial-gradient(ellipse at bottom right, var(--color-brand-dim), transparent 50%);
}
.simple-app {
	min-height: 100dvh;
	@include display-width($display-width-lg);
	grid-template-rows: auto 1fr auto;
}
</style>
