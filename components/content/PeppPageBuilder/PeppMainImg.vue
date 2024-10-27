<script setup>
const props = defineProps({
	desc: {
		type: String,
		default: undefined,
	},
});
const sizes = '10vw xs:200px sm:400px md:800px';
</script>
<template>
	<div>
		<NuxtImg
			loading="lazy"
			:sizes="sizes"
			class="sections sections-hover"
			src="/work/pepperi-page-builder/build/sections-hover.webp"
			:placeholder="[116, 65, 50, 5]"
		/>
		<NuxtImg
			loading="lazy"
			:sizes="sizes"
			class="sections"
			src="/work/pepperi-page-builder/build/sections.webp"
			:placeholder="[116, 65, 50, 5]"
		/>
		<NuxtImg
			loading="lazy"
			:sizes="sizes"
			class="sections g4"
			src="/work/pepperi-page-builder/build/section-gallery-4.webp"
			:placeholder="[116, 65, 50, 5]"
		/>
		<NuxtImg
			loading="lazy"
			:sizes="sizes"
			class="sections g6"
			src="/work/pepperi-page-builder/build/section-gallery-6.webp"
			:placeholder="[116, 65, 50, 5]"
		/>
		<NuxtImg
			loading="lazy"
			:sizes="sizes"
			class="sections ss-i1"
			src="/work/pepperi-page-builder/build/ss-i1.webp"
			:placeholder="[116, 65, 50, 5]"
		/>
		<NuxtImg
			loading="lazy"
			:sizes="sizes"
			class="sections ss-i2"
			src="/work/pepperi-page-builder/build/ss-i2.webp"
			:placeholder="[116, 65, 50, 5]"
		/>
		<NuxtImg
			loading="lazy"
			:sizes="sizes"
			class="img title"
			src="/work/pepperi-page-builder/build/editor-Title.webp"
			:placeholder="[27, 31, 50, 5]"
		/>
		<NuxtImg
			loading="lazy"
			:sizes="sizes"
			class="img arrow-title"
			src="/misc/arrow-1.webp"
			:placeholder="[14, 21, 50, 1]"
		/>
		<NuxtImg
			loading="lazy"
			:sizes="sizes"
			class="img image"
			src="/work/pepperi-page-builder/build/editor-Image.webp"
			:placeholder="[28, 35, 50, 5]"
		/>
		<NuxtImg
			loading="lazy"
			:sizes="sizes"
			class="img image image-hover"
			src="/work/pepperi-page-builder/build/editor-image-hover.webp"
			:placeholder="[28, 35, 50, 5]"
		/>
		<NuxtImg
			loading="lazy"
			:sizes="sizes"
			class="img arrow-image"
			src="/misc/arrow-2.webp"
			:placeholder="[36, 30, 50, 1]"
		/>
		<NuxtImg
			loading="lazy"
			:sizes="sizes"
			class="img padding"
			src="/work/pepperi-page-builder/build/editor-Padding.webp"
			:placeholder="[28, 19, 50, 5]"
		/>
		<NuxtImg
			loading="lazy"
			:sizes="sizes"
			class="img arrow-padding"
			src="/misc/arrow-1.webp"
			:placeholder="[14, 21, 50, 1]"
		/>
		<NuxtImg
			loading="lazy"
			:sizes="sizes"
			class="img arrows"
			src="/work/pepperi-page-builder/build/editor-Arrows.webp"
			:placeholder="[28, 39, 50, 5]"
		/>
		<NuxtImg
			loading="lazy"
			:sizes="sizes"
			class="img arrow-arrows"
			src="/misc/arrow-1.webp"
			:placeholder="[14, 21, 50, 1]"
		/>
		<NuxtImg
			loading="lazy"
			:sizes="sizes"
			class="img controllers"
			src="/work/pepperi-page-builder/build/editor-Controllers.webp"
			:placeholder="[28, 40, 50, 5]"
		/>
		<NuxtImg
			loading="lazy"
			:sizes="sizes"
			class="img arrow-controllers"
			src="/misc/arrow-3.webp"
			:placeholder="[72, 36, 50, 1]"
		/>
		<NuxtImg
			loading="lazy"
			:sizes="sizes"
			class="img layout"
			src="/work/pepperi-page-builder/build/editor-Layout.webp"
			:placeholder="[28, 21, 50, 5]"
		/>
		<NuxtImg
			loading="lazy"
			:sizes="sizes"
			class="img layout l3"
			src="/work/pepperi-page-builder/build/editor-layout-3.webp"
			:placeholder="[28, 21, 50, 5]"
		/>
		<NuxtImg
			loading="lazy"
			:sizes="sizes"
			class="img arrow-layout"
			src="/misc/arrow-2.webp"
			:placeholder="[36, 30, 50, 1]"
		/>
		<NuxtImg
			loading="lazy"
			:sizes="sizes"
			class="img Blocks"
			src="/work/pepperi-page-builder/build/editor-Blocks.webp"
			:placeholder="[28, 42, 50, 5]"
		/>
		<NuxtImg
			loading="lazy"
			:sizes="sizes"
			class="img darg-block"
			src="/work/pepperi-page-builder/build/darg-block.webp"
			:placeholder="[28, 6, 50, 5]"
		/>
	</div>
