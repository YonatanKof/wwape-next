<script setup>
import { useDark, useToggle } from '@vueuse/core';
const isDark = useDark();
const toggleDark = useToggle(isDark);
</script>
<template>
	<header>
		<h2>Yonatan <span>Ben Knaan</span></h2>
		<div>
			<nav>
				<nuxt-link :to="{ name: 'index' }">Home</nuxt-link>
				<!-- <nuxt-link :to="{name: 'post'}">Posts</nuxt-link> -->
				<nuxt-link :to="{ name: 'design' }">Designs</nuxt-link>
			</nav>
			<button @click="toggleDark()">
				<span v-if="isDark">Light</span>
				<span v-else>Dark</span>
			</button>
		</div>
	</header>
</template>
<style lang="scss" scoped>
header {
	height: var(--header-height);
	@include flex-center;
}
span {
	white-space: nowrap;
}
div, nav {
	@include flex-center;
	gap: var(--space-xs);
}
@media screen and (max-width: 640px) {
	header {
		flex-direction: column-reverse;
		align-items: start;
		gap: var(--space-xs);
		padding-block: var(--space-xs);
		height: unset;
	}
	div{
		width: 100%;
	}
}
</style>
