<script lang="ts">
	import Anchor from '$components/Anchor/Anchor.svelte';
	import Image from '$components/Image.svelte';
	import type { UnsplashPhoto } from '$lib/types/unsplashResponseTypes';
	import { onDestroy } from 'svelte';
	import { fade } from 'svelte/transition';

	export let imageDetail: UnsplashPhoto;

	let shouldShowCredit = false;
	let hideTimeoutId: NodeJS.Timeout;

	const handleTouchCreditHideTimeout = () => {
		hideTimeoutId && clearTimeout(hideTimeoutId);
		hideTimeoutId = setTimeout(() => {
			shouldShowCredit = false;
		}, 3000);
	};

	onDestroy(() => {
		hideTimeoutId && clearTimeout(hideTimeoutId);
	});

	const showCredit = (ev: PointerEvent) => {
		const { pointerType, type } = ev;
		if (type === 'pointerup' && pointerType === 'touch') {
			shouldShowCredit = true;
			handleTouchCreditHideTimeout();
		}
		if (pointerType === 'mouse' && type === 'pointerover') {
			shouldShowCredit = true;
		}
	};
	const hideCredit = (ev: PointerEvent) => {
		const { pointerType } = ev;
		if (pointerType === 'mouse') {
			shouldShowCredit = false;
		}
	};
</script>

<div
	on:pointerover={showCredit}
	on:pointerleave={hideCredit}
	on:pointerup={showCredit}
	class="relative overflow-hidden rounded-md bg-shadow [&:nth-child(1)]:row-span-2 md:[&:nth-child(1)]:row-span-2 [&:nth-child(3)]:row-span-2 md:[&:nth-child(3)]:row-span-2 md:[&:nth-child(4)]:row-span-2"
>
	<Image
		src={imageDetail?.urls?.regular}
		srcSmall={imageDetail?.urls?.small}
		srcRegular={imageDetail?.urls?.regular}
		alt={imageDetail?.alt_description}
	></Image>
	<div class="absolute bottom-0 left-0 w-full text-[10px]">
		{#if shouldShowCredit}
			<div
				transition:fade={{ duration: 200 }}
				class="bg-gradient-to-t from-main to-transparent p-2"
			>
				photo by <Anchor
					href={`https://unsplash.com/@${imageDetail?.user?.username}?utm_source=shani_portfolio&utm_medium=referral`}
					sizeClass="text-[10px]"
					isBold={true}
					target="_blank"
				>
					{imageDetail?.user?.first_name}
				</Anchor>
				on
				<Anchor
					href={`https://unsplash.com/photos/${imageDetail?.id}?utm_source=shani_portfolio&utm_medium=referral`}
					sizeClass="text-[10px]"
					isBold={true}
					target="_blank">unsplash</Anchor
				>
			</div>
		{/if}
	</div>
</div>
