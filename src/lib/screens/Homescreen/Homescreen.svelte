<script lang="ts">
	import Anchor from '$lib/components/Anchor/Anchor.svelte';
	import Profile from '$assets/images/profile-bans.jpg';
	import { ageCalculator } from '$lib/helpers/ageCalculator';

	const age = ageCalculator(new Date('1996-01-07'));
</script>

<header class="flex gap-6 items-start md:flex-row flex-col">
	<div class="w-[120px] h-[120px] rounded-full overflow-hidden">
		<img class="w-full h-full object-cover scale-150 object-top" src={Profile} alt="profile" />
	</div>
	<div class="text-xl mt-2">
		<span><Anchor isBold={true} sizeClass="text-xl">hey, I'm shani 👋</Anchor></span> I'm a web developer
		and tech enthusiast.
	</div>
</header>

<section class="flex flex-col gap-3 mt-8 text-stone-300">
	<p class="text-base">
		Born {age} years ago, I develop websites and when I'm not doing that, you'll often find me behind
		the lens, capturing folks around me.
	</p>
	<p>
		I'm also a gym enthusiast, dedicated to maintaining a healthy lifestyle and staying active
		outdoors whenever I can.
	</p>

	<p>
		As a tech enthusiast, I'm here to push the boundaries of creativity and innovation in web
		development until AI takes my job (but let's hope that's not anytime soon!).
	</p>
	<p>
		If you're interested in collaborating on a project or just want to connect, feel free to reach
		out! You can catch me over <Anchor isBold={true} href="/contact">email</Anchor> or <Anchor
			isBold={true}
			target="_blank"
			href="https://www.instagram.com/shani__tripathi/?ref=9gag&hl=hi">instagram</Anchor
		>. Let's build something awesome together! 💻📸🏋️‍♂️🌲
	</p>
</section>
