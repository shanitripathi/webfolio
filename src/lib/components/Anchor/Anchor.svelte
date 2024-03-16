<script lang="ts">
	export let href = '';
	export let target: '_self' | '_blank' = '_self';
	export let isBold = false;
	export let sizeClass:
		| `text-${2 | 3 | 4 | 5 | 6}xl`
		| `text-${'sm' | 'lg' | 'md' | 'xl' | 'base'}` = 'text-sm';
	export let optionalClass = '';
</script>

<a
	{href}
	{target}
	class={`hover:text-blue-400 text-stone-200 ${isBold ? 'font-bold' : 'font-normal'} ${sizeClass} ${optionalClass}`}
>
	<slot />
</a>
