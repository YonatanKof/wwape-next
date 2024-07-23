<script setup lang="ts">
defineProps({
	icon: {
		type: String,
		default: '👋',
	},
});
</script>

<template>
	<div>
		<span>{{ icon }}</span>
		<!-- <span>{{ text }}</span> -->
		<slot/>
	</div>
</template>

<style scoped>
div {
	display: flex;
	background-color: bisque;
	gap: var(--space-s);
	padding: var(--space-s);
}
</style>
