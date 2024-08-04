<script lang="ts">
	import MessageMeScreen from '$screens/MessageMeScreen/MessageMeScreen.svelte';
	import type { PageData } from './$types';

	export let data: PageData;

	const isMessageSent = data.isMessageSent;
</script>

<MessageMeScreen {isMessageSent} />
