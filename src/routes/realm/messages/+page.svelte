<script lang="ts">
	import MessagesScreen from '$screens/MessagesScreen/MessagesScreen.svelte';
	import type { PageData } from './$types';

	export let data: PageData;

	const messages = data.messages;
</script>

<MessagesScreen {messages} />
