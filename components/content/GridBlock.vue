<script setup>
defineProps({
	colNum: {
		type: Number,
		default: 1,
	},
	rowNum: {
		type: Number,
		default: 1,
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
	grid-template-columns: repeat(v-bind(colNum), 1fr);
	grid-template-rows: repeat(v-bind(rowNum), 1fr);
	margin-block: var(--space-s);
	gap: var(--space-xs);
	height: 100%;
	width: 100%;
	@media (width <= $display-width-xs) {
		grid-template-columns: 1fr;
	}
}
</style>
