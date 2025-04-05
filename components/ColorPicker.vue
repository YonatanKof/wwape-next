<template>
	<div class="color-picker-container">
		<label :for="id">{{ label }}</label>
		<div class="inputs-wrapper">
			<div class="color-preview" :style="{ backgroundColor: hslString }"></div>

			<div class="sliders">
				<div class="slider-group">
					<div class="slider-label">
						<span>Hue: {{ hue }}°</span>
					</div>
					<CustomSlider
						v-model="hue"
						:min="0"
						:max="360"
						:step="1"
						@input="updateColor"
						:fill-color="getHueColor(hue)"
						track-color="#f0f0f0"
					/>
				</div>

				<div class="slider-group">
					<div class="slider-label">
						<span>Saturation: {{ saturation }}%</span>
					</div>
					<CustomSlider
						v-model="saturation"
						:min="0"
						:max="100"
						:step="1"
						@input="updateColor"
						:fill-color="getSaturationColor(hue, saturation)"
						track-color="#f0f0f0"
					/>
				</div>

				<div class="slider-group">
					<div class="slider-label">
						<span>Lightness: {{ lightness }}%</span>
					</div>
					<CustomSlider
						v-model="lightness"
						:min="0"
						:max="100"
						:step="1"
						@input="updateColor"
						fill-color="#666666"
						track-color="#f0f0f0"
					/>
				</div>
			</div>

			<button v-if="showReset" @click="resetColor" class="reset-button">Reset</button>
		</div>
	</div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue';
import CustomSlider from './CustomSlider.vue';

const props = defineProps({
	cssVariable: {
		type: String,
		required: true,
	},
	label: {
		type: String,
		default: 'Color',
	},
	showReset: {
		type: Boolean,
		default: true,
	},
	id: {
		type: String,
		default: () => `color-picker-${Math.random().toString(36).substring(2, 9)}`,
	},
});

// HSL component values
const hue = ref(180);
const saturation = ref(25);
const lightness = ref(15);

// Original values for reset
const originalHue = ref(180);
const originalSaturation = ref(25);
const originalLightness = ref(15);

// Computed HSL string for CSS
const hslString = computed(() => {
	return `hsl(${hue.value}, ${saturation.value}%, ${lightness.value}%)`;
});

// Create dynamic colors for sliders
const getHueColor = (h) => {
	return `hsl(${h}, 100%, 50%)`;
};

const getSaturationColor = (h, s) => {
	return `hsl(${h}, ${s}%, 50%)`;
};

onMounted(() => {
	const rootStyles = getComputedStyle(document.documentElement);
	const cssVar = props.cssVariable.startsWith('--') ? props.cssVariable : `--${props.cssVariable}`;
	const currentColor = rootStyles.getPropertyValue(cssVar).trim();

	// Parse HSL value
	if (currentColor) {
		const hslMatch = currentColor.match(/hsl\(\s*(\d+)\s*,\s*(\d+)%\s*,\s*(\d+)%\s*\)/);

		if (hslMatch) {
			hue.value = parseInt(hslMatch[1]);
			saturation.value = parseInt(hslMatch[2]);
			lightness.value = parseInt(hslMatch[3]);

			// Save original values
			originalHue.value = hue.value;
			originalSaturation.value = saturation.value;
			originalLightness.value = lightness.value;
		}
	}

	// Apply any saved override from localStorage
	const savedColor = localStorage.getItem(`theme-override-${cssVar}`);
	if (savedColor) {
		const savedHslMatch = savedColor.match(/hsl\(\s*(\d+)\s*,\s*(\d+)%\s*,\s*(\d+)%\s*\)/);
		if (savedHslMatch) {
			hue.value = parseInt(savedHslMatch[1]);
			saturation.value = parseInt(savedHslMatch[2]);
			lightness.value = parseInt(savedHslMatch[3]);
		}
	}
});

const updateColor = () => {
	const cssVar = props.cssVariable.startsWith('--') ? props.cssVariable : `--${props.cssVariable}`;
	document.documentElement.style.setProperty(cssVar, hslString.value);

	// Save to localStorage
	localStorage.setItem(`theme-override-${cssVar}`, hslString.value);
};

const resetColor = () => {
	hue.value = originalHue.value;
	saturation.value = originalSaturation.value;
	lightness.value = originalLightness.value;
	updateColor();

	const cssVar = props.cssVariable.startsWith('--') ? props.cssVariable : `--${props.cssVariable}`;
	localStorage.removeItem(`theme-override-${cssVar}`);
};
</script>

<style scoped>
.color-picker-container {
	margin-bottom: 1.5rem;
}

.inputs-wrapper {
	display: flex;
	align-items: flex-start;
	gap: 1rem;
	margin-top: 0.5rem;
}

.color-preview {
	width: 3rem;
	height: 3rem;
	border-radius: 4px;
	border: 1px solid #ccc;
	box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
}

.sliders {
	flex-grow: 1;
}

.slider-group {
	margin-bottom: 0.75rem;
}

.slider-label {
	display: flex;
	justify-content: space-between;
	margin-bottom: 0.25rem;
	font-size: 0.875rem;
}

.reset-button {
	padding: 0.5rem 0.75rem;
	background-color: #f3f4f6;
	border: 1px solid #d1d5db;
	border-radius: 4px;
	font-size: 0.875rem;
	cursor: pointer;
	transition: background-color 0.2s ease;
}

.reset-button:hover {
	background-color: #e5e7eb;
}
</style>
