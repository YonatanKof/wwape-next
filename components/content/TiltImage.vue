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
	desc: {
		type: String,
		default: undefined,
	},
});
</script>
<template>
	<span>
		<div>
			<NuxtImg vi-if="img1" class="img1" :src="img1" />
			<NuxtImg vi-if="img2" class="img2" :src="img2" />
			<NuxtImg vi-if="img3" class="img3" :src="img3" />
		</div>
		<em v-if="desc" >{{ desc }}</em>
	</span>
</template>
<style lang="scss" scoped>
em {
	@include desc-text-under();
	margin-block-start: var(--space-2xl);
	margin-block-end: unset;
}
span {
	display: block;
	background-color: var(--color-brand-dis);
	border-radius: var(--border-radius-sm);
	padding: var(--space-l);
}
div {
	display: grid;
	grid-template-columns: repeat(12, 1fr);
	grid-template-rows: repeat(7, 1fr);
	transform: rotate3d(4, 3, -2, 24deg);
	max-width: var(--display-width-sm);
	width: 100%;
	margin-inline: auto;
	transition: transform 0.5s ease-in-out;
	transform-style: preserve-3d;
	&:hover {
		transform: rotate3d(4, 3, -2, 0deg) translateZ(0);
	}
}
img {
	margin: unset;
	border-radius: var(--border-radius-xs);
	filter: drop-shadow(0 var(--space-s) var(--space-s) var(--color-black-dim));
}
.img1 {
	grid-column: 1 / span 7;
	grid-row: 1 / span 4;
	transform: translateZ(-1rem);
}
.img2 {
	transition-delay: 125ms;
	grid-column: 6 / span 7;
	grid-row: 2 / span 4;
	z-index: 1;
	transform: translateZ(2rem);
}
.img3 {
	transition-delay: 250ms;
	grid-column: 3 / span 7;
	grid-row: 4 / span 4;
	z-index: 0;
	transform: translateZ(0.5rem);
}
</style>
