import type { Handle } from '@sveltejs/kit';

export const handle = (({ event, resolve }) => {
	let lang = 'en';
	if (event.url.pathname.startsWith('/fi')) {
		lang = 'fi';
	} else if (event.url.pathname.startsWith('/ja')) {
		lang = 'ja';
	}

	return resolve(event, {
		transformPageChunk: ({ html }) => html.replace('%lang%', lang)
	});
}) satisfies Handle;
