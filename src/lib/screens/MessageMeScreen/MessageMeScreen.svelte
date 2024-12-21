<script lang="ts">
	import Button from '$components/Buttons/Button.svelte';
	import Textarea from '$components/Textarea.svelte';
	import constants from '$helpers/constants';
	import cookies from 'js-cookie';
	import { fade } from 'svelte/transition';
	import { SendIcon } from 'svelte-feather-icons';

	interface Props {
		isMessageSent?: boolean;
	}

	let { isMessageSent = $bindable(false) }: Props = $props();

	let message = $state('');
	let isSending = $state(false);
	let errorMessage = $state('');

	let shouldDisable = $derived(message.trim().length === 0 || isSending);
	$effect(() => {
		message && (errorMessage = '');
	});
	$effect(() => {
		constants.messageLength === message.trim().length &&
			(errorMessage = '🚨 Whoa, that’s a novel! 📚😱 Please keep it under 1000 characters! 🙏✨');
	});

	// if we have the session cookie, we can't send another message
	const sendMessage = async (e: CustomEvent) => {
		if (shouldDisable) return;
		const isSmallMessage = message.trim().length < 20;
		if (isSmallMessage) {
			errorMessage = '✏️ Too short! is this all you have to say? 🤔';
			return;
		}
		isSending = true;
		try {
			// Send message to the server
			const response = await fetch('/api/messages', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json'
				},
				body: JSON.stringify({ message })
			});

			if (!response.ok) {
				throw new Error('could not send message');
			}
			isMessageSent = !!cookies.get('messageSent');
			// Clear the message
			message = '';
		} catch (err) {
			console.log('could not send message', err);
			errorMessage = '🚨 Something went wrong! 😕 Please try again later. 🔄';
		}
		isSending = false;
	};
</script>

<section class="flex items-center justify-center h-full">
	{#if isMessageSent}
		<p transition:fade={{ duration: 200 }} class="text-sm text-center text-brightness">
			📬 Message sent! 🚀 Thanks for the note! 😎 Nothing too harsh, I hope! 😅 Keep smiling! 😊
		</p>
	{:else}
		<div class="flex flex-col items-center justify-center h-full">
			<p class="mb-10 text-sm text-center">
				💬 Send an anonymous message! 🕵️‍♂️ Share thoughts, ideas, jokes, or even what you don’t like
				about me! 🤫
			</p>

			<div class="mx-auto h-[150px] w-full">
				<div class="relative w-full h-full">
					<Textarea
						shouldFocus={true}
						name="messageMe"
						id="messageMe"
						placeholder={isSending ? 'sending...' : 'start typing here ✍🏻'}
						maxLength={constants.messageLength}
						isLoading={isSending}
						bind:value={message}
						onEnter={sendMessage}
					></Textarea>
					{#if !shouldDisable}
						<div
							transition:fade={{ duration: 200 }}
							class="absolute right-0 top-0 z-[100] mx-auto w-fit"
						>
							<Button pointerup={sendMessage} disabled={shouldDisable}>
								<SendIcon class="betterHover:hover:scale-110" size="15" />
							</Button>
						</div>
					{/if}
				</div>

				<p class="text-[12px] text-red-400">
					{#if errorMessage}
						{errorMessage}
					{:else}
						&nbsp;
					{/if}
				</p>
			</div>
		</div>
	{/if}
</section>
