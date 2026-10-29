import { absolutePageUrl } from '~/utils/site-url';

export default defineNuxtPlugin(() => {
	const config = useRuntimeConfig();
	const route = useRoute();

	// This is my abstraction for setting meta tags
	const usePageMetaTags = ({
		metaTitle = 'Yonatan Ben Knaan – Design, art, writing & UX | WWApe',
		metaAuthor = config.public.siteOwnerName,
		metaSiteName = config.public.siteName,
		// metaArticleAuthor = undefined,
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
		metaCanonicalPath = undefined as string | undefined,
		metaPublishedTime = undefined,
		metaModifiedTime = undefined,
	} = {}) => {
		const canonicalHref = () => metaCanonicalPath ?? absolutePageUrl(route.path);
		// Item pages pass the content title as metaTitleData. ContentDoc also
		// writes that raw title into <title> and og:title, so this string is
		// the document title, and og:title is registered above useContentHead.
		const pageTitle = metaTitleData ? `${metaTitleData} – ${metaTitle}` : metaTitle;

		useHead({
			title: pageTitle,
			titleTemplate: () => pageTitle,
			htmlAttrs: { lang: 'en' },
			meta: [
				{
					property: 'og:title',
					content: pageTitle,
					tagPriority: 'high',
				},
			],
			link: [
				{
					hid: 'canonical',
					rel: 'canonical',
					href: canonicalHref,
				},
				{
					rel: 'icon',
					href: '/favicon.svg',
					type: 'image/svg+xml',
				},
				{
					rel: 'icon',
					href: '/favicon.ico',
					type: 'image/x-icon',
				},
			],
		});
		// This is Nuxt 3's way of setting meta tags
		// https://nuxt.com/docs/api/composables/use-seo-meta
		// For reactive tags, use computed getter syntax: `key: () => value,`
		// For example `description: () => metaDesc`
		useSeoMeta({
			author: metaAuthor,
			description: () => metaDesc,
			// articleAuthor: metaArticleAuthor,
			articlePublishedTime: metaPublishedTime,
			articleModifiedTime: metaModifiedTime,

			ogTitle: pageTitle,
			ogSiteName: metaSiteName,
			ogDescription: () => metaDesc,
			ogType: metaOgType,
			ogUrl: canonicalHref,
			ogImage: metaImg,
			ogImageAlt: metaImgAlt,
			ogImageWidth: metaImageWidth,
			ogImageHeight: metaImageHeight,
			ogImageType: metaImageType,

			twitterTitle: pageTitle,
			twitterDescription: () => metaDesc,
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
