<script setup>
const props = defineProps({
	desc: {
		type: String,
		default: undefined,
	},
});
const sizes = 'xs:400px sm:800px';
</script>
<template>
	<div>
		<NuxtImg
			loading="lazy"
			width="1165"
			height="651"
			:sizes="sizes"
			class="sections sections-hover"
			src="/work/pepperi-page-builder/build/sections-hover.webp"
			:placeholder="[116, 65, 50, 5]"
		/>
		<NuxtImg
			loading="lazy"
			width="1165"
			height="651"
			:sizes="sizes"
			class="sections"
			src="/work/pepperi-page-builder/build/sections.webp"
			:placeholder="[116, 65, 50, 5]"
		/>
		<NuxtImg
			loading="lazy"
			width="1165"
			height="651"
			:sizes="sizes"
			class="sections g4"
			src="/work/pepperi-page-builder/build/section-gallery-4.webp"
			:placeholder="[116, 65, 50, 5]"
		/>
		<NuxtImg
			loading="lazy"
			width="1165"
			height="651"
			:sizes="sizes"
			class="sections g6"
			src="/work/pepperi-page-builder/build/section-gallery-6.webp"
			:placeholder="[116, 65, 50, 5]"
		/>
		<NuxtImg
			loading="lazy"
			width="1165"
			height="651"
			:sizes="sizes"
			class="sections ss-i1"
			src="/work/pepperi-page-builder/build/ss-i1.webp"
			:placeholder="[116, 65, 50, 5]"
		/>
		<NuxtImg
			loading="lazy"
			width="1165"
			height="651"
			:sizes="sizes"
			class="sections ss-i2"
			src="/work/pepperi-page-builder/build/ss-i2.webp"
			:placeholder="[116, 65, 50, 5]"
		/>
		<NuxtImg
			loading="lazy"
			width="272"
			height="318"
			:sizes="sizes"
			class="img title"
			src="/work/pepperi-page-builder/build/editor-title.webp"
			:placeholder="[27, 31, 50, 5]"
		/>
		<NuxtImg
			loading="lazy"
			width="136"
			height="214"
			:sizes="sizes"
			class="img arrow-title"
			src="/misc/arrow-1.webp"
			:placeholder="[14, 21, 50, 1]"
		/>
		<NuxtImg
			loading="lazy"
			width="288"
			height="352"
			:sizes="sizes"
			class="img image"
			src="/work/pepperi-page-builder/build/editor-image.webp"
			:placeholder="[28, 35, 50, 5]"
		/>
		<NuxtImg
			loading="lazy"
			width="288"
			height="352"
			:sizes="sizes"
			class="img image image-hover"
			src="/work/pepperi-page-builder/build/editor-image-hover.webp"
			:placeholder="[28, 35, 50, 5]"
		/>
		<NuxtImg
			loading="lazy"
			width="364"
			height="302"
			:sizes="sizes"
			class="img arrow-image"
			src="/misc/arrow-2.webp"
			:placeholder="[36, 30, 50, 1]"
		/>
		<NuxtImg
			loading="lazy"
			width="288"
			height="194"
			:sizes="sizes"
			class="img padding"
			src="/work/pepperi-page-builder/build/editor-padding.webp"
			:placeholder="[28, 19, 50, 5]"
		/>
		<NuxtImg
			loading="lazy"
			width="136"
			height="214"
			:sizes="sizes"
			class="img arrow-padding"
			src="/misc/arrow-1.webp"
			:placeholder="[14, 21, 50, 1]"
		/>
		<NuxtImg
			loading="lazy"
			width="288"
			height="392"
			:sizes="sizes"
			class="img arrows"
			src="/work/pepperi-page-builder/build/editor-arrows.webp"
			:placeholder="[28, 39, 50, 5]"
		/>
		<NuxtImg
			loading="lazy"
			width="136"
			height="214"
			:sizes="sizes"
			class="img arrow-arrows"
			src="/misc/arrow-1.webp"
			:placeholder="[14, 21, 50, 1]"
		/>
		<NuxtImg
			loading="lazy"
			width="288"
			height="400"
			:sizes="sizes"
			class="img controllers"
			src="/work/pepperi-page-builder/build/editor-controllers.webp"
			:placeholder="[28, 40, 50, 5]"
		/>
		<NuxtImg
			loading="lazy"
			width="716"
			height="356"
			:sizes="sizes"
			class="img arrow-controllers"
			src="/misc/arrow-3.webp"
			:placeholder="[72, 36, 50, 1]"
		/>
		<NuxtImg
			loading="lazy"
			width="288"
			height="218"
			:sizes="sizes"
			class="img layout"
			src="/work/pepperi-page-builder/build/editor-layout.webp"
			:placeholder="[28, 21, 50, 5]"
		/>
		<NuxtImg
			loading="lazy"
			width="288"
			height="218"
			:sizes="sizes"
			class="img layout l3"
			src="/work/pepperi-page-builder/build/editor-layout-slide.webp"
			:placeholder="[28, 21, 50, 5]"
		/>
		<NuxtImg
			loading="lazy"
			width="364"
			height="302"
			:sizes="sizes"
			class="img arrow-layout"
			src="/misc/arrow-2.webp"
			:placeholder="[36, 30, 50, 1]"
		/>
		<NuxtImg
			loading="lazy"
			width="288"
			height="422"
			:sizes="sizes"
			class="img blocks"
			src="/work/pepperi-page-builder/build/editor-blocks.webp"
			:placeholder="[28, 42, 50, 5]"
		/>
		<NuxtImg
			loading="lazy"
			width="288"
			height="64"
			:sizes="sizes"
			class="img drag-block"
			src="/work/pepperi-page-builder/build/drag-block.webp"
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
@keyframes drag-block {
	from {
		transform: translate3d(10%, 98%, 30px) scale(1.1);
	}
	to {
		transform: translate3d(110%, -250%, 30px) scale(1.1);
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
		translate: 0 3%;
	}
}

