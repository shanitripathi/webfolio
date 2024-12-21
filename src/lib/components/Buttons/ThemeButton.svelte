<script lang="ts">
	import { MoonIcon, SunIcon } from 'svelte-feather-icons';
	import cookies from 'js-cookie';
	import { isDarkTheme } from '$stores/theme';

	const handleToggle = () => {
		$isDarkTheme ? cookies.set('theme', 'light') : cookies.set('theme', 'dark');
		const currentTheme = cookies.get('theme') === 'dark' ? 'dark' : 'light';
		$isDarkTheme = currentTheme === 'dark' ? true : false;
		document.documentElement.setAttribute('data-theme', currentTheme);
	};
</script>

<button
	onpointerup={handleToggle}
	class="relative flex h-4 w-8 items-center justify-between overflow-hidden rounded-lg border border-midtone px-[2px]"
>
	<span class=""><MoonIcon size="10" /></span>
	<span class=""><SunIcon size="10" /></span>

	<span
		class={`absolute inline-block h-4 w-4 rounded-full bg-midtone transition-all duration-[700] ease-linear ${$isDarkTheme ? 'left-0' : 'left-[50%]'}`}
	></span>
</button>
