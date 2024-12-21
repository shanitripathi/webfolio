<script lang="ts">
	interface Props {
		title: string;
		subTitle: string;
		href: string;
	}

	let { title, subTitle, href }: Props = $props();
</script>

<a
	{href}
	class="w-full rounded-md bg-neutral-800 p-2 text-sm font-normal tracking-normal text-neutral-300 hover:bg-neutral-700"
>
	<h6>{title}</h6>
	<span class="font-bold">
		{subTitle}
	</span>
</a>
