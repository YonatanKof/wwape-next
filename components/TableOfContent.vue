<script setup>
defineProps({
	tocData: {
		type: Object,
		required: true,
	},
});
</script>

<template>
	<div>
		<ul v-if="tocData && tocData.links">
			<li v-for="link in tocData.links" :key="link.text">
				<a :href="`#${link.id}`">
					{{ link.text }}
				</a>
				<ul v-if="link.children">
					<li v-for="child in link.children" :key="child.id">
						<a :href="`#${child.id}`" class="smaller">
							{{ child.text }}
						</a>
					</li>
				</ul>
			</li>
		</ul>
	</div>
</template>

<style lang="scss" scoped>
div {
	--base-space: var(--space-2xs);
	position: fixed;
	background-color: var(--color-sys-invert-highlight);
	inset-block-end: var(--space-s);
	inset-inline-end: var(--space-s);
	max-width: calc(var(--space-5xl) * 2);
	box-shadow: var(--shadow-lg);
	border-radius: var(--border-radius-sm);
	z-index: 100;
	height: min-content;
	max-height: calc(100dvh - calc(var(--space-s) * 2));
	overflow: scroll;
	padding-inline: var(--base-space) calc(var(--base-space) * 2);
}
a {
	font-size: var(--step--1);
	color: var(--color-sys-slight);
}
.smaller {
	font-size: var(--step--2);
}
ul {
	padding-inline-start: var(--base-space);
}
li {
	line-height: 1.1;
	list-style: none;
}
li::marker {
	content: unset !important;
}
</style>
