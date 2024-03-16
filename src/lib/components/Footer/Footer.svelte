<script lang="ts">
	import Instagram from '$assets/icons/square-instagram.svg';
	import LinkedIn from '$assets/icons/linkedin.svg';
	import GitHub from '$assets/icons/github.svg';
	import Mail from '$assets/icons/square-envelope-solid.svg';
	import Anchor from '$components/Anchor/Anchor.svelte';
</script>

<footer class="flex justify-between">
	<h6 class="font-bold">Shani Tripathi &copy;</h6>
	<div class="flex gap-3">
		<Anchor
			optionalClass={'bg-stone-200 hover:bg-blue-400 h-fit'}
			target="_blank"
			href="https://www.instagram.com/shani__tripathi/?ref=9gag&hl=hi"
			><img src={Instagram} alt="instagram" class="w-6 h-full" /></Anchor
		>
		<Anchor
			optionalClass={'bg-stone-200 hover:bg-blue-400 h-fit'}
			href="https://www.linkedin.com/in/shanitripathi/"
			target="_blank"><img src={LinkedIn} alt="linkedin" class="w-6 h-full" /></Anchor
		>

		<Anchor
			optionalClass={'bg-stone-200 hover:bg-blue-400 h-fit'}
			href="https://github.com/shanitripathi"
			target="_blank"><img src={GitHub} alt="github" class="w-6 h-full" /></Anchor
		>
		<Anchor optionalClass={'bg-stone-200 hover:bg-blue-400 h-fit'} href="/contact"
			><img src={Mail} alt="mail" class="w-6 h-full" /></Anchor
		>
	</div>
</footer>
