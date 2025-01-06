<script setup>
definePageMeta({
	layout: 'simple',
});
import { ModalsContainer, useModal } from 'vue-final-modal';
import Modal from '~/components/ModalMelio.vue';

const { open, close } = useModal({
	component: Modal,
	attrs: {
		onConfirm() {
			close();
		},
	},
});
</script>
<template>
	<section>
		<p>
			At Pepperi I created, lead, managed, and governed a <i>design systems</i> & and <i>brand guide</i> that connect
			the product team, brand identity, developers, and the business needs.
		</p>
		<p>
			A design systems that people adopt and use ensure design consistency, cohesive experiences, scalable solutions,
			improve velocity and better cross-functional collaboration.
		</p>
		<main>
			<div id="intro">
				<span>
					<span>
						<p>As a <i>full-stack designer</i>, creating <em>Pepperi Design System</em> was a joy!</p>
						<p>
							It was made possible through an intimate knowledge of complex systems, the people who use them, and the
							businesses that operate them.
						</p>
						<p>
							<span style="display: block">Reasons why I love DS role?</span>
							<i class="drag-title">Push the button to see!</i>
						</p>
					</span>
					<button @click="open" @keyup.enter="open">More reasons why + CV</button>
				</span>
			</div>

			<ArticleGrid
				id="article"
				title="Design Tokens"
				btnText="Read the Article!"
				linkTo="/post/design-tokens/"
				imgSrc="/work/pepperi-design-system/design-tokens.webm"
				srcMp4="/work/pepperi-design-system/design-tokens.mp4"
			>
				<span>
					<p>
						Check out my short article on <em>design tokens</em> and how they’re used in this website’s design system,
						complete with an example in action. 💪
					</p>
					<p>Be sure to check it out!</p>
				</span>
			</ArticleGrid>

			<ArticleGrid
				id="product-storybook"
				title="Pepperi DS, Storybook"
				btnText="Visit Storybook"
				linkTo="https://60ae3e9eff8e4c003b2f90d4-orunuhbrch.chromatic.com/?path=/docs/pepperi-design-system--page"
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
				title="PDS, Composite Storybook"
				btnText="Visit Composite Lib."
				linkTo="https://626ab62298ef5a004ac8cdea-fsmhdxxugw.chromatic.com/?path=/docs/pepperi-extended-level-composition--page"
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
				btnText="Visit the Brand Guide"
				linkTo="https://brand.pepperi.com/"
				imgSrc="/work/pepperi-design-system/brand.webm"
				srcMp4="/work/pepperi-design-system/brand.mp4"
			>
				<p>
					With this design initiative, I've guided management in a journey to strengthen and solidify Pepperi brand.
					Here, you can find our brand values, mission statement, visual and design assets, target audience, and user
					personas.
				</p>
			</ArticleGrid>
		</main>
	</section>
</template>
<style lang="scss" scoped>
main {
	display: grid;
	grid-template-columns: repeat(12, 1fr);
	grid-template-rows: repeat(3, 20rem);
	gap: var(--space-s);
	margin-block: var(--space-m);
	@media (width <= $display-width-md) {
		grid-template-rows: repeat(3, 28rem);
	}
	@media (width <= $display-width-sm) {
		grid-template-columns: 1fr;
		grid-template-rows: 28rem auto 28rem 28rem 28rem;
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
#intro {
	padding-inline: var(--space-xs);
	button {
		width: max-content;
	}
	grid-column: 5 / span 4;
	grid-row: 2;
	@media (width < $display-width-md) {
		padding-inline: unset;
		grid-column: 1 / span 4;
		grid-row: 1;
	}
	@media (width < $display-width-sm) {
		padding-inline: var(--space-s);
		grid-column: 1;
		grid-row: 2;
	}
}
#intro > span {
	display: block;
	display: flex;
	flex-direction: column;
	gap: var(--space-2xs);
}
#brand {
	grid-column: 9 / span 4;
	grid-row: 2 / span 2;
	@media (width < $display-width-md) {
		grid-column: 9 / span 4;
		grid-row: 2 / span 2;
	}
	@media (width < $display-width-sm) {
		grid-column: 1;
		grid-row: 4;
	}
}
#product-storybook {
	grid-column: 5 / span 8;
	grid-row: 1;
	@media (width < $display-width-md) {
		grid-column: 5 / span 8;
		grid-row: 1;
	}
	@media (width < $display-width-sm) {
		grid-column: 1;
		grid-row: 1;
	}
}
#composite-storybook {
	grid-column: 1 / span 8;
	grid-row: 3;
	@media (width < $display-width-md) {
		grid-column: 1 / span 8;
		grid-row: 3;
	}
	@media (width < $display-width-sm) {
		grid-column: 1;
		grid-row: 5;
	}
}
#article {
	grid-column: 1 / span 4;
	grid-row: 1 / span 2;
	@media (width < $display-width-md) {
		grid-column: 1 / span 8;
		grid-row: 2;
	}
	@media (width < $display-width-sm) {
		grid-column: 1;
		grid-row: 3;
	}
}
.drag-title {
	animation: wobble 1s ease-in-out alternate infinite;
	white-space: nowrap;
}
</style>
