<script lang="ts">
	import { fly } from 'svelte/transition';

	export let href = '';
	export let target: '_blank' | '' = '';
	export let isBold = false;
	export let sizeClass:
		| `text-[${5 | 6 | 7 | 8 | 9 | 10}px]`
		| `text-${2 | 3 | 4 | 5 | 6}xl`
		| `text-${'sm' | 'lg' | 'md' | 'xl' | 'base'}` = 'text-sm';
	export let optionalClass = '';
	export let download: undefined | string = undefined;
	export let tooltipText = '';
	export let tooltipTop = true;

	let shouldShowTooltip = false;

	const showTooltip = (ev: PointerEvent) => {
		if (ev.pointerType === 'mouse') {
			shouldShowTooltip = true;
		}
	};

	const hideTooltip = (ev: PointerEvent) => {
		if (ev.pointerType === 'mouse') {
			shouldShowTooltip = false;
		}
	};
</script>

<a
	on:pointerover={showTooltip}
	on:pointerleave={hideTooltip}
	{href}
	{target}
	{download}
	class={`text-brightness betterHover:hover:text-blue-400 ${isBold ? 'font-bold' : 'font-normal'} ${sizeClass} ${optionalClass} relative`}
>
	<slot />
	{#if tooltipText && shouldShowTooltip}
		<span
			transition:fly={{ y: 5, duration: 200 }}
			class={`absolute left-[50%]  inline-block -translate-x-[50%] whitespace-nowrap rounded-sm bg-neutral-800 px-1 text-[10px] font-normal tracking-normal text-neutral-300 ${tooltipTop ? 'bottom-[110%]' : 'top-[110%]'}`}
			>{tooltipText}</span
		>
	{/if}
</a>
