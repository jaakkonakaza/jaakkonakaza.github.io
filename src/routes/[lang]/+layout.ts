import type { LayoutLoad } from './$types';
import { loadTranslations } from '$lib/translations';

export const load = (async ({ params }) => {
	const lang = params.lang;

	await loadTranslations(lang);

	return {};
}) satisfies LayoutLoad;
