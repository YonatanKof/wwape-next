<script setup lang="ts">
import { VueFinalModal } from 'vue-final-modal';

const emit = defineEmits<{
	(e: 'confirm'): void;
}>();
</script>

<template>
	<VueFinalModal
		class="confirm-modal"
		content-class="confirm-modal-content"
		overlay-transition="vfm-fade"
		content-transition="vfm-fade"
		swipe-to-close="down"
	>
		<h4 class="drag-title">More reasons way!</h4>
		<ul>
			<li>
				Working knowledge of complex <em>DS</em>
			</li>
			<li>Proven ability to lead teams without authority</li>
			<li>A designer that codes, this site and more</li>
			<li>Proficient in writing guides and PRDs</li>
			<li>In love with parametric design</li>
			<li>Best practices in collaboration and sharing</li>
			<li>Best practices in backlog management</li>
			<li>Working lean and effective</li>
			<li>Total control over tools of the trade</li>
			<li>Smoking hot recommendations</li>
			<li>
				Turning the <em>DS</em> form an issue to a success
			</li>
		</ul>
		<span>
			<div><a href="/misc/CV-YonatanBenKnaan-2024.pdf" download>Download CV</a></div>
			<button class="this-modal-btn" @click="emit('confirm')">Got it</button>
		</span>
	</VueFinalModal>
</template>

<style lang="scss">
.confirm-modal {
	display: flex;
	justify-content: center;
	align-items: center;
}
.confirm-modal-content {
	display: flex;
	flex-direction: column;
	background-color: var(--color-sys-invert-main);
	border-radius: var(--border-radius-xs);
	box-shadow: var(--shadow-lg);
	max-width: calc(var(--space-8xl) * 3);
	overflow: hidden;
	margin-inline: var(--space-l);
	max-height: calc(100vh - var(--space-l));
	overflow: auto;
	@media (width <= $display-width-2xs) {
		position: absolute;
		bottom: 0;
		width: 100%;
		border-radius: unset;
	}
}
.this-modal-btn {
	font-size: var(--step--1);
	margin: unset;
}
</style>
<style lang="scss" scoped>
.drag-title {
	margin-block: var(--space-s);
	padding-inline: var(--space-xs);
}

ol,
ul {
	margin: 0;
	padding-inline-start: 0;
	list-style: none;
}
li:nth-child(odd) {
	background-color: var(--color-sys-dis);
}
li {
	padding: var(--space-2xs) var(--space-s);
	font-size: var(--step--1);
}
span {
	padding: var(--space-s);
	display: grid;
	gap: var(--space-2xs);
	grid-template-columns: 2fr 2fr;
	justify-items: center;
	align-items: center;
	text-align: center;
	max-height: var(--space-xl);
	margin-block-end: env(safe-area-inset-bottom, var(--space-s));
	div {
        background-color: var(--color-brand-dis);
		width: 100%;
		height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: var(--border-radius-xs);
	}
	a {
		font-size: var(--step--1);
	}
	button {
		width: 100%;
	}
}
</style>
