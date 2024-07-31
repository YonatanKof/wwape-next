<script setup>
definePageMeta({
	layout: 'simple',
});
import { ModalsContainer, useModal } from 'vue-final-modal';
import Modal from '~/components/ModalMelio.vue';

const show = ref(false);
const config = useRuntimeConfig();
const pageDesc = `Reaching out to Melio about DS Lead– ${config.public.siteOwnerName}`;
const pageImg = '/misc/melio-social.jpg';
const pageAlt = 'Cover image for Melio × Kof';
useHead({
	title: 'Melio × Kof',
});
useSeoMeta({
	ogType: 'website',
	description: () => pageDesc,
	ogDescription: () => pageDesc,
	twitterDescription: () => pageDesc,
	image: pageImg,
	ogImage: pageImg,
	twitterImage: pageImg,
	imageAlt: pageAlt,
	ogImageAlt: pageAlt,
	twitterImageAlt: pageAlt,
	twitterCard: 'summary_large_image',
	twitterSite: '@yonatankof',
});

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
		<ModalsContainer />
		<h1>Melio × Kof</h1>
		<p>
			<i>Hi Guy</i> 👋 we know each other from back in the days when I owned <i><strong>Matnas Interactive</strong></i
			>. The DS lead role sounds like a dream job, and I would love to join and help you win. To give you a glimpse of
			my abilities, I’ve put together this page with some examples of my work from the past few years. Let’s talk!
		</p>
		<main>
			<div id="intro">
				<span>
					<p>
						As a multi-class player I wear several hats, one of them was creating
						<i><strong>Pepperi Design System</strong></i
						>, for both the <i>product</i> and <i>devs</i> teams to improve velocity.
					</p>
					<p>Visit the links around and see it all in action 👀</p>
					<p>
						Plus! See why I'm a good fit by clicking
						<i class="drag-title">the button</i>
					</p>
					<button @click="open" @keyup.enter="open">Good Fit + CV</button>
				</span>
			</div>

			<ArticleGrid
				id="article"
				title="Design Tokens"
				btnText="Read the article!"
				linkTo="/post/design-tokens/"
				imgSrc="/misc/design-tokens.webm"
				srcMp4="/misc/design-tokens.mp4"
			>
				<p>
					A short article I've written about <i><strong>design tokens</strong></i> and how to use them in a design
					system + super cool example!
				</p>
				<p>Be sure to check it out!</p>
			</ArticleGrid>

			<ArticleGrid
				id="product-storybook"
				title="Pepperi DS, Product Storybook"
				btnText="Visit Storybook"
				linkTo="https://60ae3e9eff8e4c003b2f90d4-orunuhbrch.chromatic.com/?path=/docs/pepperi-design-system--page"
				imgSrc="/misc/DesignSystem-1.webm"
				srcMp4="/misc/DesignSystem-1.mp4"
			>
				<p>
					This library used by the <i>Product</i> and <i>Dev</i> teams to <strong>streamline development</strong>. It
					showcases the <i>atomic</i> and <i>molecular</i> elements that makes Pepperi DS.
				</p>
			</ArticleGrid>

			<ArticleGrid
				id="composite-storybook"
				title="PDS, Composite Storybook"
				btnText="Visit Storybook"
				linkTo="https://626ab62298ef5a004ac8cdea-fsmhdxxugw.chromatic.com/?path=/docs/pepperi-extended-level-composition--page"
				imgSrc="/misc/DesignSystem-2.webm"
				srcMp4="/misc/DesignSystem-2.mp4"
			>
				<p>
					This composite Storybook contains the <i>Organisms</i> (selectors, pickers, etc'.), <i>Templates</i> (lists,
					forms, layouts, editors, etc'.) and <i>Pages</i> which are now a WIP.
				</p>
			</ArticleGrid>

			<ArticleGrid
				id="brand"
				title="Pepperi Brand Guide"
				btnText="Visit the Brand Guide"
				linkTo="https://brand.pepperi.com/"
				imgSrc="/misc/brand.webm"
				srcMp4="/misc/brand.mp4"
			>
				<p>
					I've also guided management to strengthen Pepperi brand. In this design initiative we've set brand values,
					mission statement, target audience, users persona and the visual brand book itself.
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
		grid-template-rows: repeat(3, 24rem);
	}
	@media (width <= $display-width-sm) {
		grid-template-columns: 1fr;
		grid-template-rows: 28rem auto 28rem 28rem 28rem;
	}
}
h1 {
	margin-block-end: var(--space-2xs);
}
p {
	font-size: var(--step-0);
	max-width: 65ch;
}
.button {
	width: max-content;
}
#intro {
	padding-inline: var(--space-xs);
	span {
		display: block;
		display: flex;
		flex-direction: column;
		gap: var(--space-2xs);
	}
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
	// margin-block-start: var(--space-s);
	// padding-inline: var(--space-s);
}
</style>
