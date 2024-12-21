<script lang="ts">
	import MessagesScreen from '$screens/MessagesScreen/MessagesScreen.svelte';
	import type { PageData } from './$types';

	interface Props {
		data: PageData;
	}

	let { data }: Props = $props();

	const messages = data.messages;
</script>

<MessagesScreen {messages} />
