<script lang="ts">
	import type { UnsplashUsersPhotos } from '$lib/types/unsplashResponseTypes';
	import ImageWrapper from './ImageWrapper.svelte';

	export let images: UnsplashUsersPhotos;
</script>

{#if images && images.length > 0}
	<section>
		<div class="grid grid-cols-2 md:grid-cols-3 gap-4 h-[600px]">
			{#each images as image, index (index)}
				<ImageWrapper imageDetail={image} />
			{/each}
		</div>
	</section>
{/if}
