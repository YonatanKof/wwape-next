<script setup>
import PepperiImages from '~/assets/data/PepperiImages.json';
</script>
<template>
	<div>
		<NuxtImg v-for="(image, index) in PepperiImages"  :class="`img${index}`" :src="image.src" />
		<!-- <pre v-for="(image, index) in PepperiImages" >{{image.src}}</pre> -->
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
	grid-template-rows: repeat(auto, auto);
	transform: translateX(3vh) rotate3d(4, 3, -2, 15deg);
	max-width: var(--display-width-sm);
	width: 100%;
	margin-inline: auto;
}
img {
	margin: unset;
	border-radius: var(--border-radius-xs);
	filter: drop-shadow(0 var(--space-s) var(--space-s) var(--color-shadow));
}
.img0 {
	animation: perspective 5s ease-in-out alternate infinite;
	grid-column: 2 / span 7;
	grid-row: 1 / span 4;
}
.img1 {
	animation: perspective 3s ease-in-out alternate infinite;
	transition-delay: 125ms;
	grid-column: 6 / span 7;
	grid-row: 2 / span 4;
	z-index: 1;
}
.img2 {
	animation: perspective 4s ease-in-out alternate infinite;
	transition-delay: 250ms;
	grid-column: 3 / span 7;
	grid-row: 4 / span 4;
	z-index: 2;
}
.img3 {
	animation: perspective 5s ease-in-out alternate infinite;
	grid-column: 6 / span 7;
	grid-row: 6 / span 4;
	z-index: 3;
}
.img4 {
	animation: perspective 3s ease-in-out alternate infinite;
	transition-delay: 125ms;
	grid-column: 1 / span 7;
	grid-row: 7 / span 4;
	z-index: 4;
}
.img5 {
	animation: perspective 4s ease-in-out alternate infinite;
	transition-delay: 250ms;
	grid-column: 3 / span 7;
	grid-row: 8 / span 4;
	z-index: 5;
}
.img6 {
	animation: perspective 5s ease-in-out alternate infinite;
	grid-column: 1 / span 7;
	grid-row: 9 / span 4;
	z-index: 6;
}
.img7 {
	animation: perspective 3s ease-in-out alternate infinite;
	transition-delay: 125ms;
	grid-column: 6 / span 7;
	grid-row: 10 / span 4;
	z-index: 7;
}
.img8 {
	animation: perspective 4s ease-in-out alternate infinite;
	transition-delay: 250ms;
	grid-column: 3 / span 7;
	grid-row: 11 / span 4;
	z-index: 8;
}
</style>
