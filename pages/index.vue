<script setup>
const nuxtApp = useNuxtApp();
nuxtApp.$pageMetaTags();

const { data: design } = await useAsyncData('design-date', () => {
	return queryContent('design')
		.limit(6)
		.only(['title', 'social_image', 'image_alt'])
		.sort({ date: -1 })
		.where({})
		.find();
});
const { data: post } = await useAsyncData('post-date', () => {
	return queryContent('post').limit(3).only(['title', 'description']).sort({ date: -1 }).where({}).find();
});
</script>
<template>
	<main>
		<IntroText
			:is-on="true"
			title="World Wide Ape"
			text="I’m <i>Yonatan Ben Knaan</i>, a graphic designer and an alright dude from <i>Tel Aviv</i>, the cultural capital of the flaming <i>middle east</i>."
		/>
		<section class="bento">
			<ShowContentPreview
				style="grid-column: 1 / 4; grid-row: 1 / -1"
				:content-data="design"
				title="Latest design works"
				link-to="design"
			/>
			<span style="grid-column: 4 / -1"
				><ShowContentPreview :content-data="post" title="Latest articles" link-to="post" isLink />
				<ShowContentPreview :content-data="post" title="Latest articles" link-to="post" isLink
			/></span>
		</section>
	</main>
</template>

<style scoped>
.bento {
	display: grid;
	grid-template-columns: repeat(5, 1fr);
	gap: var(--space-s);
	span {
		display: flex;
		flex-direction: column;
		gap: var(--space-s);
	}
}
</style>
