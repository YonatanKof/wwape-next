/** Production origin shared by sitemap, robots, and page URLs. */
export const siteUrl = 'https://wwape.com';

/**
 * Absolute URL on the production origin.
 * The homepage keeps a single slash. Every other path has none, and the join never doubles a slash.
 */
export function absolutePageUrl(path: string): string {
	const origin = siteUrl.replace(/\/+$/, '');
	let pathname = path || '/';

	if (pathname.includes('://') || pathname.startsWith('//')) {
		try {
			pathname = new URL(pathname, origin).pathname;
		} catch {
			pathname = '/';
		}
	}

	if (!pathname.startsWith('/'))
		pathname = `/${pathname}`;

	pathname = pathname.replace(/\/{2,}/g, '/');

	if (pathname !== '/')
		pathname = pathname.replace(/\/+$/, '');

	return origin + pathname;
}
