const PRODUCTION_ORIGIN = 'https://wwape.com';
const CV_PATH = '/temp/cv';

function pathnameOf(loc: string) {
	try {
		const path = new URL(loc, PRODUCTION_ORIGIN).pathname;
		if (path.length > 1 && path.endsWith('/'))
			return path.slice(0, -1);
		return path || '/';
	} catch {
		return loc;
	}
}

export default defineNitroPlugin((nitroApp) => {
	nitroApp.hooks.hook('sitemap:resolved', (ctx) => {
		ctx.urls = ctx.urls.filter((entry) => {
			const loc = typeof entry === 'string' ? entry : entry.loc;
			if (!loc)
				return false;
			const path = pathnameOf(loc);
			// The CV is the one public page under pages/temp.
			if (path === CV_PATH)
				return true;
			if (path === '/temp' || path.startsWith('/temp/'))
				return false;
			// content/cv/my-cv.md has no page route.
			if (path.startsWith('/cv/'))
				return false;
			return true;
		});

		const hasCv = ctx.urls.some((entry) => {
			const loc = typeof entry === 'string' ? entry : entry.loc;
			return loc ? pathnameOf(loc) === CV_PATH : false;
		});
		if (!hasCv)
			ctx.urls.push({ loc: CV_PATH });
	});
});
