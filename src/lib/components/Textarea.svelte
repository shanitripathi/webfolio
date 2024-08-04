<script lang="ts">
	import { onMount } from 'svelte';
	import { createEventDispatcher } from 'svelte';

	export let name: string;
	export let id: string;
	export let placeholder: string;
	export let shouldFocus = false;
	export let maxLength = 1000;
	export let value = '';

	const dispatch = createEventDispatcher();

	let ref: HTMLTextAreaElement;

	const handleKeydown = (event: KeyboardEvent) => {
		if (event.key === 'Enter') {
			event.preventDefault();
			dispatch('enter');
		}
	};

	onMount(() => {
		if (shouldFocus && ref) {
			ref.focus();
		}
	});
</script>

<textarea
	bind:this={ref}
	on:keydown={handleKeydown}
	bind:value
	class="relative h-full w-full resize-none rounded-md border-[24px] border-transparent bg-neutral-800 text-base text-neutral-200 outline-none"
	{placeholder}
	{name}
	{id}
	maxlength={maxLength}
></textarea>
