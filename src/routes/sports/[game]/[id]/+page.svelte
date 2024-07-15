<script lang="ts">
	import PlayerControls from '$components/PlayerControls/PlayerControls.svelte';
	import VideoPlayer from '$components/VideoPlayer/VideoPlayer.svelte';
	import type { PageData } from '../$types';

	export let data: PageData;

	const { streamInfo } = data;

	// let streamUri = 'https://vdqvcus.akamaized.net/6162973445001.m3u8';
	let streamUri = '';
	$: console.log('this is the data', streamInfo);
	$: if (streamInfo.length > 0) {
		streamUri = streamInfo[0].stream_link;
		console.log('this is the streamuri', streamUri);
		console.log('this is the streamuri', streamUri);
	}
</script>

<div class="flex h-full flex-col items-center justify-center">
	{#if streamUri}
		<div class="relative aspect-video w-full overflow-hidden rounded-md bg-neutral-800">
			<VideoPlayer src={streamUri} isNowPlaying={false} optionalClass={'absolute'} />
		</div>
	{:else}
		<p>Loading</p>
	{/if}
</div>
