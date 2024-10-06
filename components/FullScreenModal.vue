<script setup lang="ts">
import { VueFinalModal } from 'vue-final-modal';

const emit = defineEmits<{
	(e: 'close'): void;
}>();
</script>

<template>
	<VueFinalModal
		style="display: flex; justify-content: center; align-items: center"
		content-class="fullscreen-modal"
		content-transition="vfm-fade"
	>
		<button class="fullscreen-modal-btn" @click="emit('close')">Close</button>
		<slot />
	</VueFinalModal>
</template>
<style lang="scss">
.fullscreen-modal {
	max-width: calc(100dvw - var(--space-l));
	max-height: calc(100dvh - var(--space-l));
	overflow-y: scroll;
	border-radius: var(--border-radius-sm);
	@media (width <= $display-width-sm) {
		max-width: calc(100dvw - var(--space-m));
		max-height: calc(100dvh - var(--space-m));
	}
	@media (width <= $display-width-xs) {
		max-width: calc(100dvw - var(--space-s));
		max-height: calc(100dvh - var(--space-s));
	}
}
.fullscreen-modal-btn {
	position: fixed;
	inset-inline-end: var(--space-l);
	inset-block-end: var(--space-l);
	@media (width <= $display-width-sm) {
		inset-inline-end: var(--space-m);
		inset-block-end: var(--space-m);
	}
	@media (width <= $display-width-xs) {
		inset-inline-end: var(--space-s);
		inset-block-end: var(--space-s);
	}
}
</style>
