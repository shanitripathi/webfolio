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
	class="absolute h-full w-full object-cover"
	{alt}
	sizes="(max-width: 600px) 100vw, 50vw"
	srcset="{srcSmall} 600w, {srcRegular} 1400w"
	{src}
/>
