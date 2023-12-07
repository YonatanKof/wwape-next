<script setup>
defineProps({
	firstName: String,
	lastName: String,
});
const iconSize = ref(8);
const iconFillColor = ref('none');
const autoIconFillColor = ref('var(--color-sys-main)');
const iconStrokeColor = ref('var(--color-sys-main)');
const iconStrokeWidth = ref(0.125);
</script>

<template>
	<div>
		<SvgIconBase
			:size="iconSize + `rem`"
			:fill-color="iconFillColor"
			:stroke-color="iconStrokeColor"
			:stroke-width="iconStrokeWidth + 'em'"
		>
			<IconAuto />
		</SvgIconBase>
		<SvgIconBase
			:size="iconSize + `rem`"
			:fill-color="iconFillColor"
			:stroke-color="iconStrokeColor"
			:stroke-width="iconStrokeWidth + 'em'"
		>
			<IconLight />
		</SvgIconBase>
		<SvgIconBase
			:size="iconSize + `rem`"
			:fill-color="iconFillColor"
			:stroke-color="iconStrokeColor"
			:stroke-width="iconStrokeWidth + 'em'"
		>
			<IconDark />
		</SvgIconBase>

		<fieldset>
			<label for="icon-size"
				>Change size ({{ iconSize }}rem)
				<input
					id="icon-size"
					name="icon-size"
					type="range"
					min="1"
					max="12"
					step="0.1"
					v-model="iconSize"
				/>
			</label>
			<label for="icon-fill"
				>Change fill color ({{ iconFillColor }})
				<input id="icon-fill" name="icon-fill" type="color" v-model="iconFillColor" />
			</label>
			<label for="icon-stroke-color"
				>Change stroke color
				<input id="icon-stroke-color" name="icon-stroke-color" type="color" v-model="iconStrokeColor" />
			</label>
			<label for="icon-stroke-width"
				>Change stroke width
				<input
					id="icon-stroke-width"
					name="icon-stroke-width"
					type="range"
					min="0.05"
					max="0.35"
					step="0.01"
					v-model="iconStrokeWidth"
				/>
			</label>
		</fieldset>
	</div>
</template>

<style scoped></style>
