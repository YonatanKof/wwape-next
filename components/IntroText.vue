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
			<p v-if="text">
				<i v-if="isOn"><SayHi /></i>{{ text }}
			</p>
			<p v-if="text2" id="last">{{ text2 }}</p>
		</span>
	</div>
</template>
<style scoped>
p {
	font-size: var(--step-2);
	max-width: 55ch;
}
#last {
	margin-block-start: var(--space-2xs);
}
div {
	margin-block-end: var(--space-m);
}
</style>
