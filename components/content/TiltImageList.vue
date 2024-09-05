<script setup>
import PepperiImages from '~/assets/data/PepperiImages.json';
</script>
<template>
	<div>
		<NuxtImg v-for="(image, index) in PepperiImages" :class="`img${index}`" :src="image.src" />
	</div>
</template>
<style scoped>
div {
	display: grid;
	grid-template-columns: repeat(12, 1fr);
	grid-template-rows: repeat(auto, auto);
	transform-style: preserve-3d;
	transform: translateX(3vh) rotate3d(6, 3, -2, 56deg);
	max-width: var(--display-width-sm);
	width: 100%;
	margin-inline: auto;
	transition: transform 0.5s ease-in-out;
	&:hover {
		transform: translateX(3vh) rotate3d(6, 3, -2, 0deg);
	}
}
img {
	margin: unset;
	border-radius: var(--border-radius-xs);
	filter: drop-shadow(0 var(--space-s) var(--space-xs) var(--color-black-dim));
}
.img0 {
	grid-column: 5 / span 6;
	grid-row: 1 / span 3;
	transform: translateZ(-1rem);
}
.img1 {
	grid-column: 1 / span 7;
	grid-row: 2 / span 3;
	transform: translateZ(1rem);
}
.img2 {
	grid-column: 6 / span 6;
	grid-row: 3 / span 3;
	transform: translateX(6.5rem);
}
.img3 {
	grid-column: 2 / span 6;
	grid-row: 4 / span 3;
	transform: translateZ(1.5rem);
}
.img4 {
	grid-column: 6 / span 7;
	grid-row: 5 / span 3;
	transform: translateZ(2.5rem);
}
.img5 {
	grid-column: 1 / span 8;
	grid-row: 6 / span 3;
	transform: translateX(-8rem) translateZ(-2rem);
}
.img6 {
	grid-column: 6 / span 6;
	grid-row: 7 / span 3;
	transform: translateX(-1rem) translateY(-1rem);
}
.img7 {
	grid-column: 2 / span 6;
	grid-row: 8 / span 3;
	transform: translateZ(-7rem);
}
.img8 {
	grid-column: 4 / span 7;
	grid-row: 9 / span 3;
	transform: translateZ(1.5rem) translateY(-1.5rem);
}
</style>
