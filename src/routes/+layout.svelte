<script type="ts">
	import '../app.css';
	import Footer from '$lib/components/Footer/Footer.svelte';
	import Header from '$lib/components/Header/Header.svelte';
</script>

<main class="min-h-screen bg-stone-950 text-stone-300 flex">
	<div
		class="w-full mx-auto container md:pt-20 pt-10 px-4 flex flex-col max-w-2xl flex-grow flex-shrink"
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

<!-- <style lang="postcss">
	:global(body) {
		@apply bg-stone-950;
	}
</style> -->
