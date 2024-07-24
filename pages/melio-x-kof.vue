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
			<ArticleGrid id="intro">
				<p>
					At Pepperi I’ve wear several hats, one of them was to create
					<i><strong>PDS</strong> (Pepperi Design System)</i>, for both <i>Product</i> and <i>Brand</i>.
				</p>
			</ArticleGrid>

			<ArticleGrid
				id="article"
				title="Design Tokens"
				btnText="Read the article!"
				linkTo="/post/design-tokens/"
				imgSrc="/misc/design-tokens.webm"
			>
				<p>
					I've written a an article about design tokens and how to use them in a design system + super cool example!
				</p>
				<p>Be sure to check it out!</p>
			</ArticleGrid>

			<ArticleGrid
				id="product-storybook"
				title="PSD, Product Storybook"
				btnText="Visit Storybook"
				linkTo="https://60ae3e9eff8e4c003b2f90d4-orunuhbrch.chromatic.com/?path=/docs/pepperi-design-system--page"
				imgSrc="/misc/DesignSystem-1.webm"
			>
				<p>The basic Storybook used by the Product and development teams.</p>
				<p>
					It contains the <i>Atoms</i> (typography, color, spacing etc'.) and <i>Molecules</i> (buttons, inputs, links,
					etc'.).
				</p>
			</ArticleGrid>

			<ArticleGrid
				id="composite-storybook"
				title="PDS, Composite Storybook"
				btnText="Visit Storybook"
				linkTo="https://626ab62298ef5a004ac8cdea-fsmhdxxugw.chromatic.com/?path=/docs/pepperi-extended-level-composition--page"
				imgSrc="/misc/DesignSystem-2.webm"
			>
				<p>
					This composite Storybook contains the <i>Organisms</i> (selectors, pickers, etc'.), <i>Templates</i> (lists,
					forms, layouts, editors, etc'.) and <i>Pages</i> which are now a WIP.
				</p>
			</ArticleGrid>

			<ArticleGrid
				id="brand"
				title="Pepperi, Brand Guide"
				btnText="Visit Storybook"
				linkTo="https://brand.pepperi.com/"
				imgSrc="/misc/brand.webm"
			>
				<p>
					I've also guided management to strengthen Pepperi brand. In this design initiative we've set brand values,
					mission statement, tone and voice and brand book.
				</p>
			</ArticleGrid>
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
	@media (width < $display-width-sm) {
		grid-column: 1 / span 12;
		grid-row: 1;
	}
}
#composite-storybook {
	grid-column: 1 / span 4;
	grid-row: 2 / span 2;
	@media (width < $display-width-sm) {
		grid-column: 1 / span 12;
		grid-row: 3;
	}
}
// Brand guide
#brand {
	grid-column: 5 / span 8;
	grid-row: 3 / span 2;
	@media (width < $display-width-sm) {
		grid-column: 5 / span 8;
		grid-row: 2;
	}
	@media (width < $display-width-xs) {
		grid-column: 1 / span 12;
		grid-row: 3;
	}
}
</style>
