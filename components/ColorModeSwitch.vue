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
				<SvgIconBase stroke-color="var(--color-brand-main)">
					<IconDark />
				</SvgIconBase>
			</template>
			<template v-else>
				<SvgIconBase stroke-color="var(--color-brand-main)">
					<IconLight />
				</SvgIconBase>
			</template>
		</ColorScheme>
	</button>
</template>
<style scoped>
button {
	padding: 0.5em;
}
/* ColorScheme placeholder tag is this span */
/* The width and height are the same as the SvglconBase.vue size prop: 1.25rem */
span {
    width: 1.25rem;
    height: 1.25rem;
}
</style>
