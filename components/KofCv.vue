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

let pdfConfig = {
	fontRegister: {
		ShantellSans: '/misc/ShantellSans-MediumItalic.ttf',
		Inter: '/misc/Inter-Regular.otf',
	},
};

let textColor = 'hsl(180, 25%, 15%)';
let brandColor = 'hsla(280, 100%, 50%)';
let expPepperiY = 131;
let expBitY = 370;
let expMtnsY = 480;
let firstCol = 54;
let firstColWidth = 320;
let bodyTextLg = '8.5px Inter';
let bodyText = '7.25px Inter';
let h1Text = '13px ShantellSans';
let h2Text = '9px ShantellSans';
let h3Text = '7.5px ShantellSans';
let bulletSize = 1.9;
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
			:style="{ fill: textColor, font: h1Text, align: 'left', lineGap: 3 }"
		/>
		<i-text
			:x="firstCol"
			:y="49"
			:text="dataCv.textIntro"
			:width="firstColWidth"
			:style="{ fill: textColor, font: bodyTextLg, align: 'left', lineGap: 3 }"
		/>
		<i-text
			:x="firstCol"
			:y="109"
			text="Experience"
			:width="firstColWidth"
			:style="{ fill: textColor, font: h1Text, align: 'left', lineGap: 3 }"
		/>
		<i-group :x="expPepperiY" id="exp-pepperi">
			<i-text
				:x="firstCol"
				:y="expPepperiY"
				:text="dataCv.Pepperi.date + ', ' + dataCv.Pepperi.role + ': ' + dataCv.Pepperi.name"
				:width="firstColWidth"
				:style="{ fill: textColor, font: h2Text }"
			/>
			<i-text
				:x="firstCol"
				:y="expPepperiY + 19"
				:text="dataCv.Pepperi.intro"
				:width="firstColWidth"
				:style="{ fill: textColor, font: bodyText, align: 'left', lineGap: 3 }"
			/>
			<i-group v-for="bullet in dataCv.Pepperi.bullets" :key="bullet">
				<i-text
					:x="firstCol + 10"
					:y="(expPepperiY += bullet.number)"
					:width="firstColWidth - 10"
					:text="bullet.text"
					:style="{ fill: textColor, font: bodyText, align: 'left', lineGap: 3 }"
				/>
				<i-circle :cx="firstCol + 4" :cy="expPepperiY + 4" :r="bulletSize" :style="{ fillStyle: brandColor }" />
			</i-group>
			<i-text
				:x="firstCol"
				:y="expPepperiY + 20"
				text="Key Achievements"
				:width="firstColWidth"
				:style="{ fill: textColor, font: h3Text }"
			/>
			<i-group v-for="achievement in dataCv.Pepperi.achievements" :key="achievement">
				<i-text
					:x="firstCol + 10"
					:y="(expPepperiY += achievement.number)"
					:width="firstColWidth - 10"
					:text="achievement.text"
					:style="{ fill: textColor, font: bodyText, align: 'left', lineGap: 3 }"
				/>
				<i-circle :cx="firstCol + 4" :cy="expPepperiY + 4" :r="bulletSize" :style="{ fillStyle: brandColor }" />
			</i-group>
		</i-group>
		<i-group :x="expBitY" id="exp-bit">
			<i-text
				:x="firstCol"
				:y="expBitY"
				:text="dataCv.Bit.date + ', ' + dataCv.Bit.role + ': ' + dataCv.Bit.name"
				:width="firstColWidth"
				:style="{ fill: textColor, font: h2Text }"
			/>
			<i-text
				:x="firstCol"
				:y="expBitY + 19"
				:text="dataCv.Bit.intro"
				:width="firstColWidth"
				:style="{ fill: textColor, font: bodyText, align: 'left', lineGap: 3 }"
			/>
			<i-group v-for="bullet in dataCv.Bit.bullets" :key="bullet">
				<i-text
					:x="firstCol + 10"
					:y="(expBitY += bullet.number)"
					:width="firstColWidth - 10"
					:text="bullet.text"
					:style="{ fill: textColor, font: bodyText, align: 'left', lineGap: 3 }"
				/>
				<i-circle :cx="firstCol + 4" :cy="expBitY + 4" :r="bulletSize" :style="{ fillStyle: brandColor }" />
			</i-group>
		</i-group>
		<i-group :x="expMtnsY" id="exp-bit">
			<i-text
				:x="firstCol"
				:y="expMtnsY"
				:text="dataCv.MTNS.date + ', ' + dataCv.MTNS.role + ': ' + dataCv.MTNS.name"
				:width="firstColWidth"
				:style="{ fill: textColor, font: h2Text }"
			/>
			<i-text
				:x="firstCol"
				:y="expMtnsY + 19"
				:text="dataCv.MTNS.intro"
				:width="firstColWidth"
				:style="{ fill: textColor, font: bodyText, align: 'left', lineGap: 3 }"
			/>
			<i-group v-for="bullet in dataCv.MTNS.bullets" :key="bullet">
				<i-text
					:x="firstCol + 10"
					:y="(expMtnsY += bullet.number)"
					:width="firstColWidth - 10"
					:text="bullet.text"
					:style="{ fill: textColor, font: bodyText, align: 'left', lineGap: 3 }"
				/>
				<i-circle :cx="firstCol + 4" :cy="expMtnsY + 4" :r="bulletSize" :style="{ fillStyle: brandColor }" />
			</i-group>
		</i-group>
	</pdfFrame>
</template>
