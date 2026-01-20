<script setup>
const nuxtApp = useNuxtApp();
nuxtApp.$pageMetaTags();

const { data: design } = await useAsyncData('design-random', async () => {
	const all = await queryContent('design')
		.only(['title', 'cover_image', 'cover_image_thumbhash', 'cover_image_height', 'image_alt'])
		.find();

	// random 4
	return all
		.slice() // avoid mutating original
		.sort(() => Math.random() - 0.5)
		.slice(0, 6);
});

const { data: post } = await useAsyncData('post-date', () => {
	return queryContent('post')
		.limit(4)
		.only(['title', 'cover_image', 'cover_image_thumbhash', 'cover_image_height', 'image_alt'])
		.sort({ date: -1 })
		.where({})
		.find();
});

const { data: work } = await useAsyncData('work-date', () => {
	return queryContent('work')
		.limit(2)
		.only(['title', 'cover_image', 'cover_image_thumbhash', 'cover_image_height', 'image_alt'])
		.sort({ date: -1 })
		.where({})
		.find();
});
</script>
<template>
	<main>
		<IntroText
			:is-on="true"
			title="World Wide Ape"
			text="I’m <i>Yonatan Ben Knaan</i>, a graphic designer and an alright dude from <i>Tel Aviv</i>, the cultural capital of the flaming <i>middle east</i>."
		/>
		<section class="bento">
			<Carousel
				isLink
				withTitle
				link-to="design"
				class="block-design"
				:content-data="design"
				:duration="3333"
				aspect-ratio="9 / 10"
				link-to-display-text="Check out the designs"
			/>
			<Carousel
				isLink
				withTitle
				link-to="post"
				class="block-post"
				:content-data="post"
				:duration="4444"
				aspect-ratio="4 / 3"
				link-to-display-text="Read a few nice articles"
			/>
			<Carousel
				isLink
				withTitle
				link-to="work"
				class="block-work"
				:content-data="work"
				:duration="5555"
				aspect-ratio="1.4 / 1"
				link-to-display-text="Some cool case studies"
			/>
		</section>
	</main>
</template>

<style scoped>
.bento {
	display: grid;
	grid-template-columns: repeat(12, 1fr);
	grid-template-rows: auto var(--space-6xl) 1fr;
	padding-block-start: var(--space-xl);
	padding-block-end: var(--space-2xl);
	@media (width <= 640px) {
		grid-template-columns: repeat(9, 1fr);
		grid-template-rows: auto var(--space-2xl) auto var(--space-3xl) auto;
	}
	@media (width <= 544px) {
		grid-template-rows: auto var(--space-xl) auto var(--space-l) auto;
	}
}
.block-design {
	grid-column: 1 / span 5;
	grid-row: 1 / span 2;
	@media (width <= 640px) {
		grid-column: 1 / span 7;
		grid-row: 1 / span 2;
	}
	@media (width <= 544px) {
		grid-column: 1 / span 7;
	}
}
.block-post {
	grid-column: 7 / -1;
	grid-row: 1 / span 2;
	margin-block-start: var(--space-2xl);
	z-index: 10;
	@media (width <= 640px) {
		grid-column: 3 / -1;
		grid-row: 2 / span 3;
		margin-block-start: unset;
	}
	@media (width <= 544px) {
		grid-column: 2 / -1;
	}
}
.block-work {
	grid-column: 4 / span 6;
	grid-row: 2 / span 2;
	z-index: 9;
	@media (width <= 640px) {
		grid-row: 4 / span 2;
		grid-column: 1 / span 6;
		z-index: 10;
	}
	@media (width <= 544px) {
		grid-column: 1 / span 7;
	}
}
</style>
