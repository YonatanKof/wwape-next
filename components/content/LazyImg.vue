<script setup lang="ts">
import { withTrailingSlash, withLeadingSlash, joinURL } from 'ufo';
import { useRuntimeConfig, computed } from '#imports';
import { ModalsContainer, useModal } from 'vue-final-modal';
import Modal from '~/components/FullScreenModal.vue';

const props = defineProps({
	src: {
		type: String,
		default: undefined,
	},
	alt: {
		type: String,
		default: undefined,
	},
	width: {
		type: [String, Number],
		default: undefined,
	},
	height: {
		type: [String, Number],
		default: undefined,
	},
	thumbhash: {
		type: String,
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
});

const refinedSrc = computed(() => {
	if (props.src?.startsWith('/') && !props.src.startsWith('//')) {
		const _base = withLeadingSlash(withTrailingSlash(useRuntimeConfig().app.baseURL));
		if (_base !== '/' && !props.src.startsWith(_base)) {
			return joinURL(_base, props.src);
		}
	}
	return props.src;
});
const { open, close } = useModal({
	component: Modal,
	attrs: {
		onClose() {
			close();
		},
	},
	slots: {
		default: `<img src="${refinedSrc.value}" alt="${props.alt}" />`,
	},
});
</script>
<template>
	<ModalsContainer />
	<span class="lazy-img" @click="open" @keyup.enter="open">
		<UnLazyImage :thumbhash="thumbhash" :src="refinedSrc" :alt="alt" :width="width" :height="height" auto-sizes />
		<em v-if="desc">{{ desc }}</em>
	</span>
</template>

<style lang="scss" scoped>
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
