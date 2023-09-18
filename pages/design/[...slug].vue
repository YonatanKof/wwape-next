<template>
	<main class="blog-post-text">
		<ContentDoc>
			<template v-slot="{ doc }">
				<!-- Content -->
				<section id="main" class="!pt-0 relative grid grid-cols-10 gap-8 lg:gap-12">
					<article class="prose col-span-full md:col-span-7 relative">
						<!-- Blog content -->
						<ContentRenderer :value="doc" class="blog-content blog-post-text" />
					</article>

				</section>
			
			</template>
			<!-- Error in case not found -->
			<template #not-found>
				<!-- <sectionsError /> -->
			</template>
		</ContentDoc>
	</main>
</template>