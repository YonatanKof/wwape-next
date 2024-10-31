<!-- This is a single post -->
<script setup>
const { path } = useRoute();
const { toc } = useContent();
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
const show = ref(false);

function confirm() {
	show.value = false;
}
</script>

<template>
	<main>
		<ContentDoc>
			<template v-slot="{ doc }">
				<button @click="show = true">Open Modal</button>
				<TableOfContent v-model="show" @confirm="() => confirm()" :tocData="toc" />
				<main>
					<section id="article-header">
						<div id="article-info">
							<h1 id="title">{{ doc.title }}</h1>
							<h3 id="sub-title">{{ doc.description }}</h3>
							<span class="meta-data">
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
							</span>
						</div>
					</section>
					<span class="content-renderer"><ContentRenderer :value="doc" /></span>
				</main>
			</template>
			<template #not-found>
				<ErrorMsg />
			</template>
		</ContentDoc>
	</main>
</template>

<style lang="scss" scoped>
main {
	max-width: var(--display-width-lg);
	margin-inline: auto;
}
h1 {
	margin-block-end: var(--space-s);
}
section {
	display: grid;
	height: min-content;
}
#sub-title {
	font-family: var(--font-body);
	font-size: var(--step-2);
	font-variation-settings: unset;
	line-height: 1.5;
	max-width: 50ch;
	margin-block-end: var(--space-2xs);
}

article {
	margin-block-end: var(--space-s);
}
main {
	margin-block-end: var(--space-l);
}
.meta-data {
	display: flex;
	flex-direction: row;
	gap: var(--space-xs);
	align-items: center;
}

.meta-data > p,
.role > p,
.role > i {
	color: var(--color-sys-slight);
	font-size: var(--step--2);
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

button {
	position: fixed;
	inset-block-end: calc(var(--space-s) + var(--space-2xs));
	inset-inline-end: calc(var(--space-s) + var(--space-2xs));
	max-width: calc(var(--space-5xl) * 2 - var(--space-2xs) * 2);
	z-index: 100;
	width: 100%;
}
</style>
