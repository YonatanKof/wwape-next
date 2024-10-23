<script setup>
import { ModalsContainer, useModal } from 'vue-final-modal';
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
	<ModalsContainer />
	<span class="lazy-img" @click="open" @keyup.enter="open">
		<NuxtImg
			@click="open"
			@keyup.enter="open"
			:alt="alt"
			:src="src"
			sizes="10vw xs:300px sm:600px md:900px lg:1200px xl:1600px"
			:placeholder="[Math.round(width / 10), Math.round(height / 10), 50, 5]"
			densities="x1 x2"
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
	margin-block-end: 1.5em;
	color: var(--color-sys-slight);
	font-size: var(--step--1);
	line-height: 1.35;
	font-variation-settings: "wght" 300, "ital" 0.75, "SPAC" 10;
}
</style>
