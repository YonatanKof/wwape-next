<script setup lang="ts">
import type { NuxtError } from '#app';
const props = defineProps({
	error: Object as () => NuxtError,
});

const goHome = () => clearError({ redirect: '/' });
const goWork = () => clearError({ redirect: '/work' });
const goDesign = () => clearError({ redirect: '/design' });
const goPost = () => clearError({ redirect: '/post' });
</script>

<template>
	<main>
		<section>
			<h2>Oh My!</h2>
			<h1>It's a {{ error?.statusCode ?? 'Unknown' }}<br />Error Page</h1>
			<hr />
			<p>You can now...</p>
			<div>
				<button @click="goHome">Back to homepage</button>
				<button @click="goWork">My work as a designer</button>
				<button @click="goDesign">See cool graphic art</button>
				<button @click="goPost">Read some nice articles</button>
			</div>
		</section>
		<AppFooter />
	</main>
</template>

<style lang="scss" scoped>
main {
	text-align: center;
	height: 100vh;
	display: grid;
	grid-template-rows: 1fr auto;
	@include display-width;
}
section,
div {
	@include flex-center($flex-direction: column, $justify-content: center, $gap: var(--space-2xs));
}
div {
	width: calc(2 * var(--space-5xl));
}
hr {
	max-width: calc(2 * var(--space-5xl));
}
h2 {
}
h1 {
	animation: wobble 1s ease-in-out alternate infinite;
}
p {
	font-size: var(--step-0);
	margin-block-end: var(--space-2xs);
}
button {
	width: 100%;
}
</style>
