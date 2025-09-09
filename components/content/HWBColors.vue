<script setup lang="ts">
// defineProps({
// 	color: {
// 		type: String,
// 		default: 'hwb(0 0% 0%)',
// 	},

// });
const color = ref('hwb(0 0% 0%)');
const baseHue = ref(Math.floor(Math.random() * 360));
</script>

<template>
	<section>
		<h1>The hwb() with from</h1>
		<h4>Color pallet for base hue to Black and White</h4>
		<label for="hue"
			>Update hue
			<code>{{ Number(baseHue) + 1 }}</code>
			<i> (it's acutely 0 to 359 because of zero-based numbering)</i>
		</label>
		<input type="range" id="hue" name="hue" min="0" max="359" v-model="baseHue" />
		<div class="color-line" id="white-shift">
			<div class="color-box"
				v-for="i in 11"
				:style="
					`background-color: hwb(from ` + color + ` calc(h + ` + baseHue + `) calc(w + ` + (i - 1) * 10 + `) b);`
				"
			>
				<p>{{ (i - 1) * 10 }}</p>
			</div>
		</div >
		<div class="color-line" id="black-shift">
			<div class="color-box"
				v-for="i in 11"
				:style="
					`background-color: hwb(from ` + color + ` calc(h + ` + baseHue + `) w calc(b + ` + (i - 1) * 10 + `) );`
				"
			>
				<p style="filter: invert(1)">{{ (i - 1) * 10 }}</p>
			</div>
		</div>
	</section>
</template>

<style scoped>
section {
	display: flex;
	flex-direction: column;
	gap: 0.25rem;
}
.color-line {
	display: grid;
	grid-template-columns: repeat(11, 1fr);
	gap: var(--space-3xs);
}
.color-box {
	aspect-ratio: 1;
	border-radius: var(--space-3xs);
	background-color: v-bind(color);
	display: flex;
	justify-content: center;
	align-items: center;
	& * {
		margin-block-start: var(--space-3xs);
	}
}
p {
	font-size: var(--step--2);
	font-family: var(--font-hand);
	font-weight: 900;
}
</style>
