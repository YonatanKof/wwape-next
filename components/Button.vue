<script setup lang="ts">
import type { RouteLocationRaw } from 'vue-router';

const BUTTON_SIZES = ['x-small', 'small', 'medium', 'large'] as const;
type ButtonSize = (typeof BUTTON_SIZES)[number];

const BUTTON_STYLES = ['primary', 'secondary', 'ghost', 'subtle'] as const;
type ButtonStyle = (typeof BUTTON_STYLES)[number];

const props = withDefaults(
	defineProps<{
		buttonSize?: ButtonSize;
		buttonStyle?: ButtonStyle;
		/** Internal route. Objects and paths render NuxtLink. An absolute URL renders an `<a>`. */
		to?: RouteLocationRaw;
		/** External URL, or an internal path when `to` is omitted. */
		href?: string;
		target?: string;
		rel?: string;
		type?: 'button' | 'submit' | 'reset';
		disabled?: boolean;
		/** Square control with no visible text. Requires `aria-label` or `aria-labelledby`. */
		iconOnly?: boolean;
		isIconEnd?: boolean;
		ariaLabel?: string;
	}>(),
	{
		buttonSize: 'small',
		buttonStyle: 'primary',
		type: 'button',
		disabled: false,
		iconOnly: false,
		isIconEnd: false,
	},
);

defineOptions({ inheritAttrs: false });

const attrs = useAttrs();
const slots = useSlots();
const emit = defineEmits<{
	click: [event: MouseEvent];
}>();

// mailto:, tel:, protocol-relative, and any scheme:// URL leave the app.
function isExternalUrl(url: string) {
	return /^(?:[a-z][a-z\d+.-]*:)?\/\//i.test(url) || /^(?:mailto:|tel:)/i.test(url);
}

const externalHref = computed(() => {
	if (typeof props.to === 'string' && isExternalUrl(props.to)) return props.to;
	if ((props.to == null || props.to === '') && props.href && isExternalUrl(props.href)) return props.href;
	return undefined;
});

const internalTo = computed<RouteLocationRaw | undefined>(() => {
	if (externalHref.value) return undefined;
	if (props.to != null && props.to !== '') return props.to;
	if (props.href) return props.href;
	return undefined;
});

const isLink = computed(() => Boolean(externalHref.value || internalTo.value));

// Actions stay <button>. In-app routes use NuxtLink. External URLs use <a>.
// A disabled link is an inert anchor so it cannot be navigated.
// NuxtLink is written in the template, not passed to <component :is>, so the
// compiler resolves it. A dynamic tag rendered a literal <NuxtLink> element.
const rootKind = computed(() => {
	if (!isLink.value) return 'button';
	if (props.disabled || externalHref.value) return 'a';
	return 'nuxt-link';
});

const linkTarget = computed(() => {
	if (!externalHref.value) return props.target;
	return props.target ?? '_blank';
});

const linkRel = computed(() => {
	if (props.rel) return props.rel;
	if (externalHref.value && linkTarget.value === '_blank') return 'noopener noreferrer';
	return undefined;
});

const buttonClasses = computed(() => ({
	button: true,
	[`button-${props.buttonSize}`]: true,
	[`button-${props.buttonStyle}`]: true,
	'button-icon-only': props.iconOnly,
	'has-icon': Boolean(slots.icon),
	'has-icon-end': props.isIconEnd || Boolean(slots['icon-end']),
	'is-disabled': props.disabled,
}));

if (import.meta.dev) {
	watchEffect(() => {
		const labelledBy = attrs['aria-labelledby'];
		if (props.iconOnly && !props.ariaLabel?.trim() && !labelledBy) {
			console.warn('[Button] icon-only buttons need an accessible name. Pass aria-label or aria-labelledby.');
		}
	});
}

