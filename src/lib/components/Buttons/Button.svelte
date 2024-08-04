<script lang="ts">
	import { createEventDispatcher } from 'svelte';

	export let disabled = false;

	const dispatch = createEventDispatcher();
</script>

<button
	class="{`w-full rounded-md border border-transparent p-3 text-sm text-neutral-200 outline-none transition-all duration-200 ease-in-out ${disabled ? 'cursor-not-allowed' : 'betterHover:hover:border-blue-400'}`}}}"
	on:pointerup={() => !disabled && dispatch('pointerup')}
	{disabled}
>
	<slot></slot>
</button>
