<script setup lang="ts">
const props = withDefaults(
	defineProps<{
		readonly contentData: Array<{
			title: string;
			description: string;
			cover_image: string;
			image_alt: string;
		}>;
		readonly title: string;
		readonly linkTo: string;
		readonly link: boolean;
	}>(),
	{
		link: false,
	}
);
</script>

<template>
	<section>
		<nuxt-link :to="linkTo">
			<h4 class="link">{{ title }}</h4>
		</nuxt-link>
		<div>
			<NuxtImg
				v-if="!link"
				v-for="(image, index) in contentData"
				:key="index"
				:src="image.cover_image"
				:alt="image.image_alt"
				placeholder
				fit="cover"
				width="100"
				height="100"
			/>
		</div>
    <PrettyLink v-for="(item, index) in contentData" :key="index" />
		<!-- <div v-if="link" class="ver">
			<span v-for="(item, index) in contentData" :key="index">
				<h5>{{ item.title }}</h5>
				<p v-html="item.description"></p
			></span>
		</div> -->
	</section>
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
