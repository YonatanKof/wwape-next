// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	modules: ['@nuxt/content'],
	content: {
		highlight: {
			theme: 'github-light',
		},
		markdown: {
			anchorLinks: {
				depth: 6,
			},
			externalLinks: {      
				target: '_self' // désactive target="_blank"      
				rel: false // désactive rel="nofollow noopener"   
			 },
		},
	},
	devtools: { enabled: true },
	css: ['~/assets/styles/style.scss'],
	vite: {
		css: {
			preprocessorOptions: {
				scss: {
					additionalData: `
						@use '~/assets/styles/reset' as *; 
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
		// Public keys that are exposed to the client
		public: {
			siteOwnerName: 'Yonatan Ben Knaan',
			missingImg: '/missing.svg',
		},
	},
});
