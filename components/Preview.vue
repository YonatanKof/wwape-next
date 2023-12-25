<script setup lang="ts">
import { ModalsContainer, useModal } from 'vue-final-modal';
import ModalConfirmPlainCss from '~/components/ModalConfirmPlainCss.vue';

const { open, close } = useModal({
	component: ModalConfirmPlainCss,
	attrs: {
		title: 'Hello World!',
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
	<div><button @click="open">Open Modal</button> <ModalsContainer /></div>
</template>
