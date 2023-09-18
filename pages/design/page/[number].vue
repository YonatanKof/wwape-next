<script setup>
// Fetching data
const { path, params } = useRoute();
const itemCountLimit = 6;

const getPageLimit = (totalItems) => {
	return Math.ceil(totalItems / itemCountLimit);
};

const getPageNumber = () => {
	return Number(params.number);
};

// Attempt to get the number
const router = useRouter();
let pageNo;
try {
	pageNo = getPageNumber();
	if (isNaN(pageNo) || pageNo <= 0) {
		router.replace('/design/');
	}
} catch (err) {
	console.error(err);
	router.replace('/design/');
}
</script>

<template>
	<main>
		<!-- This is the design list with page number -->
		<ContentQuery
			path="/design"
			:only="['title', 'date', '_path', 'cover_image']"
			:sort="{
				date: -1,
			}"
			:skip="itemCountLimit * (getPageNumber() - 1)"
			:limit="itemCountLimit"
		>
			<template v-slot="{ data }">
				<ItemList :navigation="data" has-columns />
				<ContentQuery path="/design" :only="['title']">
					<template v-slot="{ data }">
						<Pagination
							v-if="getPageLimit(data.length) > 1"
							:currentPage="getPageNumber()"
							:totalPages="getPageLimit(data.length)"
							:nextPage="getPageNumber() < getPageLimit(data.length)"
							baseUrl="/design/"
							pageUrl="/design/page/"
						/>
					</template>
					<template #not-found>
						<!-- Nothing -->
					</template>
				</ContentQuery>
			</template>
		</ContentQuery>
	</main>
</template>