// Chrome still folds SVG <desc> into a button's accessible name when the icon
// is only hidden on a wrapper. Strip the svg's name after mount.
const vDecorative = {
	mounted(el: HTMLElement) {
		el.querySelectorAll('svg').forEach((svg) => {
			svg.setAttribute('aria-hidden', 'true');
			svg.setAttribute('focusable', 'false');
			svg.removeAttribute('role');
			svg.removeAttribute('aria-labelledby');
			// <desc> still becomes part of the button name in Chrome.
			svg.querySelectorAll('title, desc').forEach((node) => node.remove());
		});
	},
};

function handleClick(event: MouseEvent) {
	if (props.disabled) {
		event.preventDefault();
		event.stopPropagation();
		return;
	}
	emit('click', event);
}
</script>

<template>
	<button
		v-if="rootKind === 'button'"
		v-bind="attrs"
		:class="buttonClasses"
		:aria-label="ariaLabel || undefined"
		:type="type"
		:disabled="disabled || undefined"
		@click="handleClick"
	>
		<span v-if="$slots.icon" class="button__icon" v-decorative aria-hidden="true" inert>
			<slot name="icon" />
		</span>
		<span v-if="iconOnly" class="button__icon" v-decorative aria-hidden="true" inert>
			<slot />
		</span>
		<span v-else-if="$slots.default" class="button__label">
			<slot />
		</span>
		<span v-if="isIconEnd || $slots['icon-end']" class="button__icon button__icon-end" v-decorative aria-hidden="true" inert>
			<slot name="icon-end" />
		</span>
	</button>
	<a
		v-else-if="rootKind === 'a'"
		v-bind="attrs"
		:class="buttonClasses"
		:aria-label="ariaLabel || undefined"
		:href="disabled ? undefined : externalHref"
		:target="disabled ? undefined : linkTarget"
		:rel="disabled ? undefined : linkRel"
		:aria-disabled="disabled ? 'true' : undefined"
		:tabindex="disabled ? -1 : undefined"
		@click="handleClick"
	>
		<span v-if="$slots.icon" class="button__icon" v-decorative aria-hidden="true" inert>
			<slot name="icon" />
		</span>
		<span v-if="iconOnly" class="button__icon" v-decorative aria-hidden="true" inert>
			<slot />
		</span>
		<span v-else-if="$slots.default" class="button__label">
			<slot />
		</span>
		<span v-if="isIconEnd || $slots['icon-end']" class="button__icon button__icon-end" v-decorative aria-hidden="true" inert>
			<slot name="icon-end" />
		</span>
	</a>
	<NuxtLink
		v-else
		v-bind="attrs"
		:class="buttonClasses"
		:aria-label="ariaLabel || undefined"
		:to="internalTo"
		:target="target"
		:rel="rel"
		@click="handleClick"
	>
		<span v-if="$slots.icon" class="button__icon" v-decorative aria-hidden="true" inert>
			<slot name="icon" />
		</span>
		<span v-if="iconOnly" class="button__icon" v-decorative aria-hidden="true" inert>
			<slot />
		</span>
		<span v-else-if="$slots.default" class="button__label">
			<slot />
		</span>
		<span v-if="isIconEnd || $slots['icon-end']" class="button__icon button__icon-end" v-decorative aria-hidden="true" inert>
			<slot name="icon-end" />
		</span>
	</NuxtLink>
</template>

