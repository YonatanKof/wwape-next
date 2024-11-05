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
		<span>
			<nuxt-link class="home-link" :to="{ name: 'index' }" title="Go to Homepage" aria-label="Go to Homepage">
				<KofLogoLine class="kof-logo" />
			</nuxt-link>
			<div>
				<nav v-show="!isSimple">
					<nuxt-link :to="{ name: 'work' }">Work</nuxt-link>
					<nuxt-link :to="{ name: 'design' }" aria-label="Go to Graphic Arts & Design page">Graphics</nuxt-link>
					<nuxt-link :to="{ name: 'post' }" aria-label="Go to Post page">Posts</nuxt-link>
				</nav>
				<ColorModeSwitch />
			</div>
		</span>
	</header>
</template>
<style lang="scss" scoped>
header {
	height: var(--header-height);
	@include cool-doted-bg;
	display: flex;
	align-items: center;;
	position: fixed;
	inset: 0;
	z-index: 1000;
}
span {
	@include flex-center;
	width: 100%;
	@include display-width($width: unset);
}
.home-link {
	border: none;
}
.kof-logo {
	width: var(--space-xl);
	height: var(--space-xl);
	margin-inline-end: var(--space-2xs);
	transition: filter 0.35s ease-in-out, transform 0.25s ease-in-out;
	// filter: drop-shadow(0.075em 0.075em 0.2em var(--color-black-dim));
	&:hover {
		transform: scale(1.1) rotate(-0.01turn) translate(-0.125em, 0.125em);
		// filter: drop-shadow(0.05em 0.05em 0.25em var(--color-black-dim));
	}
}
i {
	@include flex-center();
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
a {
	color: var(--color-sys-slight);
	&:hover {
		color: var(--color-sys-main);
		border-color:  var(--color-sys-main);
	}
}
// @media (width <= $display-width-sm) {
// 	header {
// 		flex-direction: column-reverse;
// 		align-items: start;
// 		gap: var(--space-xs);
// 		padding-block: var(--space-xs);
// 		// height: unset;
// 	}
// 	div {
// 		width: 100%;
// 	}
// }
@media print {
	header {
		display: none !important;
	}
}
</style>
