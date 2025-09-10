<script setup lang="ts">
const shiftOffset = 10;
</script>

<template>
	<div class="color-wheel">
		<div class="circle"></div>
		<div class="white-to-black"></div>
		<svg class="dial" viewBox="0 0 100 100" aria-hidden="true">
			<circle cx="50" cy="50" :r="50 * 0.25" />
			<circle cx="50" cy="50" :r="50 * 0.5" />
			<circle cx="50" cy="50" :r="50 * 0.75" />
		</svg>
		<div class="inner-circles">
			<div></div>
			<div></div>
			<div></div>
		</div>
		<div class="numbers-wb">
			<p>w50%</p>
			<p>w0% b0%</p>
			<p>b50%</p>
		</div>
		<div class="numbers-degs">
			<p>0°</p>
			<p>60°</p>
			<p>120°</p>
			<p>180°</p>
			<p>240°</p>
			<p>300°</p>
		</div>
		<div class="drop-shadow"></div>
	</div>
</template>

<style lang="scss" scoped>
.color-wheel {
	margin-block: var(--space-m);
	position: relative;
	max-width: calc(var(--space-8xl) * 2);
	aspect-ratio: 1;
}
.circle {
	clip-path: circle(farthest-side);
	position: absolute;
	inset: 0;
	width: 100%;
	height: 100%;
	background: conic-gradient(
		hwb(0deg 0% 0%),
		hwb(60deg 0% 0%),
		hwb(120deg 0% 0%),
		hwb(180deg 0% 0%), // skjbs
		hwb(240deg 0% 0%),
		hwb(300deg 0% 0%),
		hwb(360deg 0% 0%) // skjhbs
	);
}
.white-to-black {
	// hgdvhgd
	position: absolute;
	inset: 0;
	width: 100%;
	height: 100%;
	background: radial-gradient(
		closest-side,
		rgba(0, 0, 0, 1) 0%,
		rgba(0, 0, 0, 0) 40%,
		rgba(255, 255, 255, 0) 70%,
		rgba(255, 255, 255, 1) 100%
	);
	clip-path: circle(farthest-side);
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
p {
	color: var(--color-sys-slight);
	font-family: var(--font-mono);
	font-variation-settings: 'MONO' 1;
	font-size: var(--step-0);
}
.numbers-wb {
	--inset: var(--space-xs);
	position: absolute;
	inset: var(--inset);
	width: calc(100% - calc(var(--inset) * 2));
	height: calc(100% - calc(var(--inset) * 2));
	z-index: 300;
	text-align: center;
	transform: rotateZ(30deg);
	p {
		margin: unset;
	}
	:first-child {
		// transform: translateY(50%);
	}
	:nth-child(2) {
		transform: translateY(85%);
	}
	:nth-child(3) {
		transform: translateY(170%);
	}
}
.numbers-degs {
	--inset: var(--space-xs);
	position: absolute;
	inset: var(--inset);
	width: calc(100% - calc(var(--inset) * 2));
	height: calc(100% - calc(var(--inset) * 2));
	p {
		// transform: translateY(25%);
		position: absolute;
		width: 100%;
		height: 100%;
		text-align: center;
		margin: unset;
	}
	:nth-child(1) {
		transform: rotateZ(0deg);
	}
	:nth-child(2) {
		transform: rotateZ(60deg);
	}
	:nth-child(3) {
		transform: rotateZ(120deg);
	}
	:nth-child(4) {
		transform: rotateZ(180deg);
	}
	:nth-child(5) {
		transform: rotateZ(240deg);
	}
	:nth-child(6) {
		transform: rotateZ(300deg);
	}
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
.drop-shadow {
	position: absolute;
	border-radius: 100%;
	inset: 0;
	width: 100%;
	height: 100%;
	background-color: gold;
	z-index: -10;
	box-shadow: var(--shadow-lg);
}
</style>
