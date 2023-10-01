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
		default: 3,
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
				<span>
					<h4 id="title">{{ item.title }}</h4>
					<p>{{ item.date }}</p>
				</span>
				<img :src="item.cover_image" alt="" />
			</NuxtLink>
		</template>
	</masonry-wall>
</template>

<style scoped>
main {
	gap: var(--space-s);
}
.columns {
	display: block;
	columns: 2 auto;
}
.flex {
	display: flex;
	flex-direction: column;
}

.item {
	/* margin-block-end: var(--space-s); */
	background-color: aliceblue;
	box-shadow: var(--shadow-md);
	overflow: auto;
	border-radius: var(--border-radius);
	&:hover {
		box-shadow: var(--shadow-lg);
	}
}
img{
	border-radius: unset;
}
span {
	margin: var(--space-s);
	display: block;
}
#title{
	margin: 0;
}
a {
	inset: 0;
	display: block;
	&:hover{
		font-weight: initial;
	}
	text-decoration: none;
}
</style>
