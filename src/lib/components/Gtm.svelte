<script lang="ts">
	import { browser } from '$app/environment';

	export let id: string;
</script>

<svelte:head>
	{#if browser}
		<!-- Google tag (gtag.js) -->
		<script async src="https://www.googletagmanager.com/gtag/js?id={id}"></script>
		<script>
			window.dataLayer = window.dataLayer || [];
			function gtag() {
				dataLayer.push(arguments);
			}
			gtag('js', new Date());

			gtag('config', id);
		</script>
	{/if}
</svelte:head>
