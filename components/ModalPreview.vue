<script setup lang="ts">
import { ModalsContainer, useModal } from 'vue-final-modal';
import Modal from '~/components/Modal.vue';
const props = defineProps({
	modalTitle: {
		type: String,
	},
	modalDescription: {
		type: String,
	},
	modalShape: {
		type: String,
	},
	modalControl: {
		type: String,
	},
});

const { open, close } = useModal({
	component: Modal,
	attrs: {
		title: props.modalTitle,
		description: props.modalDescription,
		shape: props.modalShape,
		onConfirm() {
			close();
		},
	},
	slots: {
		// default: '<p>The content of the modal</p>',
	},
});
</script>

<template>
	<div>
		<button @click="open">Open Modal</button>
		<ModalsContainer />
	</div>
</template>
