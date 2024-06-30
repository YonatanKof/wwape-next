<script setup>
defineProps({
	width: {
		type: String,
		default: '100%',
	},
	height: {
		type: String,
		default: '100%',
	},
	videoId: {
		type: String,
		default: '',
	},
	title: {
		type: String,
		default: '',
	},
});
</script>

<template>
	<div class="youtube-player">
		<iframe
			class="youtube-player__item"
			:width="width"
			:height="height"
			:videoId="videoId"
			v-bind:src="'https://www.youtube.com/embed/' + videoId"
			:title="title"
			frameborder="0"
			allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
			allowfullscreen
			loading="lazy"
		></iframe>
	</div>
</template>

<style lang="scss">
.youtube-player {
	aspect-ratio: 16/9;
	overflow: auto;
	border-radius: var(--border-radius-sm);
}
</style>
