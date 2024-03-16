<script lang="ts">
	export let href = '';
	export let target: '_self' | '_blank' = '_self';
	export let isBold = false;
	export let isBig = false;
</script>

<a
	{href}
	{target}
	class={`hover:text-blue-400 text-stone-200 ${isBold ? 'font-bold' : 'font-normal'}`}
>
	<slot />
</a>
