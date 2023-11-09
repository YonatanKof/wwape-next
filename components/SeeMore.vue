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
	<nav class="more">
		<nuxt-link class="item" v-if="prev" :to="prev?._path">
			<h4 id="" class="item-content"> Go back → {{ prev.title }}</h4>
			<img :src="prev?.social_image.src" :alt="prev?.social_image.alt" />
		</nuxt-link>
		<span v-else>The 1st item</span>
		<nuxt-link class="item" v-if="next" :to="next?._path">
			<h4 id="" class="item-content"> Go next → {{ next.title }}</h4>
			<img :src="next?.social_image.src" :alt="next?.social_image.alt" />
		</nuxt-link>
		<span v-else>The last item</span>
	</nav>
</template>

<style scoped>
.more {
	display: flex;
	flex-direction: row;
	gap: var(--space-s);
}
.item {
	background-color: var(--color-sys-invert-highlight);
	box-shadow: var(--shadow-md);
	overflow: auto;
	border-radius: var(--border-radius);
	transition: transform 0.35s, box-shadow ease-in-out 0.35s;
	transform: translateY(0);
	&:hover {
		transform: translateY(var(--space-4xs));
		box-shadow: var(--shadow-sm);
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
	font-weight: 400;
	&:hover {
		font-weight: 400;
	}
	text-decoration: none;
}
</style>
