<script lang="ts">
	import Anchor from '$lib/components/Anchor/Anchor.svelte';
	import Profile from '$assets/images/profile-bans.jpg';
	import { InstagramIcon, LinkedinIcon, MailIcon, GithubIcon } from 'svelte-feather-icons';
	import { ageCalculator } from '$lib/helpers/ageCalculator';
	import constants from '$helpers/constants';
	import ImageGrid from '$components/ImageGrid/ImageGrid.svelte';
	import { unsplashImageStore } from '$stores/unsplashImageStore';
	import type { SpotifyTrack } from '$helpers/spotify';
	import NowPlayingSong from './NowPlayingSong.svelte';

	export let nowPlaying: SpotifyTrack = {};

	const age = ageCalculator(new Date('1996-01-07'));
	$: unsplashPhotos = $unsplashImageStore ? $unsplashImageStore.slice(0, 6) : $unsplashImageStore;
</script>

<header class="flex flex-col gap-6 md:flex-row md:items-center">
	<div class="h-[120px] w-[120px] overflow-hidden rounded-full border border-brightness">
		<img class="h-full w-full object-cover" src={Profile} alt="profile" />
	</div>
	<div class="text-xl">
		<div class="whitespace-pre-line">
			<span><Anchor isBold={true} sizeClass="text-xl">hey, I'm shani 👋</Anchor></span> I'm a web developer
			and tech enthusiast.
		</div>
		<div class="mt-4 flex gap-3">
			<Anchor href={constants.github} target="_blank" tooltipText="my github"
				><GithubIcon size="20" /></Anchor
			>

			<Anchor href={constants.linkedin} target="_blank" tooltipText="my linkedin"
				><LinkedinIcon size="20" /></Anchor
			>

			<Anchor target="_blank" href={constants.instagram} tooltipText="my instagram"
				><InstagramIcon size="20" /></Anchor
			>

			<Anchor href={constants.mail} tooltipText="send me an email"><MailIcon size="20" /></Anchor>
		</div>
		<div class="mt-4 flex w-fit">
			<NowPlayingSong {nowPlaying} />
		</div>
	</div>
</header>

<section class="mt-8 flex flex-col gap-3 text-sm text-midtone">
	<p>
		Born {age} years ago, I develop websites 💻 and when I'm not doing that, you'll often find me behind
		the lens, capturing folks around me 📸.
	</p>
	<p>
		I'm also a gym enthusiast 🏋️‍♂️, dedicated to maintaining a healthy lifestyle and staying active
		outdoors whenever I can.
	</p>

	<p>
		As a tech enthusiast, I'm here to push the boundaries of creativity and innovation in web
		development until AI takes my job (but let's hope that's not anytime soon!).
	</p>
	<p>
		If you're interested in collaborating on a project or just want to connect, feel free to reach
		out! You can catch me over <Anchor isBold={true} href={constants.mail}>email ✉️</Anchor>, <Anchor
			isBold={true}
			target="_blank"
			href={constants.instagram}>instagram</Anchor
		>, or <Anchor isBold={true} href={'/messageme'}>message me anoymously 🕵️‍♂️</Anchor> . Let's build something
		awesome together! 🌲
	</p>
</section>

{#if unsplashPhotos && unsplashPhotos.length > 0}
	<section class="mt-6">
		<ImageGrid images={unsplashPhotos} />
	</section>
{/if}
