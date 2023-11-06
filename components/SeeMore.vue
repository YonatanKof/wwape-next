<script setup>
defineProps({
	surround: {
		type: Array,
		required: true,
	},
});
</script>

<template>
	<div class="more">
		<template v-for="other in surround" :key="other._path">
			<NuxtLink v-if="other" class="item" :to="other._path + '/'" :aria-label="other.title">
				<div class="item-content">
					<h4 id="title">{{ other.title }}</h4>
					<p>{{ other.date }}</p>
				</div>
				<img :src="other.social_image.src" />
			</NuxtLink>
		</template>
	</div>
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
