<script>
	import ThemeButton from '$components/Buttons/ThemeButton.svelte';
	import Anchor from '../Anchor/Anchor.svelte';
</script>

<header class="w-full text-shadow">
	<nav class="flex justify-between w-full">
		<Anchor href="/" isBold={true}>Shani.</Anchor>
		<!-- <ThemeButton /> -->
		<div class="flex gap-2">
			<Anchor href="/work">work</Anchor>
			<Anchor href="/toolkit">toolkit</Anchor>
		</div>
	</nav>
</header>
