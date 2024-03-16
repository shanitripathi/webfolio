<script type="ts">
	import '../app.css';
	import Footer from '$lib/components/Footer/Footer.svelte';
	import Header from '$lib/components/Header/Header.svelte';
</script>

<main class="h-full bg-stone-950 text-stone-300">
	<div class="w-full h-full mx-auto container pt-40 px-4 flex flex-col max-w-2xl">
		<Header />
		<div class="py-20 flex-grow flex-shrink">
			<slot />
		</div>
		<div class="">
			<Footer />
		</div>
	</div>
</main>

<!-- <style lang="postcss">
	:global(body) {
		@apply bg-stone-950;
	}
</style> -->
