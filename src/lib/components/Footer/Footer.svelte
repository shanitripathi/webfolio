<script lang="ts">
	import ThemeButton from '$components/Buttons/ThemeButton.svelte';

	const currentYear = new Date().getFullYear();
</script>

<footer class="flex items-center justify-between pb-10">
	<h6 class="text-sm font-bold">Shani Tripathi &copy; {currentYear}</h6>
	<ThemeButton />
</footer>
