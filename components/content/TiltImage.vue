<script setup>
import { ModalsContainer, useModal } from 'vue-final-modal';
import Modal from '~/components/FullScreenModal.vue';

const props = defineProps({
	img1: {
		type: String,
		default: undefined,
	},
	img2: {
		type: String,
		default: undefined,
	},
	img3: {
		type: String,
		default: undefined,
	},
	desc: {
		type: String,
		default: undefined,
	},
	alt: {
		type: String,
		default: undefined,
	},
});
const { open, close } = useModal({
	component: Modal,
	attrs: {
		onClose() {
			close();
		},
	},
	slots: {
		default: `<img src="${props.img2}" alt="${props.alt}" />`,
	},
});
</script>
<template>
	<ModalsContainer />
	<span>
		<div @click="open" @keyup.enter="open">
			<NuxtImg vi-if="img1" class="img1" :src="img1" />
			<NuxtImg vi-if="img2" class="img2" :src="img2" />
			<NuxtImg vi-if="img3" class="img3" :src="img3" />
		</div>
		<em v-if="desc" v-html="desc"></em>
	</span>
</template>
<style lang="scss" scoped>
span {
	display: block;
	margin-block-end: var(--space-2xs);
}
em {
	@include desc-text-under();
}
div {
	cursor: pointer;
	display: grid;
	grid-template-columns: repeat(12, 1fr);
	grid-template-rows: repeat(7, 1fr);
	transform: rotate3d(4, 3, -2, 12deg) scale(0.95);
	max-width: var(--display-width-sm);
	width: 100%;
	margin-inline: auto;
	transition: transform 0.5s ease-in-out;
	transform-style: preserve-3d;
	&:hover {
		transform: rotate3d(4, 3, -2, 0deg) scale(1) translateZ(0);
	}
}
img {
	margin: unset !important;
	border-radius: var(--border-radius-xs);
	filter: drop-shadow(0 var(--space-2xs) var(--space-2xs) var(--color-black-dim));
}
.img1 {
	grid-column: 1 / span 7;
	grid-row: 1 / span 4;
	transform: translateZ(-8rem);
}
.img2 {
	transition-delay: 250ms;
	grid-column: 2 / span 10;
	grid-row: 3 / span 5;
	z-index: 0;
	transform: translateZ(0rem);
}
.img3 {
	transition-delay: 125ms;
	grid-column: 6 / span 7;
	grid-row: 2 / span 4;
	z-index: 1;
	transform: translateZ(8rem);
}
</style>
