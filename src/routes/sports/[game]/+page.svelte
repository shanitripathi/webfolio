<script lang="ts">
	import { page } from '$app/stores';
	import SlimCard from '$components/SlimCard/SlimCard.svelte';
	import { isLoadingDataStore } from '$stores/isLoadingDataStore';
	import type { PageData } from './$types';
	export let data: PageData;

	const { liveMatches } = data;

	$: fallbackMessage = $isLoadingDataStore ? 'Loading...' : 'No live matches available';
</script>

<div class="flex flex-col items-center justify-center h-full">
	{#if liveMatches && liveMatches.length > 0}
		<div class="flex flex-col gap-2">
			{#each liveMatches as match}
				<SlimCard
					title={`${match.home_name} - ${match.away_name}`}
					subTitle={match.score}
					href={`${$page.url.pathname}/${match.id}`}
				/>
			{/each}
		</div>
	{:else}
		<p>{fallbackMessage}</p>
	{/if}
</div>
