<script setup>
const config = useRuntimeConfig();

let t = ref(0);
let width = ref(595);
let height = ref(842);

const props = defineProps({
	type: {
		type: String,
		required: true,
		default: 'canvas',
	},
});

const infoObj = {
	title: `CV – ${config.public.siteOwnerName}`,
	author: config.public.siteOwnerName,
	subject: `CV of ${config.public.siteOwnerName} of the ${config.public.siteName}`,
	keywords: `CV, Product Design, UX, UI, Design Systems, ${config.public.siteOwnerName}`,
	creationDate: new Date(),
};
</script>

<template>
	<pdfFrame
		id="canvasBasicContainer"
		:type="type"
		@on-ready="onInstanceReady"
		@on-resize="onInstanceResize"
		:width="width"
		:height="height"
		:info="infoObj"
	>
		<i-linearGradient
			id="grad3"
			:x1="0"
			:y1="0"
			:x2="100"
			:y2="100"
			:colorStops="[
				{
					color: '#023c73',
					offset: 0,
				},
				{
					color: '#5f0b9c',
					offset: 50,
				},
				{
					color: '#b814c4',
					offset: 100,
				},
			]"
		/>
		<i-rect :x="0" :y="0" :width="width" :height="height" rx="20" ry="20" :style="{ fillStyle: 'grad(grad3)' }" />
		<i-g>
			<i-linearGradient
				id="grad4"
				:x1="0"
				:y1="0"
				:x2="0"
				:y2="100"
				:colorStops="[
					{
						color: '#42f590',
						offset: 0,
					},
					{
						color: '#42b0f5',
						offset: 50,
					},
					{
						color: '#9e30d1',
						offset: 100,
					},
				]"
			/>
			<i-g
				:transform="{
					translate: [130, 60],
				}"
			>
				<i-rect
					v-for="n in 80"
					v-bind:key="n"
					:x="Math.sin((n * 0.5 + 7.5 * (n % 2)) * 0.4 + t) * 50"
					:y="n * 0.5 * 11"
					:width="(Math.sin((n * 0.5 + 7.5 * (n % 2)) * 0.4 - 4.5 + t) + 1) * 3 + 4"
					:height="(Math.sin((n * 0.5 + 7.5 * (n % 2)) * 0.4 - 4.5 + t) + 1) * 3 + 4"
					:style="{
						fillStyle: 'hsl(' + (((n * 0.5 + 7.5 * (n % 2)) * 10) % 360) + ',100%,50%)',
						opacity: Math.sin((n * 0.5 + 7.5 * (n % 2)) * 0.4 - 4.5 + t) + 1 + 0.1,
					}"
				/>
			</i-g>
			<i-g
				:transform="{
					translate: [250, 100],
				}"
			>
				<i-path
					d="M366.2,204.2 c-9.8,0 -15,-5.6 -15,-15.1 V77.2 h-85 v28 h19.5 c9.8,0 8.5,2.1 8.5,11.6 v72.4 c0,9.5 0.5,15.1 -9.3,15.1 H277 h-20.7 c-8.5,0 -14.2,-4.1 -14.2,-12.9 V52.4 c0,-8.5 5.7,-12.3 14.2,-12.3 h18.8 v-28 h-127 v28 h18.1 c8.5,0 9.9,2.1 9.9,8.9 v56.1 h-75 V53.4 c0,-11.5 8.6,-13.3 17,-13.3 h11 v-28 H2.2 v28 h26 c8.5,0 12,2.1 12,7.9 v142.2 c0,8.5 -3.6,13.9 -12,13.9 h-21 v33 h122 v-33 h-11 c-8.5,0 -17,-4.1 -17,-12.2 v-57.8 h75 v58.4 c0,9.1 -1.4,11.6 -9.9,11.6 h-18.1 v33 h122.9 h5.9 h102.2 v-33 H366.2 z"
					transform="translate(0,0)"
					:style="{ fillStyle: 'grad(grad4)' }"
				/>
				<i-text
					:x="0"
					:y="300"
					:width="width - 300"
					align="justify"
					text="Pdf-frame is a client-side JavaScript web framework designed for PDF/Canvas rendering that leverages a declarative HTML syntax for efficient graphical content definition. It is built on the i2djs framework and currently supports PDF and Canvas formats. Pdf-frame features SVG-like syntax and semantics for easy geometrical shape definitions, ensuring consistent rendering across both PDF and Canvas. It automatically handles content overflow by creating new pages, supports multi-page PDFs, and allows for animations and events in canvas contexts. The framework also provides components for integration with popular frameworks like Vue and Nuxt, with ongoing work for React support."
					:style="{ fillStyle: '#ffffff', align: 'justify', font: '18px Courier' }"
				/>
			</i-g>
		</i-g>
	</pdfFrame>
</template>