@keyframes shake-x {
	0% {
		translate: 0 0;
	}
	100% {
		translate: 3% 0;
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
	display: grid;
	grid-template-columns: repeat(6, 1fr);
	width: 100%;
	margin-inline: auto;
	margin-block: var(--space-2xs);
	transition: transform 0.5s ease-in-out;
	transform-style: preserve-3d;
	position: relative;
	transform: rotate3d(4, 3, -2, 24deg) scale(0.92);
	&:hover {
		transform: rotate3d(4, 3, -2, 0deg) translateZ(0)  scale(1);
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
	transform: translate3d(0%, 2%, 0px) scale(1.1);
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
	transform: translate3d(15%, 10%, 40px) scale(1.1);
	animation: 1.75s shake-y ease-in-out alternate infinite;
}
.arrow-title {
	grid-column: 1 / span 1;
	grid-row: 1 / span 1;
	transform: translate3d(45%, 49%, 20px) rotateZ(170deg) scale(0.4, 0.45) scaleY(-1);
}
.image {
	grid-column: 3 / span 1;
	grid-row: 1 / span 1;
	transform: translate3d(-15%, 20%, 50px) scale(1.1);
	animation: 2s shake-y 1s ease-in-out alternate infinite;
}
.image-hover {
	animation: 2s shake-y 1s ease-in-out alternate infinite, 2.5s gallery 2.5s ease-in-out alternate infinite;
}
.arrow-image {
	grid-column: 3 / span 1;
	grid-row: 1 / span 1;
	transform: translate3d(40%, 135%, 35px) rotateZ(70deg) scale(-0.8);
}
.padding {
	grid-column: 5 / span 1;
	grid-row: 1 / span 1;
	transform: translate3d(-65%, 90%, 30px) scale(1.1);
	animation: 3s shake-y 1.5s ease-in-out alternate infinite;
}
.arrow-padding {
	grid-column: 5 / span 1;
	grid-row: 1 / span 1;
	transform: translate3d(-18%, 42%, 15px) rotateZ(110deg) scale(-0.25);
}
.arrows {
	grid-column: 6 / span 1;
	grid-row: 1 / span 1;
	transform: translate3d(-10%, 32%, 40px) scale(1.1);
	animation: 3s shake-y 2s ease-in-out alternate infinite;
}
.arrow-arrows {
	grid-column: 6 / span 1;
	grid-row: 1 / span 1;
	transform: translate3d(-30%, 75%, 20px) rotateZ(190deg) scale(-0.3);
}
.controllers {
	grid-column: 6 / span 1;
	grid-row: 3 / span 1;
	transform: translate3d(-30%, -20%, 70px) scale(1.1);
	animation: 2.5s shake-y 1.2s ease-in-out alternate infinite;
}
.arrow-controllers {
	grid-column: 6 / span 1;
	grid-row: 3 / span 1;
	transform: translate3d(-150%, -170%, 10px) rotateZ(410deg) scale(2.2, 1.7);
}
.layout {
	grid-column: 3 / span 1;
	grid-row: 3 / span 1;
	transform: translate3d(5%, 15%, 50px) scale(1.1);
	animation: 2.75s shake-y 0.2s ease-in-out alternate infinite;
}
.l3 {
	filter: unset;
	animation: 3s gallery 3s ease-in-out alternate infinite, 2.75s shake-y 0.2s ease-in-out alternate infinite;
}
.arrow-layout {
	grid-column: 3 / span 1;
	grid-row: 3 / span 1;
	transform: translate3d(60%, -40%, 20px) rotateZ(125deg) scaleY(-1);
}
.blocks {
	grid-column: 1 / span 1;
	grid-row: 3 / span 1;
	transform: translate3d(10%, -20%, 20px) scale(1.1);
	animation: 2.25s shake-y ease-in-out alternate infinite;
}
.drag-block {
	animation: 3s drag-block cubic-bezier(1, 0, 0, 1) alternate infinite, 2.25s shake-y ease-in-out alternate infinite;
	grid-column: 1 / span 1;
	grid-row: 3 / span 1;
}
</style>
