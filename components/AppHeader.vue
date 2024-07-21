<script setup lang="ts">
import { useColorMode, useCycleList } from '@vueuse/core';

const mode = useColorMode({
	emitAuto: true,
});

const { state, next } = useCycleList(['dark', 'light', 'auto'], { initialValue: mode });

watchEffect(() => (mode.value = state.value as any));
</script>
<template>
	<header>
		<h2>Yonatan <span>Ben Knaan</span></h2>
		<div>
			<nav>
				<nuxt-link :to="{ name: 'index' }">Home</nuxt-link>
				<nuxt-link :to="{ name: 'music' }">Music</nuxt-link>
				<nuxt-link :to="{ name: 'design' }">Designs</nuxt-link>
				<nuxt-link :to="{ name: 'post' }">Posts</nuxt-link>
			</nav>
			<button class="icon-btn" @click="next()" :title="`Theme is: ` + state.charAt(0).toUpperCase() + state.slice(1)">
				<i v-if="state === 'auto'">
					<SvgIconBase stroke-color="var(--color-link-main)">
						<IconAuto />
					</SvgIconBase>
				</i>
				<i v-if="state === 'dark'">
					<SvgIconBase stroke-color="var(--color-link-main)">
						<IconDark />
					</SvgIconBase>
				</i>
				<i v-if="state === 'light'">
					<SvgIconBase stroke-color="var(--color-link-main)">
						<IconLight />
					</SvgIconBase>
				</i>
				<!-- <span>{{ (state).charAt(0).toUpperCase() + (state).slice(1) }}</span> -->
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
