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
		<article @click="open">
			<div class="item-content">
				<h3 id="title">{{ modalTitle }}</h3>
				<hr />
				<p id="mata-data">{{ modalShape }}</p>
				<hr />
				<p v-if="modalDescription">{{ modalDescription }}</p>
			</div>
			<img loading="lazy" :src="modalImage" class="this-image" :alt="`The ` + modalTitle + ` symbol`" />
			<ModalsContainer />
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
.masonry-wall {
	margin-block-end: var(--space-s);
}
.item {
	@include content-item();
	&:hover {
		transform: translateY(calc(var(--space-3xs) * -1));
	}
}
.item-hover-less {
	@include content-item();
}
img {
	border-radius: unset;
}
.item-content {
	margin: var(--space-s);
	display: block;
}
#title {
	margin-block-start: unset;
	margin-block-end: var(--space-4xs);
}
article {
	@include link(none);
	@include focus();

	inset: 0;
	display: block;
	font-weight: 400;
	&:hover {
		font-weight: 400;
	}
	text-decoration: none;
}
</style>
<style>
.dark {
	.this-image {
		filter: invert(100%) hue-rotate(180deg) contrast(75%);
	}
}
</style>
