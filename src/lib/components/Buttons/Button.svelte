<script lang="ts">
	interface Props {
		disabled?: boolean;
		children?: import('svelte').Snippet;
		pointerup?: (...args: any[]) => any;
	}

	let { disabled = false, children, pointerup = undefined }: Props = $props();
</script>

<button
	class="{`w-full rounded-md border border-transparent p-3 text-sm text-neutral-200 outline-none transition-all duration-200 ease-in-out ${disabled ? 'cursor-not-allowed' : 'betterHover:hover:border-blue-400'}`}}}"
	onpointerup={(e) => !disabled && pointerup && pointerup(e)}
	{disabled}
>
	{@render children?.()}
</button>
