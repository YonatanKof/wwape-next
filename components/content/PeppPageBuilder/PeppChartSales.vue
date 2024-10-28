<template>
	<svg
		width="740px"
		height="240"
		viewBox="0 0 740 240"
		version="1.1"
		xmlns="http://www.w3.org/2000/svg"
		xmlns:xlink="http://www.w3.org/1999/xlink"
	>
		<text class="blur">
			<tspan x="5" y="15">3.5M</tspan>
			<tspan x="5" y="45">3.0M</tspan>
			<tspan x="5" y="75">2.5M</tspan>
			<tspan x="5" y="105">2.0M</tspan>
			<tspan x="5" y="135">1.5M</tspan>
			<tspan x="5" y="165">1.0M</tspan>
			<tspan x="5" y="195">0.5M</tspan>
			<tspan x="5" y="225">0.0M</tspan>
		</text>
		<text>
			<tspan x="50" y="240">2011</tspan>
			<tspan x="100" y="240">2012</tspan>
			<tspan x="150" y="240">2013</tspan>
			<tspan x="200" y="240">2014</tspan>
			<tspan x="250" y="240">2015</tspan>
			<tspan x="300" y="240">2016</tspan>
			<tspan x="350" y="240">2017</tspan>
			<tspan x="400" y="240">2018</tspan>
			<tspan x="450" y="240">2019</tspan>
			<tspan x="500" y="240">2020</tspan>
			<tspan x="550" y="240">2021</tspan>
			<tspan x="600" y="240">2022</tspan>
			<tspan x="650" y="240">2023</tspan>
			<tspan x="700" y="240">2024</tspan>
		</text>
		<line x1="50" y1="11" x2="732" y2="11"></line>
		<line x1="50" y1="41" x2="732" y2="41"></line>
		<line x1="50" y1="71" x2="732" y2="71"></line>
		<line x1="50" y1="101" x2="732" y2="101"></line>
		<line x1="50" y1="131" x2="732" y2="131"></line>
		<line x1="50" y1="161" x2="732" y2="161"></line>
		<line x1="50" y1="191" x2="732" y2="191"></line>
		<line x1="50" y1="221" x2="732" y2="221"></line>
		<polyline points="
			50,220 
			65,220 
			115,220
			165,220
			215,219
			265,216
			315,211
			365,202
			415,185
			465,180
			515,155
			565,145
			615,115
			665,55
			715,20
			730,10
			"  />
	</svg>
</template>

<style scoped>
svg {
	margin-block-start: var(--space-s);
	max-width: 100%;
	width: 100%;
}
polyline {
	fill: none;
	stroke: var(--color-success-main);
	stroke-width: 4;
	stroke-linecap: round;
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
