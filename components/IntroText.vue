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
});
</script>
<template>
	<div>
		<h1 v-if="title">{{ title }}</h1>
		<p v-if="text">{{ text }}</p>
		<p v-if="text2">{{ text2 }}</p>
	</div>
</template>
<style scoped>
p {
	font-size: var(--step-1);
}
div {
	margin-block-end: var(--space-m);
}
</style>
