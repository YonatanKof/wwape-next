<script setup lang="ts">
import { VueFinalModal } from 'vue-final-modal';

const emit = defineEmits<{
	(e: 'close'): void;
}>();
</script>

<template>
	<VueFinalModal style="display: flex; justify-content: center; align-items: center;" content-class="fullscreen-modal" content-transition="vfm-fade">
		<button class="fullscreen-modal-btn" @click="emit('close')">close</button>
		<slot @click="emit('close')" />
	</VueFinalModal>
</template>
<style>
.fullscreen-modal {
	position: relative;
	max-width: calc(100vw - var(--space-l));
	max-height: calc(100vh - var(--space-l));
	overflow-y: scroll;
	border-radius: var(--border-radius-sm);
}
.fullscreen-modal-btn {
	position: fixed;
	inset-inline-end: var(--space-l);
	inset-block-end: var(--space-l);
}
</style>
