<script setup>
const nuxtApp = useNuxtApp();
nuxtApp.$pageMetaTags({
	metaTitle: 'Yonatan Ben Knaan | WWApe',
	metaTitleData: 'Buttons',
	metaDesc: 'Button component playground for WWApe. Variants, sizes, states, links, and icon buttons.',
});
useSeoMeta({
	robots: 'noindex, nofollow',
});
</script>

<template>
	<main class="playground">
		<header class="intro">
			<h1>Buttons</h1>
			<p class="note">
				Primary is the button already used across WWApe. Secondary, ghost, and subtle are the quieter steps beside it.
				This page is not in the navigation or the sitemap.
			</p>
			<div class="mode-row">
				<p>Color mode</p>
				<ColorModeSwitch />
			</div>
		</header>

		<section class="compare" aria-label="Light and dark">
			<div class="surface surface-light">
				<h2>Light</h2>
				<div class="row">
					<Button>Primary</Button>
					<Button button-style="secondary">Secondary</Button>
					<Button button-style="ghost">Ghost</Button>
					<Button button-style="subtle">Subtle</Button>
					<Button disabled>Disabled</Button>
					<IconButton aria-label="Light mode ideas">
						<SvgIconBase stroke-color="currentColor"><IconLight /></SvgIconBase>
					</IconButton>
				</div>
			</div>
			<div class="surface surface-dark">
				<h2>Dark</h2>
				<div class="row">
					<Button>Primary</Button>
					<Button button-style="secondary">Secondary</Button>
					<Button button-style="ghost">Ghost</Button>
					<Button button-style="subtle">Subtle</Button>
					<Button disabled>Disabled</Button>
					<IconButton aria-label="Dark mode ideas">
						<SvgIconBase stroke-color="currentColor"><IconDark /></SvgIconBase>
					</IconButton>
				</div>
			</div>
		</section>

		<section>
			<h2>Variants</h2>
			<div class="row">
				<Button>Primary</Button>
				<Button button-style="secondary">Secondary</Button>
				<Button button-style="ghost">Ghost</Button>
				<Button button-style="subtle">Subtle</Button>
			</div>
		</section>

		<section>
			<h2>Sizes</h2>
			<div class="row">
				<Button button-size="x-small">X-small</Button>
				<Button button-size="small">Small</Button>
				<Button button-size="medium">Medium</Button>
				<Button button-size="large">Large</Button>
			</div>
		</section>

		<section id="states">
			<h2>States</h2>
			<p class="note">Hover and press the live buttons. The marked samples hold hover, active, and focus still for a look at the chrome.</p>
			<div class="row">
				<Button>Default</Button>
				<Button class="live-hover">Hover me</Button>
				<span class="is-hover"><Button>Hover</Button></span>
				<span class="is-active"><Button>Active</Button></span>
				<span class="is-focus"><Button>Focus</Button></span>
				<Button disabled>Disabled</Button>
				<Button button-style="secondary" disabled>Disabled secondary</Button>
				<Button id="keyboard-target">Keyboard target</Button>
			</div>
		</section>

		<section>
			<h2>Icons</h2>
			<div class="row">
				<Button>
					<template #icon>
						<SvgIconBase stroke-color="currentColor"><IconLight /></SvgIconBase>
					</template>
					Leading
				</Button>
				<Button is-icon-end>
					<template #icon-end>
						<SvgIconBase stroke-color="currentColor"><IconDark /></SvgIconBase>
					</template>
					Trailing
				</Button>
				<Button button-style="secondary">
					<template #icon>
						<SvgIconBase stroke-color="currentColor"><IconAuto /></SvgIconBase>
					</template>
					<template #icon-end>
						<SvgIconBase stroke-color="currentColor"><IconDark /></SvgIconBase>
					</template>
					Both
				</Button>
				<Button button-style="ghost">
					<template #icon>
						<SvgIconBase stroke-color="currentColor"><IconLight /></SvgIconBase>
					</template>
					Ghost
				</Button>
			</div>
		</section>

		<section>
			<h2>Button and link</h2>
			<p class="note">An action is a button. An in-app path is a NuxtLink. An external URL is an anchor with target and rel.</p>
			<div class="row">
				<Button>Button</Button>
				<Button to="/design">Designs</Button>
				<Button href="https://github.com/YonatanKof/wwape-next">GitHub</Button>
				<Button to="/work" disabled>Disabled route</Button>
				<Button href="https://wwape.com" disabled>Disabled link</Button>
			</div>
		</section>

		<section>
			<h2>Icon only</h2>
			<p class="note">Each control is square and named with aria-label. The caption next to it is the name a screen reader gets.</p>
			<div class="icon-grid">
				<figure>
					<IconButton aria-label="Primary ideas">
						<SvgIconBase stroke-color="currentColor"><IconLight /></SvgIconBase>
					</IconButton>
					<figcaption>Primary ideas</figcaption>
				</figure>
				<figure>
					<IconButton aria-label="Secondary ideas" button-style="secondary">
						<SvgIconBase stroke-color="currentColor"><IconDark /></SvgIconBase>
					</IconButton>
					<figcaption>Secondary ideas</figcaption>
				</figure>
				<figure>
					<IconButton aria-label="Ghost ideas" button-style="ghost">
						<SvgIconBase stroke-color="currentColor"><IconAuto /></SvgIconBase>
					</IconButton>
					<figcaption>Ghost ideas</figcaption>
				</figure>
				<figure>
					<IconButton aria-label="Subtle ideas" button-style="subtle">
						<SvgIconBase stroke-color="currentColor"><IconDark /></SvgIconBase>
					</IconButton>
					<figcaption>Subtle ideas</figcaption>
				</figure>
				<figure>
					<IconButton aria-label="Small ideas" button-size="x-small">
						<SvgIconBase stroke-color="currentColor"><IconLight /></SvgIconBase>
					</IconButton>
					<figcaption>X-small</figcaption>
				</figure>
				<figure>
					<IconButton aria-label="Medium ideas" button-size="medium">
						<SvgIconBase stroke-color="currentColor"><IconLight /></SvgIconBase>
					</IconButton>
					<figcaption>Medium</figcaption>
				</figure>
				<figure>
					<IconButton aria-label="Large ideas" button-size="large">
						<SvgIconBase stroke-color="currentColor"><IconLight /></SvgIconBase>
					</IconButton>
					<figcaption>Large</figcaption>
				</figure>
				<figure>
					<IconButton aria-label="Disabled ideas" disabled>
						<SvgIconBase stroke-color="currentColor"><IconDark /></SvgIconBase>
					</IconButton>
					<figcaption>Disabled</figcaption>
				</figure>
				<figure>
					<IconButton aria-label="Designs" to="/design">
						<SvgIconBase stroke-color="currentColor"><IconAuto /></SvgIconBase>
					</IconButton>
					<figcaption>Link</figcaption>
				</figure>
			</div>
		</section>
	</main>
