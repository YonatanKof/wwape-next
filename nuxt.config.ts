// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	modules: ['@nuxt/content', '@unlazy/nuxt', 'nuxt-clarity-analytics'],
	content: {
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
			  sepia: 'monokai'
			}
		  },
		markdown: {
			anchorLinks: {
				depth: 6,
			},
		},
	},
	devtools: { enabled: true },
	css: ['~/assets/styles/style.scss', 'vue-final-modal/style.css'],
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
			baseUrl: process.env.BASE_URL,
			siteOwnerName: 'Yonatan Ben Knaan',
			siteName: 'World Wide Ape',
			missingImg: '/missing.svg',
		},
	},
});
