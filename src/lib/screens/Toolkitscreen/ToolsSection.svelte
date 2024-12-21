<script lang="ts">
	interface Props {
		items?: string[];
		header?: import('svelte').Snippet;
	}

	let { items = [], header }: Props = $props();
</script>

{#if items.length > 0}
	<section class="mb-8 last:mb-0">
		<h1 class="mb-2 text-2xl font-medium tracking-tighter">{@render header?.()}</h1>

		<ul class="space-y-1 text-sm md:ml-2">
			{#each items as item}
				<li>
					{item}
				</li>
			{/each}
		</ul>
	</section>
{/if}
