<script lang="ts" setup>
const config = useRuntimeConfig();

const props = defineProps({
	src: {
		type: String,
		required: true,
	},
	aspectRatio: {
		type: String,
		default: '16/10',
	},
	title: {
		type: String,
		default: '',
	},
	embedHost: {
		type: String,
		default: '',
	},
});

const embedHost = computed(() => {
	if (props.embedHost) {
		return props.embedHost;
	}

	const siteName = config.public.siteName;
	if (siteName && siteName !== 'SiteNameHere') {
		return siteName.toLowerCase().replace(/\s+/g, '-');
	}

	return 'wwape';
});

function withEmbedHost(url: string) {
	const parsed = new URL(url);

	if (!parsed.searchParams.has('embed-host')) {
		parsed.searchParams.set('embed-host', embedHost.value);
	}

	return parsed.toString();
}

const embedUrl = computed(() => {
	const { src } = props;

	if (src.startsWith('https://embed.figma.com/')) {
		return withEmbedHost(src);
	}

	if (/figma\.com\//.test(src)) {
		return withEmbedHost(src.replace(/https?:\/\/(www\.)?figma\.com/, 'https://embed.figma.com'));
	}

	return withEmbedHost(`https://embed.figma.com/${src.replace(/^\//, '')}`);
});

// Prevent Firefox from auto-scrolling to an HTML embedded iframe
const displayIt = ref('none');
onMounted(() => {
	setTimeout(() => {
		displayIt.value = 'block';
	}, 2000);
});
</script>

<template>
	<div class="figma-slides">
		<iframe
			class="figma-slides__iframe"
			loading="lazy"
			:src="embedUrl"
			:title="title || 'Figma Slides'"
			allowfullscreen
		/>
	</div>
</template>

<style scoped>
.figma-slides {
	width: 100%;
	margin-block: var(--space-m);
	aspect-ratio: v-bind(aspectRatio);
	overflow: hidden;
	border-radius: var(--border-radius-xs);
	background-color: var(--color-sys-dis);
}

.figma-slides__iframe {
	display: v-bind(displayIt);
	width: 100%;
	height: 100%;
	border: 0;
}
</style>
