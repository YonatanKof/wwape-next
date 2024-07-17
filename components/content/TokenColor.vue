<script setup>
// Initial color value
const color = ref('');

// Assign value to `color` depending on dark mode
const isDarkModeActive = () => {
	if (document.documentElement.classList.contains('dark')) {
		color = 'hsl(34, 78%, 91%)';
	} else {
		color = 'hsl(180, 25%, 15%)';
	}
	return color;
};

// Assign `newColor` to `color`
const updateColorVariable = (newColor) => {
	document.documentElement.style.setProperty('--color-sys-main', newColor);
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
			<label for="colorInput"><em>Click to update <code>--color-sys-main</code></em></label>
			<input type="color" id="colorInput" v-model="color" />
		</form>
		<hr />
		<div class="all-colors">
			<p><em>Result</em></p>
			<div class="colors">
				<span>
					<code class="name">main</code>
					<div class="color-box" style="background-color: var(--color-sys-main)"></div>
				</span>
				<span>
					<code class="name">slight</code>
					<div class="color-box" style="background-color: var(--color-sys-slight)"></div>
				</span>
				<span>
					<code class="name">dim</code>
					<div class="color-box" style="background-color: var(--color-sys-dim)"></div>
				</span>
				<span>
					<code class="name">dis</code>
					<div class="color-box" style="background-color: var(--color-sys-dis)"></div>
				</span>
				<span>
					<code class="name">none</code>
					<div class="color-box" style="background-color: var(--color-sys-none)"></div>
				</span>
			</div>
			<div
				class="color-box"
				style="
					height: var(--space-xl);
					width: 100%;
					background: linear-gradient(0.25turn, var(--color-sys-main), var(--color-sys-none));
				"
			/>
		</div>
	</section>
</template>
<style lang="scss" scoped>
section {
	display: flex;
	gap: var(--space-s);
	padding: var(--space-md);
	flex-direction: column;
	margin-block: var(--space-m);
	background-color: var(--color-sys-invert-highlight);
	border-radius: var(--border-radius-sm);
	box-shadow: var(--shadow-md);
}
em {
	display: inline-block;
	transform: rotate(-4deg);
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
	border-radius: var(--border-radius-md);
	border: solid var(--space-4xs) var(--color-sys-invert);
}

input[type='color'] {
	/* Basic styling */
	width: 100%;
	height: var(--space-xl);
	border: var(--space-3xs) solid var(--color-focus-main); /* Custom border */
	border-radius: var(--border-radius-xs); /* Rounded corners */
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
	border-radius: var(--border-radius-xs);
}
</style>
