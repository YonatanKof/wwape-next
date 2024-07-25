<script setup>
defineProps({
	prev: {
		type: Object,
		required: true,
	},
	next: {
		type: Object,
		required: true,
	},
});
</script>

<template>
	<section>
		<h3 id="title">See More</h3>
		<hr />
		<nav class="more">
			<nuxt-link class="item" v-if="prev" :to="prev?._path">
				<h6 id="" class="item-content"><span>Back:</span> {{ prev.title }}</h6>
				<img :src="prev?.social_image" :alt="prev?.image_alt" />
			</nuxt-link>
			<nuxt-link v-else class="item">
				<h6 id="" class="item-content">No previous items</h6>
				<img src="/no-prev-next.webp" alt="An image for no previous items" />
			</nuxt-link>
			<nuxt-link class="item" v-if="next" :to="next?._path">
				<h6 id="" class="item-content"><span>Next:</span> {{ next.title }}</h6>
				<img :src="next?.social_image" :alt="next?.image_alt" />
			</nuxt-link>
			<nuxt-link v-else class="item">
				<h6 id="" class="item-content">No next items</h6>
				<img src="/no-prev-next.webp" alt="An image for no next items" />
			</nuxt-link>
		</nav>
	</section>
</template>

<style lang="scss" scoped>
.more {
	display: flex;
	flex-direction: row;
	gap: var(--space-s);
}
.item {
	@include content-item();
}
img {
	border-radius: unset;
}
.item-content {
	margin: var(--space-s);
	display: block;
}
hr {
	margin-block-end: var(--space-s);
}
#title {
	margin-block-start: var(--space-s);
}
a {
	@include link(none);
	@include focus();
	inset: 0;
	display: block;
	text-decoration: none;
}
span {
	color: var(--color-sys-slight);
	font-variation-settings: 'wght' 300;

}
</style>
