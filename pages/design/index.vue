<template>
    <main>
        <section id="main" class="!pt-0">
            <ContentQuery
                path="/design"
                :only="['title', 'date', '_path', 'cover_image']"
                :sort="{
                    date: -1
                }"
                :limit="designCountLimit"
                v-slot="{ data }"
            >
                <ItemList :design-data="data" />
            </ContentQuery>
            <Pagination
                v-if="data > 1"
                class="mt-8"
                :currentPage="1"
                :totalPages="data"
                :nextPage="data > 1"
                baseUrl="/design"
                pageUrl="/design/page/"
            />
        </section>
    </main>
</template>

<script setup>
// Find the number of blogs present
const designCountLimit = 16;
const { data } = await useAsyncData(`content-/design`, async () => {
    const _designs = await queryContent('/design').only('title').find()
    return Math.ceil(_designs.length / designCountLimit);
});
</script>
