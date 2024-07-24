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
	</div>
</template>
<style scoped>
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
	container-name: flipped;
	container-type: inline-size;
}
h4 {
	margin: var(--space-s);
}

.flip {
	display: flex;
	flex-direction: row;
	gap: var(--space-s);
}

.box-image {
	/* min-width: clamp(20rem, 50%, 30rem); */
	margin-block-end: calc(var(--space-m) * -1);
	margin-inline-end: calc(var(--space-m) * -1);
}
.content {
	display: flex;
	flex-direction: column;
	gap: var(--space-xs);
	margin-block-end: var(--space-m);
}

@container flipped (width < 480px) {
	.flip {
		flex-direction: column;
	}
}
</style>
