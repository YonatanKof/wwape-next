<script setup>
defineProps({
	marginBlock: {
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
	margin-block: v-bind(marginBlock);
	& > :first-child {
		margin-block-start: unset;
	}
}
</style>
