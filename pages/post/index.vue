<script setup>
const config = useRuntimeConfig();

const nuxtApp = useNuxtApp();
nuxtApp.$pageMetaTags({
	metaTitle: `Amazing posts by ${config.public.siteOwnerName} of the ${config.public.siteName}`,
	metaDesc: 'Browse a collection of personal design projects and illustrations that explore creativity in everyday life. Simple, expressive, and visually engaging pieces that reflect a unique artistic style',
	metaImg: '/images/posts-social.jpg',
	metaImgAlt: 'Social cover for this site posts page',
});
const { data } = await useAsyncData('equal', () => {
	return queryContent('post').sort({ date: -1 }).where({}).find();
});
</script>
<template>
	<div>
		<IntroText title="Posts" text="Nobody reads! Yet here I share stories and insights from my creative journey – design tips, personal projects, dev stuff, and whatnot"/>
		<ItemList :design-data="data" />
	</div>
</template>
