import { serverQueryContent } from '#content/server';

// Page size matches pages/design/index.vue and pages/design/page/[number].vue.
const DESIGN_PAGE_SIZE = 16;
const PUBLIC_SECTIONS = ['/design/', '/work/', '/post/'];

function lastModified(doc: { date?: string; updated?: string }) {
	const updated = typeof doc.updated === 'string' ? doc.updated.trim() : '';
	const date = typeof doc.date === 'string' ? doc.date.trim() : '';
	return updated || date || undefined;
}

export default defineSitemapEventHandler(async (event) => {
	const docs = await serverQueryContent(event).find();
	const urls = docs.flatMap((doc) => {
		const loc = typeof doc._path === 'string' ? doc._path : '';
		if (!PUBLIC_SECTIONS.some((section) => loc.startsWith(section)))
			return [];
		const lastmod = lastModified(doc);
		return lastmod ? [{ loc, lastmod }] : [loc];
	});

	const designCount = docs.filter((doc) => typeof doc._path === 'string' && doc._path.startsWith('/design/')).length;
	const totalPages = Math.ceil(designCount / DESIGN_PAGE_SIZE);
	for (let page = 2; page <= totalPages; page++)
		urls.push(`/design/page/${page}`);

	return urls;
});
