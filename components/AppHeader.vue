<script setup lang="ts">
defineProps({
	isSimple: {
		type: Boolean,
		default: false,
	},
});
</script>
<template>
	<header>
		<!-- <img class="kof-logo" src="/kof-script-24-3d.svg" alt="">	 -->
		<nuxt-link class="home-link" :to="{ name: 'index' }" title="Go to Homepage" aria-label="Go to Homepage">
			<ScriptKofLogo class="kof-logo" />
		</nuxt-link>
		<div>
			<nav v-show="isSimple">
				<nuxt-link :to="{ name: 'index' }">Visit WWape</nuxt-link>
			</nav>
			<nav v-show="!isSimple">
				<!-- <nuxt-link :to="{ name: 'index' }">Home</nuxt-link> -->
				<!-- <nuxt-link :to="{ name: 'work' }">UX</nuxt-link> -->
				<nuxt-link :to="{ name: 'design' }" aria-label="Go to Graphic Arts & Design page">Graphics</nuxt-link>
				<nuxt-link :to="{ name: 'post' }" aria-label="Go to Post page">Posts</nuxt-link>
			</nav>
			<ColorModeSwitch />
		</div>
	</header>
</template>
<style lang="scss" scoped>
.home-link{
	border: none;
}
.kof-logo {
	width: var(--space-2xl);
	height: var(--space-2xl);
	margin-inline-end: var(--space-2xs);
	transition: filter 0.35s ease-in-out, transform 0.25s ease-in-out;
	filter: drop-shadow(0.075em 0.075em 0.2em var(--color-black-dim));
	&:hover {
		transform: scale(1.05) rotate(0.01turn) translate(0.1em, 0.1em);
		filter: drop-shadow(0.05em 0.05em 0.25em var(--color-black-dim));
	}
}
i {
	@include flex-center();
}
header {
	height: var(--header-height);
	@include flex-center;
}
#last-name {
	white-space: nowrap;
}
#header-start {
	display: flex;
	align-items: center;
}
div,
nav {
	@include flex-center;
	gap: var(--space-xs);
}
@media (width <= $display-width-2xs) {
	header {
		flex-direction: column-reverse;
		align-items: start;
		gap: var(--space-xs);
		padding-block: var(--space-xs);
		height: unset;
	}
	div {
		width: 100%;
	}
}
@media print {
	header {
		display: none !important;
	}
}
</style>
