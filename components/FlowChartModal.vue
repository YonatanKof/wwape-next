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
	bigImage: {
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
		swipe-to-close="down"
	>
		<div>
			<h2>{{ props.title }}</h2>
			<hr />
			<p>{{ props.shape }}</p>
			<hr />
			<p>{{ props.description }}</p>
		</div>
		<img :src="props.bigImage" :alt="props.description" />
		<!-- <button @click="emit('confirm')">Confirm</button> -->
	</VueFinalModal>
</template>

<style scoped>
p:first-of-type {
	color: var(--color-sys-slight);
	font-size: var(--step-0);
}
div {
	padding: var(--space-m);
}

img {
	border-radius: unset;
	width: 100%;
	height: auto;
}
</style>
<style lang="scss">
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
	background-color: var(--color-sys-invert-highlight);
	border-radius: var(--border-radius-regular);
	box-shadow: var(--shadow-lg);
	max-width: calc(var(--space-8xl) * 3);
	overflow: hidden;
	margin-inline: var(--space-l);
	@media (width <= $display-width-2xs) {
		position: absolute;
		bottom: 0;
		width: 100%;
		border-radius: unset;
		// background-color: goldenrod;
	}
	
}
.confirm-modal-content > * + * {
}
.confirm-modal-content h1 {
}
.confirm-modal-content button {
}
</style>
