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

<style scoped>
section {
	margin-block-end: var(--space-s);
}
.link {
  /* Also get styles form typography.scss */
	margin-block-end: var(--space-s);
  width: max-content;
}
div {
	display: flex;
	gap: var(--space-2xs-xs);
}
.ver {
	flex-direction: column;
}
</style>
