import type { Match } from '$lib/types/rapidApiTypes.js';
import { isLoadingDataStore } from '$stores/isLoadingDataStore.js';

export async function load({ fetch }) {
	let liveMatches: Match[] | [] | undefined = [];

	try {
		isLoadingDataStore.set(true);
		const data = await fetch('/api/matches');
		const matches = await data.json();

		if (matches && matches?.data?.length > 0) {
			liveMatches = matches.data;
		}
	} catch {
		liveMatches = undefined;
	} finally {
		isLoadingDataStore.set(false);
	}

	return {
		liveMatches
	};
}
