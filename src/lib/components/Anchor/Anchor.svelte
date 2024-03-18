<script lang="ts">
	export let href = '';
	export let target: '_blank' | '' = '';
	export let isBold = false;
	export let sizeClass:
		| `text-${2 | 3 | 4 | 5 | 6}xl`
		| `text-${'sm' | 'lg' | 'md' | 'xl' | 'base'}` = 'text-sm';
	export let optionalClass = '';
	export let download: undefined | string = undefined;
</script>

<a
	{href}
	{target}
	{download}
	class={`betterHover:hover:text-blue-400 text-brightness ${isBold ? 'font-bold' : 'font-normal'} ${sizeClass} ${optionalClass}`}
>
	<slot />
</a>
