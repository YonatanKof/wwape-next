<script setup>
// const iconList = require.context('~/components/icon', true, /\.vue$/i, 'lazy');
// const iconList = ref(fetch(`~/components/icon`).then((r) => r.json()));

const iconSize = ref(4);
const iconFillColor = ref('var(--color-focus-slight)');
const iconStrokeColor = ref('var(--color-sys-main)');
const iconStrokeWidth = ref(0.1125);
</script>

<template>
	<section>
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
		</div>
		<hr />
		<fieldset>
			<div>
				<label for="icon-size"
					>Change size → <em>{{ iconSize }}rem</em>
					<input id="icon-size" name="icon-size" type="range" min="1" max="12" step="0.01" v-model="iconSize" />
				</label>
				<label for="icon-fill"
					>Change fill color → <em>{{ iconFillColor }}</em>
					<input id="icon-fill" name="icon-fill" type="color" v-model="iconFillColor" />
				</label>
			</div>
			<div>
				<label for="icon-stroke-width"
					>Change stroke width → <em>{{ iconStrokeWidth }}em</em>
					<input
						id="icon-stroke-width"
						name="icon-stroke-width"
						type="range"
						min="0.05"
						max="0.25"
						step="0.01"
						v-model="iconStrokeWidth"
					/>
				</label>
				<label for="icon-stroke-color"
					>Change stroke color → <em>{{ iconStrokeColor }}</em>
					<input id="icon-stroke-color" name="icon-stroke-color" type="color" v-model="iconStrokeColor" />
				</label>
			</div>
		</fieldset>
	</section>
</template>

<style lang="scss" scoped>
section {
	padding: var(--space-m);
	background-color: var(--color-sys-dis);
	border-radius: var(--border-radius-sm);
	margin-block: var(--space-2xs);
}
em {
	display: contents;
	color: var(--color-focus-main);
}
input {
	margin: unset;
	margin-block-start: var(--space-2xs);
}
hr {
	margin-block-start: var(--space-xs);
	margin-block-end: var(--space-m);
}
fieldset,
label {
	display: flex;
}
label {
	flex-direction: column;
}

fieldset {
	gap: var(--space-m);
}
fieldset div {
	width: 100%;
	display: flex;
	flex-direction: column;
	gap: var(--space-m);
}
@media (width <= $display-width-xs) {
	fieldset {
	flex-direction: column;
}
}
</style>
