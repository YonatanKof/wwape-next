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
		<!-- <div style="width: 4rem; height: 4rem; background-color: hwb(from var(--my-color) h w calc(b + 50));"></div> -->
		<label for="hue"
			><h4>
				Update hue <code>{{ baseHue }}</code>
			</h4>
		</label>
		<input type="range" id="hue" name="hue" min="0" max="359" v-model="baseHue" />
		<h4>From pure huw to pure white – 10 steps</h4>
		<div class="color-line" id="white-shift">
			<div
				class="color-box"
				v-for="i in 11"
				:style="`background-color: hwb(from ` + color + ` calc(h + ` + baseHue + `) calc(w + ` + (i - 1) * 10 + `) b);`"
			>
				<p>{{ (i - 1) * 10 }}</p>
			</div>
		</div>
		<h4>From pure huw to pure black – 10 steps</h4>
		<div class="color-line" id="black-shift">
			<div
				class="color-box"
				v-for="i in 11"
				:style="
					`background-color: hwb(from ` + color + ` calc(h + ` + baseHue + `) w calc(b + ` + (i - 1) * 10 + `) );`
				"
			>
				<p style="filter: invert(1)">{{ (i - 1) * 10 }}</p>
			</div>
		</div>
		<h4>From pure white to pure huw to pure black – 10 steps</h4>
		<div class="color-line" id="both">
			<div class="color-line-flipped">
				<div
					class="color-box"
					v-for="i in 5"
					:style="`background-color: hwb(from ` + color + ` calc(h + ` + baseHue + `) calc(w + ` + i * 20 + `) b);`"
				>
					<p>{{ i * 20 }}</p>
				</div>
			</div>

			<div class="color-box" :style="`background-color: hwb(from ` + color + ` calc(h + ` + baseHue + `) w b);`">
				<p style="filter: invert(1)">0</p>
			</div>
			<div
				class="color-box"
				v-for="i in 5"
				:style="`background-color: hwb(from ` + color + ` calc(h + ` + baseHue + `) w calc(b + ` + i * 20 + `) );`"
			>
				<p style="filter: invert(1)">{{ i * 20 }}</p>
			</div>
		</div>
	</section>
</template>

<style scoped>
section {
	--my-color: hwb(0deg 0% 0%);
	display: flex;
	flex-direction: column;
	gap: 0.25rem;
}
.color-line {
	display: grid;
	grid-template-columns: repeat(11, 1fr);
	gap: var(--space-3xs);
}
.color-line-flipped {
	grid-column: 1 / 6;
	grid-template-columns: subgrid;
	display: grid;
	direction: rtl;
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
	text-shadow: 0.5px 0.5px 0.5px var(--color-sys-invert-slight);
}
h4 {
	margin-block-start: 0.75em;
	margin-block-end: 0.5em;
}
</style>
