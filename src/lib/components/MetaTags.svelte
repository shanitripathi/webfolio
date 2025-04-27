<script lang="ts">
	interface Props {
		title?: string;
		description?: string;
	}

	let {
		title = 'Shani Tripathi - Developer, Photographer, and a Person',
		description = "Hey, this is Shani Tripathi's portfolio - Developer, photographer, and a person"
	}: Props = $props();
</script>

<svelte:head>
	<title>{title}</title>
	<!-- <link rel="icon" href={Profile} type="image/x-icon" /> -->
	<meta name="description" content={description} />
	<meta
		name="keywords"
		content="shani tripathi, portfolio, shani tripathi portfolio, software developer, web developer, frontend developer, software engineer, programming"
	/>
	<meta name="author" content="Shani Tripathi" />
	<meta property="og:title" content={title} />
	<meta property="og:description" content={description} />
	<!-- <meta property="og:image" content="URL_TO_IMAGE" /> -->
	<!-- <meta property="og:url" content="URL_TO_YOUR_PORTFOLIO" />
	<meta name="twitter:card" content="summary_large_image" /> -->
</svelte:head>
