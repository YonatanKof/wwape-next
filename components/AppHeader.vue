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
			<nuxt-link :to="{ name: 'index' }" aria-label="Go to the about Yonatan Kof homepage">Yonatan Kof</nuxt-link>
			<div>
				<nav v-show="!isSimple">
					<nuxt-link :to="{ name: 'work' }" aria-label="Go to the graphic design, ux/ui, product design and brand design page ">Design</nuxt-link>
					<nuxt-link :to="{ name: 'design' }" aria-label="Go to Graphic Arts & Design page">Art</nuxt-link>
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
		border-color:  var(--color-focus-main);
	}
}
@media print {
	header {
		display: none !important;
	}
}
</style>
