<script setup>
const props = defineProps({
    file: {
        type: String,
        required: true
    },
    title: {
        type: String,
        required: true
    },
    details: {
        type: String,
        required: true
    }
})
</script>

<template>
    <figure>
        <figcaption>
            <h4 class="title">
                {{ title }}
            </h4>
            <p>
                {{ details }}
            </p>
        </figcaption>
        <audio controls :src="file"></audio>
        <a :href="file"> Download audio </a>
    </figure>
</template>

<style scoped>
figure {
    max-width: 65ch;
    display: flex;
    flex-direction: column;
    gap: 0;
    margin-block-end: var(--space-m);
    background-color: var(--color-black-dis);
    padding: var(--space-s);
    border-radius: var(--border-radius-xs);
}

.title {
    margin-block-start: unset;
}
p {
    font-size: var(--step-0);
}
audio {
    width: 100%;
    border-radius: var(--border-radius-xs);
    margin-block-end: var(--space-2xs);
}

a {
    width: max-content;
    font-size: var(--step--1);
}
</style>