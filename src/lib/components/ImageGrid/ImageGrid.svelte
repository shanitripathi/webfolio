<script lang="ts">
	import type { UnsplashUsersPhotos } from '$lib/types/unsplashResponseTypes';
	import ImageWrapper from './ImageWrapper.svelte';

	interface Props {
		images: UnsplashUsersPhotos;
	}

	let { images }: Props = $props();
</script>

{#if images && images.length > 0}
	<section>
		<div class="grid h-[600px] grid-cols-2 gap-4 md:grid-cols-3">
			{#each images as image, index (index)}
				<ImageWrapper imageDetail={image} />
			{/each}
		</div>
	</section>
{/if}
