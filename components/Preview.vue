<script setup lang="ts">
import { ModalsContainer, useModal } from 'vue-final-modal';
import ModalConfirmPlainCss from '~/components/ModalConfirmPlainCss.vue';
const props = defineProps({
	title: {
		type: String,
	},
	description: {
		type: String,
	},
	shape: {
		type: String,
	},
});

const { open, close } = useModal({
	component: ModalConfirmPlainCss,
	attrs: {
		title: props.title,
		description: props.description,
		shape: props.shape,
		onConfirm() {
			close();
		},
	},
	slots: {
		default: '<p>The content of the modal</p>',
	},
});
</script>

<template>
	<div>
		<button @click="open">Open Modal</button>
		<ModalsContainer />
	</div>
</template>
