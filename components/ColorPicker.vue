<template>
	<div class="color-picker-container">
		<label :for="id">{{ label }}</label>
		<div class="inputs-wrapper">
			<div class="color-preview" :style="{ backgroundColor: hslString }"></div>

			<div class="sliders">
				<div class="slider-group">
					<label>H: {{ hue }}°</label>
					<input type="range" min="0" max="360" v-model.number="hue" @input="updateColor" />
				</div>

				<div class="slider-group">
					<label>S: {{ saturation }}%</label>
					<input type="range" min="0" max="100" v-model.number="saturation" @input="updateColor" />
				</div>

				<div class="slider-group">
					<label>L: {{ lightness }}%</label>
					<input type="range" min="0" max="100" v-model.number="lightness" @input="updateColor" />
				</div>
			</div>

			<button v-if="showReset" @click="resetColor" class="reset-button">Reset</button>
		</div>
	</div>
</template>

<script setup>
// import { ref, computed, onMounted } from 'vue';

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
	align-items: center;
	gap: 1rem;
	margin-top: 0.5rem;
}

.color-preview {
	width: 3rem;
	height: 3rem;
	border-radius: 4px;
	border: 1px solid #ccc;
}

.sliders {
	flex-grow: 1;
}

.slider-group {
	display: flex;
	flex-direction: column;
	margin-bottom: 0.5rem;
}

.slider-group label {
	font-size: 0.8rem;
	margin-bottom: 0.2rem;
}

.slider-group input {
	width: 100%;
}

.reset-button {
	padding: 0.3rem 0.6rem;
	height: fit-content;
	cursor: pointer;
}
</style>
