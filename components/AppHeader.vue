<script setup lang="ts">
defineProps({
	isSimple: {
		type: Boolean,
		default: false,
	},
});
</script>
<template>
	<header>
		<h2>Yonatan <span>Ben Knaan</span></h2>
		<div>
			<nav v-show="isSimple">
				<nuxt-link :to="{ name: 'index' }">Visit WWape</nuxt-link>
			</nav>
			<nav v-show="!isSimple">
				<nuxt-link :to="{ name: 'index' }">Home</nuxt-link>
				<nuxt-link :to="{ name: 'design' }">Designs</nuxt-link>
				<nuxt-link :to="{ name: 'post' }">Posts</nuxt-link>
				<!-- <nuxt-link :to="{ name: 'music' }">Mixed Music</nuxt-link> -->
			</nav>
			<ColorModeSwitch />
		</div>
	</header>
</template>
<style lang="scss" scoped>
i {
	@include flex-center();
}
header {
	height: var(--header-height);
	@include flex-center;
}
span {
	white-space: nowrap;
}
div,
nav {
	@include flex-center;
	gap: var(--space-xs);
}
@media (width <= $display-width-xs) {
	header {
		flex-direction: column-reverse;
		align-items: start;
		gap: var(--space-xs);
		padding-block: var(--space-xs);
		height: unset;
	}
	div {
		width: 100%;
	}
}
@media print {
	header {
		display: none !important;
	}
}
</style>
