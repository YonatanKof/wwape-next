<script setup>
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
});
</script>
<template>
	<NuxtImg
		:alt="alt"
		:src="src"
		sizes="10vw xs:300px sm:600px md:900px lg:1200px xl:1600px"
		:placeholder="[Math.round(width / 10), Math.round(height / 10), 50, 5]"
		densities="x1 x2"
		loading="lazy"
	/>
</template>
