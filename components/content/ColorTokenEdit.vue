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
	<div class="color-edit">
		<form>
			<label for="color-input">
				<em>Click to update color</em>
			</label>
			<div>
				<code>--color-{{ colorName }}-main</code>
				<input type="color" id="this-color-input" name="color-input" v-model="color" />
			</div>
		</form>
		<hr />
		<div class="all-colors">
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
			<p>Sample button w/ icon</p>
			<SvgIconBase stroke-color="var(--color-brand-main)">
				<IconAuto />
			</SvgIconBase>
		</button>
	</div>
</template>
<style lang="scss" scoped>
.color-edit {
	display: flex;
	gap: var(--space-xs);
	padding: var(--space-md);
	flex-direction: column;
	margin-block: var(--space-xs);
	background-color: var(--color-sys-invert-highlight);
	border-radius: var(--border-radius-sm);
	box-shadow: var(--shadow-md);
}
em {
	display: inline-block;
	font-size: var(--step-1);
	transform: rotateZ(-3deg) translateX(-0.3em);
	font-variation-settings: 'wght' 500, 'BNCE' 100, 'INFM' 0;
	animation: wobble 1s ease-in-out alternate infinite;
	pointer-events: none;
}
form {
	display: flex;
	flex-direction: column;
	gap: var(--space-2xs);
	code {
		margin: unset;
	}
	div {
		display: flex;
		flex-direction: row;
		gap: var(--space-2xs);
		align-items: center;
	}
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
</style>
