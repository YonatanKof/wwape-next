const siteOwnerNameHere = 'Yonatan Ben Knaan';
const baseUrlHere = process.env.BASE_URL;
const SiteNameHere = 'WWApe';

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	modules: ['@nuxt/content', '@unlazy/nuxt', 'nuxt-clarity-analytics', '@nuxt/image', '@nuxtjs/seo'],
	// Used for Nuxt SEO
	site: {
		url: baseUrlHere,
		name: SiteNameHere,
		description: siteOwnerNameHere + ' of the ' + SiteNameHere,
		defaultLocale: 'en',
	},
	content: {
		// Used for Nuxt SEO sitemap module
		documentDriven: true,
		toc: {
			depth: 4,
			searchDepth: 4,
		},
		highlight: {
			// Theme used in all color schemes.
			// theme: 'github-light'
			// OR
			theme: {
				// Default theme (same as single string)
				default: 'light-plus',
				// Theme used if `html.dark`
				dark: 'dracula',
				// Theme used if `html.sepia`
				sepia: 'monokai',
			},
		},
		markdown: {
			anchorLinks: {
				depth: 6,
			},
		},
	},

	devtools: { enabled: true },
	css: ['~/assets/styles/style.scss', 'vue-final-modal/style.css'],
	ogImage: {
		enabled: false,
	},
	vite: {
		css: {
			preprocessorOptions: {
				scss: {
					additionalData: `
						@use '~/assets/styles/reset' as *; 
						@use '~/assets/styles/vars' as *; 
						@use '~/assets/styles/mixins' as *; 
						@use '~/assets/styles/utopia' as *; 
						@use '~/assets/styles/typography' as *;`,
				},
			},
		},
	},

	app: {
		head: {
			charset: 'utf-8',
			viewport: 'width=device-width, initial-scale=1, viewport-fit=cover',
		},
		pageTransition: {
			name: 'page',
			mode: 'out-in', // default
		},
		layoutTransition: {
			name: 'layout',
			mode: 'out-in', // default
		},
	},

	runtimeConfig: {
		// Private keys are only available on the server
		clarityId: process.env.MICROSOFT_CLARITY_ID,
		// Public keys that are exposed to the client
		public: {
			baseUrl: baseUrlHere,
			siteOwnerName: siteOwnerNameHere,
			siteName: SiteNameHere,
			missingImg: '/missing.svg',
		},
	},
	compatibilityDate: '2024-07-09',
});
