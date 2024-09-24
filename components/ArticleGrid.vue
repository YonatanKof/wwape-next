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
				<button>
					<NuxtLink v-if="linkTo" :href="linkTo" :target="target"> {{ btnText }} </NuxtLink>
				</button>
			</span>
			<VideoTag
				v-if="imgSrc"
				class="image-box"
				marginBlock="unset"
				:src="imgSrc"
				:srcMp4="srcMp4"
				:show-mesh="false"
				min-width="408px"
			></VideoTag>
		</span>
	</div>
</template>
<style lang="scss" scoped>
button {
	border-radius: var(--space-l);
	width: max-content;
	padding: 0.8em 1.4em 0.65em 1.4em;
}
.box {
	background-color: var(--color-sys-invert-highlight);
	border-radius: var(--border-radius-sm);
	background-image: radial-gradient(var(--color-brand-dis) 1px, transparent 1px);
	background-size: 4px 4px;
	overflow: hidden;
	container-name: flipped;
	container-type: inline-size;
}
h4 {
	margin-inline: var(--space-s);
	margin-block-start: var(--space-s);
}

.flip {
	display: flex;
	flex-direction: row;
	height: 100%;
}

.image-box {
	--offset: 50px;
	width: calc(100% + var(--offset));
	margin-inline-end: calc(var(--offset) * -1);
	margin-block-start: var(--space-s);
	height: 100%;
	border-radius: var(--border-radius-sm);
	box-shadow: var(--shadow-md-even);
	overflow: hidden;
}
.content {
	display: flex;
	flex-direction: column;
	gap: var(--space-xs);
	margin-block: var(--space-s);
	margin-inline: var(--space-s);
	max-width: calc(var(--space-6xl) * 2);
}

@container flipped (width < 480px) {
	.flip {
		flex-direction: column;
	}
	.image-box {
		--offset: 100px;
		margin-block-start: unset;
		margin-inline-start: var(--space-s);
	}
	.content {
		max-width: unset;
	}
}
</style>
