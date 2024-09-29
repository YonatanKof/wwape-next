// const config = useRuntimeConfig();
export default defineNuxtPlugin(() => {
	const config = useRuntimeConfig();
	// This is my abstraction for setting meta tags
	const usePageMetaTags = ({
		pageTitle = `A site by ${config.public.siteOwnerName} of the ${config.public.siteName}`,
		pageDesc = `Explore creative graphic design, illustration, and UX/UI projects. Dive into blog articles on branding, design systems, and design, or enjoy curated DJ mixes and playlists`,
		pageImg = '/images/index-social.jpg',
		pageImgAlt = 'Yonatan Kof',
		pageOgType = 'website' as
			| 'website'
			| 'article'
			| 'book'
			| 'profile'
			| 'music.song'
			| 'music.album'
			| 'music.playlist'
			| 'music.radio_status'
			| 'video.movie'
			| 'video.episode'
			| 'video.tv_show'
			| 'video.other'
			| null
			| undefined,
		pageTwitterCard = 'summary_large_image' as 'summary_large_image' | 'summary' | 'app' | 'player' | null | undefined,
		pageTwitterSite = '@yonatankof',
	} = {}) => {
		// This is Nuxt 3's way of setting meta tags
		// https://nuxt.com/docs/api/composables/use-seo-meta
		// For reactive tags, use computed getter syntax: `key: () => value,`
		// For example `title: () => pageTitle,`
		return useSeoMeta({
			title: () => pageTitle,
			description: () => pageDesc,
			ogDescription: () => pageDesc,
			twitterDescription: () => pageDesc,
			ogType: pageOgType,
			ogImage: pageImg,
			ogImageAlt: pageImgAlt,
			twitterCard: pageTwitterCard,
			twitterSite: pageTwitterSite,
			twitterImage: pageImg,
			twitterImageAlt: pageImgAlt,
		});
	};

	return {
		provide: {
			pageMetaTags: usePageMetaTags,
		},
	};
});
