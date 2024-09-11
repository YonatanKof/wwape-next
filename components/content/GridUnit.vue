<script setup>
defineProps({
	marginBlockStart: {
		type: String,
		default: undefined,
	},
});
</script>

<template>
	<div class="grid-unit">
		<slot />
	</div>
</template>
<style lang="scss">
.grid-unit {
	margin-block-start: v-bind(marginBlockStart);
	@media (width <= $display-width-sm) {
		margin-block-start: unset;
	}
	& > :first-child {
		margin-block-start: unset;
	}
}
</style>
