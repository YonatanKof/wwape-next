<script setup>
defineProps({
	viewBox: {
		type: String,
		default: '0 0 32 32',
	},
	size: {
		type: String,
		default: '1.25rem',
		// default: 'var(--space-m)',
	},
	fillColor: {
		type: String,
		default: 'none',
	},
	strokeColor: {
		type: String,
		default: 'var(--color-sys-main)',
	},
	strokeWidth: {
		type: String,
		default: '0.1125em',
		// default: 'var(--space-4xs)',
	},
});
</script>

<template>
	<svg
		version="1.1"
		baseProfile="full"
		xmlns="http://www.w3.org/2000/svg"
		xmlns:xlink="http://www.w3.org/1999/xlink"
		xmlns:ev="http://www.w3.org/2001/xml-events"
		aria-labelledby="title description"
		role="img"
		:viewBox="viewBox"
		:width="size"
		:height="size"
	>
		<slot />
		<rect id="bounding-box" fill="none" stroke="none" width="100%" height="100%" />
	</svg>
</template>

<style>
svg, path {
	fill: v-bind(fillColor);
	stroke: v-bind(strokeColor);
	stroke-width: v-bind(strokeWidth);
}
</style>