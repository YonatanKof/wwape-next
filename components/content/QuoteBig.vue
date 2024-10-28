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
			<p class="fancy-title" v-html="title"></p>
			<p v-if="desc" v-html="desc"></p>
		</span>
	</blockquote>
</template>
<style lang="scss">
.quote-big {
	display: flex;
	align-items: center;
	flex-direction: row;
	background-color: var(--color-brand-dis);
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
	.icon {
		min-width: var(--space-xl);
		height: var(--space-xl);
		margin-inline-start: var(--space-2xs);
	}
	p,
	.fancy-title {
		margin-inline-start: var(--space-m);
		color: var(--color-sys-main);
	}
	p {
		font-size: var(--step-0);
		letter-spacing: unset;
	}
	.fancy-title {
		line-height: 1.5;
		margin-block: unset;
		margin-inline-start: var(--space-m);
		font-family: var(--font-hand);
		font-size: var(--step-1);
		text-wrap: balance;
		font-variation-settings: 'wght' 400;
	}
}
</style>
