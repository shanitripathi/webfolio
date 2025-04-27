<script lang="ts">
	import type { Message } from '$lib/types/messageType';
	import MessageBody from './Message.svelte';

	interface Props {
		messages?: Message[];
	}

	let { messages = $bindable([]) }: Props = $props();

	const handleDeleteMessage = async (id: string) => {
		try {
			const response = await fetch(`/api/messages/${id}`, {
				method: 'DELETE'
			});
			if (!response.ok) {
				location.reload();
				throw new Error('could not delete message');
			}
			messages = messages.filter((message) => message._id !== id);
		} catch (e) {
			console.error(e);
		}
	};
</script>

<section class="h-full w-full">
	{#if messages.length === 0}
		<p class="text-sm">
			Oops! No messages here. It's emptier than Kakashi's face under the mask! 🌀
		</p>
	{:else}
		<h1 class="mb-8 flex items-center gap-2 text-2xl font-medium tracking-tighter">all messages</h1>
		<ul class="w-full space-y-2">
			{#each messages as message}
				<li class="w-full">
					<MessageBody
						time={message.createdAt}
						text={message.message}
						id={message._id}
						deleteMessage={handleDeleteMessage}
					/>
				</li>
			{/each}
		</ul>
	{/if}
</section>
