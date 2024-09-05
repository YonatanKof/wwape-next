<script setup>
const props = defineProps({
	desc: {
		type: String,
		default: undefined,
	},
});
</script>
<template>
	<div>
		<NuxtImg class="sections-hover" src="/work/pepperi-page-builder/build/sections-hover.webp" />
		<NuxtImg class="sections" src="/work/pepperi-page-builder/build/sections.webp" />
		<NuxtImg class="img title" src="/work/pepperi-page-builder/build/editor-title.webp" />
		<NuxtImg class="img arrow-title" src="/misc/arrow-1.png" />
		<NuxtImg class="img image" src="/work/pepperi-page-builder/build/editor-image.webp" />
		<NuxtImg class="img arrow-image" src="/misc/arrow-2.png" />
		<NuxtImg class="img padding" src="/work/pepperi-page-builder/build/editor-padding.webp" />
		<NuxtImg class="img arrow-padding" src="/misc/arrow-1.png" />
		<NuxtImg class="img arrows" src="/work/pepperi-page-builder/build/editor-arrows.webp" />
		<NuxtImg class="img arrow-arrows" src="/misc/arrow-1.png" />
		<NuxtImg class="img controllers" src="/work/pepperi-page-builder/build/editor-controllers.webp" />
		<NuxtImg class="img arrow-controllers" src="/misc/arrow-3.png" />
		<NuxtImg class="img layout" src="/work/pepperi-page-builder/build/editor-layout.webp" />
		<NuxtImg class="img arrow-layout" src="/misc/arrow-2.png" />
		<NuxtImg class="img Blocks" src="/work/pepperi-page-builder/build/editor-Blocks.webp" />
		<NuxtImg class="img darg-block" src="/work/pepperi-page-builder/build/darg-block.webp" />
	</div>
	<em v-if="desc">{{ desc }}</em>
</template>
<style lang="scss" scoped>
@keyframes darg-block {
	from {
		transform: translate3d(1.5em, -2.9em, 5em);
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
@keyframes shake {
	from {
		opacity: 0;
	}
	to {
		opacity: 1;
	}
}

em {
	@include desc-text-under();
	margin-block-start: var(--space-2xl);
	margin-block-end: unset;
}
span {
	display: block;
	background-color: var(--color-sys-dis);
	border-radius: var(--border-radius-sm);
	padding: var(--space-l);
}
div {
	font-size: clamp(5px, 1.5vw + 2px, 20px) !important;
	display: grid;
	grid-template-columns: repeat(6, 1fr);
	grid-template-rows: auto 1fr 2.5em;
	transform: rotate3d(4, 3, -2, 24deg);
	// max-width: var(--display-width-sm);
	width: 100%;
	// width: max-content;
	margin-inline: auto;
	transition: transform 0.5s ease-in-out;
	transform-style: preserve-3d;
	position: relative;
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
	transform: scale3d(1.1, 1.1, 1.1);
	transform: translate3d(0em, 0em, 0em);
	filter: drop-shadow(0 var(--space-xs) var(--space-xs) var(--color-black-dim));
}
.sections-hover {
	grid-column: 2 / span 4;
	grid-row: 2 / span 1;
	transform: scale3d(1.1, 1.1, 1.1);
	transform: translate3d(0em, 0em, 0em);
	z-index: 1;
	animation: sections-hover 3s cubic-bezier(0.77, 0, 0.18, 1) alternate infinite;
}
.title {
	grid-column: 1 / span 1;
	grid-row: 1 / span 1;
	transform: translate3d(2em, 3em, 5em);
}
.arrow-title {
	grid-column: 1 / span 1;
	grid-row: 1 / span 1;
	transform: translate3d(4.5em, 9em, 4em) rotateZ(170deg) scale(0.3) scaleY(-1);
}
.image {
	grid-column: 3 / span 1;
	grid-row: 1 / span 1;
	transform: translate3d(-1.5em, 4em, 4.5em);
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
}
.arrow-padding {
	grid-column: 5 / span 1;
	grid-row: 1 / span 1;
	transform: translate3d(-1.5em, 6.25em, 1.5em) rotateZ(100deg) scale(-0.25);
}
.arrows {
	grid-column: 6 / span 1;
	grid-row: 1 / span 1;
	transform: translate3d(-3em, 5em, 4em);
}
.arrow-arrows {
	grid-column: 6 / span 1;
	grid-row: 1 / span 1;
	transform: translate3d(-4.5em, 10.25em, 1.5em) rotateZ(190deg) scale(-0.3);
}
.controllers {
	grid-column: 6 / span 1;
	grid-row: 3 / span 1;
	transform: translate3d(-4em, -8em, 7em);
}
.arrow-controllers {
	grid-column: 6 / span 1;
	grid-row: 3 / span 1;
	transform: translate3d(-13.5em, -9.5em, 1.5em) rotateZ(405deg) scale(1.7);
}
.layout {
	grid-column: 3 / span 1;
	grid-row: 3 / span 1;
	transform: translate3d(-1em, -3em, 5em);
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
}
.darg-block {
	animation: darg-block 3s cubic-bezier(1, 0, 0.1, 1) alternate infinite;
	grid-column: 1 / span 1;
	grid-row: 3 / span 1;
}
</style>
