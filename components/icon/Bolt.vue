<template>
	<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128">
		<path class="big-icon-path"
			d="M27.035 122c34.198-26.413 57.591-52.985 76.607-80.825-9.825 1.083-16.34 1.21-24.412 1.471C88.613 28.93 95.033 21.563 104 6c-21.377 1.44-34.613 1.968-56.144.777C46.569 13.947 32.898 39.723 25 58.272c7.294 0 20.845-1.26 30.9-2.037C53.397 70.065 43.5 90 30.71 106.016"
		/>
	</svg>
</template>
<style scoped>
path {
	fill: none;
	fill-rule: evenodd;
	stroke-linecap: round;
	stroke-linejoin: round;
	stroke-width: 8;
	stroke: var(--color-sys-main);
	/* stroke-dasharray: 380.4 380.4; */
	/* stroke-dashoffset: 200; */
	/* animation: stroke-draw 1250ms ease-in-out alternate infinite; */
}
@keyframes stroke-draw {
  100% {
    stroke-dashoffset: 0;
  }
}
</style>
