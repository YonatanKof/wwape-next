<script setup>
defineProps({
	frOne: {
		type: String,
		default: "1fr",
	},
	frTwo: {
		type: String,
		default: "1fr",
	},
	gap: {
		type: String,
		default: 'var(--space-xs)',
	},
});
</script>
<template>
	<div>
        <slot />
    </div>
</template>
<style lang="scss" scoped>
div {
	display: grid;
	grid-template-columns: v-bind(frOne) v-bind(frTwo);
	gap: v-bind(gap);
	height: 100%;
	width: 100%;
	margin-block: var(--space-m);
	@media (width <= $display-width-sm) {
		grid-template-columns: 1fr;
		gap: var(--space-xs);
	}
}
</style>