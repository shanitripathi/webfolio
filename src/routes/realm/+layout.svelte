<script lang="ts">
	import cookies from 'js-cookie';
	import type { PageData } from './$types';
	import { onMount } from 'svelte';

	export let data: PageData;

	let isValidSession = data.isValidSession;

	let inputRef: HTMLInputElement;
	let password = '';
	let errorMessage = '';

	$: password, (errorMessage = '');

	onMount(() => {
		inputRef && inputRef.focus();
	});

	const login = async () => {
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
				location.reload();
			} else {
				inputRef.focus();
				errorMessage = "🛑 that's not the magic word!";
			}
		} catch (e) {
			console.error(e);
			errorMessage = "🛑 that's not the magic word!";
		}
	};
</script>

<main class="flex flex-col items-center justify-center h-full">
	{#if isValidSession}
		<slot />
	{:else}
		<div class="flex flex-col items-center justify-center gap-2">
			<p class="text-sm">🔮✨ What's the magic word? 🧙‍♂️</p>
			<form on:submit|preventDefault={login} class="w-[200px]">
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
	{/if}
</main>
