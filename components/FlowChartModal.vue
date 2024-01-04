<script setup lang="ts">
import { VueFinalModal } from 'vue-final-modal';

const props = defineProps({
	title: {
		type: String,
		default: 'Yo yo yo!',
	},
	shape: {
		type: String,
		default: 'Yo yo yo!',
	},
	description: {
		type: String,
		default: 'Yo yo yo!',
	},
	image: {
		type: String,
		default: 'Yo yo yo!',
	},
});

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
		<div class="card-item-content">
			<h2>{{ props.title }}</h2>
			<hr />
			<p>{{ props.shape }}</p>
			<hr />
			<p>{{ props.description }}</p>
			<img :src="props.image" :alt="props.description" />
		</div>
		<!-- <button @click="emit('confirm')">Confirm</button> -->
	</VueFinalModal>
</template>

<style lang="scss">
img {
	width: 100%;
	height: auto;
}
.vfm--overlay {
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
	max-width: calc(var(--space-8xl) * 2);
}
.confirm-modal-content > * + * {
}
.confirm-modal-content h1 {
}
.confirm-modal-content button {
}
</style>
