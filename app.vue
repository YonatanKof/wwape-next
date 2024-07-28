<script setup lang="ts">
const config = useRuntimeConfig();
useHead({
	meta: [
		{ property: 'author', content: config.public.siteOwnerName },
		{ name: 'google-site-verification', content: 'BT5cxk7V5QYzpwQdodAb49ZrNuxGDvD4lii_fgV-uZE' },
		{ name: 'msvalidate.01', content: '3557D72FD47371EEA2248ADDA0463742' },
	],
});
</script>

<template>
	<NuxtLayout>
		<NuxtPage />
	</NuxtLayout>
</template>
<style lang="scss">
.page-enter-active,
.page-leave-active,
.layout-enter-active,
.layout-leave-active {
	transition: opacity 0.14s, filter 0.07s;
}
.page-enter-from,
.page-leave-to,
.layout-enter-from,
.layout-leave-to {
	opacity: 0;
	filter: blur(0.25rem);
}
.pop-enter-active,
.pop-leave-active {
	transition: opacity 0.4s, transform 0.4s;
}
.pop-enter-from {
	opacity: 0;
	transform: translateX(calc(var(--space-8xl) * -1));
}
.pop-leave-to {
	opacity: 0;
	transform: translateX(var(--space-8xl));
}
</style>
