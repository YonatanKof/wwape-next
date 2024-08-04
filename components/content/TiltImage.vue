<script setup>
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
});
</script>
<template>
	<div>
		<NuxtImg vi-if="img1" class="img1" :src="img1" />
		<NuxtImg vi-if="img2" class="img2" :src="img2" />
		<NuxtImg vi-if="img3" class="img3" :src="img3" />
	</div>
</template>
<style scoped>
@keyframes perspective {
	from {
		transform: translate(1px, 1px);
	}

	to {
		transform: translate(-2px, -2px);
	}
}
div {
	display: grid;
	grid-template-columns: repeat(12, 1fr);
	grid-template-rows: repeat(7, 1fr);
	transform: translateX(3vh) perspective(40rem) rotate3d(4, 3, -2, 15deg);
	max-width: var(--display-width-sm);
	width: 100%;
	margin-inline: auto;
}
img {
	margin: unset;
	border-radius: var(--border-radius-xs);
	filter: drop-shadow(0 var(--space-s) var(--space-s) var(--color-shadow));
}
.img1 {
	animation: perspective 5s ease-in-out alternate infinite;
	grid-column: 1 / span 7;
	grid-row: 1 / span 4;
}
.img2 {
	animation: perspective 3s ease-in-out alternate infinite;
	transition-delay: 125ms;
	grid-column: 6 / span 7;
	grid-row: 2 / span 4;
	z-index: 1;
}
.img3 {
	animation: perspective 4s ease-in-out alternate infinite;
	transition-delay: 250ms;
	grid-column: 3 / span 7;
	grid-row: 4 / span 4;
	z-index: 0;
}
</style>
