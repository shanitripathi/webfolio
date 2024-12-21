<script lang="ts">
	interface Props {
		src?: string;
		alt?: string | null | undefined;
		width?: number;
		height?: number;
		srcSmall?: string;
		srcRegular?: string;
	}

	let {
		src = '',
		alt = '',
		width = 0,
		height = 0,
		srcSmall = '',
		srcRegular = ''
	}: Props = $props();
</script>

<img
	class="absolute object-cover w-full h-full"
	{alt}
	sizes="(max-width: 600px) 100vw, 50vw"
	srcset="{srcSmall} 600w, {srcRegular} 1400w"
	{src}
/>