</template>

<style scoped lang="scss">
.playground {
	display: flex;
	flex-direction: column;
	gap: var(--space-l);
	padding-block: var(--space-s) var(--space-3xl);
}

.intro,
section {
	display: flex;
	flex-direction: column;
	gap: var(--space-xs);
}

h1 {
	font-size: var(--step-4);
	margin: 0;
}

h2 {
	font-size: var(--step-2);
	margin: 0;
}

.note {
	max-width: 62ch;
	margin: 0;
	color: var(--color-sys-slight);
	font-size: var(--step--1);
}

.mode-row,
.row {
	display: flex;
	flex-wrap: wrap;
	align-items: center;
	gap: var(--space-xs);
}

.mode-row p {
	margin: 0;
	font-family: var(--font-mono);
	font-size: var(--step--1);
}

.compare {
	display: grid;
	grid-template-columns: 1fr;
	gap: var(--space-s);
}

.surface {
	display: flex;
	flex-direction: column;
	gap: var(--space-s);
	padding: var(--space-s);
	border-radius: var(--border-radius-sm);
	background-color: var(--color-sys-invert-main);
	color: var(--color-sys-main);
	box-shadow: inset 0 0 0 1px var(--color-sys-dis);
}

.icon-grid {
	display: flex;
	flex-wrap: wrap;
	gap: var(--space-s);
}

figure {
	display: flex;
	flex-direction: column;
	align-items: center;
	gap: var(--space-3xs);
	margin: 0;
}

figcaption {
	font-family: var(--font-mono);
	font-size: var(--step--2);
	color: var(--color-sys-slight);
}

.is-hover :deep(.button) {
	transform: translateY(0) !important;
	box-shadow: 0 0 var(--color-brand-main), inset 0 0 0 1px var(--color-brand-main) !important;
}

.is-active :deep(.button) {
	transform: translateY(var(--space-4xs)) !important;
	box-shadow: inset 0 0 0 1px var(--color-brand-main) !important;
}

.is-focus :deep(.button) {
	box-shadow: 0 0 0 var(--space-3xs) var(--color-focus-slight) !important;
}

@mixin tone-derived {
	--color-sys-slight: color-mix(in hsl, var(--color-sys-main) 80%, transparent);
	--color-sys-dim: color-mix(in hsl, var(--color-sys-main) 40%, transparent);
	--color-sys-dis: color-mix(in hsl, var(--color-sys-main) 10%, transparent);
	--color-sys-none: color-mix(in hsl, var(--color-sys-main) 0%, transparent);
	--color-sys-invert-slight: color-mix(in hsl, var(--color-sys-invert-main) 80%, transparent);
	--color-sys-invert-dim: color-mix(in hsl, var(--color-sys-invert-main) 40%, transparent);
	--color-sys-invert-dis: color-mix(in hsl, var(--color-sys-invert-main) 10%, transparent);
	--color-sys-invert-none: color-mix(in hsl, var(--color-sys-invert-main) 0%, transparent);
	--color-brand-slight: color-mix(in hsl, var(--color-brand-main) 80%, transparent);
	--color-brand-dim: color-mix(in hsl, var(--color-brand-main) 40%, transparent);
	--color-brand-dis: color-mix(in hsl, var(--color-brand-main) 10%, transparent);
	--color-brand-hardly: color-mix(in hsl, var(--color-brand-main) 5%, transparent);
	--color-brand-none: color-mix(in hsl, var(--color-brand-main) 0%, transparent);
	--color-focus-slight: color-mix(in hsl, var(--color-focus-main) 80%, transparent);
	--color-focus-dim: color-mix(in hsl, var(--color-focus-main) 40%, transparent);
	--color-focus-dis: color-mix(in hsl, var(--color-focus-main) 10%, transparent);
	--color-focus-none: color-mix(in hsl, var(--color-focus-main) 0%, transparent);
	background-color: var(--color-sys-invert-main);
	color: var(--color-sys-main);
}

