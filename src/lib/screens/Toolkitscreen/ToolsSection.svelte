<script lang="ts">
	export let items: string[] = [];
</script>

{#if items.length > 0}
	<section class="last:mb-0 mb-8">
		<h1 class="text-2xl font-medium tracking-tighter mb-2"><slot name="header" /></h1>

		<ul class="text-sm md:ml-2 space-y-1">
			{#each items as item}
				<li>
					{item}
				</li>
			{/each}
		</ul>
	</section>
{/if}
