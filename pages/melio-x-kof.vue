<script setup>
definePageMeta({
	layout: 'simple',
});
const show = ref(false);
</script>
<template>
	<section>
		<h1>Design Systems</h1>
		<main>
			<div class="box" id="intro">
				<p>
					At Pepperi I’ve wear several hats, one of them was to create
					<i><strong>PDS</strong> (Pepperi Design System)</i>, for both <i>Product</i> and <i>Brand</i>.
				</p>
			</div>
			<div class="box" id="article">
				<h4>Design Tokens</h4>
				<p>
					I've written a an article about design tokens and how to use them in a design system + super cool example!
				</p>
				<p>Be sure to check it out!</p>
				<NuxtLink
					class="button"
					style="border-radius: var(--space-l)"
					href="/post/design-tokens/"
				>
					Read the article!
				</NuxtLink>
				<!-- <VideoTag class="box-image" marginBlock="unset" src="/misc/design-tokens.webm" show-mesh="true"></VideoTag> -->
			</div>
			<div class="box" id="product-storybook">
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
			<div class="box" id="composite-storybook">
				<h4>PDS, Composite Storybook</h4>
				<div class="box-flex">
					<span class="box-content">
						<p>
							This composite Storybook contains the <i>Organisms</i> (selectors, pickers, etc'.),
							<i>Templates</i> (lists, forms, layouts, editors, etc'.) and <i>Pages</i> which are now a WIP.
						</p>
						<NuxtLink
							class="button"
							style="border-radius: var(--space-l)"
							target="_blanc"
							href="https://626ab62298ef5a004ac8cdea-fsmhdxxugw.chromatic.com/?path=/docs/pepperi-extended-level-composition--page"
						>
							Visit the Composite Library
						</NuxtLink>
					</span>
					<VideoTag class="box-image" marginBlock="unset" src="/misc/DesignSystem-2.webm" show-mesh="true"></VideoTag>
				</div>
			</div>
			<div class="box" id="brand">
				<h3>PDS, Brand Guide</h3>
				<div class="box-flex">
					<span class="box-content">
						<p>
							I've also guided management to strengthen Pepperi brand. In this design initiative we've set brand values,
							mission statement, tone and voice and brand book.
						</p>
						<NuxtLink
							class="button"
							style="border-radius: var(--space-l)"
							target="_blanc"
							href="https://brand.pepperi.com/"
						>
							Visit the Brand Guide
						</NuxtLink>
					</span>
					<VideoTag class="box-image" marginBlock="unset" src="/misc/brand.webm" show-mesh="true"></VideoTag>
				</div>
			</div>
		</main>
		<DragIt class="box-drag">
			<span class="corners">
				<h4 class="drag-title">Hi Guy 👋</h4>
				<div class="box-drag-span">
					<p>Yonatan as DS lead at Melio?</p>
					<button @click="show = !show">
						<span v-if="show">I've seen enough</span>
						<span v-else>Show me why!</span>
					</button>
				</div>
			</span>
		</DragIt>
		<DragIt v-show="show" class="box-drag" yPos="2rem;">
			<div class="corners">
				<ul>
					<li>Working knowledge of complex DS</li>
					<li>A proven ability to lead teams w/o authority</li>
					<li>A designer who code, this site and more</li>
					<li>Writing guides and PRDs</li>
					<li>Best practices in collab and sharing</li>
					<li>Best practices in backlog management</li>
					<li>Working lean and effective</li>
					<li>Total control over tools</li>
					<li>Smoking hot recommendations</li>
					<li>Turn DS to none-issue and success</li>
				</ul>
			</div>
		</DragIt>
	</section>
</template>
<style lang="scss" scoped>
@mixin box-corner() {
	background-color: #fff;
	border: 0.5px solid var(--color-link-main);
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
	grid-template-rows: repeat(4, auto);
	gap: var(--space-m);
	margin-block: var(--space-m);
}
ol,
ul {
	margin: 0;
	padding-inline-start: 0;
	list-style: none;
}
li:nth-child(even) {
	background-color: var(--color-sys-dis);
}
li {
	padding: var(--space-2xs) var(--space-xs);
	font-size: var(--step--1);
}

p {
	font-size: var(--step-0);
}
.button {
	width: max-content;
}
.box-drag {
	user-select: none;
	.drag-title {
		animation: wobble 1s ease-in-out alternate infinite;
		margin-block-start: var(--space-s);
		padding-inline: var(--space-s);
	}
	cursor: move;
	position: fixed;
	background-color: var(--color-sys-invert-highlight);
	z-index: 100;
	border: 0.5px solid var(--color-link-main);
	width: 20rem;
	box-shadow: var(--shadow-sm);
	button {
		min-width: 10rem;
		height: var(--space-xl);
	}
	.box-drag-span {
		display: flex;
		align-items: center;
		gap: var(--space-s);
		padding: var(--space-s);
		padding-block-start: var(--space-xs);
	}
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
.corners {
	// position: relative;
	&::after {
		@include box-corner();
		bottom: -0.25rem;
		left: -0.25rem;
	}
	&::before {
		@include box-corner();
		bottom: -0.25rem;
		right: -0.25rem;
	}
}
.box {
	padding: var(--space-m);
	background-color: var(--color-sys-invert-highlight);
	border-radius: var(--border-radius-md);
	display: flex;
	flex-direction: column;
	gap: var(--space-xs);
	background-image: radial-gradient(var(--color-link-dis) 1px, transparent 1px);
	background-size: 8px 8px;
	overflow: hidden;
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
// intro text
#intro {
	grid-column: 1 / span 4;
	grid-row: 1;
	@media (width < $display-width-sm) {
		grid-column: 1 / span 4;
		grid-row: 2;
	}
	@media (width < $display-width-xs) {
		grid-column: 1 / span 12;
		grid-row: 2;
	}
}
#article {
	grid-column: 1 / span 4;
	grid-row: 4;
	@media (width < $display-width-sm) {
		grid-column: 1 / span 4;
		grid-row: 2;
	}
	@media (width < $display-width-xs) {
		grid-column: 1 / span 12;
		grid-row: 2;
	}
}
// main storybook
#product-storybook {
	grid-column: 5 / span 8;
	grid-row: 1 / span 2;
	container-type: inline-size;
	container-name: box-item;
	@media (width < $display-width-sm) {
		grid-column: 1 / span 12;
		grid-row: 1;
	}
}
#composite-storybook {
	grid-column: 1 / span 4;
	grid-row: 2 / span 2;
	container-type: inline-size;
	container-name: box-item;
	@media (width < $display-width-sm) {
		grid-column: 1 / span 12;
		grid-row: 3;
	}
}
// Brand guide
#brand {
	grid-column: 5 / span 8;
	grid-row: 3 / span 2;
	container-type: inline-size;
	container-name: box-item;
	@media (width < $display-width-sm) {
		grid-column: 5 / span 8;
		grid-row: 2;
	}
	@media (width < $display-width-xs) {
		grid-column: 1 / span 12;
		grid-row: 3;
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
