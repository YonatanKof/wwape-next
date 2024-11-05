<script setup lang="ts">
defineProps({
	colTemplate: {
		type: String,
		default: '1fr 1fr',
	},
	rowTemplate: {
		type: String,
		default: '1fr',
	},
	gap: {
		type: String,
		default: 'var(--space-l)',
	},
	maxWidth: {
		type: String,
		default: '100%',
	},
	title: {
		type: String,
		default: undefined,
	},
	desc: {
		type: String,
		default: undefined,
	},
});

/**
 * Converts a string to a URL-friendly href format
 * @param text Input string to convert
 * @returns Formatted href string
 */
const generateHref = (text: string): string => {
	return (
		text
			.toLowerCase() // Convert to lowercase
			.replace(/[^a-z0-9\s-]/g, '') // Remove special characters except spaces and hyphens
			.trim() // Remove leading/trailing spaces
			.replace(/\s+/g, '-')
	); // Replace spaces with hyphens
};

// Example usage:
// const title = 'The Dynamic Duo: Fixed + Changing Panel';
// const href = generateHref(title);
// Output: '#the-dynamic-duo-fixed-changing-panel'

</script>
<template>
	<section>
		<span v-if="title">
			<h3 :id="generateHref(title)">
				<a style="width: 100%" :href="'#' + generateHref(title)"> {{ title }} </a>
			</h3>
			<p id="sub-title" v-if="desc">{{ desc }}</p>
			<hr />
		</span>
		<div>
			<slot />
		</div>
	</section>
</template>
<style lang="scss" scoped>
section {
	background-color: var(--color-sys-invert-highlight);
	height: 100%;
	padding-block: var(--space-l);
	margin-block: var(--space-l);
}
div {
	display: grid;
	grid-template-columns: v-bind(colTemplate);
	grid-template-rows: v-bind(rowTemplate);
	gap: v-bind(gap);
	@include display-width($width: v-bind(maxWidth));
	@media (width <= $display-width-sm) {
		grid-template-columns: 1fr;
	}
}
span {
	display: block;
	@include display-width($width: v-bind(maxWidth));
	margin-block-end: var(--space-l);
}
.title,
#sub-title {
	margin-block-start: unset;
	margin-block-end: var(--space-m);
}

:is(.title):has(+ p) {
	margin-block-end: var(--space-3xs);
}
</style>
