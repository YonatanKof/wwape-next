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
	<div>
		<label for="colorInput">Choose a color:</label>
		<input type="color" id="colorInput" v-model="color"/>
		<div>
			<span style="background-color: var(--color-sys-main)" />
			<span style="background-color: var(--color-sys-slight)" />
			<span style="background-color: var(--color-sys-dim)" />
			<span style="background-color: var(--color-sys-dis)" />
			<span style="background-color: var(--color-sys-none)" />
		</div>
	</div>
</template>
<style scoped>
span {
	display: inline-block;
	width: var(--space-xl);
	height: var(--space-xl);
	border-radius: var(--border-radius-md);
}
</style>
