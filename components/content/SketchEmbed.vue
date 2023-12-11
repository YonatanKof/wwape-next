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
// Prevent Firefox to auto-scroll to an HTML embedded iframe 
const displayIt = ref('none');
const changeIt = () => {
  setTimeout(() => {
    displayIt.value = 'block'
  }, 2000)
}
changeIt();
</script>

<template>
	<div class="frame base">
		<iframe class="iframe base" loading="lazy" :src="`https://www.sketch.com/embed/s/` + src" allowfullscreen> </iframe>
	</div>
</template>

<style scoped>
.base {
	width: 100%;
	height: calc(v-bind(height) * 4);
	border-radius: var(--border-radius-regular);
}
.frame {
	position: relative;
	margin-block: var(--space-m);
	background-color: var(--color-sys-dis);
}
.iframe {
	top: 0;
	display: v-bind(displayIt);
	left: 0;
	width: 100%;
	height: 100%;
	position: absolute;
	border: 0;
}
</style>
