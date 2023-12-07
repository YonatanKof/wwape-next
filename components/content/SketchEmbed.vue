<script lang="ts" setup>
defineProps({
	src: {
		type: String,
		required: true,
	},
	height: {
		type: String,
		default: 'var(--space-8xl)',
	},
});
</script>

<template>
	<div class="frame">
		<iframe class="iframe" :src="`https://www.sketch.com/embed/s/` + src" allowfullscreen> </iframe>
	</div>
</template>

<style scoped>
.frame {
	left: 0;
	width: 100%;
	height: calc(v-bind(height) * 4);
	position: relative;
	margin-block: var(--space-m);
}
.iframe {
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	position: absolute;
	border: 0;
	border-radius: var(--border-radius-regular);
}
</style>
