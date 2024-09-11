<template>
	<blockquote class="quote-big">
		<slot />
	</blockquote>
</template>

<style lang="scss">
.quote-big {
	p {
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
    border-radius: var(--border-radius-xs);
	position: relative;
	&::before {
		content: '';
		display: inline-block;
		width: var(--space-2xs);
		height: calc(100% - calc(var(--space-s) * 2));
		background-color: var(--color-brand-main);
		position: absolute;
		left:var(--space-s);
		border-radius: var(--border-radius-xs);
	}
}
</style>
