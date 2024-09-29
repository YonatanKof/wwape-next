export default defineNuxtPlugin(() => {
	const config = useRuntimeConfig();
	const { path } = useRoute();
	const cleanPath = path.replace(/\/+$/, '');
	const dynamicUrl = config.public.baseUrl;
	const canonicalPath = dynamicUrl + cleanPath;

	// This is my abstraction for setting meta tags
	// const usePageHeadTag = () => {
	// 	console.log('This is another function being used in the plugin.');
	// };
	const usePageMetaTags = ({
		metaTitle = `A site by ${config.public.siteOwnerName} of the ${config.public.siteName}`,
		metaTitleData = undefined,
		metaDesc = `Explore creative graphic design, illustration, and UX/UI projects. Dive into blog articles on branding, design systems, and design, or enjoy curated DJ mixes and playlists`,
		metaImg = '/images/index-social.jpg',
		metaImgAlt = 'Social cover image for this site',
		metaOgType = 'website' as
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
		metaTwitterCard = 'summary_large_image' as 'summary_large_image' | 'summary' | 'app' | 'player' | null | undefined,
		metaTwitterSite = '@yonatankof',
		metaImageWidth = 1200,
		metaImageHeight = 630,
		metaImageType = 'image/jpeg' as 'image/jpeg' | 'image/gif' | 'image/png' | null | undefined,
		metaCanonicalPath = canonicalPath,
		metaPublishedTime = undefined,
		metaModifiedTime = undefined,
	} = {}) => {
		useHead({
			titleTemplate: (titleChunk) => {
				return titleChunk ? `${titleChunk} - ` + metaTitle : metaTitle;
			},
			link: [
				{
					hid: 'canonical',
					rel: 'canonical',
					href: metaCanonicalPath,
				},
			],
		});
		// This is Nuxt 3's way of setting meta tags
		// https://nuxt.com/docs/api/composables/use-seo-meta
		// For reactive tags, use computed getter syntax: `key: () => value,`
		// For example `description: () => metaDesc`
		useSeoMeta({
			description: () => metaDesc,
			articlePublishedTime: metaPublishedTime,
			articleModifiedTime: metaModifiedTime,
			ogDescription: () => metaDesc,
			twitterDescription: () => metaDesc,
			ogTitle: metaTitleData ? metaTitleData + ` - ` + metaTitle : metaTitle,
			ogType: metaOgType,
			ogImage: metaImg,
			ogImageAlt: metaImgAlt,
			ogImageWidth: metaImageWidth,
			ogImageHeight: metaImageHeight,
			ogImageType: metaImageType,
			twitterTitle: metaTitleData ? metaTitleData + ` - ` + metaTitle : metaTitle,
			twitterCard: metaTwitterCard,
			twitterSite: metaTwitterSite,
			twitterImage: metaImg,
			twitterImageAlt: metaImgAlt,
		});
	};

	return {
		provide: {
			pageMetaTags: usePageMetaTags,
		},
	};
});
