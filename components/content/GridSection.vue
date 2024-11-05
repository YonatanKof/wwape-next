<script setup>
defineProps({
	sectionWidth: {
		type: String,
		default: 'var(--display-width-md)',
	},
	marginBlockStart: {
		type: String,
		default: undefined,
	},
});
</script>

<template>
	<div class="grid-section">
		<slot />
	</div>
</template>
<style lang="scss">
.grid-section {
	@include display-width(v-bind(sectionWidth));
	// @media (width <= $display-width-sm) {
	// 	margin-block-start: unset;
	// }
	// & > :first-child {
	// 	margin-block-start: unset;
	// }
}
</style>
