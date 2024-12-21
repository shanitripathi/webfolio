<script lang="ts">
	interface Props {
		heading?: import('svelte').Snippet;
		subHeading?: import('svelte').Snippet;
		description?: import('svelte').Snippet;
	}

	let { heading, subHeading, description }: Props = $props();
</script>

<div class="flex flex-col md:ml-4">
	<hr class="my-6 border-neutral-800" />
	<h2 class="mb-1 text-xl font-medium tracking-tighter">{@render heading?.()}</h2>
	<h3 class="mb-2 text-sm text-shadow">{@render subHeading?.()}</h3>
	<p class="text-sm text-midtone">{@render description?.()}</p>
</div>
