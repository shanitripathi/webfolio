<script lang="ts">
	import { fade } from 'svelte/transition';

	interface Props {
		time: string;
		text: string;
		id: string;
		deleteMessage: (id: string) => void;
	}

	let { time, text, id, deleteMessage }: Props = $props();

	let isHovering = $state(false);

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
	onpointerenter={() => (isHovering = true)}
	onpointerleave={() => (isHovering = false)}
	class="flex items-start gap-2"
>
	<span class="relative inline-block whitespace-nowrap text-[10px] font-semibold leading-[1.7rem]"
		>{timeToDisplay} :
		{#if isHovering}
			<button
				onpointerup={() => deleteMessage(id)}
				transition:fade={{ duration: 100 }}
				class="absolute inset-0 z-[1] flex items-center justify-center bg-main text-sm">🗑</button
			>
		{/if}
	</span>
	<span class="m-0 break-words rounded-sm bg-neutral-800 p-1 text-[12px] text-neutral-200">
		{text}
	</span>
</div>
