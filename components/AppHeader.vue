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
		<!-- <img class="kof-logo" src="/kof-script-24-3d.svg" alt="">	 -->
		<nuxt-link class="home-link" to="/">
			<ScriptKofLogo class="kof-logo" />
		</nuxt-link>
		<div>
			<nav v-show="isSimple">
				<nuxt-link :to="{ name: 'index' }">Visit WWape</nuxt-link>
			</nav>
			<nav v-show="!isSimple">
				<!-- <nuxt-link :to="{ name: 'index' }">Home</nuxt-link> -->
				<!-- <nuxt-link :to="{ name: 'work' }">UX</nuxt-link> -->
				<nuxt-link :to="{ name: 'design' }">Graphics</nuxt-link>
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
.home-link{
	border: none;
	transition: transform 0.25s ease-in-out;
	&:hover {
		transform: scale(1.05) rotate(0.01turn) translate(0.1em, 0.1em);
	}
}
.kof-logo {
	width: var(--space-2xl);
	height: var(--space-2xl);
	margin-inline-end: var(--space-2xs);
	transition: filter 0.35s ease-in-out;
	filter: drop-shadow(0.075em 0.075em 0.2em var(--color-black-dim));
	&:hover {
		filter: drop-shadow(0.05em 0.05em 0.25em var(--color-black-dim));
	}
}
i {
	@include flex-center();
}
header {
	height: var(--header-height);
	@include flex-center;
}
#last-name {
	white-space: nowrap;
}
#header-start {
	display: flex;
	align-items: center;
}
.dot {
	width: var(--space-3xs);
	height: var(--space-3xs);
	border-radius: 50%;
	background-color: var(--color-brand-main);
	margin-inline-end: var(--space-xs);
}
div,
nav {
	@include flex-center;
	gap: var(--space-xs);
}
@media (width <= $display-width-2xs) {
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
