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
		<article @click="open" @keyup.enter="open" tabindex="0">
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

<style lang="scss" scoped>
p {
	font-size: var(--step--1);
	margin-block-end: unset;
}
#mata-data {
	font-size: var(--step--2);
	color: var(--color-sys-slight);
	margin-block-end: var(--space-3xs);
}
#title {
	margin-block-start: unset;
	margin-block-end: var(--space-4xs);
}
article {
	@include content-item();
	cursor: pointer;
	@include focus();
}
// article:focus {
// 	@include focus();
// }
.card-item-content {
	padding: var(--space-s);
	display: block;
}
</style>
<style>
.dark {
	.this-image {
		filter: invert(100%) hue-rotate(180deg) contrast(75%);
	}
}
</style>
