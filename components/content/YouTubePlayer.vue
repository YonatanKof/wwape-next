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
	desc: {
		type: String,
		default: undefined,
	},
	marginTop: {
		type: String,
		default: "var(--space-m)",
	},
});
</script>

<template>
	<div>
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
		<em v-if="desc">{{ desc }}</em>
	</div>
</template>

<style lang="scss" scoped>
.youtube-player {
	margin-block-start: v-bind(marginTop);
	aspect-ratio: 16/9;
	overflow: hidden;
	border-radius: var(--border-radius-sm);
	&__item {
		aspect-ratio: 560/315;
	}
}
em {
	@include desc-text-under();
}
</style>
