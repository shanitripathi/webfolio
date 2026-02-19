<script>
	import Anchor from '$components/Anchor/Anchor.svelte';
	import WorkSection from './WorkSection.svelte';
	import { DownloadIcon } from 'svelte-feather-icons';
	import resume from '$assets/others/resume.pdf';
</script>

<section class="flex flex-col">
	<h1 class="mb-8 flex items-center gap-2 text-2xl font-medium tracking-tighter">
		<span> my work </span>
		<span
			><Anchor href={resume} tooltipText="download my cv" download="shani-resume.pdf"
				><DownloadIcon size="18" /></Anchor
			></span
		>
	</h1>

	<p>On a mission to build products that people love and have some fun along the way!</p>

	<WorkSection>
		{#snippet heading()}
			Kitman Labs
		{/snippet}
		{#snippet subHeading()}
			Senior Software Engineer (2024 - present)
		{/snippet}
		{#snippet description()}
			I led several performance optimization initiatives that significantly improved the platform's
			efficiency, achieving a 40% reduction in initial bundle size, 14-minute faster CI test
			execution, and 50% faster hot module replacement. I also contributed to the migration of over
			750 Enzyme tests to Jest, which unblocked the project's upgrade to React 18 and improved
			long-term maintainability. Beyond technical improvements, I focused on enhancing user
			experience by implementing sticky filters and redesigning problematic UI sections to reduce
			friction and improve workflow efficiency.
			<br />
			<br />
			Additionally, I developed an Email Logs interface for product and support teams to monitor email
			delivery statuses, streamlining issue resolution and reducing back-and-forth with engineering.
			I also improved developer workflows by introducing GitHub composite actions for automatic review
			requests and implementing custom ESLint rules to enforce consistent styling practices across the
			codebase.
		{/snippet}
	</WorkSection>

	<WorkSection>
		{#snippet heading()}
			Axonista
		{/snippet}
		{#snippet subHeading()}
			Web Developer(2021 - 2024)
		{/snippet}
		{#snippet description()}
			As a web developer, I contributed to several high-profile projects. For an environmental
			streaming service, I utilized Vue.js to enhance usability, ensuring a seamless experience
			while keeping content fresh through Craft and Ediflo CMS. CMS
			<br />
			<br />
			In a widely-used streaming e-commerce app with millions of users, I played a key role in improving
			the frontend using Svelte, TypeScript, and GraphQL. My focus was on optimizing performance, particularly
			on older devices, and successfully integrating features for convenient in-app purchases.
			<br />
			<br />
			For another streaming website, I led the team in delivering the first version swiftly, leveraging
			SvelteKit, TypeScript, GraphQL, and Tailwind CSS to create a high-performing site that met strict
			performance benchmarks.
		{/snippet}
	</WorkSection>

	<WorkSection>
		{#snippet heading()}
			Chiku
		{/snippet}
		{#snippet subHeading()}
			Frontend Developer(2019 - 2024)
		{/snippet}
		{#snippet description()}
			I contributed to Chiku, a personal diary app available on Android and iOS. Using HTML, SCSS,
			JavaScript, ReactJS, Redux, Git, and AWS, I replicated a community platform to a website,
			integrated third-party libraries with backend REST APIs, and implemented Server-Side Rendering
			for improved SEO and faster loading times.
		{/snippet}
	</WorkSection>
</section>

<section>
	<h1 class="my-10 text-2xl font-medium tracking-tighter">personal projects</h1>
	<p>Projects that I've worked on in my free time, just for fun and learning!</p>
	<div class="md:ml-4">
		<hr class="my-6 border-neutral-800" />
		<ul class="md:ml-4">
			<li>
				<Anchor isBold={true} target="_blank" href="https://mailchan.app">Mailchan</Anchor>
			</li>
			<li>
				<Anchor isBold={true} target="_blank" href="https://shanitripathi.github.io/days/index.html"
					>Days</Anchor
				>
			</li>
			<li>
				<Anchor isBold={true} target="_blank" href="https://tender-kare-87b4ca.netlify.app/"
					>Capture</Anchor
				>
			</li>
			<li>
				<Anchor isBold={true} target="_blank" href="https://axonista-weather-app.vercel.app/"
					>Weather App</Anchor
				>
			</li>
			<li>
				<Anchor
					isBold={true}
					target="_blank"
					href="https://shanitripathi.github.io/assignment7/index.html">Hospital</Anchor
				>
			</li>
			<li>
				<Anchor
					isBold={true}
					target="_blank"
					href="https://shanitripathi.github.io/assignment6/index.html">Marketing Agency</Anchor
				>
			</li>
			<li>
				<Anchor isBold={true} target="_blank" href="https://shanitripathi.github.io"
					>Portfolio</Anchor
				>
			</li>

			<!-- <li>
				<Anchor isBold={true} target="_blank" href="https://peaceful-meninsky-20aa98.netlify.app/"
					>Gaming Hub</Anchor
				>
			</li> -->
		</ul>
	</div>
</section>
