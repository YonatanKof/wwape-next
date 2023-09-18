<!-- This is a single design -->
<template>
	<main>
		<ContentDoc v-slot="{ doc }">
			<article>
				<h1>{{ doc.title }}</h1>
				<h4>Published on {{ doc.date }} by {{ doc.author_name }}</h4>
				<ContentRenderer :value="doc" />
			</article>
		</ContentDoc>
	</main>
</template>
