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
	hasColumns: {
		type: Boolean,
		default: false,
	},
	// Or this one ↓
	hasFlex: {
		type: Boolean,
		default: false,
	},
});
// const { $formatDate } = useNuxtApp();
const items = [
	{
		title: 'First',
		description: 'The first item.',
	},
	{
		title: 'Second',
		description: 'The second item.',
	},
];
</script>

<template>
	<masonry-wall :items="designData" :ssr-columns="1" :column-width="200" :gap="16">
		<template #default="{ item, index }">
			<div :style="{ height: `${index * 100}px` }">
				<NuxtLink :to="item._path + '/'">
					<h2>{{ item.title }}</h2>
					<p>{{ item.date }}</p>
					<img :src="item.cover_image" alt="" />
				</NuxtLink>
			</div>
		</template>
	</masonry-wall>
	<!-- 	
	<main :class="{ columns: hasColumns, flex: hasFlex }">
		<div v-for="designItem in designData" :key="designItem._path">
			<NuxtLink :to="designItem._path + '/'">
				<h2>{{ designItem.title }}</h2>
				<p>{{ designItem.date }}</p>
				<img :src="designItem.cover_image" alt="" />
			</NuxtLink>
		</div>
	</main>
	<p v-if="designData.length == 0">
		{{ message }}
	</p>
-->
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

div {
	margin-block-end: var(--space-s);
	background-color: aliceblue;
	box-shadow: var(--shadow-md);
	overflow: auto;
	&:hover {
		box-shadow: var(--shadow-lg);
	}
}
a {
	padding: var(--space-s);
	inset: 0;
	display: block;
}
</style>
