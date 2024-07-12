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

<div class="flex flex-col items-center justify-center h-full">
	{#if streamUri}
		<div class="relative w-full overflow-hidden rounded-md aspect-video bg-neutral-800">
			<VideoPlayer src={streamUri} isNowPlaying={false} optionalClass={'absolute'} />
		</div>
	{:else}
		<p>Loading</p>
	{/if}
</div>
