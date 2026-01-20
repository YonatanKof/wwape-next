<script setup lang="ts">
import 'vue3-carousel/carousel.css';
import { Carousel, Slide, Pagination } from 'vue3-carousel';

const props = withDefaults(
	defineProps<{
		readonly contentData: Array<{
			// title: string;
			// description: string;
			cover_image: string;
			cover_image_thumbhash: string;
			cover_image_height: string;
			image_alt: string;
		}>;
		readonly duration: number;
		readonly linkTo: string;
		readonly linkToDisplayText: string;
		readonly isLink: boolean;
		readonly aspectRatio: string;
	}>(),
	{
		duration: 2500,
		isLink: false,
		aspectRatio: '1',
		linkToDisplayText: 'Go the this page',
	}
);

const carouselConfig = {
	itemsToShow: 1,
	wrapAround: true,
	autoplay: props.duration,
	disableOnClick: true,
	pauseAutoplayOnHover: true,
};
</script>

<template>
	<NuxtLink :to="linkTo">
		<h5>{{ props.linkToDisplayText }}</h5>
		<Carousel v-bind="carouselConfig">
			<Slide v-for="(item, index) in contentData" :key="index">
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
	</NuxtLink>
</template>

<style lang="scss">
.carousel {
	// vue3-carousel
	--vc-pgn-active-color: var(--color-sys-main);
	--vc-pgn-background-color: var(--color-sys-dim);
	--vc-pgn-border-radius: var(--border-radius-md);
	--vc-pgn-height: calc(0.75 * var(--space-2xs));
	--vc-pgn-width: calc(0.75 * var(--space-2xs));
	--vc-pgn-gap: calc(0.75 * var(--space-2xs));
	--vc-png-bottom: var(--space-2xs);
	box-shadow: var(--shadow-lg);
	aspect-ratio: v-bind(aspectRatio);
	border-radius: var(--space-m);
	corner-shape: superellipse(2);
	overflow: hidden;
	button {
		box-shadow: unset;
		transform: unset;
	}
	ol,
	li {
		padding: unset;
		margin: unset;
	}
	&::after {
		content: '';
		position: absolute;
		inset: 0;
		background-color: var(--color-sys-none);
		transition: background-color ease-in-out 250ms;
		border-radius: var(--space-m);
		corner-shape: superellipse(2);
	}
	&:hover {
		&::after {
			background-color: var(--color-sys-slight);
		}
	}
}
.carousel-image {
	aspect-ratio: v-bind(aspectRatio);
	object-fit: cover;
}
</style>
<style lang="scss" scoped>
a {
	@include link(none);
	@include focus();
	transition: transform ease-in-out 250ms;
	position: relative;
	h5 {
		position: absolute;
		inset: 0;
		inset-block-start: 40%;
		text-align: center;
		opacity: 0;
		z-index: 30;
		transition: opacity ease-in-out 250ms;
		color: var(--color-sys-invert-main);
		pointer-events: none;
	}
	&:hover {
		transform: scale(1.025);
		h5 {
			opacity: 1;
		}
	}
}
</style>
