<script setup>
const props = defineProps({
	title: {
		type: String,
	},
	text: {
		type: String,
	},
	text2: {
		type: String,
	},
	isOn: {
		type: Boolean,
		default: false,
	},
});
</script>
<template>
	<div>
		<h1 v-if="title">{{ title }}</h1>
		<span>
			<p v-if="isOn"><SayHi /></p>
			<p v-if="text" v-html="text"></p>
			<p v-if="text2" v-html="text2" id="last"></p>
		</span>
	</div>
</template>
<style lang="scss" scoped>
h1 {
	margin-block-end: var(--space-2xs);
}
p {
	max-width: 62ch;
	margin-block-end: var(--space-2xs);
	&:last-child {
		margin-block-end: 0;
	}
}
div {
	margin-block-end: var(--space-m);
}
</style>
