<script setup>
definePageMeta({
	layout: 'simple',
});
</script>
<template>
	<section>
		<h1>Design Systems</h1>
		<main>
			<div class="box b1">
				<h5>Hi Guy, A few words of what I'll bring as a DS lead at Melio:</h5>
				<ul>
					<li>Working knowledge of complex design systems</li>
					<li>A proven ability to lead teams without authority</li>
					<li>A designer who code, this site for example but but ask to see more</li>
					<li>Writing guides and PRDs</li>
					<li>Best practices in Collaboration and Sharing</li>
					<li>Best practices in Backlog management</li>
					<li>Working lean and effective</li>
					<li>Total control over tools</li>
					<li>Recommendations form managers and other leading figures</li>
					<li>Shifting the DS form a hard *challenge* to a success</li>
				</ul>
			</div>
			<div class="box b2">
				<p>
					At Pepperi I’ve wear several hats, one of them was to create Pepperi Design System (hereinafter ***PDS***),
					for both the *Product* and *Brand* teams.
				</p>

				<p>Let's review the products Design System</p>
			</div>
			<div class="box b3">
				<h3>PSD, Product Storybook</h3>
				<div class="box-flex">
					<span class="box-content">
						<p>The basic Storybook used by the Product and development teams.</p>
						<p>
							It contains the <i>Atoms</i> (typography, color, spacing etc'.) and <i>Molecules</i> (buttons, inputs,
							links, etc'.).
						</p>
						<NuxtLink
							class="button"
							style="border-radius: var(--space-l)"
							target="_blanc"
							href="https://60ae3e9eff8e4c003b2f90d4-orunuhbrch.chromatic.com/?path=/docs/pepperi-design-system--page"
						>
							Visit Storybook
						</NuxtLink>
						<!-- <button>See it here</button> -->
					</span>
					<VideoTag class="box-image" marginBlock="unset" src="/misc/DesignSystem-1.webm" show-mesh="true"></VideoTag>
				</div>
			</div>
		</main>
	</section>
</template>
<style lang="scss" scoped>
@mixin box-corner() {
	background-color: #fff;
	border: 0.5px solid #f26725;
	box-shadow: 0 1px 2px #0003;
	content: '';
	display: block;
	height: 0.5rem;
	position: absolute;
	width: 0.5rem;
}
main {
	display: grid;
	grid-template-columns: repeat(12, 1fr);
	gap: var(--space-m);
}
ol,
ul {
	padding-inline-start: var(--space-s);
}
li::marker {
	color: var(--color-focus-dim);
}

li,
p {
	font-size: var(--step-0);
}
.button {
	width: max-content;
}
.box {
	padding: var(--space-m);
	background-color: var(--color-sys-invert-highlight);
	// border-radius: var(--border-radius-md);
	display: flex;
	flex-direction: column;
	gap: var(--space-xs);
	// background-image: radial-gradient(var(--color-link-dim) 1px, transparent 1px);
	background-size: 8px 8px;
	border: 0.5px solid #f26725;
	&::after {
		@include box-corner();
		left: -0.25rem;
		top: -0.25rem;
	}
	&::before {
		@include box-corner();
		right: -0.25rem;
		top: -0.25rem;
	}
}
.box-flex {
	display: flex;
	flex-direction: row;
	gap: var(--space-s);
	margin-inline-end: calc(var(--space-m) * -1);
	margin-block-end: calc(var(--space-m) * -1);
	overflow: hidden;
}
.box-image {
	min-width: clamp(20rem, 50%, 30rem);
	margin-block-end: calc(var(--space-m) * -1);
	margin-inline-end: calc(var(--space-m) * -1);
}
.box-content {
	display: flex;
	flex-direction: column;
	gap: var(--space-xs);
	margin-block-end: var(--space-m);
}
.b1 {
	grid-column: 1 / span 4;
	grid-row: 1 / span 4;
	@media (width < $display-width-sm) {
		grid-row: 2 / span 4;
	}
}
.b2 {
	grid-column: 5 / span 8;
	grid-row: 2 / auto;
}
.b3 {
	grid-column: 5 / span 8;
	grid-row: 1 / auto;
	container-type: inline-size;
	container-name: box-item;
	@media (width < $display-width-sm) {
		grid-column: 1 / span 12;
	}
}
@container box-item (width < 480px) {
	.box-flex {
		flex-direction: column;
	}
	.box-content {
		padding-inline-end: var(--space-m);
		margin-block-end: unset;
	}
	.box-image {
		margin-block-end: calc(var(--space-m) * -6);
	}
}
</style>
