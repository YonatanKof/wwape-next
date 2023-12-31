<template>
    <main>
        <IntroText title="Art & Design" text="Please enjoy some art, design, illustration, motion graphics created throughout the years"/>
        <!-- Query for the given blog page number -->
        <ContentQuery
            path="/design"
            :only="['title', 'date', '_path', 'cover_image', 'cover_image_thumbhash', 'cover_image_height', 'image_alt', 'description']"
            :sort="{
                date: -1
            }"
            :skip="designCountLimit * (getPageNumber() - 1)"
            :limit="designCountLimit"
        >
            <!-- In case it is found -->
            <template v-slot="{ data }">
                <section id="main" class="!pt-0">
                    <ItemList :design-data="data" />
                    <ContentQuery
                        path="/design"
                        :only="['title', 'date', '_path', 'cover_image', 'cover_image_thumbhash', 'cover_image_height', 'image_alt', 'description']"
                    >
                        <template v-slot="{ data }">
                            <Pagination
                                v-if="getPageLimit(data.length) > 1"
                                :currentPage="getPageNumber()"
                                :totalPages="getPageLimit(data.length)"
                                :nextPage="getPageNumber() < getPageLimit(data.length)"
                                baseUrl="/design"
                                pageUrl="/design/page/"
                            />
                        </template>
                        <template #not-found>
                            <!-- Nothing -->
                        </template>
                    </ContentQuery>
                </section>
            </template>
            <!-- In case not found -->
            <template #not-found>
                <!-- Show hero and message -->
                <section id="main">
                    <ItemList :data="[]" message="There are no posts in this page, maybe try searching on another one."/>
                </section>
            </template>
        </ContentQuery>
    </main>
</template>

<script setup>
// Fetching data
const { path, params } = useRoute();
const designCountLimit = 20;

const getPageLimit = (totalPosts) => {
    return Math.ceil(totalPosts / designCountLimit);
};

const getPageNumber = () => {
    return Number(params.number);
};

// Attempt to get the number
const router = useRouter();
let pageNo;
try {
    pageNo = getPageNumber();
    if (isNaN(pageNo) || pageNo <= 0) {
        router.replace('/design/');
    }
} catch (err) {
    console.error(err);
    router.replace('/design/');
}

const config = useRuntimeConfig();
const pageDesc = `Amazing designs by ${config.public.siteOwnerName}`;
const pageImg = '/images/designs-social.jpg';
const pageAlt = 'Social cover for this site designs page';
useHead({
	title: 'Designs',
});
useSeoMeta({
	ogType: 'website',
	description: () => pageDesc,
	ogDescription: () => pageDesc,
	twitterDescription: () => pageDesc,
	image: pageImg,
	ogImage: pageImg,
	twitterImage: pageImg,
	imageAlt: pageAlt,
	ogImageAlt: pageAlt,
	twitterImageAlt: pageAlt,
	twitterCard: 'summary_large_image',
	twitterSite: '@yonatankof',
});
</script> 
