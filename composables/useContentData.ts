export function useContentData<T>(key: string, handler: () => Promise<T>) {
	return useAsyncData(key, handler, {
		getCachedData(key, nuxtApp) {
			return nuxtApp.payload.data[key] ?? nuxtApp.static.data[key];
		},
	});
}

type ContentQueryError = { statusCode?: number; statusMessage?: string } | null | undefined;

// Missing content must be a fatal error so SSR returns HTTP 404 and
// client-side navigation replaces the page with error.vue.
export function throwPageNotFound(error?: ContentQueryError): never {
	const statusCode = error?.statusCode && error.statusCode !== 404 ? error.statusCode : 404;
	throw createError({
		statusCode,
		statusMessage: statusCode === 404 ? 'Page not found' : error?.statusMessage || 'Page not found',
		fatal: true,
	});
}
