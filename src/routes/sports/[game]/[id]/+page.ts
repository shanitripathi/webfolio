import type { StreamInfo } from '$lib/types/rapidApiTypes.js';
import { isLoadingDataStore } from '$stores/isLoadingDataStore.js';

export const load = async ({ fetch, params }) => {
	const id = params.id;
	isLoadingDataStore.set(true);
	const data = await fetch(`/api/match/${id}`);
	const streamData = await data.json();
	const streamInfo = (streamData.data as StreamInfo[]) || [];
	isLoadingDataStore.set(false);
	return {
		streamInfo
	};
};
