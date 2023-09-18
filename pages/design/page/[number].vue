<template>
    <main>
        <!-- Query for the given blog page number -->
        <ContentQuery
            path="/design"
            :only="['title', 'date', '_path', 'cover_image']"
            :sort="{
                date: -1
            }"
            :skip="designCountLimit * (getPageNumber() - 1)"
            :limit="designCountLimit"
        >
            <!-- In case it is found -->
            <template v-slot="{ data }">
                <section id="main" class="!pt-0">
                    <ItemList :design-data="data" has-columns />
                    <ContentQuery
                        path="/design"
                        :only="['title', 'date', '_path', 'cover_image']"
                    >
                        <template v-slot="{ data }">
                            <Pagination
                                v-if="getPageLimit(data.length) > 1"
                                class="mt-8"
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
                <section id="main" class="!pt-0">
                    <ItemList :data="[]" message="There are no posts in this page, maybe try searching on another one."/>
                </section>
            </template>
        </ContentQuery>
    </main>
</template>

<script setup>
// Fetching data
const { path, params } = useRoute();
const designCountLimit = 4;

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
</script> 
