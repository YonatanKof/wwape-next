<script setup>
definePageMeta({
	layout: 'simple',
});
import { ModalsContainer, useModal } from 'vue-final-modal';
import Modal from '~/components/ModalMelio.vue';

const config = useRuntimeConfig();
const nuxtApp = useNuxtApp();
nuxtApp.$pageMetaTags({
	metaTitle: 'Melio × Yonatan Kof',
	metaDesc: `Reaching out to Melio about DS Lead – ${config.public.siteOwnerName}`,
	metaImg: '/misc/melio-social.jpg',
	metaImgAlt: 'Cover image for Melio × Kof',
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
		<h1>Melio × Kof</h1>
		<p><i>Hi Guy</i> 👋 we know each other from back in the <em>Matnas Interactive</em> days.</p>
		<p>
			The <em>design system lead</em> sounds like a dream job, I’d love to join and help you win. Check out this page
			for <em>DS</em> related works. Let’s talk soon 🙏
		</p>
		<main>
			<div id="intro">
				<span>
					<span>
						<p>
							As a <i>full-stack designer</i> I did several things, creating <em>Pepperi Design System</em> was one of
							them. This was made possible through an intimate understanding of complex systems, the people who use
							them, and the businesses that operate them.
						</p>
						<p>
							More reasons why I'm a good fit?
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
				imgSrc="/misc/design-tokens.webm"
				srcMp4="/misc/design-tokens.mp4"
			>
				<span>
					<p>
						A short article I wrote about <em>design tokens</em> and how to use them in a design system, including an
						example of them in action. 💪
					</p>
					<p>Be sure to check it out!</p>
				</span>
			</ArticleGrid>

			<ArticleGrid
				id="product-storybook"
				title="Pepperi DS, Storybook"
				btnText="Visit Storybook"
				linkTo="https://60ae3e9eff8e4c003b2f90d4-orunuhbrch.chromatic.com/?path=/docs/pepperi-design-system--page"
				imgSrc="/misc/DesignSystem-1.webm"
				srcMp4="/misc/DesignSystem-1.mp4"
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
				imgSrc="/misc/DesignSystem-2.webm"
				srcMp4="/misc/DesignSystem-2.mp4"
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
				imgSrc="/misc/brand.webm"
				srcMp4="/misc/brand.mp4"
			>
				<p>
					With this design initiative, I've guided management in strengthening the Pepperi brand. Here, you can find
					Pepperi’s brand values, mission statement, visual and design assets, target audience, and user personas.
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
