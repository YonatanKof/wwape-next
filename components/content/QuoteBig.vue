<script setup>
defineProps({
	title: {
		type: String,
		default: 'Default title',
	},
	desc: {
		type: String,
		default: undefined,
	},
});
</script>

<template>
	<blockquote class="quote-big">
		<h2 class="fancy-header" unwrap="p" v-html="title"></h2>
		<p v-if="desc" unwrap="p" v-html="desc"></p>
	</blockquote>
</template>
<style lang="scss">
.quote-big {
	p,
	.fancy-header {
		margin-inline-start: var(--space-m);
	}
	.fancy-header {
		line-height: 1.5;
		margin-block: var(--space-3xs) !important;
		margin-inline-start: var(--space-m);
		font-family: var(--font-hand);
		font-size: var(--step-2);
		text-wrap: balance;
		font-variation-settings: 'wght' 400;
	}
	background-color: var(--color-brand-dis);
	margin-block: var(--space-xs);
	display: block;
	padding-inline-start: var(--space-s);
	padding: var(--space-s);
	border-radius: var(--border-radius-sm);
	position: relative;
	&::before {
		content: '';
		display: inline-block;
		width: calc(var(--space-2xs) * .75);
		height: calc(100% - calc(var(--space-s) * 2));
		background-color: var(--color-brand-main);
		position: absolute;
		inset-inline-start: var(--space-s);
		border-radius: var(--border-radius-xs);
	}
}
</style>
