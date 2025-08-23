<script setup lang="ts">
const props = withDefaults(
	defineProps<{
		readonly contentData: Array<{
			title: string;
			description: string;
			social_image: string;
			image_alt: string;
		}>;
		readonly title: string;
		readonly linkTo: string;
		readonly isLink: boolean;
	}>(),
	{
		isLink: false,
	}
);
</script>

<template>
	<nuxt-link :to="linkTo + '/'" class="item">
		<span class="item-content">
			<h4>{{ title }}</h4>
			<div class="preview-block">
				<NuxtImg
					class="preview-img"
					v-if="!isLink"
					v-for="(image, index) in contentData"
					:key="index"
					:src="image.social_image"
					:alt="image.image_alt"
					:placeholder="[600, 315, 20, 20]"
					fit="cover"
					width="600"
					height="315"
				/>
			</div>
		</span>
	</nuxt-link>
</template>

<style lang="scss" scoped>
.ver {
	flex-direction: column;
}
.item {
	@include content-item();
}
a {
	@include link(none);
	@include focus();
}
.item-content {
	margin: var(--space-xs);
	display: flex;
	flex-direction: column;
	gap: var(--space-xs);
	container: xxx / inline-size;
}
.preview-img {
	border-radius: var(--border-radius-xs);
}
.preview-block {
	display: grid;
	grid-template-columns: repeat(3, 1fr);
	gap: var(--space-xs);
	width: 100%;
	@container xxx (width < 400px) {
		grid-template-columns: repeat(2, 1fr);
	}
	@container xxx (width < 288px) {
		grid-template-columns: 1fr;
	}
}
</style>
