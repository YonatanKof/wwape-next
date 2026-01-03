<template>
	<section>
		<p>
			At Pepperi, I created, led, and governed a <i>design system</i> and <i>brand guide</i> that aligned the product
			team, brand identity, and development with business needs.
		</p>
		<p>
			A well-adopted design system ensures consistency, cohesive experiences, scalability, improved velocity, and
			stronger cross-functional collaboration.
		</p>
		<main>
			<ArticleGrid
				id="product-storybook"
				title="Pepperi DS, Storybook"
				btnText="Visit Storybook"
				linkTo="https://pds.yonatankof.com/?path=/docs/pepperi-design-system--page"
				imgSrc="/work/pepperi-design-system/DesignSystem-1.webm"
				srcMp4="/work/pepperi-design-system/DesignSystem-1.mp4"
			>
				<p>
					Used by the <i>Product</i> and <i>Dev</i> teams to <strong>improve velocity</strong>, this library showcases
					the <i>atomic</i> and <i>molecular</i> elements that makes up Pepperi DS and the engine that drives Pepperi
					<em>theme editor</em>.
				</p>
			</ArticleGrid>

			<ArticleGrid
				id="composite-storybook"
				title="Pepperi DS, Composite Storybook"
				btnText="Visit Composite Lib."
				linkTo="https://pepperi-composite-ds.netlify.app/?path=/story/pepperi-extended-level-composition--page"
				imgSrc="/work/pepperi-design-system/DesignSystem-2.webm"
				srcMp4="/work/pepperi-design-system/DesignSystem-2.mp4"
			>
				<p>
					This library contains the <i>Organisms</i>, <i>Templates</i> and <i>Pages</i> (WIP) that makes up Pepperi's
					webapp and drives the <em>page builder</em> engine.
				</p>
			</ArticleGrid>

			<ArticleGrid
				id="brand"
				title="Pepperi Brand Guide"
				btnText="Visit Brand Guide"
				linkTo="https://brand.pepperi.com/"
				imgSrc="/work/pepperi-design-system/brand.webm"
				srcMp4="/work/pepperi-design-system/brand.mp4"
			>
				<p>
					This design initiative guided management to strengthen Pepperi's brand. Here you can find our brand values,
					mission statement, visual assets, target audience, and user personas.
				</p>
			</ArticleGrid>
		</main>
	</section>
</template>
<style lang="scss" scoped>
main {
	display: grid;
	grid-template-columns: repeat(12, 1fr);
	grid-template-rows: 20rem 28rem;
	gap: var(--space-s);
	margin-block: var(--space-m);
	@media (width <= $display-width-xs) {
		grid-template-columns: 1fr;
		grid-template-rows: repeat(3, 32rem);
	}
}
h1 {
	margin-block-end: var(--space-2xs);
	font-size: var(--step-3);
	text-wrap: balance;
	max-width: 34ch;
	margin-block-end: var(--space-xs);
}
h3 {
	text-wrap: balance;
	margin-block-end: var(--space-3xs);
	font-variation-settings: 'wght' 400;
	font-family: var(--font-body);
	font-size: var(--step-1);
	line-height: 1.4;
}
p {
	font-size: var(--step-0);
	margin-block-end: var(--space-3xs);
	max-width: 67ch;
	&:last-child {
		margin-block-end: unset;
	}
}
.button {
	width: max-content;
}
#product-storybook {
	grid-column: 1 / -1;
	grid-row: 1;
}
#composite-storybook {
	grid-column: 1 / span 7;
	grid-row: 2;

	@media (width < $display-width-xs) {
		grid-column: 1;
		grid-row: 2;
	}
}
#brand {
	grid-column: 8 / -1;
	@media (width < $display-width-xs) {
		grid-column: 1;
		grid-row: 3;
	}
}
</style>
