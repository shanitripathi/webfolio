<script lang="ts">
	import Anchor from '$lib/components/Anchor/Anchor.svelte';
	import Profile from '$assets/images/profile-bans.jpg';
	import { InstagramIcon, LinkedinIcon, MailIcon, GithubIcon } from 'svelte-feather-icons';
	import { ageCalculator } from '$lib/helpers/ageCalculator';
	import constants from '$helpers/constants';

	const age = ageCalculator(new Date('1996-01-07'));
</script>

<header class="flex gap-6 md:items-center md:flex-row flex-col">
	<div class="w-[120px] h-[120px] rounded-full overflow-hidden border border-brightness">
		<img class="w-full h-full object-cover" src={Profile} alt="profile" />
	</div>
	<div class="text-xl">
		<div class="whitespace-pre-line">
			<span><Anchor isBold={true} sizeClass="text-xl">hey, I'm shani 👋</Anchor></span> I'm a web developer
			and tech enthusiast.
		</div>
		<div class="flex gap-3 pt-4">
			<Anchor href={constants.github} target="_blank"><GithubIcon size="20" /></Anchor>

			<Anchor href={constants.linkedin} target="_blank"><LinkedinIcon size="20" /></Anchor>

			<Anchor target="_blank" href={constants.instagram}><InstagramIcon size="20" /></Anchor>

			<Anchor href={constants.mail}><MailIcon size="20" /></Anchor>
		</div>
	</div>
</header>

<section class="flex flex-col gap-3 mt-8 text-midtone text-sm">
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
		out! You can catch me over <Anchor isBold={true} href={constants.mail}>email ✉️</Anchor> or <Anchor
			isBold={true}
			target="_blank"
			href={constants.instagram}>instagram</Anchor
		>. Let's build something awesome together! 🌲
	</p>
</section>
