<script setup lang="ts">
import { withTrailingSlash, withLeadingSlash, joinURL } from 'ufo';
import { useRuntimeConfig, computed } from '#imports';

const props = defineProps({
	src: {
		type: String,
		default: '',
	},
	alt: {
		type: String,
		default: '',
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
</script>
<template>
	<span class="lazy-img">
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
}
</style>
