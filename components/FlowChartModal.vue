<script setup lang="ts">
import { useId } from 'vue';
import { VueFinalModal } from 'vue-final-modal';

type FlowchartSymbol = {
	name: string;
	shape: string;
	description?: string;
	bigImage: string;
};

// Same cutoff as the drawer layout in this file (`$display-width-2xs`).
const DRAWER_MEDIA_QUERY = '(max-width: 426px)';
const SWIPE_LOCK_PX = 12;
const SWIPE_COMMIT_PX = 48;

const props = withDefaults(
	defineProps<{
		symbols?: FlowchartSymbol[];
		startIndex?: number;
	}>(),
	{
		symbols: () => [],
		startIndex: 0,
	}
);

const emit = defineEmits<{
	(e: 'confirm'): void;
}>();

const uid = useId();
const titleId = `flowchart-symbol-title-${uid}`;
const shapeId = `flowchart-symbol-shape-${uid}`;
const descriptionId = `flowchart-symbol-description-${uid}`;
const panelId = `flowchart-symbol-panel-${uid}`;

const panelEl = ref<HTMLElement | null>(null);
const index = ref(0);
const liveMessage = ref('');

const total = computed(() => props.symbols.length);
const canNavigate = computed(() => total.value > 1);
const current = computed(() => props.symbols[index.value]);
const describedBy = computed(() => (current.value?.description ? `${shapeId} ${descriptionId}` : shapeId));
const positionLabel = computed(() => (total.value ? `${index.value + 1} of ${total.value}` : ''));

function normalizeIndex(value: number) {
	const length = props.symbols.length;
	if (length === 0) return 0;
	return ((value % length) + length) % length;
}

function resetToStart() {
	index.value = normalizeIndex(props.startIndex);
	liveMessage.value = '';
}

function scrollPanelToStart() {
	const scroller = panelEl.value?.closest('.vfm__content');
	if (scroller instanceof HTMLElement) scroller.scrollTop = 0;
}

function go(delta: number) {
	if (!canNavigate.value || !current.value) return;
	index.value = normalizeIndex(index.value + delta);
	const item = props.symbols[index.value];
	liveMessage.value = `${item.name}, ${item.shape}. Symbol ${index.value + 1} of ${total.value}.`;
	nextTick(scrollPanelToStart);
}

function onDialogKeydown(event: KeyboardEvent) {
	if (event.altKey || event.ctrlKey || event.metaKey || event.shiftKey) return;
	if (event.key === 'ArrowLeft') {
		event.preventDefault();
		go(-1);
	} else if (event.key === 'ArrowRight') {
		event.preventDefault();
		go(1);
	}
}

let tracking = false;
let locked: 'h' | 'v' | null = null;
let startX = 0;
let startY = 0;

function isDrawerViewport() {
	return window.matchMedia(DRAWER_MEDIA_QUERY).matches;
}

function onTouchStart(event: TouchEvent) {
	if (!isDrawerViewport() || event.touches.length !== 1) {
		tracking = false;
		return;
	}
	const touch = event.touches[0];
	startX = touch.clientX;
	startY = touch.clientY;
	locked = null;
	tracking = true;
}

function onTouchMove(event: TouchEvent) {
	if (!tracking || event.touches.length !== 1) return;
	const touch = event.touches[0];
	const dx = touch.clientX - startX;
	const dy = touch.clientY - startY;
	if (!locked) {
		if (Math.abs(dx) < SWIPE_LOCK_PX && Math.abs(dy) < SWIPE_LOCK_PX) return;
		// Lock to the dominant axis. Vertical moves stay with scrolling and
		// the drawer's swipe-down dismiss; only horizontal moves navigate.
		locked = Math.abs(dx) > Math.abs(dy) ? 'h' : 'v';
	}
	if (locked === 'h' && event.cancelable) event.preventDefault();
}

function swallowFollowingClick() {
	const stop = (event: Event) => {
		event.preventDefault();
		event.stopPropagation();
		window.removeEventListener('click', stop, true);
	};
	window.addEventListener('click', stop, true);
	window.setTimeout(() => window.removeEventListener('click', stop, true), 400);
}

function onTouchEnd(event: TouchEvent) {
	if (!tracking) return;
	tracking = false;
	if (locked !== 'h') return;
	const touch = event.changedTouches[0];
	if (!touch) return;
	const dx = touch.clientX - startX;
	if (Math.abs(dx) < SWIPE_COMMIT_PX) return;
	swallowFollowingClick();
	go(dx < 0 ? 1 : -1);
}

function onTouchCancel() {
	tracking = false;
	locked = null;
}

