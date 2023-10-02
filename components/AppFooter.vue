<script setup>
const config = useRuntimeConfig();
</script>
<template>
	<footer class="footer">
		<p class="links">
			<nuxt-link href="//twitter.com/yonatankof" target="_blank" rel="nofollow noopener noreferrer">Twitter</nuxt-link>
			<nuxt-link href="//github.com/yonatankof" target="_blank" rel="nofollow noopener noreferrer">GitHub</nuxt-link>
			<nuxt-link href="//linkedin.com/in/yonatankof/" target="_blank" rel="nofollow noopener noreferrer">Linkedin</nuxt-link>
			<nuxt-link href="//dribbble.com/yonatan_kof" target="_blank" rel="nofollow noopener noreferrer">Dribbble</nuxt-link>
			<p>ToggleTheme</p>
		</p>
		<span class="footer__copyright">
			<p>Copyright © {{ config.public.siteOwnerName }}・{{ new Date().getFullYear() }}</p>
		</span>
	</footer>
</template>
<style lang="scss" scoped>
a, p {
	font-size: var(--step--1);
	margin-block-end: var(--space-3xs);
}
footer {
	display: flex;
	flex-direction: column;
	align-items: center;
	padding-block-end: var(--space-s);
}
.links{
	display: flex;
	flex-direction: row;
	justify-content: center;
	gap: var(--space-s);
}
</style>
