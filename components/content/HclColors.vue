<script setup lang="ts">
defineProps({
	color: {
		type: String,
		default: 'hwb(0 0% 0%)',
	},
	hue: {
		type: Number,
		default: 0,
	},
});
const baseHue = ref(0);
</script>

<template>
	<section>
		<h1>The hwb() with from</h1>
		<input type="range" id="hue" name="hue" min="0" max="359" v-model="baseHue" />
		<label for="hue">{{ baseHue }}</label>
		<span>
			<div v-for="i in 11" :style="`background-color: hwb(from ` + color + ` calc(h + ` + baseHue +`) calc(w + ` + (i - 1) * 10 + `) b);`">
				<h6>{{ (i - 1) * 10 }}</h6>
			</div>
		</span>
		<span>
			<div v-for="i in 11" :style="`background-color: hwb(from ` + color + ` calc(h + ` + baseHue +`) w calc(b + ` + (i - 1) * 10 + `) );`">
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
