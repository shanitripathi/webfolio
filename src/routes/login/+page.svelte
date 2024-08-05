<script lang="ts">
	import { redirect } from '@sveltejs/kit';
	import type { PageData } from './$types';
	import { onMount } from 'svelte';

	export let data: PageData;

	let inputRef: HTMLInputElement;
	let password = '';
	let errorMessage = '';

	const redirectTo = data.redirectTo;

	$: password, (errorMessage = '');

	onMount(() => {
		inputRef && inputRef.focus();
	});

	const login = async () => {
		let shouldRedirect = false;
		if (!password) return;
		try {
			const response = await fetch('/api/login', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json'
				},
				body: JSON.stringify({ name: 'Shani Tripathi', password })
			});
			if (response.ok) {
				shouldRedirect = true;
				// location.reload();
			} else {
				inputRef.focus();
				errorMessage = "🛑 that's not the magic word!";
			}
		} catch (e) {
			console.error(e);
			errorMessage = "🛑 that's not the magic word!";
		}
		if (shouldRedirect) {
			window.location.href = redirectTo;
		}
	};
</script>

<main class="flex h-full flex-col items-center justify-center">
	<div class="flex flex-col items-center justify-center gap-2">
		<p class="text-sm">🔮✨ What's the magic word? 🧙‍♂️</p>
		<form on:submit|preventDefault={login} class="w-[250px]">
			<input
				bind:this={inputRef}
				bind:value={password}
				class="w-full rounded-md bg-neutral-800 p-2 text-sm text-neutral-200 outline-none placeholder:text-[12px]"
				placeholder="enter the word..."
				type="password"
			/>
			{#if errorMessage}
				<p class="h-3 text-[10px] text-red-500">{errorMessage}</p>
			{:else}
				<form class="h-3 text-[10px] text-red-500">&nbsp;</form>
			{/if}
		</form>
	</div>
</main>
