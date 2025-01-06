<script setup>
import { useModal } from 'vue-final-modal';
import Modal from '~/components/FullScreenModal.vue';

const props = defineProps({
	src: {
		type: String,
		required: true,
		default: '/no-prev-next.webp',
	},
	alt: {
		type: String,
		default: undefined,
	},
	width: {
		type: Number,
		default: undefined,
	},
	height: {
		type: Number,
		default: undefined,
	},
	desc: {
		type: String,
		default: undefined,
	},
	hideOnMobile: {
		type: String,
		default: undefined,
	},
	borderRadius: {
		type: String,
		default: 'var(--border-radius-xs)',
	},
	marginBlockStart: {
		type: String,
		default: undefined,
	},
	marginBlockEnd: {
		type: String,
		default: undefined,
	},
	marginInlineStart: {
		type: String,
		default: undefined,
	},
	marginInlineEnd: {
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
		default: `<img src="${props.src}" alt="${props.alt}" />`,
	},
});
</script>
<template>
	<span class="lazy-img" @click="open" @keyup.enter="open">
		<NuxtImg
			@click="open"
			@keyup.enter="open"
			:alt="alt"
			:src="src"
			sizes="xs:300px sm:600px md:900px"
			:placeholder="[Math.round(width / 10), Math.round(height / 10), 50, 5]"
			loading="lazy"
		/>
		<em v-if="desc" v-html="desc"></em>
	</span>
</template>

<style lang="scss" scoped>
img {
	border-radius: v-bind(borderRadius);
	filter: drop-shadow(0 var(--space-2xs) var(--space-2xs) var(--color-black-dis));
	margin-inline-start: v-bind(marginInlineStart);
	margin-inline-end: v-bind(marginInlineEnd);
	margin-block-start: v-bind(marginBlockStart);
	margin-block-end: v-bind(marginBlockEnd);
}
span {
	@media (width <= $display-width-xs) {
		display: v-bind(hideOnMobile);
	}
}
em {
	@include desc-text-under();
}
</style>
