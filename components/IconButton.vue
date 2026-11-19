<script setup lang="ts">
defineProps<{
	/** Required accessible name. Icon-only controls have no visible text. */
	ariaLabel: string;
}>();
</script>

<template>
	<Button icon-only :aria-label="ariaLabel">
		<slot name="icon" />
		<slot />
		<slot name="icon-end" />
	</Button>
</template>
