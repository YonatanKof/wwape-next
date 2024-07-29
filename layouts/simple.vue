<script setup lang="ts"></script>
<template>
	<main class="simple-app">
		<AppHeader :showLinkMusic="false" />
		<NuxtPage />
	</main>
</template>
<style lang="scss" scoped>

.simple-app {
	min-height: 100dvh;
	display: grid;
	grid-template-rows: auto 1fr;
	@include display-width($display-width-xl);
	position: relative;
	&::before {
		z-index: -10;
		content: '';
		position: absolute;
		inset: 0;
		top: var(--header-height);
		background: radial-gradient(ellipse at bottom right, var(--color-brand-dim), transparent 50%);
	}
}
</style>
