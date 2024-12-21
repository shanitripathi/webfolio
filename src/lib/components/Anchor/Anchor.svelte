<script lang="ts">
	import { fly } from 'svelte/transition';

	interface Props {
		href?: string;
		target?: '_blank' | '';
		isBold?: boolean;
		sizeClass?: 
		| `text-[${5 | 6 | 7 | 8 | 9 | 10}px]`
		| `text-${2 | 3 | 4 | 5 | 6}xl`
		| `text-${'sm' | 'lg' | 'md' | 'xl' | 'base'}`;
		optionalClass?: string;
		download?: undefined | string;
		tooltipText?: string;
		tooltipTop?: boolean;
		disabled?: boolean;
		children?: import('svelte').Snippet;
	}

	let {
		href = '',
		target = '',
		isBold = false,
		sizeClass = 'text-sm',
		optionalClass = '',
		download = undefined,
		tooltipText = '',
		tooltipTop = true,
		disabled = false,
		children
	}: Props = $props();

	let shouldShowTooltip = $state(false);

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
	onpointerover={showTooltip}
	onpointerleave={hideTooltip}
	{href}
	{target}
	{download}
	class={`text-brightness betterHover:hover:text-blue-400 ${isBold ? 'font-bold' : 'font-normal'} ${sizeClass} ${optionalClass} relative ${disabled ? 'pointer-events-none' : ''}`}
>
	{@render children?.()}
	{#if tooltipText && shouldShowTooltip}
		<span
			transition:fly={{ y: 5, duration: 200 }}
			class={`absolute left-[50%] inline-block -translate-x-[50%] whitespace-nowrap rounded-sm bg-neutral-800 px-1 text-[10px] font-normal tracking-normal text-neutral-300 ${tooltipTop ? 'bottom-[110%]' : 'top-[110%]'}`}
			>{tooltipText}</span
		>
	{/if}
</a>
