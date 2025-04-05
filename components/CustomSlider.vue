<template>
	<div class="custom-slider">
		<div class="slider-track" ref="trackRef" @click="handleTrackClick">
			<div class="slider-fill" :style="{ width: fillWidth }"></div>
			<div
				class="slider-thumb"
				ref="thumbRef"
				:style="{ left: thumbPosition }"
				@mousedown="startDrag"
				@touchstart="startDrag"
			></div>
		</div>
		<input type="hidden" :name="name" :value="modelValue" />
	</div>
</template>

<script setup>

const props = defineProps({
	modelValue: {
		type: Number,
		required: true,
	},
	min: {
		type: Number,
		default: 0,
	},
	max: {
		type: Number,
		default: 100,
	},
	step: {
		type: Number,
		default: 1,
	},
	name: {
		type: String,
		default: '',
	},
	trackColor: {
		type: String,
		default: '#e0e0e0',
	},
	fillColor: {
		type: String,
		default: '#3b82f6',
	},
	thumbColor: {
		type: String,
		default: '#ffffff',
	},
});

const emit = defineEmits(['update:modelValue', 'input', 'change']);

const trackRef = ref(null);
const thumbRef = ref(null);
const isDragging = ref(false);

// Calculate the thumb position as a percentage
const thumbPosition = computed(() => {
	const percentage = ((props.modelValue - props.min) / (props.max - props.min)) * 100;
	return `${Math.min(Math.max(0, percentage), 100)}%`;
});

// Calculate the fill width as a percentage
const fillWidth = computed(() => {
	return thumbPosition.value;
});

// Convert pixel position to value
const positionToValue = (position) => {
	if (!trackRef.value) return props.min;

	const track = trackRef.value;
	const trackRect = track.getBoundingClientRect();
	const trackWidth = trackRect.width;

	// Calculate percentage
	let percentage = (position - trackRect.left) / trackWidth;
	percentage = Math.min(Math.max(0, percentage), 1);

	// Calculate value based on percentage, min, max and step
	let rawValue = props.min + percentage * (props.max - props.min);

	// Apply step
	if (props.step > 0) {
		rawValue = Math.round(rawValue / props.step) * props.step;
	}

	// Ensure value is within bounds
	return Math.min(Math.max(props.min, rawValue), props.max);
};

const updateValue = (newValue) => {
	if (newValue !== props.modelValue) {
		emit('update:modelValue', newValue);
		emit('input', newValue);
	}
};

const handleTrackClick = (event) => {
	// Update value when clicking on track
	const newValue = positionToValue(event.clientX);
	updateValue(newValue);
	emit('change', newValue);
};

const startDrag = (event) => {
	// Prevent default behavior
	event.preventDefault();

	// Set dragging flag
	isDragging.value = true;

	// Add document-wide event listeners
	document.addEventListener('mousemove', handleDrag);
	document.addEventListener('touchmove', handleDrag);
	document.addEventListener('mouseup', endDrag);
	document.addEventListener('touchend', endDrag);

	// Handle initial drag
	handleDrag(event);
};

const handleDrag = (event) => {
	if (!isDragging.value) return;

	// Get pointer position (works for both mouse and touch)
	const pointerX = event.clientX || (event.touches && event.touches[0] ? event.touches[0].clientX : 0);

	// Convert position to value
	const newValue = positionToValue(pointerX);
	updateValue(newValue);
};

const endDrag = () => {
	if (!isDragging.value) return;

	// Clear dragging flag
	isDragging.value = false;

	// Remove document-wide event listeners
	document.removeEventListener('mousemove', handleDrag);
	document.removeEventListener('touchmove', handleDrag);
	document.removeEventListener('mouseup', endDrag);
	document.removeEventListener('touchend', endDrag);

	// Emit change event
	emit('change', props.modelValue);
};

// Setup dynamic styles
watch(
	[() => props.trackColor, () => props.fillColor, () => props.thumbColor],
	([newTrackColor, newFillColor, newThumbColor]) => {
		if (trackRef.value) {
			trackRef.value.style.backgroundColor = newTrackColor;
		}
		if (thumbRef.value) {
			thumbRef.value.style.backgroundColor = newThumbColor;
		}
	},
	{ immediate: true }
);

// Clean up event listeners
onBeforeUnmount(() => {
	document.removeEventListener('mousemove', handleDrag);
	document.removeEventListener('touchmove', handleDrag);
	document.removeEventListener('mouseup', endDrag);
	document.removeEventListener('touchend', endDrag);
});
</script>

<style scoped>
.custom-slider {
	position: relative;
	width: 100%;
	height: 36px;
	display: flex;
	align-items: center;
}

.slider-track {
	position: relative;
	width: 100%;
	height: 6px;
	background-color: #e0e0e0;
	border-radius: 3px;
	cursor: pointer;
}

.slider-fill {
	position: absolute;
	height: 100%;
	background-color: #3b82f6;
	border-radius: 3px;
	pointer-events: none;
}

.slider-thumb {
	position: absolute;
	width: 16px;
	height: 16px;
	background-color: #ffffff;
	border: 2px solid #3b82f6;
	border-radius: 50%;
	transform: translate(-50%, -5px);
	cursor: grab;
	box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
	transition: box-shadow 0.15s ease;
}

.slider-thumb:hover,
.slider-thumb:active {
	box-shadow: 0 3px 6px rgba(0, 0, 0, 0.3);
}

.slider-thumb:active {
	cursor: grabbing;
}
</style>