</template>
<style lang="scss" scoped>
@keyframes main-tilt {
	from {
		transform: rotate3d(4, 3, -2, 20deg);
	}
	10% {
		transform: rotate3d(4, 3, -2, 20deg);
	}
	90% {
		transform: rotate3d(4, 3, -2, 0deg);
	}
	to {
		transform: rotate3d(4, 3, -2, 0deg);
	}
}
@keyframes darg-block {
	from {
		transform: translate3d(1.5em, -2.4em, 5em);
	}
	to {
		transform: translate3d(9em, -6em, 5em);
	}
}
@keyframes sections-hover {
	from {
		opacity: 0;
	}
	40% {
		opacity: 0;
	}
	60% {
		opacity: 1;
	}
	to {
		opacity: 1;
	}
}
@keyframes shake-y {
	0% {
		translate: 0 0;
	}
	100% {
		translate: 0 0.25em;
	}
}

@keyframes shake-x {
	0% {
		translate: 0 0;
	}
	100% {
		translate: 0.25em 0;
	}
}
@keyframes gallery {
	from {
		opacity: 0;
	}
	45% {
		opacity: 0;
	}
	55% {
		opacity: 1;
	}
	to {
		opacity: 1;
	}
}
div {
	font-size: clamp(0.375rem, -0.023rem + 2.121vw, 1.25rem) !important;
	display: grid;
	grid-template-columns: repeat(6, 1fr);
	grid-template-rows: auto 1fr 6.5em;
	width: 100%;
	margin-inline: auto;
	transition: transform 0.5s ease-in-out;
	transform-style: preserve-3d;
	position: relative;
	// animation: 8s main-tilt ease-in-out alternate infinite;
	transform: rotate3d(4, 3, -2, 24deg);
	&:hover {
		transform: rotate3d(4, 3, -2, 0deg) translateZ(0);
	}
}
img {
	margin: unset !important;
	border-radius: var(--border-radius-xs);
}
.img {
	margin: unset;
	filter: drop-shadow(0 var(--space-s) var(--space-s) var(--color-black-dis));
}
.sections {
	grid-column: 2 / span 4;
	grid-row: 2 / span 1;
	transform: scale3d(1, 1, 1.1);
	transform: translate3d(0em, 0em, 0em);
	filter: drop-shadow(0 var(--space-xs) var(--space-xs) var(--color-black-dim));
}
.sections-hover {
	filter: unset;
	z-index: 1;
	animation: 3s sections-hover cubic-bezier(0.77, 0, 0.18, 1) alternate infinite;
}
.g4 {
	filter: unset;
	animation: 3s gallery ease-in-out alternate infinite;
}
.g6 {
	filter: unset;
	animation: 3s gallery 3s ease-in-out alternate infinite;
}
.ss-i1 {
	filter: unset;
	animation: 2.5s gallery ease-in-out alternate infinite;
}
.ss-i2 {
	filter: unset;
	animation: 2.5s gallery 2.5s ease-in-out alternate infinite;
}
.title {
	grid-column: 1 / span 1;
	grid-row: 1 / span 1;
	transform: translate3d(2.5em, 3.5em, 4em);
	animation: 1.75s shake-y ease-in-out alternate infinite;
}
.arrow-title {
	grid-column: 1 / span 1;
	grid-row: 1 / span 1;
	transform: translate3d(5.25em, 7.5em, 2em) rotateZ(170deg) scale(0.3) scaleY(-1);
}
.image {
	grid-column: 3 / span 1;
	grid-row: 1 / span 1;
	transform: translate3d(-1.5em, 5em, 5em);
	animation: 2s shake-y 1s ease-in-out alternate infinite;
}
.image-hover {
	animation: 2s shake-y 1s ease-in-out alternate infinite, 2.5s gallery 2.5s ease-in-out alternate infinite;
}
.arrow-image {
	grid-column: 3 / span 1;
	grid-row: 1 / span 1;
	transform: translate3d(4em, 11.25em, 3.5em) rotateZ(70deg) scale(-0.8);
}
.padding {
	grid-column: 5 / span 1;
	grid-row: 1 / span 1;
	transform: translate3d(-7em, 7em, 3em);
	animation: 3s shake-y 1.5s ease-in-out alternate infinite;
}
.arrow-padding {
	grid-column: 5 / span 1;
	grid-row: 1 / span 1;
	transform: translate3d(-2em, 6.5em, 1.5em) rotateZ(100deg) scale(-0.25);
}
.arrows {
	grid-column: 6 / span 1;
	grid-row: 1 / span 1;
	transform: translate3d(-3em, 4.75em, 4em);
	animation: 3s shake-y 2s ease-in-out alternate infinite;
}
.arrow-arrows {
	grid-column: 6 / span 1;
	grid-row: 1 / span 1;
	transform: translate3d(-4.5em, 10.75em, 1.5em) rotateZ(190deg) scale(-0.3);
}
.controllers {
	grid-column: 6 / span 1;
	grid-row: 3 / span 1;
	transform: translate3d(-6em, -7.5em, 7em);
	animation: 2.5s shake-y 1.2s ease-in-out alternate infinite;
}
.arrow-controllers {
	grid-column: 6 / span 1;
	grid-row: 3 / span 1;
	transform: translate3d(-14.5em, -10.25em, 1.5em) rotateZ(405deg) scale(1.7);
}
.layout {
	grid-column: 3 / span 1;
	grid-row: 3 / span 1;
	transform: translate3d(-1em, -2em, 5em);
	animation: 2.75s shake-y 0.2s ease-in-out alternate infinite;
}
.l3 {
	filter: unset;
	animation: 3s gallery 3s ease-in-out alternate infinite, 2.75s shake-y 0.2s ease-in-out alternate infinite;
}
.arrow-layout {
	grid-column: 3 / span 1;
	grid-row: 3 / span 1;
	transform: translate3d(5.5em, -4.5em, 2.5em) rotateZ(105deg) scaleY(-1) scale(0.7);
}
.Blocks {
	grid-column: 1 / span 1;
	grid-row: 3 / span 1;
	transform: translate3d(1.5em, -7em, 5em);
	animation: 2.25s shake-y ease-in-out alternate infinite;
}
.darg-block {
	animation: 3s darg-block cubic-bezier(1, 0, 0, 1) alternate infinite, 2.25s shake-y ease-in-out alternate infinite;
	grid-column: 1 / span 1;
	grid-row: 3 / span 1;
}
</style>
