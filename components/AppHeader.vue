<script setup lang="ts">
import { useColorMode, useCycleList } from "@vueuse/core";

const mode = useColorMode({
  emitAuto: true,
})

const { state, next } = useCycleList(['dark', 'light', 'auto'], { initialValue: mode })

watchEffect(() => mode.value = state.value as any)
</script>
<template>
	<header>
		<h2>Yonatan <span>Ben Knaan</span></h2>
		<div>
			<nav>
				<nuxt-link :to="{ name: 'index' }">Home</nuxt-link>
				<!-- <nuxt-link :to="{name: 'post'}">Posts</nuxt-link> -->
				<nuxt-link :to="{ name: 'design' }">Designs</nuxt-link>
			</nav>
			<button @click="next()">
				<i v-if="state === 'auto'" />
				<i v-if="state === 'dark'" />
				<i v-if="state === 'light'" />
				<span>{{ (state).charAt(0).toUpperCase() + (state).slice(1) }}</span>
			</button>
		</div>
	</header>
</template>
<style lang="scss" scoped>
header {
	height: var(--header-height);
	@include flex-center;
}
span {
	white-space: nowrap;
}
div,
nav {
	@include flex-center;
	gap: var(--space-xs);
}
@media (width <= $display-width-narrow) {
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
</style>
