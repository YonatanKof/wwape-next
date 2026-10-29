
<script setup>
// Fetching data
const { params } = useRoute();
const designCountLimit = 16;

const getPageLimit = (totalPosts) => {
    return Math.ceil(totalPosts / designCountLimit);
};

const getPageNumber = () => {
    return Number(params.number);
};

const pageNo = getPageNumber();
if (!Number.isInteger(pageNo) || pageNo < 1) throwPageNotFound();

const { data: pageItems } = await useContentData(`design-page-items-${pageNo}`, () =>
	queryContent('/design')
		.only(['title'])
		.sort({ date: -1 })
		.skip(designCountLimit * (pageNo - 1))
		.limit(designCountLimit)
		.find(),
);
if (!pageItems.value?.length) throwPageNotFound();

const nuxtApp = useNuxtApp();
nuxtApp.$pageMetaTags({
	metaTitle: `Design & illustration – Page ${pageNo} | WWApe`,
	metaDesc: 'Browse a collection of personal design projects and illustrations that explore creativity in everyday life. Simple, expressive, and visually engaging pieces that reflect a unique artistic style',
	metaImg: '/images/designs-social.jpg',
	metaImgAlt: 'Social cover for this site design page',
});
</script> 

<template>
    <main>
        <IntroText title="Art & Design" text="Please explore some of my artwork, design projects, illustrations, motion graphics, and collages, created over the years"/>
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
                <MissingPage />
            </template>
        </ContentQuery>
    </main>
</template>