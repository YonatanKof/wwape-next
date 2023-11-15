<script setup>
const props = defineProps({
	designData: {
		type: Array,
		required: true,
	},
	message: {
		type: String,
		default: 'There are no designs right now, but stay tuned for newer releases in the future.',
	},
	masonryColumnWidth: {
		type: Number,
		default: 200,
	},
	masonryGap: {
		type: Number,
		default: 16,
	},
	masonryMaxColumns: {
		type: Number,
		default: 2,
	},
});
// const { $formatDate } = useNuxtApp();
</script>

<template>
	<masonry-wall
		:items="designData"
		:ssr-columns="1"
		:column-width="masonryColumnWidth"
		:gap="masonryGap"
		:max-columns="masonryMaxColumns"
	>
		<template #default="{ item, index }">
			<NuxtLink class="item" :to="item._path + '/'">
				<div class="item-content">
					<h3 id="title">{{ item.title }}</h3>
					<p>{{ $formatDate(item.date) }}</p>
				</div>
				<UnLazyImage
					:thumbhash="item.cover_image_thumbhash"
					:src="item.cover_image"
					auto-sizes
				/>
			</NuxtLink>
		</template>
	</masonry-wall>
</template>

<style lang="scss" scoped>
p {
	font-size: var(--step--1);
}
.masonry-wall {
	margin-block-end: var(--space-s);
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
#title {
	margin: 0;
}
a {
	@include link(none);
	inset: 0;
	display: block;
	font-weight: 400;
	&:hover {
		font-weight: 400;
	}
	text-decoration: none;
}
</style>
