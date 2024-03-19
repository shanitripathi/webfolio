<script lang="ts">
	import Image from '$components/Image.svelte';
	import type { UnsplashUsersPhotos } from '$lib/types/unsplashResponseTypes';

	export let images: UnsplashUsersPhotos;
</script>

{#if images && images.length > 0}
	<section>
		<div class="grid grid-cols-2 md:grid-cols-3 gap-4 h-[600px]">
			{#each images as image, index}
				<div
					class={`[&:nth-child(1)]:row-span-2 [&:nth-child(3)]:row-span-2 md:[&:nth-child(1)]:row-span-2 md:[&:nth-child(3)]:row-span-2 md:[&:nth-child(4)]:row-span-2 bg-shadow  rounded-md relative overflow-hidden`}
				>
					<Image
						src={image?.urls?.regular}
						srcSmall={image?.urls?.small}
						srcRegular={image?.urls?.regular}
						alt={image?.alt_description}
					/>
				</div>
			{/each}
		</div>
	</section>
{/if}
