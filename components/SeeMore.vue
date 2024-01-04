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
		<h2 id="title">See More</h2>
		<hr />
		<nav class="more">
			<nuxt-link class="item" v-if="prev" :to="prev?._path">
				<h4 id="" class="item-content">Go back → {{ prev.title }}</h4>
				<img :src="prev?.social_image" :alt="prev?.image_alt" />
			</nuxt-link>
			<nuxt-link v-else class="item">
				<h4 id="" class="item-content">No previous items</h4>
				<img src="/no-prev-next.webp" alt="An image for no previous items" />
			</nuxt-link>
			<!-- <span v-else>The 1st item</span> -->
			<nuxt-link class="item" v-if="next" :to="next?._path">
				<h4 id="" class="item-content">Go next → {{ next.title }}</h4>
				<img :src="next?.social_image" :alt="next?.image_alt" />
			</nuxt-link>
			<nuxt-link v-else class="item">
				<h4 id="" class="item-content">No next items</h4>
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
	font-weight: 400;
	&:hover {
		font-weight: 400;
	}
	text-decoration: none;
}
</style>