const vSwipe = {
	mounted(el: HTMLElement) {
		el.addEventListener('touchstart', onTouchStart, { passive: true });
		el.addEventListener('touchmove', onTouchMove, { passive: false });
		el.addEventListener('touchend', onTouchEnd);
		el.addEventListener('touchcancel', onTouchCancel);
	},
	unmounted(el: HTMLElement) {
		el.removeEventListener('touchstart', onTouchStart);
		el.removeEventListener('touchmove', onTouchMove);
		el.removeEventListener('touchend', onTouchEnd);
		el.removeEventListener('touchcancel', onTouchCancel);
	},
};

resetToStart();
</script>

<template>
	<VueFinalModal
		class="confirm-modal"
		content-class="confirm-modal-content"
		overlay-transition="vfm-fade"
		content-transition="vfm-fade"
		swipe-to-close="down"
		:aria-labelledby="titleId"
		:aria-describedby="describedBy"
		@opened="resetToStart"
		@keydown="onDialogKeydown"
	>
		<div v-if="current" ref="panelEl" v-swipe class="symbol-panel">
			<div class="sr-only" role="status">{{ liveMessage }}</div>
			<div :id="panelId" class="symbol-copy">
				<h2 :id="titleId">{{ current.name }}</h2>
				<hr />
				<p :id="shapeId" class="shape">{{ current.shape }}</p>
				<hr />
				<p v-if="current.description" :id="descriptionId">{{ current.description }}</p>
			</div>
			<UnLazyImage
				:key="current.bigImage"
				class="that-image"
				thumbhash="fggCBYBS1Ttwdmhudsh4k86ftdgI"
				:src="current.bigImage"
				:alt="`The ${current.name} symbol in use - ${current.shape}`"
				height="347.733"
				auto-sizes
			/>
			<div class="modal-actions">
				<button
					v-if="canNavigate"
					type="button"
					class="icon-btn nav-btn"
					aria-label="Previous symbol"
					:aria-controls="panelId"
					@click="go(-1)"
				>
					<Chevron aria-hidden="true" />
				</button>
				<div class="modal-actions-main">
					<p v-if="canNavigate" class="symbol-position">{{ positionLabel }}</p>
					<button type="button" class="modal-btn" @click="emit('confirm')">Got it</button>
				</div>
				<button
					v-if="canNavigate"
					type="button"
					class="icon-btn nav-btn is-next"
					aria-label="Next symbol"
					:aria-controls="panelId"
					@click="go(1)"
				>
					<Chevron aria-hidden="true" />
				</button>
			</div>
		</div>
	</VueFinalModal>
</template>

<style scoped>
.symbol-copy {
	padding: var(--space-m);
}
.shape {
	color: var(--color-sys-slight);
	font-size: var(--step-0);
}
.that-image {
	border-radius: unset;
	width: 100%;
	height: auto;
}
.symbol-panel {
	display: flex;
	flex-direction: column;
	position: relative;
}
.symbol-panel :deep(img) {
	-webkit-user-drag: none;
}
.sr-only {
	position: absolute;
	width: 1px;
	height: 1px;
	padding: 0;
	margin: -1px;
	overflow: hidden;
	clip: rect(0, 0, 0, 0);
	clip-path: inset(50%);
	white-space: nowrap;
	border: 0;
}
.modal-actions {
	display: flex;
	align-items: center;
	justify-content: center;
	gap: var(--space-s);
	position: sticky;
	bottom: 0;
	z-index: 1;
	padding: var(--space-m);
	padding-bottom: calc(var(--space-m) + env(safe-area-inset-bottom, 0px));
	background-color: var(--color-sys-invert-main);
}
.modal-actions-main {
	display: flex;
	flex-direction: column;
	align-items: center;
	gap: var(--space-3xs);
}
.symbol-position {
	margin: 0;
	color: var(--color-sys-slight);
	font-size: var(--step--2);
	font-variant-numeric: tabular-nums;
}
.nav-btn {
	flex: none;
	min-width: 2.75rem;
	min-height: 2.75rem;
	padding: var(--space-2xs);
}
.nav-btn:deep(svg) {
	width: var(--space-s);
	height: var(--space-s);
	display: block;
}
.nav-btn.is-next:deep(svg) {
	transform: scaleX(-1);
}
.modal-btn {
	margin: 0;
}
</style>
<style lang="scss">
.confirm-modal {
	display: flex;
	justify-content: center;
	align-items: center;
}
.confirm-modal-content {
	display: flex;
	flex-direction: column;
	background-color: var(--color-sys-invert-main);
	border-radius: var(--border-radius-xs);
	box-shadow: var(--shadow-lg);
	max-width: calc(var(--space-8xl) * 3);
	margin-inline: var(--space-l);
	max-height: calc(100vh - var(--space-l));
	overflow: auto;
	@media (width <= $display-width-2xs) {
		position: absolute;
		bottom: 0;
		width: 100%;
		border-radius: unset;
	}
}
.symbol-panel {
	@media (width <= $display-width-2xs) {
		// Vertical pan stays native so the sheet can scroll and swipe closed.
		touch-action: pan-y;
	}
}
.modal-btn {
	font-size: var(--step-0);
}
</style>
