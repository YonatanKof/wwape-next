<template>
	<svg viewBox="0 0 640 240">
		<rect 
            fill="var(--bg-code)" 
            width="100%" height="100%" />
        <polygon 
            transform-origin="320 120" 
            points="320 40 390 80 390 160 320 200 250 160 250 80">
        </polygon>
	</svg>
</template>

<style lang="scss" scoped>
@keyframes rotate {
	0% { transform: rotate(0); }
	to { transform: rotate(360deg); }
}
polygon {
	fill: var(--system-color);
	transition: fill 0.5s ease-in-out,;
	animation: rotate 5s cubic-bezier(0.75, 0, 0.25, 1) alternate infinite;
	&:hover {
		fill: var(--link-color);
	}
}
</style>    

