<script setup>
const config = useRuntimeConfig();
const nuxtApp = useNuxtApp();
nuxtApp.$pageMetaTags({
	metaTitle: `Playlists and Mixes by ${config.public.siteOwnerName} of the ${config.public.siteName}`,
	metaDesc: 'Listen to eclectic DJ mixes and curated playlists featuring a blend of electronic, indie, and ambient sounds. Perfect for work or play',
	metaImg: '/images/music-social.jpg',
	metaImgAlt: 'Social cover for this site posts page',
});
</script>

<template>
	<main>
		<IntroText
			title="Playlists and Mixes"
			text="Yess! You are now on my music page, where I've carefully curated each playlist and mix to by the desire to share the music I love. Whether you're working, relaxing, celebrating, feeling up or down, dexter or sinister – I'm sure you can find something that suits your mood."
		/>
		<section>
			<div>
				<h2 class="title">Playlists</h2>
				<ApplePlaylist src="slow-hits/pl.u-06oxpyxTXj6lWx" />
				<ApplePlaylist src="sweet-hits/pl.u-XkD0vNJt4Re6D0" />
				<ApplePlaylist src="dark-hits/pl.u-MDAWkxqC4J7EWb" />
				<ApplePlaylist src="dirty-hits/pl.u-XkD04mLH4Re6D0" />
				<ApplePlaylist src="alt-dance/pl.u-yZyVEAXtz9NeY4" />
				<ApplePlaylist src="in-the-deeps/pl.u-XkD04zRH4Re6D0" />
			</div>
			<div>
				<h2 class="title">Mixes</h2>
				<YouTubePlayer videoId="SOLT46Qn0aU" title="Even Though This Body Will Disappear Mix" marginTop="unset"/>
				<MixcloudMix src="kof-mix-jan-2019-hudna" />
				<MixcloudMix src="kof-mix-jul-2018" />
				<MixcloudMix src="kof-mix-october-2017-uganda-tlv" />
				<MixcloudMix src="kof-mix-apr-2017" />
				<MixcloudMix src="kof-mix-nov-2016" />
				<MixcloudMix src="kof-mix-sep-2016" />
				<MixcloudMix src="kof-mix-aug-2016" />
				<MixcloudMix src="kof-january-2015" />
				<MixcloudMix src="kof-mix-oct-2013" />
				<MixcloudMix src="kof-mix-sep-2013" />
				<MixcloudMix src="kof-mix-aug-2013" />
				<MixcloudMix src="kof-mix" />
			</div>
		</section>
	</main>
</template>

<style lang="scss" scoped>
section {
	display: grid;
	gap: var(--space-xs);
	grid-template-columns: 4fr 3fr;
	margin-block-end: var(--space-l);
	@media (width <= $display-width-xs) {
		grid-template-columns: 1fr;
		gap: var(--space-m);
	}
}
div {
	display: flex;
	flex-direction: column;
	gap: var(--space-2xs);
}
.title {
	margin-block-end: var(--space-3xs);
}
</style>
