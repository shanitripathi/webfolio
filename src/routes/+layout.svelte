<script lang="ts">
	import '../app.css';

	import Footer from '$lib/components/Footer/Footer.svelte';
	import Header from '$lib/components/Header/Header.svelte';
	import type { PageData } from './$types';
	import { onMount } from 'svelte';
	import { isDarkTheme } from '$stores/theme';

	export let data: PageData;
	$: theme = data.theme;

	$: $isDarkTheme = theme === 'dark';

	onMount(() => {
		if (theme) {
			document.documentElement.setAttribute('data-theme', theme);
		}
	});
</script>

<main class="min-h-screen bg-main text-midtone flex">
	<div
		class="w-full mx-auto container md:pt-20 pt-10 px-6 flex flex-col max-w-2xl flex-grow flex-shrink"
	>
		<Header />
		<div class="py-10 flex-grow flex-shrink">
			<slot />
		</div>
		<div class="mt-4">
			<Footer />
		</div>
	</div>
</main>
