<script lang="ts">
	import { onMount } from 'svelte';

	interface Props {
		name: string;
		id: string;
		placeholder: string;
		shouldFocus?: boolean;
		maxLength?: number;
		value?: string;
		isLoading?: boolean;
		onEnter?: (...args: any[]) => any;
	}

	let {
		name,
		id,
		placeholder,
		shouldFocus = false,
		maxLength = 1000,
		value = $bindable(''),
		isLoading = false,
		onEnter = undefined
	}: Props = $props();

	let ref: HTMLTextAreaElement | undefined = $state();

	const handleKeydown = (event: KeyboardEvent) => {
		if (event.key === 'Enter') {
			event.preventDefault();
			onEnter && onEnter();
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
	onkeydown={handleKeydown}
	bind:value
	disabled={isLoading}
	class="relative h-full w-full resize-none rounded-md border-[24px] border-transparent bg-neutral-800 text-base text-neutral-200 outline-none"
	class:animate-pulse={isLoading}
	{placeholder}
	{name}
	{id}
	maxlength={maxLength}
></textarea>
