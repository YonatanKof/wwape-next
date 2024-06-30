<script setup>
defineProps({
	src: {
		type: String,
		default: undefined,
	},
	aspectRatio: {
		type: String,
		default: '1/1',
	},
	controls: {
		type: Boolean,
		default: false,
	},
	autoplay: {
		type: Boolean,
		default: true,
	},
	muted: {
		type: Boolean,
		default: true,
	},
	loop: {
		type: Boolean,
		default: true,
	},
});
</script>
<template>
	<video :controls="controls" :autoplay="autoplay" :muted="muted" :loop="loop">
		<source :src="src" type="video/webm" />
		<p>Your browser does not support <code>video</code> tag</p>
	</video>
</template>
<style scoped>
video {
	margin-block: var(--space-xs);
	max-width: 100%;
	aspect-ratio: v-bind(aspectRatio);
	border-radius: var(--border-radius-xs);
	overflow: hidden;
}
</style>
