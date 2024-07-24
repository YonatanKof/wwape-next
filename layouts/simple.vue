<script setup lang="ts"></script>
<template>
	<main class="simple-warp">
		<main class="simple-app">
			<AppHeader />
			<NuxtPage />
		</main>
	</main>
</template>
<style lang="scss">
.simple-warp {
	display: flex;
	justify-content: center; /* Horizontal */
	align-items: center; /* Vertical */
	min-height: 100vh;
	background: radial-gradient(ellipse at bottom right, var(--color-link-dim), transparent 50%);
}
.simple-app {
	max-width: var(--display-width-lg);
	margin-inline: var(--space-m);
	min-height: 100dvh;
}
</style>
