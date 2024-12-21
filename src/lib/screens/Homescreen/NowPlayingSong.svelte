<script lang="ts">
	import SPOTIFY from '$assets/icons/spotify.svg';
	import Anchor from '$components/Anchor/Anchor.svelte';
	import type { SpotifyData } from '$helpers/spotify';

	interface Props {
		spotifyData?: SpotifyData;
	}

	let { spotifyData = {} }: Props = $props();

	const nowPlaying = spotifyData?.currentlyPlaying?.item;
	const lastPlayed = spotifyData?.recentlyPlayed.track;

	const isLongName = (name: string) => name?.length > 20;

	let currentName = $derived(nowPlaying?.name);
	let currentHref = $derived(nowPlaying?.external_urls?.spotify);
	let lastName = $derived(lastPlayed?.name);
	let lastHref = $derived(lastPlayed?.external_urls?.spotify);
	let songName = $derived(currentName || lastName);
	let href = $derived(currentHref || lastHref);

	let tooltipText = $derived(currentName
		? 'now playing on spotify'
		: lastName
			? 'last played on spotify'
			: 'nothing playing');
</script>

<Anchor disabled={!songName} {href} target={'_blank'} {tooltipText} tooltipTop={false}>
	<div
		style={'line-height: 0rem;'}
		class="flex items-center justify-center gap-1 text-[12px] text-neutral-200"
	>
		<img src={SPOTIFY} class={`w-5 ${!!currentName && 'playing'}`} alt="spotify" />

		<span
			class="line-clamp-1 inline-block max-w-[150px] overflow-hidden whitespace-nowrap rounded-lg bg-neutral-800 p-3"
		>
			{isLongName(songName) ? `${songName?.slice(0, 20)}...` : songName || 'nothing playing'}
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
