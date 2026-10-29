import { getRequestHeader } from 'h3';

// Nitro renders error.vue only when Accept includes text/html. Otherwise
// (curl's */*, an empty Accept, httpie) isJsonRequest returns JSON, including
// because the curl/httpie user-agent is treated as a JSON client.
// Browsers already send text/html. Page requests that did not ask for JSON
// should get the same HTML error page.
export default defineNitroPlugin((nitroApp) => {
	nitroApp.hooks.hook('request', (event) => {
		const pathname = (event.path || '').split('?')[0];
		if (
			pathname.startsWith('/api/') ||
			pathname.startsWith('/__nuxt_error') ||
			pathname.endsWith('.json') ||
			pathname.includes('/_payload')
		) {
			return;
		}

		const accept = getRequestHeader(event, 'accept') || '';
		if (accept.includes('text/html') || accept.includes('application/json')) return;

		if (event.node?.req?.headers) {
			event.node.req.headers.accept = 'text/html';
		}
	});
});
