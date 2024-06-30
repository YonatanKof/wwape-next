<script setup>
defineProps({
	src: {
		type: String,
		default: undefined,
	},
	playlistHeight: {
		type: Number,
		default: 400,
	},
});
</script>
<template>
	<iframe
		allow="autoplay *; encrypted-media *; fullscreen *; clipboard-write"
		frameborder="0"
		sandbox="allow-forms allow-popups allow-same-origin allow-scripts allow-storage-access-by-user-activation allow-top-navigation-by-user-activation"
		:src="'https://embed.music.apple.com/il/playlist/' + src"
	></iframe>
</template>
<style scoped>
iframe {
	width: 100%;
	max-width: 100%;
	overflow: hidden;
	border-radius: var(--border-radius-sm);
	height: 450px;
	border: 1px solid color-mix(in srgb, var(--color-sys-main) 25%, var(--color-sys-invert));
}
</style>
