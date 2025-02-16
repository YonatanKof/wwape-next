<script setup>
const props = defineProps({
    file: {
        type: String,
        required: true
    },
    title: {
        type: String,
        default: "The Robot Show Podcast"
    },
    details: {
        type: String,
        default: "Why read when you can listen? This <i>NotebookLM</i> show covers the article with an energetic, over-the-top, nauseating North American speech."
    }
})
</script>

<template>
    <figure class="audio-player">
        <figcaption class="audio-player__info">
            <h4 class="audio-player__title">
                {{ title }}
            </h4>
            <p class="audio-player__details" v-html="details" >
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
    display: flex;
    flex-direction: column;
    gap: 0;
    margin-block: var(--space-m);
    background-color: var(--color-sys-invert-highlight-slight);
    padding: var(--space-s);
    border-radius: var(--border-radius-xs);
    border: 1px solid var(--color-sys-dim);
}

.audio-player__title,
.audio-player__details {
    max-width: 65ch;
}

.audio-player__title {
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