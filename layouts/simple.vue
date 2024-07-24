<script setup lang="ts"></script>
<template>
	<main class="simple-warp">
		<!-- <main class="main-app-simple"> -->
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
	background: radial-gradient(ellipse at top left, var(--color-sys-main), transparent 50%),
		radial-gradient(ellipse at bottom right, var(--color-link-main), transparent 50%);
	// height: calc(100vh - calc(var(--space-xl) * 2));
}
.main-app-simple {
	// height: 100%;
	// max-height: calc(100vh - calc(var(--space-xl) * 4));
	// height: 90vh;
	// overflow: hidden;
	// margin: var(--space-xl);
	padding: var(--space-xl);
	background-color: var(--color-sys-invert-highlight);
	max-width: var(--display-width-lg);
	border-radius: var(--border-radius-md);
}
.simple-app {
	max-width: var(--display-width-lg);
	margin-inline: var(--space-m);
}
</style>
