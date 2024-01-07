<script setup lang="ts">
import { ModalsContainer } from 'vue-final-modal'
</script>

<template>
	<main>
		<AppHeader />
		<slot />
		<ModalsContainer />
		<AppFooter />
	</main>
</template>

<style lang="scss" scoped>
main {
	height: 100vh;
	display: grid;
	grid-template-rows: auto 1fr auto;
	@include display-width;
}
</style>
