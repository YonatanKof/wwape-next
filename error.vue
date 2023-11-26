<script setup lang="ts">
const props = defineProps({
	error: Object,
});

// const handleError = () => clearError({ redirect: '/' })
const goHome = () => clearError({ redirect: '/' });
const goDesign = () => clearError({ redirect: '/design' });
</script>

<template>
	<main>
		<section>
			<h1>
				Oh my! <span>It's a {{ error.statusCode }}</span>
			</h1>
			<div>
				<button @click="goHome">Back to home page</button>
				<button @click="goDesign">See some nice designs</button>
			</div>
		</section>
		<AppFooter />
	</main>
</template>

<style lang="scss" scoped>
span {
	white-space: nowrap;
}
h1 {
	text-align: center;
}
main {
	height: 100vh;
	display: grid;
	grid-template-rows: 1fr auto;
	@include display-width;
}
section,
div {
	@include flex-center($flex-direction: column, $justify-content: center, $gap: var(--space-2xs));
}
</style>
