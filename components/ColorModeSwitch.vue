<script setup lang="ts">
const colorMode = useColorMode();
const onClick = () =>
	colorMode.value === 'light' ? (colorMode.preference = 'dark') : (colorMode.preference = 'light');
</script>

<template>
	<button aria-label="Color Mode" @click="onClick">
		<!-- ColorScheme placeholder tag is a span, I style it below -->
		<ColorScheme placeholder="...">
			<template v-if="colorMode.value === 'dark'">
				<SvgIconBase size="var(--space-s)" stroke-color="var(--color-sys-main)">
					<IconDark />
				</SvgIconBase>
			</template>
			<template v-else>
				<SvgIconBase size="var(--space-s)" stroke-color="var(--color-sys-main)">
					<IconLight />
				</SvgIconBase>
			</template>
		</ColorScheme>
	</button>
</template>
<style scoped>
button {
	padding: calc(var(--space-2xs) * 0.75);
	/* background-color: var(--color-sys-hardly); */
	transition: box-shadow 0.2 ease-in-out, background-color 0.2s ease-in-out;
}
button:hover {
	/* background-color: var(--color-sys-hardly); */
}
/* ColorScheme placeholder tag is this span */
/* The width and height are the same as the SvglconBase.vue size prop: 1.25rem */
span {
	width: var(--space-s);
	height: var(--space-s);
}
</style>
