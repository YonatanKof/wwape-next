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
    <figure class="audio-player">
        <figcaption class="audio-player__info">
            <h4 class="audio-player__title">
                {{ title }}
            </h4>
            <p class="audio-player__details">
                {{ details }}
            </p>
        </figcaption>
        <audio 
            controls 
            :src="file"
            :aria-label="`Audio player for ${title}`"
            class="audio-player__controls"
        ></audio>
        <a 
            :href="file" 
            :download="title"
            class="audio-player__download"
            :aria-label="`Download ${title} audio file`"
        >
            <span class="audio-player__download-text">Download audio</span>
        </a>
    </figure>
</template>

<style scoped>
.audio-player {
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
    margin-block-start: 0;
}

.audio-player__details {
    font-size: var(--step-0);
}

.audio-player__controls {
    width: 100%;
    border-radius: var(--border-radius-xs);
    margin-block-end: var(--space-2xs);
}

.audio-player__download {
    width: max-content;
    font-size: var(--step--1);
}
</style>