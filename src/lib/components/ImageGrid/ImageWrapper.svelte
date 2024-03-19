<script lang="ts">
	import Anchor from '$components/Anchor/Anchor.svelte';
	import Image from '$components/Image.svelte';
	import type { UnsplashPhoto } from '$lib/types/unsplashResponseTypes';
	import { onDestroy } from 'svelte';

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
	class={`[&:nth-child(1)]:row-span-2 [&:nth-child(3)]:row-span-2 md:[&:nth-child(1)]:row-span-2 md:[&:nth-child(3)]:row-span-2 md:[&:nth-child(4)]:row-span-2 bg-shadow  rounded-md relative overflow-hidden`}
>
	<Image
		src={imageDetail?.urls?.regular}
		srcSmall={imageDetail?.urls?.small}
		srcRegular={imageDetail?.urls?.regular}
		alt={imageDetail?.alt_description}
	/>
	{#if shouldShowCredit}
		<!-- Image Credit for Unsplash Images -->
		<div
			class="absolute bottom-0 w-full p-2 left-0 text-[10px] bg-gradient-to-t from-main to-transparent"
		>
			photo by <Anchor
				href={`https://unsplash.com/@${imageDetail?.user?.username}?utm_source=shani_portfolio&utm_medium=referral`}
				sizeClass={'text-[10px]'}
				isBold={true}
				target="_blank"
			>
				{imageDetail?.user?.first_name}
			</Anchor>
			on <Anchor
				href={`https://unsplash.com/photos/${imageDetail?.id}?utm_source=shani_portfolio&utm_medium=referral`}
				sizeClass={'text-[10px]'}
				isBold={true}
				target="_blank">unsplash</Anchor
			>
		</div>
	{/if}
</div>
