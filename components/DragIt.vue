<script setup>
const props = defineProps({
	xPos: {
		type: String,
		default: 'calc(50% - 10rem);',
	},
	yPos: {
		type: String,
		default: 'calc(100% - 10rem);',
	},
	element: {
		type: String,
		default: null,
	},
});

import { useDraggable } from '@vueuse/core';
const el = ref(null);
// const el = ref(props.element);
const { x, y, style } = useDraggable(el, {
	initialValue: { x: props.xPos, y: props.yPos },
});
</script>

<template>
	<div ref="el" :style="style">
		<slot />
	</div>
</template>
