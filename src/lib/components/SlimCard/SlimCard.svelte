<script lang="ts">
	export let title: string;
	export let subTitle: string;
	export let href: string;
</script>

<a
	{href}
	class="w-full p-2 text-sm font-normal tracking-normal rounded-md bg-neutral-800 text-neutral-300 hover:bg-neutral-700"
>
	<h6>{title}</h6>
	<span class="font-bold">
		{subTitle}
	</span>
</a>
