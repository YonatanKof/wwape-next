<script setup lang="ts">
import { VueFinalModal } from 'vue-final-modal';

defineProps<{
	title?: string;
}>();

const emit = defineEmits<{
	(e: 'confirm'): void;
}>();
</script>

<template>
	<VueFinalModal
		class="confirm-modal"
		content-class="confirm-modal-content"
		overlay-transition="vfm-fade"
		content-transition="vfm-fade"
	>
		<h2>{{ title }}</h2>
		<slot />
		<button @click="emit('confirm')">Confirm</button>
	</VueFinalModal>
</template>

<style lang="scss">
.vfm--overlay{
	background: var(--color-sys-slight);
}
.confirm-modal {
	display: flex;
	justify-content: center;
	align-items: center;
	// @include flex-center();
}
.confirm-modal-content {
	display: flex;
	flex-direction: column;
	padding: var(--space-m);
	background: var(--color-sys-invert);
	border-radius: var(--border-radius-regular);
	box-shadow: var(--shadow-lg);
}
.confirm-modal-content > * + * {
}
.confirm-modal-content h1 {
}
.confirm-modal-content button {
}
</style>
