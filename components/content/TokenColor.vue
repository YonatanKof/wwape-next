<script setup>
const props = defineProps({
	colorName: {
		type: String,
		default: 'sys',
	},
});
// Initial color value
const color = ref('');

// Assign `newColor` to `color`
const updateColorVariable = (newColor) => {
	document.documentElement.style.setProperty(`--color-${props.colorName}-main`, newColor);
};

watch(color, (newColor) => {
	updateColorVariable(newColor);
});

onMounted(() => {
	updateColorVariable(color.value); // Set initial color value on mount
});
</script>
<template>
	<section>
		<form>
			<label for="color-input">
				<em
					>Click to update <code>{{ colorName }}</code> color</em
				>
			</label>
			<input type="color" id="this-color-input" name="color-input" v-model="color" />
		</form>
		<hr />
		<div class="all-colors">
			<p><em>Result</em></p>
			<div class="colors">
				<span>
					<code class="name">main</code>
					<div class="color-box" :style="`background-color: var(--color-` + props.colorName + `-main)`"></div>
				</span>
				<span>
					<code class="name">slight</code>
					<div class="color-box" :style="`background-color: var(--color-` + props.colorName + `-slight)`"></div>
				</span>
				<span>
					<code class="name">dim</code>
					<div class="color-box" :style="`background-color: var(--color-` + props.colorName + `-dim)`"></div>
				</span>
				<span>
					<code class="name">dis</code>
					<div class="color-box" :style="`background-color: var(--color-` + props.colorName + `-dis)`"></div>
				</span>
				<span>
					<code class="name">none</code>
					<div class="color-box" :style="`background-color: var(--color-` + props.colorName + `-none)`"></div>
				</span>
			</div>
			<div
				class="color-box"
				style="height: var(--space-xl); width: 100%"
				:style="
					`background: linear-gradient(0.25turn, var(--color-` +
					props.colorName +
					`-main), var(--color-` +
					props.colorName +
					`-none));`
				"
			/>
		</div>
		<hr />
		<p style="font-size: var(--step--1)">Sample text, <a>sample link</a>, <code>sample code tag</code></p>
		<button class="icon-btn">
			<p>And a sample button w/ icon</p>
			<SvgIconBase stroke-color="var(--color-link-main)">
				<IconAuto />
			</SvgIconBase>
		</button>
	</section>
</template>
<style lang="scss" scoped>
section {
	display: flex;
	gap: var(--space-s);
	padding: var(--space-md);
	flex-direction: column;
	margin-block: var(--space-xs);
	background-color: var(--color-sys-invert-highlight);
	border-radius: var(--border-radius-sm);
	box-shadow: var(--shadow-md);
}
em {
	display: inline-block;
	font-size: var(--step-0);
	transform: rotateZ(-3deg) translateX(0.1em);
	font-variation-settings: 'wght' 500, 'BNCE' 100, 'INFM' 0;
	animation: wobble 1s ease-in-out alternate infinite;
	pointer-events: none;
}
p > em {
	font-size: var(--step-2);
	animation-delay: 0.5s;
}
form {
	display: flex;
	flex-direction: column;
	gap: var(--space-2xs);
}
p {
	margin-block: unset !important;
}
.all-colors {
	display: flex;
	flex-direction: column;
	gap: var(--space-2xs);
}
.colors {
	display: grid;
	grid-template-columns: repeat(5, minmax(var(--space-m), 1fr));
	gap: var(--space-2xs);
}
span {
	display: flex;
	flex-direction: column;
}

span > code {
	margin-block-end: var(--space-3xs);
	font-size: var(--step--4);
}
.color-box {
	aspect-ratio: 1 / 1;
	border-radius: var(--border-radius-sm);
	box-shadow: inset 0 0 0 var(--space-4xs) var(--color-focus-dim);
}

input[type='color'] {
	/* Basic styling */
	width: 100%;
	height: var(--space-xl);
	border: var(--space-3xs) solid var(--color-focus-main); /* Custom border */
	padding: unset; /* Inner padding */
	cursor: pointer; /* Cursor style when hovering */

	/* Custom background and color */
	background-color: none; /* Background color */
	color: none; /* Text color */

	/* Remove default styling */
	-webkit-appearance: none;
	-moz-appearance: none;
	appearance: none;
}

/* To target the color well specifically in WebKit browsers */
input[type='color']::-webkit-color-swatch-wrapper {
	padding: unset;
}
input[type='color']::-webkit-color-swatch {
	border: unset;
}
@keyframes wobble {
	from {
		font-variation-settings: 'wght' 500, 'BNCE' 100, 'INFM' 0;
	}

	to {
		font-variation-settings: 'wght' 700, 'BNCE' -50, 'INFM' 100;
	}
}
</style>
