<script setup lang="ts">
import { ModalsContainer, useModal } from 'vue-final-modal';
import Modal from '~/components/FlowChartModal.vue';
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
	modalImage: {
		type: String,
	},
});

const { open, close } = useModal({
	component: Modal,
	attrs: {
		title: props.modalTitle,
		description: props.modalDescription,
		shape: props.modalShape,
		image: props.modalImage,
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
		<article class="card-item" @click="open">
			<div class="card-item-content">
				<h3 id="title">{{ modalTitle }}</h3>
				<hr />
				<p id="mata-data">{{ modalShape }}</p>
				<hr />
				<p v-if="modalDescription">{{ modalDescription }}</p>
			</div>
			<img loading="lazy" :src="modalImage" class="this-image" :alt="`The ` + modalTitle + ` symbol`" />
			<ModalsContainer>
				<template v-slot:kof>
					<h1>XXX!</h1>
				</template>
			</ModalsContainer>
		</article>
	</div>
</template>

<style>
.dark {
	.this-image {
		filter: invert(100%) hue-rotate(180deg) contrast(75%);
	}
}
</style>
