<script lang="ts">
	import SPOTIFY from '$assets/icons/spotify.svg';
	import Anchor from '$components/Anchor/Anchor.svelte';
	import type { SpotifyTrack } from '$helpers/spotify';

	export let nowPlaying: SpotifyTrack = {};

	$: songName = nowPlaying?.item?.name;
	$: href = nowPlaying?.item?.external_urls?.spotify;
	$: isLong = songName?.length > 20;
</script>

<Anchor
	disabled={!songName}
	{href}
	target={'_blank'}
	tooltipText={songName && 'now playing on spotify'}
	tooltipTop={false}
>
	<div
		style={'line-height: 0rem;'}
		class="flex items-center justify-center gap-1 text-[12px] text-neutral-200"
	>
		<img src={SPOTIFY} class={`w-5 ${!!songName && 'playing'}`} alt="spotify" />

		<span
			class="line-clamp-1 inline-block max-w-[150px] overflow-hidden whitespace-nowrap rounded-lg bg-neutral-800 p-3"
		>
			{isLong ? `${songName?.slice(0, 20)}...` : songName || 'nothing playing'}
		</span>
	</div>
</Anchor>

<style lang="postcss">
	@keyframes playing {
		0%,
		100% {
			transform: scale(1);
		}
		50% {
			transform: scale(1.1);
		}
		.playing .speaker {
			animation: speaker 2s infinite;
		}
	}

	.playing {
		animation: playing 1.5s infinite;
	}
</style>
