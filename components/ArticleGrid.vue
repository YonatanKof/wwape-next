<script setup>
const props = defineProps({
	id: {
		type: String,
		default: undefined,
	},
	title: {
		type: String,
		default: undefined,
	},
	linkTo: {
		type: String,
		default: undefined,
	},
	btnText: {
		type: String,
		default: 'Button Text',
	},
	imgSrc: {
		type: String,
		default: undefined,
	},
	target: {
		type: String,
		default: '_blanc',
	},
});
</script>
<template>
	<div class="box" :id="id">
		<h4 v-if="title">{{ title }}</h4>
		<span class="container">
			<span class="flip">
				<span class="content">
					<slot />
					<NuxtLink v-if="linkTo" class="button" :href="linkTo"> {{ btnText }} </NuxtLink>
				</span>
				<VideoTag
					v-if="imgSrc"
					class="box-image"
					marginBlock="unset"
					:src="imgSrc"
					show-mesh="true"
					:target="target"
				></VideoTag>
			</span>
		</span>
	</div>
</template>
<style>
.button {
	border-radius: var(--space-l);
	width: max-content;
}
.box {
	background-color: var(--color-sys-invert-highlight);
	border-radius: var(--border-radius-md);
	background-image: radial-gradient(var(--color-link-dis) 1px, transparent 1px);
	background-size: 8px 8px;
	overflow: hidden;
}
h4 {
	margin: var(--space-s);
	color: violet;
}
.container {
	container-name: flipped;
	container-type: inline-size;
}
.flip {
	display: flex;
	flex-direction: row;
	gap: var(--space-s);
}
@container flipped (width > 400px) {
}

/* Apply styles if the container is narrower than 650px */
@container (width < 650px) {
	h4 {
		color: red;
	}
	.flip {
		flex-direction: column;
	}
}

.box-image {
	min-width: clamp(20rem, 50%, 30rem);
	margin-block-end: calc(var(--space-m) * -1);
	margin-inline-end: calc(var(--space-m) * -1);
}
.content {
	display: flex;
	flex-direction: column;
	gap: var(--space-xs);
	margin-block-end: var(--space-m);
}
</style>
