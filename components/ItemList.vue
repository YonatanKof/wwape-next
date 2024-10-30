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
		default: 160,
	},
	masonryGap: {
		type: Number,
		default: 16,
	},
	masonryMaxColumns: {
		type: Number,
		default: 2,
	},
	showDate: {
		type: Boolean,
		default: true,
	},
	titleSize: {
		type: String,
		default: 'var(--step-2)',
	},
});
const { $formatDate } = useNuxtApp();
</script>

<template>
	<masonry-wall
		:items="designData"
		:ssr-columns="2"
		:column-width="masonryColumnWidth"
		:gap="masonryGap"
		:max-columns="masonryMaxColumns"
	>
		<template #default="{ item, index }" :key="index">
			<NuxtLink class="item" v-if="item._path" :to="item._path + '/'">
				<div class="item-content">
					<h3 id="title">{{ item.title }}</h3>
					<p v-if="showDate" id="mata-data">{{ $formatDate(item.date) }}</p>
					<p v-if="item.description" v-html="item.description"></p>
				</div>
				<UnLazyImage
					:thumbhash="item.cover_image_thumbhash"
					:src="item.cover_image"
					:alt="item.image_alt"
					width="1000"
					:height="item.cover_image_height"
				/>
			</NuxtLink>

			<div v-else>
				<FlowChartItem
					:modalTitle="item.name"
					:modalDescription="item.description"
					:modalShape="item.shape"
					:modalImage="item.image"
					:modalBigImage="item.bigImage"
				/>
			</div>
		</template>
	</masonry-wall>
</template>

<style lang="scss" scoped>
.masonry-wall {
	margin-block-end: var(--space-s);
}
.item {
	@include content-item();
}
.item-content {
	margin: var(--space-s);
	display: flex;
	flex-direction: column;
	gap: var(--space-3xs);
}
#title {
	margin-block-start: unset;
	margin-block-end: var(--space-4xs);
	font-size: v-bind(titleSize);
	@media (width <= $display-width-xs) {
		font-size: var(--step-1);
	}
}
#mata-data {
	font-size: var(--step--2);
	color: var(--color-sys-slight);
	@media (width <= $display-width-xs) {
		font-size: var(--step--4);
	}
}
p {
	font-size: var(--step--1);
	margin-block-end: unset;
	font-variation-settings: 'slnt' 0, 'wght' 400, 'CRSV' 0;
	@media (width < $display-width-xs) {
		font-size: var(--step--2);
	}
}
img {
	border-radius: unset;
}
a {
	@include link(none);
	@include focus();

	inset: 0;
	display: block;
	font-style: normal;
	font-variation-settings: 'slnt' 0, 'wght' 400, 'CRSV' 0;
	text-decoration: none;
	&:hover {
		font-variation-settings: 'slnt' 0, 'wght' 400, 'CRSV' 0;
	}
}
</style>
