export function useContentData<T>(key: string, handler: () => Promise<T>) {
	return useAsyncData(key, handler, {
		getCachedData(key, nuxtApp) {
			return nuxtApp.payload.data[key] ?? nuxtApp.static.data[key];
		},
	});
}
