<script setup>
const nuxtApp = useNuxtApp();
nuxtApp.$pageMetaTags();

const { data: design } = await useAsyncData('design-date', () => {
	return queryContent('design')
		.limit(6)
		.only(['title', 'cover_image', 'cover_image_thumbhash', 'cover_image_height', 'image_alt'])
		.sort({ date: -1 })
		.where({})
		.find();
});

const { data: post } = await useAsyncData('post-date', () => {
	return queryContent('post').limit(4).only(['title', 'description']).sort({ date: -1 }).where({}).find();
});
import 'vue3-carousel/carousel.css';
import { Carousel, Slide, Pagination, Navigation } from 'vue3-carousel';

const carouselConfig = {
	itemsToShow: 1,
	wrapAround: true,
	autoplay: 2500,
};
</script>
<template>
	<main>
		<IntroText
			:is-on="true"
			title="World Wide Ape"
			text="I’m <i>Yonatan Ben Knaan</i>, a graphic designer and an alright dude from <i>Tel Aviv</i>, the cultural capital of the flaming <i>middle east</i>."
		/>
		<section class="bento">
			<Carousel class="item" v-bind="carouselConfig">
				<Slide v-for="item in design" :key="item">
					<UnLazyImage
						class="carousel-image"
						:thumbhash="item.cover_image_thumbhash"
						:src="item.cover_image"
						:alt="item.image_alt"
						width="1000"
						:height="item.cover_image_height"
					/>
				</Slide>
				<template #addons>
					<Pagination />
				</template>
			</Carousel>

			<!-- <ShowContentPreview class="block-design" :content-data="design" sec-title="Latest graphic art" link-to="design" />
			<ShowContentPreview class="block-post" :content-data="post" sec-title="Latest posts" link-to="post" isLink />
			<div class="block-music">
				<span>
					<p>Playlists</p>
					<p>and Mixes</p>
				</span>
			</div> -->
		</section>
	</main>
</template>

<style scoped>
.bento {
	display: grid;
	grid-template-columns: repeat(5, 1fr);
	grid-template-rows: 1fr auto;
	gap: var(--space-s);
	margin-block-end: var(--space-s);
	span {
		display: flex;
		flex-direction: column;
		gap: var(--space-s);
	}
	@media (width <= 544px) {
		grid-template-columns: 1fr;
	}
}
.block-design {
	grid-column: 1 / 4;
	grid-row: 1;
	@media (width <= 544px) {
		grid-column: unset;
	}
}
.block-post {
	grid-column: 4 / -1;
	grid-row: 1 / -1;
	@media (width <= 544px) {
		grid-column: unset;
	}
}
@keyframes music {
	0% {
		transform: rotate3d(1, 2, 3, 16deg);
	}

	50% {
		transform: rotate3d(0, 1, 0, 32deg);
	}
	100% {
		transform: rotate3d(3, 2, 1, 64deg);
	}
}
.block-music {
	grid-column: 1 / 4;
	grid-row: 2;
	height: fit-content;
	background-color: var(--color-sys-invert-highlight);
	overflow: auto;
	border-radius: var(--border-radius-xs);
	transition: transform 0.25s, box-shadow ease-in-out 0.25s;
	transform: translateY(0);
	& span {
		perspective: 180px;
		animation: 5s infinite alternate music;
	}
	& p {
		font-family: var(--font-hand);
		line-height: 0.75;
		font-size: 600%;
		text-align: center;
		white-space: nowrap;
	}
	word-break: normal;
	overflow: hidden;
	&:hover {
		transform: translateY(calc(var(--space-3xs) * -1));
	}
	@media (width <= 544px) {
		grid-column: unset;
	}
}
.carousel-image{
	aspect-ratio: 1;
	object-fit: cover;
}
</style>
