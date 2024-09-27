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
	<!-- <WorkSection>
		<svelte:fragment slot="heading">Axonista</svelte:fragment>
		<svelte:fragment slot="subHeading">Web Developer(2021 - present)</svelte:fragment>
		<svelte:fragment slot="description">
			In my role as a web developer at Axonista, I've been involved in the development and
			maintenance of several client projects: For the Waterbear project, I was responsible for
			managing the frontend using Vue.js, ensuring smooth navigation and user experience.
			<br />
			Additionally, I handled content management tasks using Craft and Ediflo CMS, ensuring the website's
			content remained up-to-date and engaging.
			<br />
			<br />
			At QVC Comcast TV App, I played a key role in maintaining the frontend using modern technologies
			like Svelte, TypeScript, and GraphQL. I focused on optimizing the performance of the app, particularly
			on older Comcast devices, and successfully integrated a transactional experience for in-app purchases,
			enhancing user convenience.
			<br />
			<br />
			For the QVC Streaming Website project, I led the delivery of the Minimum Viable Product (MVP) within
			a tight timeframe. Leveraging technologies like SvelteKit, TypeScript, GraphQL, and Tailwind CSS,
			I built a high-performing website that achieved impressive Lighthouse scores through meticulous
			performance optimization efforts.
		</svelte:fragment>
	</WorkSection> -->

	<!-- <WorkSection>
		<svelte:fragment slot="heading">Chiku</svelte:fragment>
		<svelte:fragment slot="subHeading">Frontend Developer(2019 - 2020)</svelte:fragment>
		<svelte:fragment slot="description">
			I contributed to Chiku, a personal diary app available on Android and iOS. Using HTML, SCSS,
			JavaScript, ReactJS, Redux, Git, and AWS, I replicated a community platform to a website,
			integrated third-party libraries with backend REST APIs, and implemented Server-Side Rendering
			for improved SEO and faster loading times.
		</svelte:fragment>
	</WorkSection> -->
</section>

<section>
	<!-- <h1 class="my-10 text-2xl font-medium tracking-tighter">personal projects</h1>
	<p>Projects that I've worked on in my free time, just for fun and learning!</p> -->
	<div class="md:ml-4">
		<hr class="my-6 border-neutral-800" />
		<ul class="md:ml-4">
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
