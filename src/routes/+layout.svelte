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
	import Gtm from '$components/Gtm.svelte';
	import { sendGaEvent } from '$helpers/analyticsHelper';

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
		// send page view event
		sendGaEvent({ event_name: 'page_view' });
	});

	const id = import.meta.env.VITE_GA_ID;
</script>

<Gtm {id} />

<main class="flex min-h-screen bg-main text-midtone">
	<div
		class="container mx-auto flex w-full max-w-2xl flex-shrink flex-grow flex-col px-6 pt-10 md:pt-20"
	>
		<Header />
		<div class="flex-shrink flex-grow py-10">
			<slot />
		</div>
		<div class="mt-4">
			<Footer />
		</div>
	</div>
</main>
