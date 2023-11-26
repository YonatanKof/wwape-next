<template>
	<div class="pagination-list text-typography_primary">
		<!-- Chevron -->
		<nuxt-link v-show="currentPage > 1" class="pagination-item" :to="prevLink">
			<Chevron class="pagination-icon" />
		</nuxt-link>
		<!-- First Page -->
		<nuxt-link :class="['pagination-item', currentPage === 1 ? 'active' : '']" :to="baseUrl">1</nuxt-link>
		<!-- ... -->
		<span v-show="currentPage > 2" class="pagination-extra"> ... </span>
		<template v-for="page in pageRange" :key="page">
			<nuxt-link
				v-show="page !== 1 && page !== totalPages"
				:class="['pagination-item', currentPage === page ? 'active' : '']"
				:to="getPageUrl(page)"
				>{{ page }}</nuxt-link
			>
		</template>
		<!-- ... -->
		<span v-show="currentPage < totalPages - 1" class="pagination-extra"> ... </span>

		<!-- Last Page -->
		<nuxt-link
			v-show="totalPages > 1"
			:class="['pagination-item', currentPage === totalPages ? 'active' : '']"
			:to="getPageUrl(totalPages)"
			>{{ totalPages }}</nuxt-link
		>
		<!-- Chevron -->
		<nuxt-link v-show="currentPage < totalPages" class="pagination-item" :to="getPageUrl(currentPage + 1)">
			<Chevron class="pagination-icon flip" />
			<!-- <img src="/images/Chevron.svg" class="chevron" alt="" /> -->
		</nuxt-link>
	</div>
</template>

<script setup>
// import { computed } from 'vue';
const props = defineProps({
	currentPage: {
		type: Number,
		required: true,
	},
	totalPages: {
		type: Number,
		required: true,
	},
	nextPage: {
		type: Boolean,
		required: true,
	},
	baseUrl: {
		type: String,
		required: true,
	},
	pageUrl: {
		type: String,
		required: true,
	},
});

const getPageUrl = (pageNo) => {
	return `${props.pageUrl}${pageNo}/`;
};
// Calculate the page range to show
const pageRange = [
	Math.max(1, props.currentPage - 1),
	props.currentPage,
	Math.min(props.totalPages, props.currentPage + 1),
];

const prevLink = computed(() => {
	return props.currentPage === 2 ? props.baseUrl : `${props.pageUrl}${props.currentPage - 1}/`;
});
</script>

<style lang="scss" scoped>
a {
	@include link(none);
	text-decoration: none;
}
.pagination-list {
	display: flex;
	flex-direction: row;
	justify-content: center;
	align-items: center;
	gap: var(--space-3xs);
	margin-block-end: var(--space-s);
}
.pagination-item {
	display: flex;
	justify-content: center;
	align-items: center;
	width: var(--space-l);
	height: var(--space-l);
	border-radius: var(--border-radius-regular);
	background-color: var(--color-sys-dis);
}
.pagination-item.active {
	transition: box-shadow 0.25s ease-in-out;
	box-shadow: inset 0 0 0 1px var(--color-sys-dim);
	&:hover {
		box-shadow: inset 0 0 0 1px var(--color-sys-slight);
	}
}
.pagination-item:not(.active) {
	transition: box-shadow 0.25s ease-in-out;
	&:hover {
		box-shadow: inset 0 0 0 1px var(--color-sys-slight);
	}
}
.pagination-extra {
}
.pagination-icon {
	width: var(--space-xs);
	height: var(--space-xs);
}
.flip {
	transform: rotateY(180deg);
}
</style>
