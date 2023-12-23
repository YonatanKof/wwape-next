<script lang="ts" setup>
import symbolData from 'public/posts/flowchart-symbols/FlowchartSymbols.json';
</script>

<template>
	<div>
		<ItemList :design-data="symbolData" :masonryMaxColumns="4"/>
	</div>
</template>

<style scoped></style>
