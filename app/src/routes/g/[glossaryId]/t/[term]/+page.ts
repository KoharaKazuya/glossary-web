import type { PageLoad } from './$types';

export const load = (({ params }) => {
	return { glossaryId: params.glossaryId, term: params.term };
}) satisfies PageLoad;
