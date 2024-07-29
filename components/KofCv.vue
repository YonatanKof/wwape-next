<script setup>
import dataCv from '~/assets/data/MyCV.json';

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

let textColor = 'hsl(180, 25%, 15%)';
let brandColor = 'hsl(280, 100%, 35%)';
let pdfConfig = {
	fontRegister: {
		ShantellSans: '/misc/ShantellSans-MediumItalic.ttf',
		Inter: '/misc/Inter-Regular.otf',
	},
};
let firstCol = 54;
let firstColWidth = 320;
let expPepperiY = 131;
let bodyTextLg = '8.5px Inter';
let bodyText = '7.25px Inter';
let h1Text = '13px ShantellSans';
let h2Text = '9px ShantellSans';
let h3Text = '8.25px ShantellSans';
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
		:config="pdfConfig"
	>
		<i-rect :x="0" :y="0" :width="width" :height="height" :style="{ fill: '#fff' }" />

		<i-text
			:x="firstCol"
			:y="29"
			:text="config.public.siteOwnerName"
			:width="firstColWidth"
			:style="{ fill: textColor, font: h1Text, align: 'left' }"
		/>
		<i-text
			:x="firstCol"
			:y="49"
			:text="dataCv.textIntro"
			:width="firstColWidth"
			:style="{ fill: textColor, font: bodyTextLg, align: 'left' }"
		/>
		<i-text
			:x="firstCol"
			:y="109"
			text="Experience"
			:width="firstColWidth"
			:style="{ fill: textColor, font: h1Text, align: 'left' }"
		/>
		<i-group :x="expPepperiY" id="exp-pepperi">
			<i-text
				:x="firstCol"
				:y="expPepperiY"
				:text="dataCv.experience.date + ', ' + dataCv.experience.role + ': ' + dataCv.experience.name"
				:width="firstColWidth"
				:style="{ fill: textColor, font: h2Text }"
			/>
			<i-text
				:x="firstCol"
				:y="expPepperiY + 19"
				:text="dataCv.experience.intro"
				:width="firstColWidth"
				:style="{ fill: textColor, font: bodyText, align: 'left' }"
			/>
			<i-group v-for="bullet in dataCv.experience.bullets" :key="bullet">
				<i-text
				:x="firstCol + 10"
				:y="(expPepperiY += bullet.number)"
				:width="firstColWidth - 10"
				:text="bullet.text"
				:style="{ fill: textColor, font: bodyText, align: 'left' }"
				/>
				<i-circle :cx="firstCol+4" :cy="expPepperiY + 4" :r="1.8" :style="{ fillStyle: brandColor }" />
			</i-group>
			<i-text
				:x="firstCol"
				:y="expPepperiY + 20"
				text="Key Achievements"
				:width="firstColWidth"
				:style="{ fill: textColor, font: h3Text }"
			/>
			<!-- <i-text
				v-for="achievement in dataCv.experience.achievements"
				:key="achievement"
				:x="firstCol"
				:y="(expPepperiY += achievement.number)"
				:text="achievement.text"
				:width="firstColWidth"
				:style="{ fill: textColor, font: bodyText, align: 'left' }"
			/> -->
			<i-group v-for="achievement in dataCv.experience.achievements" :key="achievement">
				<i-text
				:x="firstCol + 10"
				:y="(expPepperiY += achievement.number)"
				:width="firstColWidth - 10"
				:text="achievement.text"
				:style="{ fill: textColor, font: bodyText, align: 'left' }"
				/>
				<i-circle :cx="firstCol+4" :cy="expPepperiY + 4" :r="1.8" :style="{ fillStyle: brandColor }" />
			</i-group>
		</i-group>
	</pdfFrame>
</template>
