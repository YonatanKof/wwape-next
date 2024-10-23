<script setup lang="ts">
defineProps({
	title: {
		type: String,
		default: 'Default title',
	},
	desc: {
		type: String,
		default: undefined,
	},
	icon: {
		type: String,
		default: 'know',
		validator: (value: string) => {
			return ['know', 'think'].includes(value);
		},
	},
});
</script>

<template>
	<blockquote class="quote-big">
		<IconBolt v-if="icon === 'know'" class="icon" />
		<IconLightBulb v-if="icon === 'think'" class="icon" />
		<span>
			<h2 class="fancy-header" unwrap="p" v-html="title"></h2>
			<p v-if="desc" unwrap="p" v-html="desc"></p>
		</span>
	</blockquote>
</template>
<style lang="scss">
.quote-big {
	.icon {
		width: var(--space-2xl);
		height: var(--space-2xl);
		margin-inline-start: var(--space-2xs);
	}
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
	display: flex;
	align-items: center;
	flex-direction: row;
	background-color: var(--color-brand-dis);
	margin-block: var(--space-xs);
	// display: block;
	padding: var(--space-s);
	padding-inline-start: var(--space-xs);
	border-radius: var(--border-radius-sm);
	position: relative;
	&::before {
		content: unset;
		display: inline-block;
		width: calc(var(--space-2xs) * 0.5);
		height: calc(100% - calc(var(--space-s) * 2));
		background-color: var(--color-brand-main);
		position: absolute;
		inset-inline-start: var(--space-s);
		border-radius: calc(var(--space-2xs) * 0.5);
	}
}
</style>
