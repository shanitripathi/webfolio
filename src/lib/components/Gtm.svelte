<script lang="ts">
	import { browser } from '$app/environment';
	import { onMount } from 'svelte';

	export let id: string = '';

	let scriptSrc = '';

	const initialize = () => {
		window.dataLayer = window.dataLayer || [];
		function gtag() {
			dataLayer.push(arguments);
		}
		gtag('js', new Date());
		gtag('config', id);
		return `https://www.googletagmanager.com/gtag/js?id=${id}`;
	};

	onMount(() => {
		scriptSrc = initialize();
	});
</script>

<svelte:head>
	{#if scriptSrc}
		<script async src={scriptSrc}></script>
	{/if}
</svelte:head>
