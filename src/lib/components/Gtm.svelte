<script lang="ts">
	import { onMount } from 'svelte';

	export let id: string;

	let scriptSrc: string;

	const initialize = (globalObject = window) => {
		const requiredDataPoint = {
			'gtm.start': new Date().getTime(),
			event: 'gtm.js'
		};

		try {
			const dataLayer = [requiredDataPoint];
			// @ts-ignore
			globalObject['dataLayer'] = globalObject['dataLayer']
				? [...globalObject['dataLayer'], ...dataLayer]
				: dataLayer;
		} catch (error) {
			console.error('Google Tag Manager.', error);
		}
		console.log('id', id);
		return `https://www.googletagmanager.com/gtag/js?id=${id}`;
	};
	onMount(() => {
		scriptSrc = initialize();
	});
</script>

<svelte:head>
	{#if scriptSrc}
		<script src={scriptSrc} defer></script>
	{/if}
</svelte:head>
