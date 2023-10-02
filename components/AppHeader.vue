<script setup>
const config = useRuntimeConfig();
</script>
<template>
	<header>
		<h2>Yonatan <span>Ben Knaan</span></h2>
		<Navbar />
	</header>
</template>
<style lang="scss">
header {
	height: var(--header-height);
	@include flex-center;
}
span {
	white-space: nowrap;
}
</style>
