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
	showMesh: {
		type: Boolean,
		default: false,
	},
	desc: {
		type: String,
		default: '',
	},
	marginBlock: {
		type: String,
		default: 'var(--space-xs)',
	},
	minWidth: {
		type: String,
		default: undefined,
	},
});
</script>
<template>
	<div>
		<span v-if="showMesh"></span>
		<video :controls="controls" :autoplay="autoplay" :muted="muted" :loop="loop">
			<source :src="src" type="video/webm" />
			<p>Your browser does not support <code>video</code> tag</p>
		</video>
		<em v-if="desc">{{ desc }}</em>
	</div>
</template>
<style lang="scss" scoped>
div {
	margin-block: v-bind(marginBlock);
	display: block;
	width: 100%;
	height: min-content;
	position: relative;
}
span {
	border-radius: var(--border-radius-xs);
	position: absolute;
	clear: both;
	background-image: radial-gradient(transparent 1px, var(--color-link-dim) 1px);
	background-size: 2px 2px;
	inset: 0;
}
video {
	max-width: 100%;
	aspect-ratio: v-bind(aspectRatio);
	border-radius: var(--border-radius-xs);
	overflow: hidden;
	display: flow-root;
	min-width: v-bind(minWidth);
}
em {
	@include desc-text-under();
}
</style>
