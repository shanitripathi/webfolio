<script lang="ts">
	import MetaTags from '$components/MetaTags.svelte';
	import Homescreen from '$lib/screens/Homescreen/Homescreen.svelte';
	import { unsplashImageStore } from '$stores/unsplashImageStore';
	import type { PageData } from './$types';

	interface Props {
		data: PageData;
	}

	let { data }: Props = $props();
	$unsplashImageStore = data.unsplashPhotos;
</script>

<MetaTags />
<Homescreen spotifyData={data.spotifyData} />
