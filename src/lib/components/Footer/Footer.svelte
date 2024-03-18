<script lang="ts">
	import ThemeButton from '$components/Buttons/ThemeButton.svelte';

	const currentYear = new Date().getFullYear();
</script>

<footer class="flex justify-between items-center pb-10">
	<h6 class="font-bold text-sm">Shani Tripathi &copy; {currentYear}</h6>
	<ThemeButton />
</footer>
