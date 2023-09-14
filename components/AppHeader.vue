<script setup></script>
<template>
	<header>
		<h2>Header</h2>
		<Navbar />
	</header>
</template>
<style lang="scss">
header {
	height: var(--header-height);
	@include flex-center;
}
</style>
