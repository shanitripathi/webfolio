<script lang="ts">
	import { fade } from 'svelte/transition';
	import { createEventDispatcher } from 'svelte';
	import { DeleteIcon, CrosshairIcon } from 'svelte-feather-icons';

	export let time: string;
	export let text: string;
	export let id: string;

	const dispatch = createEventDispatcher();

	let isHovering = false;

	const timeToDisplay = new Date(time).toLocaleString('en-US', {
		year: '2-digit',
		month: 'short',
		day: 'numeric',
		hour: '2-digit',
		minute: '2-digit',
		hour12: true
	});
</script>

<div
	on:pointerenter={() => (isHovering = true)}
	on:pointerleave={() => (isHovering = false)}
	class="flex items-start gap-2"
>
	<span class="relative inline-block whitespace-nowrap text-[10px] font-semibold leading-[1.7rem]"
		>{timeToDisplay} :
		{#if isHovering}
			<button
				on:pointerup={() => dispatch('deleteMessage', { id })}
				transition:fade={{ duration: 100 }}
				class="absolute inset-0 z-[1] flex items-center justify-center bg-main text-sm">🗑</button
			>
		{/if}
	</span>
	<span class="m-0 break-words rounded-sm bg-neutral-800 p-1 text-[12px] text-neutral-200">
		{text}
	</span>
</div>
