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

	export let muted = true;
	export let paused = false;
	export let fullscreen = false;

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

<svelte:window on:keydown={handleKeydown} />
<div class="flex items-center justify-center gap-2 p-2 overflow-hidden rounded-md">
	<button
		on:pointerup={() => {
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
		on:pointerup={() => {
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
		on:pointerup={() => {
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
