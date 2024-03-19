<script lang="ts">
	export let src = '';
	export let alt: string | null | undefined = '';
	export let width = 0;
	export let height = 0;
	export let srcSmall = '';
	export let srcRegular = '';
</script>

<img
	class="w-full h-full object-cover absolute"
	{alt}
	sizes="(max-width: 600px) 100vw, 50vw"
	srcset="{srcSmall} 600w, {srcRegular} 1400w"
	{src}
/>
