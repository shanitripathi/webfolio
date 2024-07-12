<script lang="ts">
	import { createEventDispatcher, onDestroy, onMount } from 'svelte';

	export let muted = true;
	export let src: string;
	export let shouldPlay = false;
	export let isNowPlaying = false;
	export let replayVideo = false;
	export let optionalClass = '';

	let currentTime = 0;
	let hls: any | undefined = undefined;
	let paused = true;
	let videoElement: HTMLVideoElement;
	let volume = 1;
	let hasInteracted = true;
	let fullscreen = false;
	let ref: HTMLDivElement;

	const dispatch = createEventDispatcher();

	$: if (shouldPlay && videoElement && isNowPlaying) {
		videoElement.play();
	} else if (!shouldPlay && videoElement && isNowPlaying) {
		videoElement.pause();
	}

	$: {
		if (currentTime > 60 && isNowPlaying) {
			dispatch('videoPreviewEnd');
		}
	}

	const handleVideoEnd = () => {
		if (!isNowPlaying) {
			currentTime = 0;
			videoElement.play();
		}
	};

	$: src || replayVideo,
		(async () => {
			await initializeHls();
		})();

	onMount(async () => {
		await initializeHls();
		if (isNowPlaying) {
			if (videoElement) {
				videoElement.addEventListener('loadedmetadata', () => {
					setTimeout(() => {
						dispatch('videoLoaded');
					}, 500);
				});
			}
			setTimeout(() => {
				if (!hasInteracted) {
					dispatch('videoLoaded');
				}
			}, 2000);
		}
	});

	onDestroy(() => {
		if (videoElement && isNowPlaying) {
			videoElement.removeEventListener('loadedmetadata', () => {
				setTimeout(() => {
					dispatch('videoLoaded');
				}, 2000);
			});
		}
		if (videoElement) {
			videoElement.pause();
			videoElement.currentTime = 0;
		}
		hls?.destroy();
	});
	const initializeHls = async () => {
		if (!videoElement) {
			return;
		}

		if (
			videoElement.src.endsWith('mp4') ||
			videoElement.canPlayType('application/vnd.apple.mpegurl')
		) {
			return;
		}

		const Hls = (await import('hls.js')).default;

		if (!Hls.isSupported()) {
			console.error('HLS not supported.');

			return;
		}

		hls = new Hls({
			autoStartLoad: true,
			backBufferLength: 0, // max buffering of live video, 0 means minimally
			capLevelOnFPSDrop: true,
			capLevelToPlayerSize: true,
			fragLoadingMaxRetry: 3, // max retries, first is 500ms, 1s, 2s, 4s
			maxMaxBufferLength: 10, // cap on buffer size in seconds
			startLevel: -1 // start at the best quality given the screen size and estimated bandwidth
		});

		hls.attachMedia(videoElement);
		hls.subtitleDisplay = false;

		hls.on(Hls.Events.ERROR, (_: any, data: any) => {
			if (data.fatal && data.type === 'networkError') {
				// onError();
				// dispatch('networkError');
			}
		});

		hls.on(Hls.Events.MEDIA_ATTACHED, () => {
			hls.loadSource(src);
		});
	};
</script>

<!-- svelte-ignore a11y-media-has-caption -->
<div bind:this={ref}>
	<video
		autoplay={true}
		{muted}
		bind:this={videoElement}
		bind:currentTime
		bind:paused
		bind:volume
		on:ended={handleVideoEnd}
		class={`h-full w-full object-cover ${optionalClass}`}
		controls={true}
		data-test-id="video-nowPlaying"
		id={isNowPlaying ? 'video-nowPlaying' : 'video-gating'}
		playsinline
		preload="metadata"
		{src}
	/>
</div>
