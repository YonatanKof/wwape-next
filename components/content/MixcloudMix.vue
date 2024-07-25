<script setup>
defineProps({
	src: {
		type: String,
		default: undefined,
	},
});
</script>
<template>
	<iframe
		width="100%"
		height="120"
		:src="`https://player-widget.mixcloud.com/widget/iframe/?light=1&feed=%2Fyonatankof%2F` + src + '%2F'"
		frameborder="0"
	></iframe>
</template>
<style scoped>
iframe {
	overflow: hidden;
	border-radius: var(--border-radius-sm);
	border: 1px solid color-mix(in srgb, var(--color-sys-main) 25%, var(--color-sys-invert));
}
</style>