<style scoped lang="scss">
.button {
	--button-fg: var(--color-brand-main);
	--button-bg: var(--color-sys-invert-highlight);
	--button-edge: var(--color-brand-slight);
	--button-shadow: var(--color-brand-main);
	--button-lift: calc(var(--space-4xs) * -1);

	display: inline-flex;
	flex-direction: row;
	align-items: center;
	justify-content: center;
	gap: var(--space-3xs);
	width: auto;
	max-width: 100%;
	height: max-content;
	margin: 0;
	padding: 0.8em 1em;
	border: unset;
	border-radius: var(--border-radius-xs);
	background-color: var(--button-bg);
	box-shadow: 0 calc(var(--button-lift) * -1) var(--button-shadow), inset 0 0 0 1px var(--button-edge);
	color: var(--button-fg);
	font-family: var(--font-mono);
	font-size: var(--step--1);
	font-style: normal;
	font-variation-settings: 'slnt' 0, 'wght' 550, 'CRSV' 0;
	line-height: 1.2;
	letter-spacing: normal;
	text-align: center;
	text-decoration: none;
	white-space: nowrap;
	cursor: pointer;
	transform: translateY(var(--button-lift));
	transition:
		transform 0.35s ease-in-out,
		box-shadow 0.25s ease-in-out,
		background-color 0.25s ease-in-out,
		color 0.25s ease-in-out;

	&:hover:not(:disabled):not([aria-disabled='true']) {
		transform: translateY(0);
		box-shadow: 0 0 var(--button-shadow), inset 0 0 0 1px var(--button-fg);
	}

	&:active:not(:disabled):not([aria-disabled='true']) {
		transform: translateY(var(--space-4xs));
		box-shadow: inset 0 0 0 1px var(--button-fg);
	}

	// Same halo as the site focus mixin. Kept on top of hover and active shadows.
	&:focus,
	&:focus-visible {
		outline: none !important;
		box-shadow: 0 0 0 var(--space-3xs) var(--color-focus-slight) !important;
	}

	&:disabled,
	&[aria-disabled='true'] {
		cursor: not-allowed;
		opacity: 0.45;
		transform: none;
		box-shadow: inset 0 0 0 1px var(--color-sys-dim);
	}
}

a.button,
a.button:hover,
a.button:focus,
a.button:focus-visible {
	border-bottom: none;
	text-decoration: none;
	font-style: normal;
}

.button__icon,
.button__label {
	display: inline-flex;
	align-items: center;
	justify-content: center;
}

.has-icon-end {
	padding-inline-end: 0.85em;
}

.button-x-small {
	padding: 0.65em 0.85em;
	font-size: var(--step--2);
}

.button-small {
	padding: 0.8em 1em;
	font-size: var(--step--1);
}

.button-medium {
	padding: 0.75em 1.1em;
	font-size: var(--step-0);
}

.button-large {
	padding: 0.7em 1.15em;
	font-size: var(--step-1);
}

.button-secondary {
	--button-fg: var(--color-sys-main);
	--button-bg: var(--color-sys-invert-main);
	--button-edge: var(--color-sys-slight);
	--button-shadow: var(--color-sys-dim);
}

.button-ghost {
	--button-bg: transparent;
	--button-edge: transparent;
	--button-shadow: transparent;
	--button-lift: 0;

	&:hover:not(:disabled):not([aria-disabled='true']) {
		background-color: var(--color-brand-dis);
		box-shadow: none;
		transform: none;
	}

	&:active:not(:disabled):not([aria-disabled='true']) {
		background-color: var(--color-brand-dim);
		box-shadow: none;
		transform: none;
	}
}

.button-subtle {
	--button-fg: var(--color-sys-main);
	--button-bg: var(--color-sys-dis);
	--button-edge: var(--color-sys-dim);
	--button-shadow: transparent;
	--button-lift: 0;

	&:hover:not(:disabled):not([aria-disabled='true']) {
		background-color: var(--color-sys-invert-highlight);
		box-shadow: inset 0 0 0 1px var(--color-sys-slight);
		transform: none;
	}

	&:active:not(:disabled):not([aria-disabled='true']) {
		background-color: var(--color-sys-dim);
		box-shadow: inset 0 0 0 1px var(--color-sys-main);
		transform: none;
	}
}

// Square hit target. Default (small) matches ColorModeSwitch: 1.25rem icon + 0.5em pad.
.button-icon-only {
	padding: 0.5em;
	gap: 0;
	aspect-ratio: 1;
	line-height: 0;

	&.has-icon-end {
		padding-inline-end: 0.5em;
	}
}

.button-x-small.button-icon-only {
	padding: 0.35em;
}

.button-medium.button-icon-only {
	width: 2.75rem;
	height: 2.75rem;
	padding: 0;
	box-sizing: border-box;
}

.button-large.button-icon-only {
	width: 3.25rem;
	height: 3.25rem;
	padding: 0;
	box-sizing: border-box;
}

@media (prefers-reduced-motion: reduce) {
	.button {
		transition: none;
	}
}
</style>
