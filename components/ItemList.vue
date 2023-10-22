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
		default: 250,
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
					<p>{{ item.date }}</p>
				</div>
				<img :src="item.cover_image" alt="" />
			</NuxtLink>
		</template>
	</masonry-wall>
</template>

<style scoped>
h3 {
	font-size: var(--step-1);
}
p {
	font-size: var(--step--1);
}
.masonry-wall {
	margin-block-end: var(--space-s);
}
.item {
	/* margin-block-end: var(--space-s); */
	background-color: var(--color-sys-invert-highlight);
	box-shadow: var(--shadow-md);
	overflow: auto;
	border-radius: var(--border-radius);
	&:hover {
		box-shadow: var(--shadow-lg);
	}
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
	inset: 0;
	display: block;
	&:hover {
		font-weight: initial;
	}
	text-decoration: none;
}
</style>
