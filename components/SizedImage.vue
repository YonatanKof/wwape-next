<script setup>
const props = defineProps({
	src: {
		type: String,
		required: true,
	},
	alt: {
		type: String,
		default: '',
	},
	thumbhash: {
		type: String,
		default: undefined,
	},
	sizes: {
		type: String,
		default: '100vw',
	},
	width: {
		type: [Number, String],
		default: undefined,
	},
	height: {
		type: [Number, String],
		default: undefined,
	},
	eager: {
		type: Boolean,
		default: false,
	},
});

defineOptions({ inheritAttrs: false });

const sized = useSizedImage(
	computed(() => props.src),
	computed(() => props.sizes),
);

if (props.eager) {
	useHead(() => ({
		link: [
			{
				rel: 'preload',
				as: 'image',
				href: sized.value.src,
				imagesrcset: sized.value.srcset,
				imagesizes: sized.value.sizes,
				fetchpriority: 'high',
			},
		],
	}));
}
</script>

<template>
	<img
		v-if="eager"
		v-bind="$attrs"
		:src="sized.src"
		:srcset="sized.srcset"
		:sizes="sized.sizes"
		:width="sized.width || width"
		:height="sized.height || height"
		:alt="alt"
		loading="eager"
		fetchpriority="high"
		decoding="async"
	/>
	<UnLazyImage
		v-else
		v-bind="$attrs"
		:thumbhash="thumbhash"
		:src="sized.src"
		:src-set="sized.srcset"
		:sizes="sized.sizes"
		:width="sized.width || width"
		:height="sized.height || height"
		:alt="alt"
	/>
</template>
