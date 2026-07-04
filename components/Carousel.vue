<script setup lang="ts">
import 'vue3-carousel/carousel.css';
import { Carousel, Slide, Pagination } from 'vue3-carousel';
import { thumbHashToDataURL } from 'thumbhash';
import thumbhashMap from '~/assets/data/thumbhashes.json';

type ThumbhashEntry = { hash: string; width: number; height: number };
const hashMap = thumbhashMap as Record<string, ThumbhashEntry>;

const props = withDefaults(
	defineProps<{
		readonly contentData: Array<{
			title: string;
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
		readonly withTitle: boolean;
		readonly priority?: boolean;
	}>(),
	{
		duration: 2500,
		isLink: false,
		aspectRatio: '1',
		linkToDisplayText: 'Go the this page',
		withTitle: false,
		priority: false,
	}
);

const carouselConfig = {
	itemsToShow: 1,
	wrapAround: true,
	autoplay: props.duration,
	disableOnClick: true,
	pauseAutoplayOnHover: true,
};

function base64ToBytes(b64: string): Uint8Array {
	const bin =
		typeof atob !== 'undefined'
			? atob(b64)
			: Buffer.from(b64, 'base64').toString('binary');
	const out = new Uint8Array(bin.length);
	for (let i = 0; i < bin.length; i++) out[i] = bin.charCodeAt(i);
	return out;
}

const priorityPlaceholder = computed(() => {
	if (!props.priority) return undefined;
	const src = props.contentData[0]?.cover_image;
	const hash = src
		? hashMap[src]?.hash ?? props.contentData[0]?.cover_image_thumbhash
		: undefined;
	if (!hash) return undefined;
	try {
		return thumbHashToDataURL(base64ToBytes(hash));
	} catch {
		return undefined;
	}
});
</script>

<template>
	<NuxtLink :to="linkTo">
		<h5>{{ props.linkToDisplayText }}</h5>
		<Carousel v-bind="carouselConfig">
			<Slide v-for="(item, index) in contentData" :key="index">
				<h6 v-if="withTitle">{{ item.title }}</h6>
				<NuxtImg
					v-if="priority && index === 0"
					class="carousel-image"
					:src="item.cover_image"
					:alt="item.image_alt"
					width="1000"
					:height="item.cover_image_height"
					sizes="100vw md:55vw lg:400px"
					format="webp"
					quality="80"
					loading="eager"
					fetchpriority="high"
					decoding="async"
					preload
					:style="
						priorityPlaceholder
							? { backgroundImage: `url(${priorityPlaceholder})`, backgroundSize: 'cover' }
							: undefined
					"
				/>
				<UnLazyImage
					v-else
					class="carousel-image"
					:thumbhash="hashMap[item.cover_image]?.hash ?? item.cover_image_thumbhash"
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
	--vc-pgn-border-radius: var(--border-radius-sm);
	--vc-pgn-height: calc(0.75 * var(--space-2xs));
	--vc-pgn-width: calc(0.75 * var(--space-2xs));
	--vc-pgn-gap: calc(0.75 * var(--space-2xs));
	--vc-png-bottom: var(--space-2xs);
	box-shadow: var(--shadow-lg-stronger);
	aspect-ratio: v-bind(aspectRatio);
	border-radius: var(--border-radius-sm);
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
		border-radius: var(--border-radius-sm);
		corner-shape: superellipse(2);
	}
	&:hover {
		&::after {
			background-color: var(--color-sys-slight);
		}
	}
}
// .carousel__slide {
// 	display: flex;
// 	flex-direction: column;
// }
.carousel-image {
	aspect-ratio: v-bind(aspectRatio);
	object-fit: cover;
}
</style>
<style lang="scss" scoped>
img {
	border-radius: unset;
}
a {
	@include link(none);
	@include focus();
	transition: transform ease-in-out 250ms;
	position: relative;
	h5 {
		position: absolute;
		inset: 0;
		inset-block-start: 47.5%;
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
h6 {
	position: absolute;
	padding: var(--space-s);
	inset-inline: 0;
	inset-block-start: 0;
	color: var(--color-sys-invert-main);
	background-color: var(--color-sys-slight);
}
</style>
