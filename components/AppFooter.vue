<script setup>
const config = useRuntimeConfig();
</script>
<template>
	<footer class="footer">
		<p class="links">
			<nuxt-link href="//github.com/yonatankof" target="_blank" rel="nofollow noopener noreferrer">GitHub</nuxt-link>
			<nuxt-link href="//linkedin.com/in/yonatankof" target="_blank" rel="nofollow noopener noreferrer"
				>Linkedin</nuxt-link
			>
			<nuxt-link href="//dribbble.com/yonatan_kof" target="_blank" rel="nofollow noopener noreferrer"
				>Dribbble</nuxt-link
			>
			<nuxt-link href="//instagram.com/yonatan_kof/" target="_blank" rel="nofollow noopener noreferrer"
				>Instagram</nuxt-link
			>
			<nuxt-link :to="{ name: 'music' }" aria-label="Goto Playlists and Mixes page">Mixed Music</nuxt-link>
		</p>
		<span class="footer__copyright">
			<p>
				Copyright © Designed & developed by <span id="name">{{ config.public.siteOwnerName }}</span
				>・{{ new Date().getFullYear() }}
			</p>
		</span>
	</footer>
</template>
<style lang="scss" scoped>
a,
p {
	font-size: var(--step--1);
	margin: unset;
	// margin-block-end: var(--space-3xs);
	@media (width <= $display-width-sm) {
		font-size: var(--step--2);
	}
	text-align: center;
}
#name {
	white-space: nowrap;
}
footer {
	display: flex;
	flex-direction: column;
	align-items: center;
	padding-block-end: var(--space-m);
	gap: var(--space-2xs);
	@media print {
		display: none !important;
	}
}
.links {
	display: flex;
	flex-direction: row;
	justify-content: center;
	gap: var(--space-s);
	flex-wrap: wrap;
	span {
		white-space: nowrap;
	}
	@media (width <= $display-width-xs) {
		gap: var(--space-xs);
	}
	@media (width <= $display-width-2xs) {
		gap: var(--space-2xs);
	}
}
</style>
