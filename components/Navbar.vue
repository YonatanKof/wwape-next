<template>
	<nav>
		<nuxt-link :to="{name: 'index'}">Home</nuxt-link>
		<!-- <nuxt-link :to="{name: 'post'}">Posts</nuxt-link> -->
		<nuxt-link :to="{name: 'design'}">Designs</nuxt-link>
	</nav>
</template>
<style lang="scss" scoped>
nav {
	@include flex-center;
	gap: var(--space-xs);
}
</style>
