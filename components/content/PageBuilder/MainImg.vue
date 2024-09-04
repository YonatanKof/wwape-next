<script setup>
const props = defineProps({
	// img1: {
	// 	type: String,
	// 	default: undefined,
	// },
	// img2: {
	// 	type: String,
	// 	default: undefined,
	// },
	// img3: {
	// 	type: String,
	// 	default: undefined,
	// },
	desc: {
		type: String,
		default: undefined,
	},
});
</script>
<template>
	<span>
		<div>
			<NuxtImg class="sections" style="margin: unset" src="/work/pepperi-page-builder/build/sections.webp" />
			<NuxtImg class="img Title" style="margin: unset" src="/work/pepperi-page-builder/build/editor-Title.webp" />
			<NuxtImg class="img Image" style="margin: unset" src="/work/pepperi-page-builder/build/editor-Image.webp" />
			<NuxtImg class="img Padding" style="margin: unset" src="/work/pepperi-page-builder/build/editor-Padding.webp" />
			<NuxtImg class="img Arrows" style="margin: unset" src="/work/pepperi-page-builder/build/editor-Arrows.webp" />
			<NuxtImg
				class="img Controllers"
				style="margin: unset"
				src="/work/pepperi-page-builder/build/editor-Controllers.webp"
			/>
			<NuxtImg class="img Layout" style="margin: unset" src="/work/pepperi-page-builder/build/editor-Layout.webp" />
			<NuxtImg class="img Blocks" style="margin: unset" src="/work/pepperi-page-builder/build/editor-Blocks.webp" />
			<NuxtImg class="img darg-block" style="margin: unset" src="/work/pepperi-page-builder/build/darg-block.webp" />
		</div>
		<em v-if="desc">{{ desc }}</em>
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
	background-color: var(--color-sys-dis);
	border-radius: var(--border-radius-sm);
	padding: var(--space-l);
}
div {
    font-size: clamp(5px, 1.5vw + 2px, 20px) !important;
	display: grid;
	grid-template-columns: repeat(6, 1fr);
	grid-template-rows: auto 1fr auto;
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
	margin: unset;
	border-radius: var(--border-radius-xs);
}
.img {
    margin: unset;
    filter: drop-shadow(0 var(--space-s) var(--space-s) var(--color-black-dis));
}
.sections {
    // animation: perspective 5s ease-in-out alternate infinite;
	grid-column: 2 / span 4;
	grid-row: 2 / span 1;
    transform: scale3d(1.1, 1.1, 1.1);
    transform: translate3d(0em , 0em, 0em);
    filter: drop-shadow(0 var(--space-xs) var(--space-xs) var(--color-black-dim));
}
.Title {
	grid-column: 1 / span 1;
	grid-row: 1 / span 1;
    transform: translate3d(2em , 3em, 5em);
    // transform: translate3d(0 , 40%, 30%);
}
.Image {
    grid-column: 3 / span 1;
	grid-row: 1 / span 1;
    transform: translate3d(-1em , 4em, 3em);
}
.Padding {
    grid-column: 5 / span 1;
	grid-row: 1 / span 1;
    transform: translate3d(-6em , 7em, 2em);
}
.Arrows {
    grid-column: 6 / span 1;
	grid-row: 1 / span 1;
    transform: translate3d(-3em , 6em, 4em);
}
.Controllers {
    grid-column: 6 / span 1;
	grid-row: 3 / span 1;
    transform: translate3d(-4em , -8em, 7em);
}
.Layout {
    grid-column: 3 / span 1;
	grid-row: 3 / span 1;
    transform: translate3d(-1em , -3em, 5em);
}
.Blocks {
    grid-column: 1 / span 1;
	grid-row: 3 / span 1;
    transform: translate3d(1.5em , -7em, 5em);
}
</style>
