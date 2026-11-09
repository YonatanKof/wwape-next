<script setup>
import thumbhashMap from '~/assets/data/thumbhashes.json';

// SVG covers are not in the thumbhash map. Their viewBoxes reserve the box.
const svgCovers = {
	'/posts/shortcuts-on-macos/shortcuts-for-macos.svg': [640, 400],
	'/posts/simple-icon-system/simple-icon-system.svg': [240, 160],
};

const props = defineProps({
	src: {
		type: String,
		required: true,
	},
	alt: {
		type: String,
		default: '',
	},
	sizes: {
		type: String,
		default: '100vw',
	},
});

defineOptions({ inheritAttrs: false });

const isSvg = computed(() => props.src.split('?')[0].toLowerCase().endsWith('.svg'));

const box = computed(() => {
	const entry = thumbhashMap[props.src];
	const svg = svgCovers[props.src];
	const width = entry?.width ?? svg?.[0];
	const height = entry?.height ?? svg?.[1];
	return { width, height };
});

const ratioStyle = computed(() => {
	if (!box.value.width || !box.value.height) return undefined;
	return { aspectRatio: `${box.value.width} / ${box.value.height}` };
});

if (isSvg.value) {
	useHead({
		link: [
			{
				rel: 'preload',
				as: 'image',
				href: props.src,
				fetchpriority: 'high',
			},
		],
	});
}
</script>

<template>
	<img
		v-if="isSvg"
		v-bind="$attrs"
		:src="src"
		:alt="alt"
		:width="box.width"
		:height="box.height"
		:style="ratioStyle"
		loading="eager"
		fetchpriority="high"
		decoding="async"
	/>
	<NuxtImg
		v-else
		v-bind="$attrs"
		:src="src"
		:alt="alt"
		:width="box.width"
		:height="box.height"
		:sizes="sizes"
		:style="ratioStyle"
		format="webp"
		quality="80"
		loading="eager"
		fetchpriority="high"
		decoding="async"
		:preload="{ fetchPriority: 'high' }"
	/>
</template>
