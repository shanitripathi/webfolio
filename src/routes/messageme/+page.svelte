<script lang="ts">
	import MessageMeScreen from '$screens/MessageMeScreen/MessageMeScreen.svelte';
	import type { PageData } from './$types';

	interface Props {
		data: PageData;
	}

	let { data }: Props = $props();

	const isMessageSent = data.isMessageSent;
</script>

<MessageMeScreen {isMessageSent} />
