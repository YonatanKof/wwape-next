<script setup lang="ts">
const shiftOffset = 10;
</script>

<template>
	<section>
		<h1>The hwb() circle</h1>
		<div class="circle">
			<svg class="dial" viewBox="0 0 100 100" aria-hidden="true">
				<defs>
					<!-- circular path (clockwise) -->
					<path id="circlePath" d="M50 5 a45 45 0 1 1 0 90 a45 45 0 1 1 0 -90" />
				</defs>
				<!-- Each text uses text-anchor: middle so startOffset marks its center -->
				<text><textPath href="#circlePath" :startOffset="shiftOffset + 0 + `%`">0°</textPath></text>
				<text><textPath href="#circlePath" :startOffset="shiftOffset + 16.6667 + `%`">60°</textPath></text>
				<text><textPath href="#circlePath" :startOffset="shiftOffset + 33.3333 + `%`">120°</textPath></text>
				<text><textPath href="#circlePath" :startOffset="shiftOffset + 50 + `%`">180°</textPath></text>
				<text><textPath href="#circlePath" :startOffset="shiftOffset + 66.6667 + `%`">240°</textPath></text>
				<text><textPath href="#circlePath" :startOffset="shiftOffset + 83.3333 + `%`">300°</textPath></text>
				<circle cx="50" cy="50" :r="50 * 0.25" />
				<circle cx="50" cy="50" :r="50 * 0.5" />
				<circle cx="50" cy="50" :r="50 * 0.75" />
			</svg>
		</div>
	</section>
</template>

<style scoped>
.circle {
	max-width: calc(var(--space-8xl) * 2);
	aspect-ratio: 1;
	background: conic-gradient(
		hwb(0deg 0% 0%),
		hwb(60deg 0% 0%),
		hwb(120deg 0% 0%),
		hwb(180deg 0% 0%),
		hwb(240deg 0% 0%),
		hwb(300deg 0% 0%),
		hwb(360deg 0% 0%)
	);
	clip-path: circle(farthest-side);
	position: relative;
	border-radius: 50%;
}

.dial {
	--inset: var(--space-2xs);
	position: absolute;
	inset: var(--inset);
	width: calc(100% - calc(var(--inset) * 2));
	height: calc(100% - calc(var(--inset) * 2));
	z-index: 100;
	transform: rotateZ(-36deg);
}
text {
	font-size: 40%; /* sized for 100x100 viewBox; scales with element */
	font-family: var(--font-mono);
	text-anchor: middle;
	font-variation-settings: 'CRSV' 0, 'wght' 300, 'MONO' 1;
	dominant-baseline: middle;
	fill: black;
	paint-order: stroke;
	stroke-width: 1;
}
circle {
	stroke: var(--color-sys-dim);
	stroke-width: 0.5;
	fill: none;
}
/* .span {
	opacity: .5;
} */

div::after {
	content: '';
	background: radial-gradient(
		closest-side,
		rgba(0, 0, 0, 1) 0%,
		rgba(0, 0, 0, 0) 50%,
		rgba(255, 255, 255, 0) 51%,
		rgba(255, 255, 255, 1)
	);
	position: absolute;
	inset: 0;
	display: block;
}
</style>
