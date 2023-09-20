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
	// margin-block-end: var(--spacem-sm);
	overflow: auto;
	border-radius: var(--space-3xs);
	position: relative;
	// padding-bottom: 66.667%; // 3x2
	// padding-bottom: 75%; // 4x3
	padding-bottom: 56.5%; // 16x9
	height: 0;

	&__item {
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
	}
}
</style>
