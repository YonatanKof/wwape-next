<script setup>
defineProps({
	src: {
		type: String,
		default: undefined,
	},
});
</script>
<template>
	<div>
		<slot />
	</div>
</template>
<style scoped>
div {
	display: flex;
	flex-direction: row;
	gap: var(--space-2xs);
}
@media (width < 440px) {
	div {
		gap: var(--space-3xs);
	}
}
</style>
