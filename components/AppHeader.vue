<script setup lang="ts">
defineProps({
	isSimple: {
		type: Boolean,
		default: false,
	},
});
import { useColorMode, useCycleList } from '@vueuse/core';

// This will add `auto` mode as the default
const mode = useColorMode({
	emitAuto: true,
});

// If you'd like the `auto` to appear as an option add it to the 'useCycleList' array
const { state, next } = useCycleList(['dark', 'light'], { initialValue: mode });


watchEffect(() => (mode.value = state.value as any));
</script>
<template>
	<header>
		<h2>Yonatan <span>Ben Knaan</span></h2>
		<div>
			<nav v-show="isSimple">
				<nuxt-link :to="{ name: 'index' }">Visit WWape</nuxt-link>
			</nav>
			<nav v-show="!isSimple">
				<nuxt-link :to="{ name: 'index' }">Home</nuxt-link>
				<nuxt-link :to="{ name: 'design' }">Designs</nuxt-link>
				<nuxt-link :to="{ name: 'post' }">Posts</nuxt-link>
				<!-- <nuxt-link :to="{ name: 'music' }">Mixed Music</nuxt-link> -->
			</nav>
			<button class="icon-btn" @click="next()" :title="`Theme is: ` + state.charAt(0).toUpperCase() + state.slice(1)">
				<!-- This icon will appear if 'auto' is in the 'useCycleList' array -->
				<i v-if="state === 'auto'">
					<SvgIconBase stroke-color="var(--color-brand-main)">
						<IconAuto />
					</SvgIconBase>
				</i>
				<i v-if="state === 'dark'">
					<SvgIconBase stroke-color="var(--color-brand-main)">
						<IconDark />
					</SvgIconBase>
				</i>
				<i v-if="state === 'light'">
					<SvgIconBase stroke-color="var(--color-brand-main)">
						<IconLight />
					</SvgIconBase>
				</i>
			</button>
		</div>
	</header>
</template>
<style lang="scss" scoped>
i {
	@include flex-center();
}
header {
	height: var(--header-height);
	@include flex-center;
}
span {
	white-space: nowrap;
}
div,
nav {
	@include flex-center;
	gap: var(--space-xs);
}
@media (width <= $display-width-xs) {
	header {
		flex-direction: column-reverse;
		align-items: start;
		gap: var(--space-xs);
		padding-block: var(--space-xs);
		height: unset;
	}
	div {
		width: 100%;
	}
}
@media print {
	header {
		display: none !important;
	}
}
</style>
