<script lang="ts">
	import '../app.css';

	import Footer from '$lib/components/Footer/Footer.svelte';
	import Header from '$lib/components/Header/Header.svelte';
	import NProgress from 'nprogress';
	import type { PageData } from './$types';
	import { onMount } from 'svelte';
	import { isDarkTheme } from '$stores/theme';
	import { navigating } from '$app/stores';
	import { browser } from '$app/environment';

	export let data: PageData;

	NProgress.configure({ showSpinner: false, speed: 400 });

	$: if (browser && $navigating) {
		NProgress.start();
	} else {
		NProgress.done();
	}

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
