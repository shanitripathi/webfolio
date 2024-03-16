<script>
	import Anchor from '../Anchor/Anchor.svelte';
</script>

<header class="w-full text-stone-400">
	<nav class="flex justify-between w-full">
		<Anchor href="/" isBold={true}>Shani.</Anchor>
		<div class="flex gap-2">
			<Anchor href="/about">About</Anchor>
			<Anchor href="/projects">Projects</Anchor>
			<Anchor href="/skills">Skills</Anchor>
			<Anchor href="/contact">Contact</Anchor>
		</div>
	</nav>
</header>
