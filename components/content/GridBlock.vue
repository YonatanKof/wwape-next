<script setup>
defineProps({
	colNum: {
		type: String,
		default: '1',
	},
	rowNum: {
		type: String,
		default: '1',
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
	grid-template-columns: repeat(v-bind(colNum), 1fr);
	grid-template-rows: repeat(v-bind(rowNum), 1fr);
	gap: v-bind(gap);
	height: 100%;
	width: 100%;
	margin-block: var(--space-xs);
	@media (width <= $display-width-xs) {
		grid-template-columns: 1fr;
	}
}
</style>
