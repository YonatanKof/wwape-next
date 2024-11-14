<script setup>
defineProps({
	sectionWidth: {
		type: String,
		default: 'var(--display-width-md)',
	},
	marginBlockStart: {
		type: String,
		default: undefined,
	},
});
</script>

<template>
	<div class="grid-section">
		<slot />
	</div>
</template>
<style lang="scss">
.grid-section {
	@include display-width(v-bind(sectionWidth));
}
</style>
