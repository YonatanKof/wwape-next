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
		readonly isLink: boolean;
		readonly aspectRatio: string;
	}>(),
	{
		duration: 2500,
		isLink: false,
		aspectRatio: '1',
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
	border-radius: var(--space-xs);
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
}
.carousel-image {
	aspect-ratio: v-bind(aspectRatio);
	object-fit: cover;
	// border-radius: 100px !important;
}
</style>
<style lang="scss" scoped>
a {
	@include link(none);
	@include focus();
}
</style>
