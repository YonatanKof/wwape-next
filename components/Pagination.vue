<template>
	<div v-if="totalPages > 1" class="pagination-list text-typography_primary">
		<!-- Prev -->
		<nuxt-link
			v-if="showPrev"
			class="pagination-item"
			:to="prevLink"
		>
			<Chevron class="pagination-icon" />
		</nuxt-link>

		<template v-for="(item, i) in items" :key="i">
			<span v-if="item === 'ellipsis'" class="pagination-extra">…</span>

			<nuxt-link
				v-else
				:class="['pagination-item', item === currentPage ? 'active' : '']"
				:to="item === 1 ? baseUrl : getPageUrl(item)"
			>
				{{ item }}
			</nuxt-link>
		</template>

		<!-- Next -->
		<nuxt-link
			v-if="showNext"
			class="pagination-item"
			:to="getPageUrl(currentPage + 1)"
		>
			<Chevron class="pagination-icon flip" />
		</nuxt-link>
	</div>
</template>

<script setup>
import { computed } from 'vue';

const props = defineProps({
	currentPage: { type: Number, required: true },
	totalPages: { type: Number, required: true },
	baseUrl: { type: String, required: true },
	pageUrl: { type: String, required: true },
});

const getPageUrl = (pageNo) => `${props.pageUrl}${pageNo}/`;

const showPrev = computed(() => props.totalPages >= 4 && props.currentPage > 1);
const showNext = computed(() => props.totalPages >= 4 && props.currentPage < props.totalPages);

const prevLink = computed(() =>
	props.currentPage === 2 ? props.baseUrl : getPageUrl(props.currentPage - 1)
);

const items = computed(() => {
	const n = props.totalPages;
	const c = props.currentPage;

	// n = 1 → hidden by template v-if
	if (n === 2) return [1, 2];
	if (n === 3) return [1, 2, 3];

	// n >= 4
	if (c === 1) return [1, 'ellipsis', n];
	if (c === 2) return [1, 2, 'ellipsis', n];
	if (c === n - 1) return [1, 'ellipsis', n - 1, n];
	if (c === n) return [1, 'ellipsis', n];

	return [1, 'ellipsis', c, 'ellipsis', n];
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
	border-radius: var(--border-radius-xs);
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
	fill: var(--color-brand-slight);
}
.flip {
	transform: rotateY(180deg);
}
</style>
