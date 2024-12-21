<script lang="ts">
	import { createEventDispatcher, onDestroy, onMount } from 'svelte';

	interface Props {
		muted?: boolean;
		src: string;
		shouldPlay?: boolean;
		isNowPlaying?: boolean;
		replayVideo?: boolean;
		optionalClass?: string;
	}

	let {
		muted = true,
		src,
		shouldPlay = false,
		isNowPlaying = false,
		replayVideo = false,
		optionalClass = ''
	}: Props = $props();

	let currentTime = $state(0);
	let hls: any | undefined = undefined;
	let paused = $state(true);
	let videoElement: HTMLVideoElement | undefined = $state(undefined);
	let volume = $state(1);
	let hasInteracted = true;
	let fullscreen = false;
	let ref: HTMLDivElement | undefined = $state(undefined);

	const dispatch = createEventDispatcher();

	const handleVideoEnd = () => {
		if (!isNowPlaying) {
			currentTime = 0;
			videoElement?.play();
		}
	};

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
	$effect(() => {
		if (videoElement && isNowPlaying) {
			shouldPlay ? videoElement.play() : videoElement.pause();
		}
	});

	$effect(() => {
		if (currentTime > 60 && isNowPlaying) {
			dispatch('videoPreviewEnd');
		}
	});

	$effect(() => {
		if (src || replayVideo) {
			(async () => {
				await initializeHls();
			})();
		}
	});
</script>

<!-- svelte-ignore a11y_media_has_caption -->
<div bind:this={ref}>
	<video
		autoplay={true}
		{muted}
		bind:this={videoElement}
		bind:currentTime
		bind:paused
		bind:volume
		onended={handleVideoEnd}
		class={`h-full w-full object-cover ${optionalClass}`}
		controls={true}
		data-test-id="video-nowPlaying"
		id={isNowPlaying ? 'video-nowPlaying' : 'video-gating'}
		playsinline
		preload="metadata"
		{src}
	></video>
</div>
