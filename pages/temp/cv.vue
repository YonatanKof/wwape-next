<script setup>
definePageMeta({
	layout: 'simple',
});
const config = useRuntimeConfig();

const nuxtApp = useNuxtApp();
nuxtApp.$pageMetaTags({
	metaTitle: `${config.public.siteOwnerName}'s CV`,
	metaDesc:
		'Experienced product designer with 15+ years leading design initiatives in startups, agencies, and companies. Specializing in UX research, design systems, and simplifying complex processes. Explore my skills and portfolio.',
	metaImg: '/images/cv-social.jpg',
	metaImgAlt: 'My CV cover image',
});
</script>
<template>
	<section>
		<h1>CV</h1>
		<a href="/misc/CV-YonatanBenKnaan-2024.pdf" download>Download CV</a>
	</section>
</template>
