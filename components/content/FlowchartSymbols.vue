<script lang="ts" setup>
import symbolData from '~/assets/data/FlowchartSymbols.json';
</script>

<template>
	<div>
		<ItemList :design-data="symbolData" :masonryMaxColumns="4"/>
	</div>
</template>

<style scoped></style>
