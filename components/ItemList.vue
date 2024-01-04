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
const { $formatDate } = useNuxtApp();
</script>

<template>
	<masonry-wall
		:items="designData"
		:ssr-columns="1"
		:column-width="masonryColumnWidth"
		:gap="masonryGap"
		:max-columns="masonryMaxColumns"
	>
		<template #default="{ item, index }" :key="index">
			<NuxtLink class="item" v-if="item._path" :to="item._path + '/'">
				<div class="item-content">
					<h3 id="title">{{ item.title }}</h3>
					<p id="mata-data">{{ $formatDate(item.date) }}</p>
					<p v-if="item.description">{{ item.description }}</p>
				</div>
				<UnLazyImage
					:thumbhash="item.cover_image_thumbhash"
					:src="item.cover_image"
					:alt="item.image_alt"
					width="1000"
					:height="item.cover_image_height"
				/>
			</NuxtLink>

			<div v-else >
				<FlowChartItem
					:modalTitle="item.name"
					:modalDescription="item.description"
					:modalShape="item.shape"
					:modalImage="item.image"
				/>
			</div>
		</template>
	</masonry-wall>
</template>

<style lang="scss" scoped>
p {
	font-size: var(--step--1);
	margin-block-end: unset;
}
#mata-data {
	font-size: var(--step--2);
	color: var(--color-sys-slight);
	margin-block-end: var(--space-3xs);
}
.masonry-wall {
	margin-block-end: var(--space-s);
}
.item {
	@include content-item();
	// @include focus();
	// &:hover {
	// 	transform: translateY(calc(var(--space-3xs) * -1));
	// }
}
img {
	border-radius: unset;
}
.item-content {
	margin: var(--space-s);
	display: block;
}
#title {
	margin-block-start: unset;
	margin-block-end: var(--space-4xs);
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
