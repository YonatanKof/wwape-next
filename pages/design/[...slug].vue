<template>
	<main>
		<ContentDoc v-slot="{ doc }">
			<article>
				<h1 id="title">{{ doc.title }}</h1>
				<span>
					<p>Created {{ doc.date }}</p>
					<p v-if="doc.updated">•</p>
					<p v-if="doc.updated">Updated {{ doc.updated }}</p>
				</span>
				<hr />
				<ContentRenderer :value="doc" />
			</article>
		</ContentDoc>
	</main>
</template>
<style scoped>
main{
	margin-block-end: var(--space-l);
}
span {
	display: flex;
	flex-direction: row;
	gap: var(--space-2xs);
}
</style>
