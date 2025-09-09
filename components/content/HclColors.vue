<script setup lang="ts">
defineProps({
	color: {
		type: String,
		default: 'hwb(120 0% 0%)',
	},
});
</script>

<template>
	<section>
		<h1>The hwb() with from</h1>
		<span>
			<div v-for="i in 11" :style="`background-color: hwb(from ` + color + ` h calc(w + ` + (i - 1) * 10 + `) b);`">
				<h6>{{ (i - 1) * 10 }}</h6>
			</div>
		</span>
		<span>
			<div v-for="i in 11" :style="`background-color: hwb(from ` + color + ` h w calc(b + ` + (i - 1) * 10 + `) );`">
				<h6 style="filter: invert(1)">{{ (i - 1) * 10 }}</h6>
			</div>
		</span>
	</section>
</template>

<style scoped>
section {
	display: flex;
	flex-direction: column;
	gap: 0.25rem;
}
span {
	display: flex;
	gap: 0.25rem;
}
div {
	width: 3rem;
	aspect-ratio: 1/1;
	background-color: v-bind(color);
	display: flex;
	justify-content: center;
	align-items: center;
	& * {
		margin-block-start: 0.25em;
	}
}
</style>
