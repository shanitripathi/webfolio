<script lang="ts">
	import type { PageData } from './$types';
	import { onMount } from 'svelte';

	interface Props {
		data: PageData;
	}

	let { data }: Props = $props();

	let inputRef: HTMLInputElement | undefined = $state(undefined);
	let password = $state('');
	let errorMessage = $state('');

	const redirectTo = data.redirectTo;

	$effect(() => {
		password && (errorMessage = '');
	});

	onMount(() => {
		inputRef && inputRef.focus();
	});

	const login = async (e: SubmitEvent) => {
		e.preventDefault();
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
			} else {
				inputRef?.focus();
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
		<form onsubmit={login} class="w-[250px]">
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
				<p class="h-3 text-[10px] text-red-500">&nbsp;</p>
			{/if}
		</form>
	</div>
</main>
