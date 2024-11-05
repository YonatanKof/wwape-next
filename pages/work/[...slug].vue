<!-- This is a single post -->
<script setup>
const { path } = useRoute();
const cleanPath = path.replace(/\/+$/, '');

const { data, error } = await useAsyncData(cleanPath, async () => {
	// Remove a trailing slash in case the browser adds it, it might break the routing
	// fetch document where the document path matches with the current route
	let article = queryContent('/work').where({ _path: cleanPath }).findOne();
	return {
		article: await article,
	};
});

const config = useRuntimeConfig();

// Set the meta
const dynamicUrl = config.public.baseUrl;
const image = dynamicUrl + data.value?.article?.social_image || '/images/index-social.jpg';
const cleanDescription = data.value?.article?.description.replace(/<[^>]*>/g, '');

const { $formatDate } = useNuxtApp();

const nuxtApp = useNuxtApp();
nuxtApp.$pageMetaTags({
	metaTitle: `Product design by ${config.public.siteOwnerName} of the ${config.public.siteName}`,
	metaTitleData: data.value?.article?.title,
	metaDesc: cleanDescription,
	metaImg: image,
	metaImgAlt: data.value?.article?.image_alt,
	metaOgType: 'article',
	metaPublishedTime: data.value?.article?.date.split('T')[0],
	metaModifiedTime: data.value?.article?.updated.split('T')[0],
});

const handleAnchorClick = (event) => {
  event.preventDefault()
  const element = document.querySelectorAll('a[href^="#"]')
  
  if (element) {
    element.classList.add('js-scroll-fix')
    element.scrollIntoView({ behavior: 'smooth' })
    
    setTimeout(() => {
      element.classList.remove('js-scroll-fix')
    }, 1000)
  }
}
</script>

<template>
	<main>
		<ContentDoc>
			<template v-slot="{ doc }">
				<section id="article-header">
					<div id="article-info">
						<h1 id="title">{{ doc.title }}</h1>
						<div class="meta-data">
							<div><h3 id="sub-title">{{ doc.description }}</h3>
							<span class="info">
								<p>Posted {{ $formatDate(doc.date) }}</p>
								<p v-if="doc.updated">•</p>
								<p v-if="doc.updated">Updated {{ $formatDate(doc.updated) }}</p>
								<span class="path" v-if="doc.role"></span>
								<div v-if="doc.role" class="role">
									<p>Role:</p>
									<template v-for="(role, index) in doc.role" :key="index">
										<i>{{ role }}</i>
										<p v-if="index < doc.role.length - 1">•</p>
									</template>
								</div>
							</span></div>
							<span class="responsibilities">
								<!-- <h6>Responsibilities:</h6> -->
								<code v-for="item in doc.responsibilities">{{ item }}</code>
							</span>
						</div>
					</div>
				</section>
				<span class="content-renderer"><ContentRenderer :value="doc" /></span>
			</template>
			<template #not-found>
				<ErrorMsg />
			</template>
		</ContentDoc>
	</main>
</template>

<style lang="scss" scoped>
main {
	margin-block-start: var(--header-plus-height);
}
#article-header {
	@include display-width($width: $display-width-md);
}
section {
	display: grid;
	height: min-content;
}
#title {
	margin-block-end: var(--space-s);
	font-size: var(--step-7);
	// font-variation-settings: 'INFM' 50, 'wght' 800;
}
#sub-title {
	// font-family: var(--font-body);
	font-size: var(--step-1);
	// font-variation-settings: unset;
	line-height: 1.5;
	max-width: 50ch;
	margin-block-end: var(--space-2xs);
}

article {
	margin-block-end: var(--space-s);
}
.meta-data {
	display: grid;
	grid-template-columns: 3fr 1fr;
	gap: var(--space-xs);
	align-items: center;
}
.info {
	display: flex;
	flex-direction: row;
	gap: var(--space-xs);
	align-items: center;
}
.responsibilities {
	display: flex;
	flex-direction: column;
	gap: var(--space-4xs);
	code {
		margin-block-end: unset;
	}
}

.info > p,
.role > p,
.role > i {
	color: var(--color-sys-slight);
	font-size: var(--step--1);
	margin: 0;
}
.role > i {
	color: var(--color-success-main);
}
.path {
	width: 1px;
	height: var(--space-s);
	background-color: var(--color-sys-dim);
}
#error {
	height: 100%;
}
#error,
#link-buttons {
	@include flex-center($flex-direction: column, $justify-content: center, $gap: var(--space-2xs));
}
hr:last-of-type {
	margin-block-end: var(--space-s);
}
.role {
	code {
		margin: unset;
	}
	display: flex;
	flex-direction: row;
	gap: var(--space-3xs);
	align-items: center;
	margin: unset;
}
</style>
