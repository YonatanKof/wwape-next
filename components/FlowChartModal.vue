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
		<UnLazyImage class="that-image" thumbhash="fggCBYBS1Ttwdmhudsh4k86ftdgI" :src="props.bigImage" :alt="`The ` + props.title + ` symbol in use - ` + props.shape" height="347.733" auto-sizes/>
		<button class="modal-btn" @click="emit('confirm')">Got it</button>
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

.that-image {
	border-radius: unset;
	width: 100%;
	height: auto;
}
</style>
<style lang="scss">
.vfm--overlay {
	background: var(--overlay);
}
.confirm-modal {
	display: flex;
	justify-content: center;
	align-items: center;
}
.confirm-modal-content {
	display: flex;
	flex-direction: column;
	background-color: var(--color-sys-invert);
	border-radius: var(--border-radius-xs);
	box-shadow: var(--shadow-lg);
	max-width: calc(var(--space-8xl) * 3);
	overflow: hidden;
	margin-inline: var(--space-l);
	max-height: calc(100vh - var(--space-l));
	overflow: auto;
	@media (width <= $display-width-2xs) {
		position: absolute;
		bottom: 0;
		width: 100%;
		border-radius: unset;
	}
}
.modal-btn {
	font-size: var(--step-0);
	margin: var(--space-m);
}
.confirm-modal-content > * + * {
}
.confirm-modal-content h1 {
}
.confirm-modal-content button {
}
</style>
