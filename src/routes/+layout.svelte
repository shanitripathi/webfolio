<script lang="ts">
	import '../app.css';

	import Footer from '$lib/components/Footer/Footer.svelte';
	import Header from '$lib/components/Header/Header.svelte';
	import NProgress from 'nprogress';
	import type { PageData } from './$types';
	import { onMount } from 'svelte';
	import { isDarkTheme } from '$stores/theme';
	import { navigating } from '$app/stores';
	import { browser, dev } from '$app/environment';
	import Gtm from '$components/Gtm.svelte';
	import { isAndroid, isFirefox, isIos, isMac, isSafari } from '$stores/platformIdentifierStore';
	import { inject } from '@vercel/analytics';

	export let data: PageData;

	NProgress.configure({ showSpinner: false, speed: 400 });

	inject({ mode: dev ? 'development' : 'production' });

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

		// @ts-ignore
		$isIos = /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream;
		$isMac = /Mac/.test(navigator.userAgent);
		$isFirefox = /Firefox/.test(navigator.userAgent);
		$isAndroid = navigator.userAgent.toLowerCase().indexOf('android') > -1;
		$isSafari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent);
	});
</script>

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
