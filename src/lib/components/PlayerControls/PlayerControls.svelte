<script lang="ts">
	import {
		PlayIcon,
		PauseIcon,
		VolumeIcon,
		VolumeXIcon,
		MaximizeIcon,
		MinimizeIcon
	} from 'svelte-feather-icons';
	import { createEventDispatcher } from 'svelte';

	interface Props {
		muted?: boolean;
		paused?: boolean;
		fullscreen?: boolean;
	}

	let { muted = true, paused = false, fullscreen = false }: Props = $props();

	const dispatch = createEventDispatcher();

	const handleKeydown = (event: KeyboardEvent) => {
		if (event.key === ' ') {
			dispatch('handlePlayPause');
		} else if (event.key === 'm') {
			dispatch('handleMuteUnmute');
		} else if (event.key === 'f') {
			dispatch('handleFullscreen');
		}
	};
</script>

<svelte:window onkeydown={handleKeydown} />
<div class="flex items-center justify-center gap-2 overflow-hidden rounded-md p-2">
	<button
		onpointerup={() => {
			dispatch('handlePlayPause');
		}}
	>
		{#if paused}
			<PlayIcon class="w-5" />
		{:else}
			<PauseIcon class="w-5" />
		{/if}
	</button>

	<button
		onpointerup={() => {
			dispatch('handleMuteUnmute');
		}}
	>
		{#if muted}
			<VolumeXIcon class="w-5" />
		{:else}
			<VolumeIcon class="w-5" />
		{/if}
	</button>
	<button
		onpointerup={() => {
			dispatch('handleFullscreen');
		}}
	>
		{#if fullscreen}
			<MinimizeIcon class="w-4" />
		{:else}
			<MaximizeIcon class="w-4" />
		{/if}
	</button>
</div>
