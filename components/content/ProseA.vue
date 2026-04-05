<template>
	<NuxtLink @click="trigger([{ duration: 25 }], { intensity: 1 })" :href="props.href" :target="props.target">
		<slot />
	</NuxtLink>
</template>

<script setup lang="ts">
import type { PropType } from 'vue';
import { useWebHaptics } from 'web-haptics/vue';
const { trigger } = useWebHaptics();

const props = defineProps({
	href: {
		type: String,
		default: '',
	},
	target: {
		type: String as PropType<'_blank' | '_parent' | '_self' | '_top' | (string & object) | null | undefined>,
		default: undefined,
		required: false,
	},
});
</script>