.surface-light {
	--color-sys-main: hsl(180, 25%, 15%);
	--color-sys-invert-main: antiquewhite;
	--color-sys-invert-highlight: color-mix(in hsl, var(--color-sys-invert-main) 0%, white);
	--color-brand-main: hsl(280, 100%, 40%);
	--color-focus-main: hsl(200, 100%, 30%);
	--color-caution-main: hsl(0, 100%, 40%);
	--color-success-main: hsl(126, 100%, 25%);
	--color-shadow: var(--color-black-hardly);
	@include tone-derived;
	--color-sys-invert-highlight-slight: color-mix(in hsl, var(--color-sys-invert-highlight) 65%, transparent);
}

.surface-dark {
	--color-sys-main: hsl(34, 78%, 91%);
	--color-sys-invert-main: hsl(34, 25%, 15%);
	--color-sys-invert-highlight: color-mix(in hsl, var(--color-sys-invert-main) 55%, black);
	--color-brand-main: hsl(280, 100%, 80%);
	--color-focus-main: hsl(200, 100%, 40%);
	--color-caution-main: hsl(0, 100%, 60%);
	--color-success-main: hsl(126, 100%, 65%);
	--color-shadow: var(--color-black-dim);
	@include tone-derived;
	--color-sys-invert-highlight: color-mix(in hsl, var(--color-sys-invert-main) 55%, black);
	--color-sys-invert-highlight-slight: color-mix(in hsl, var(--color-sys-invert-highlight) 65%, transparent);
}

@media (width >= $display-width-sm) {
	.compare {
		grid-template-columns: 1fr 1fr;
	}
}

@media (width <= $display-width-2xs) {
	h1 {
		font-size: var(--step-3);
	}
}
</style>

<style lang="scss">
/* Unscoped on purpose. A scoped :global() rule compiled to `html.dark-mode`
   and recolored the whole document. This selector only paints the playground. */
html.dark-mode .playground {
	--color-sys-main: hsl(34, 78%, 91%);
	--color-sys-slight: color-mix(in hsl, var(--color-sys-main) 80%, transparent);
	--color-sys-dim: color-mix(in hsl, var(--color-sys-main) 40%, transparent);
	--color-sys-dis: color-mix(in hsl, var(--color-sys-main) 10%, transparent);
	--color-sys-none: color-mix(in hsl, var(--color-sys-main) 0%, transparent);
	--color-sys-invert-main: hsl(34, 25%, 15%);
	--color-sys-invert-highlight: color-mix(in hsl, var(--color-sys-invert-main) 55%, black);
	--color-sys-invert-highlight-slight: color-mix(in hsl, var(--color-sys-invert-highlight) 65%, transparent);
	--color-sys-invert-slight: color-mix(in hsl, var(--color-sys-invert-main) 80%, transparent);
	--color-sys-invert-dim: color-mix(in hsl, var(--color-sys-invert-main) 40%, transparent);
	--color-sys-invert-dis: color-mix(in hsl, var(--color-sys-invert-main) 10%, transparent);
	--color-sys-invert-none: color-mix(in hsl, var(--color-sys-invert-main) 0%, transparent);
	--color-brand-main: hsl(280, 100%, 80%);
	--color-brand-slight: color-mix(in hsl, var(--color-brand-main) 80%, transparent);
	--color-brand-dim: color-mix(in hsl, var(--color-brand-main) 40%, transparent);
	--color-brand-dis: color-mix(in hsl, var(--color-brand-main) 10%, transparent);
	--color-brand-hardly: color-mix(in hsl, var(--color-brand-main) 5%, transparent);
	--color-brand-none: color-mix(in hsl, var(--color-brand-main) 0%, transparent);
	--color-focus-main: hsl(200, 100%, 40%);
	--color-focus-slight: color-mix(in hsl, var(--color-focus-main) 80%, transparent);
	--color-focus-dim: color-mix(in hsl, var(--color-focus-main) 40%, transparent);
	--color-focus-dis: color-mix(in hsl, var(--color-focus-main) 10%, transparent);
	--color-focus-none: color-mix(in hsl, var(--color-focus-main) 0%, transparent);
	--color-caution-main: hsl(0, 100%, 60%);
	--color-success-main: hsl(126, 100%, 65%);
	--color-shadow: var(--color-black-dim);
	background-color: var(--color-sys-invert-main);
	color: var(--color-sys-main);
}
</style>
