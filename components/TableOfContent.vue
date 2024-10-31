<script setup lang="ts">
import { VueFinalModal } from 'vue-final-modal';
defineProps({
	tocData: {
		type: Object,
		required: true,
	},
});

const emit = defineEmits<{
	(e: 'update:modelValue', modelValue: boolean): void;
	(e: 'confirm'): void;
}>();
</script>

<template>
	<VueFinalModal
		:hide-overlay="true"
		:esc-to-close="false"
		:click-to-close="false"
		:lock-scroll="false"
		background="interactive"
	>
		<div class="toc-block">
			<span>
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
			</span>
			<div class="hide-toc">
				<button @click="emit('confirm')">Hide table of content</button>
			</div>
		</div>
	</VueFinalModal>
</template>

<style lang="scss" scoped>
.toc-block {
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
}
span {
	display: block;
	padding-inline: var(--base-space);
	position: relative;
}
a {
	font-size: var(--step--1);
	color: var(--color-sys-slight);
}
.smaller {
	font-size: var(--step--2);
}
ul {
	padding-inline: var(--base-space);
	// margin-block-start: var(--base-space) ;
	z-index: 97;
}
span > ul > li:last-of-type {
	margin-block-end: var(--space-s);
}
li {
	line-height: 1.1;
	list-style: none;
}
li::marker {
	content: unset !important;
}
button {
	position: absolute;
	width: calc(100% - calc(var(--base-space) * 4));
	margin-inline: calc(var(--base-space) * 2);
}
.hide-toc {
	position: sticky;
	inset-inline: 0;
	inset-block-end: 0;
	height: 3.25rem;
	background-color: var(--color-sys-invert-highlight);
	z-index: 98;
}
</style>
