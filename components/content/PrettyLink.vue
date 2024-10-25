<script setup lang="ts">
defineProps({
	title: {
		type: String,
		default: 'Pretty link',
	},
	desc: {
		type: String,
		default: 'Visit the page by clicking here',
	},
	url: {
		type: String,
		default: `https://wwape.com/`,
	},
	icon: {
		type: String,
		default: '🫣',
	},
	target: {
		type: String,
		default: '_blank',
		required: false,
	},
});
</script>

<template>
	<NuxtLink :href="url" :target="target" class="pretty-link">
		<span v-if="icon">
			<p>{{ icon }}</p>
		</span>
		<span :title="title">
			<h6 v-html="title"></h6>
			<p v-if="desc" v-html="desc"></p>
		</span>
		<div>
			<p>↗︎</p>
		</div>
	</NuxtLink>
</template>
<style>
.pretty-link {
	display: flex;
	align-items: center;
	flex-direction: row;
	background-color: var(--color-brand-dis);
	margin-block: var(--space-xs);
	border-radius: var(--border-radius-sm);
	position: relative;
	overflow: hidden;
    height: var(--space-2xl);
    margin: unset;
}
.pretty-link:hover {
	font-variation-settings: unset;
}

.pretty-link div {
    padding-inline: var(--space-s) var(--space-m);
}

.pretty-link span:first-of-type,
.pretty-link div {
    height: var(--space-2xl);
    display: flex;
    justify-content: center;
    align-items: center;
}
.pretty-link span:first-of-type {
    aspect-ratio: 1/1;
	background-color: var(--color-brand-dis);
	margin: 0;
}
.pretty-link span:first-of-type p,
.pretty-link div p {
    font-size: var(--step-4);
	margin: 0;
}
.pretty-link div p {
    font-family: var(--font-hand);
    color: var(--color-sys-slight);
    font-variation-settings: 'wght' 300;
}

.pretty-link span:last-of-type {
	width: 100%;
	margin-inline-start: var(--space-s);
}
.pretty-link span:last-of-type p,
.pretty-link span:last-of-type h6 {
	overflow: hidden;
    word-break: break-all;
	display: -webkit-box;
	-webkit-line-clamp: 1;
	-webkit-box-orient: vertical;
}
.pretty-link span:last-of-type p {
	font-size: var(--step--2);
	margin: unset;
	color: var(--color-sys-slight);
}
.pretty-link span:last-of-type h6 {
	line-height: 1.5;
	margin: unset;
	font-family: var(--font-hand);
	font-size: var(--step-0);
	text-wrap: balance;
	font-variation-settings: 'wght' 400;
}
</style>
