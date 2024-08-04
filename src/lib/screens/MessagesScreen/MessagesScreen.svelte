<script lang="ts">
	import type { Message } from '$lib/types/messageType';
	import MessageBody from './Message.svelte';

	export let messages: Message[] = [];

	const handleDeleteMessage = async (event: CustomEvent<{ id: string }>) => {
		console.log('Delete message', event.detail.id);
		try {
			const response = await fetch(`/api/messages/${event.detail.id}`, {
				method: 'DELETE'
			});
			messages = messages.filter((message) => message._id !== event.detail.id);
		} catch (e) {
			console.error(e);
		}
		// Delete message
	};
</script>

<section class="w-full h-full">
	{#if messages.length === 0}
		<p class="text-sm">
			Oops! No messages here. It's emptier than Kakashi's face under the mask! 🌀
		</p>
	{:else}
		<h1 class="flex items-center gap-2 mb-8 text-2xl font-medium tracking-tighter">all messages</h1>
		<ul class="w-full space-y-2">
			{#each messages as message}
				<li class="w-full">
					<MessageBody
						time={message.createdAt}
						text={message.message}
						id={message._id}
						on:deleteMessage={handleDeleteMessage}
					/>
				</li>
			{/each}
		</ul>
	{/if}
</section>
