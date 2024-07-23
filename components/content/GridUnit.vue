<script setup>
defineProps({
	marginBlock: {
		type: String,
		default: undefined,
	},
});
</script>

<template>
	<div>
		<slot />
	</div>
</template>
<style>
</style>
<style scoped>
div {
	margin-block: v-bind(marginBlock);
}
</style>
