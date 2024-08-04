<script>
	import Anchor from '../Anchor/Anchor.svelte';
</script>

<header class="w-full text-shadow">
	<nav class="flex w-full justify-between">
		<Anchor href="/" isBold={true} tooltipText="my bio">Shani.</Anchor>
		<div class="flex gap-2">
			<Anchor href="/work" tooltipText="my work history">work</Anchor>
			<Anchor href="/messageme" tooltipText="send me an anoymous message">message</Anchor>
			<Anchor href="/toolkit" tooltipText="things i use">toolkit</Anchor>
		</div>
	</nav>
</header>
