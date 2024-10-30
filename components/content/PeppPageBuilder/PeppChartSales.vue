<template>
	<svg
		width="880px"
		height="240"
		viewBox="0 0 880 240"
		version="1.1"
		xmlns="http://www.w3.org/2000/svg"
		xmlns:xlink="http://www.w3.org/1999/xlink"
	>
		<text>
			<tspan x="0" y="240">2014</tspan>
			<tspan x="85" y="240">2015</tspan>
			<tspan x="170" y="240">2016</tspan>
			<tspan x="255" y="240">2017</tspan>
			<tspan x="340" y="240">2018</tspan>
			<tspan x="425" y="240">2019</tspan>
			<tspan x="510" y="240">2020</tspan>
			<tspan x="595" y="240">2021</tspan>
			<tspan x="680" y="240">2022</tspan>
			<tspan x="765" y="240">2023</tspan>
			<tspan x="850" y="240">2024</tspan>
		</text>
		<line x1="0" y1="11" x2="880" y2="11"></line>
		<line x1="0" y1="41" x2="880" y2="41"></line>
		<line x1="0" y1="71" x2="880" y2="71"></line>
		<line x1="0" y1="101" x2="880" y2="101"></line>
		<line x1="0" y1="131" x2="880" y2="131"></line>
		<line x1="0" y1="161" x2="880" y2="161"></line>
		<line x1="0" y1="191" x2="880" y2="191"></line>
		<line x1="0" y1="221" x2="880" y2="221"></line>
		<polyline
			id="pepp-chart-line"
			points="
			4,221
			15,221
			100,216
			185,211
			270,202
			355,185
			440,180
			525,155
			610,145
			695,115
			780,55
			865,15
			875,12
			"
		/>
	</svg>
</template>

<style scoped>
svg {
	margin-block: var(--space-s) var(--space-2xs);
	max-width: 100%;
	width: 100%;
	height: auto;
	--length: 919;
}

@keyframes stroke-draw {
	5% {
		stroke-dashoffset: 880;
	}

	80% {
		stroke-dashoffset: 0;
	}
	95% {
		stroke-dashoffset: 880;
	}
}
polyline {
	fill: none;
	stroke: var(--color-success-main);
	stroke-width: 8;
	stroke-linecap: round;
	stroke-dasharray: var(--length) var(--length);
	stroke-dashoffset: var(--length);
	animation: stroke-draw 4s ease-out normal infinite;
}
line {
	stroke: var(--color-sys-dim);
	stroke-width: 1;
	stroke-linecap: round;
}
text {
	font-family: var(--font-body);
	font-size: var(--step--2);
	fill: var(--color-sys-slight);
	font-variant-numeric: tabular-nums;
	text-align: center;
}
.blur {
	filter: blur(3px);
}
</style>
