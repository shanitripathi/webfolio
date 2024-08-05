import type { SpotifyTrack } from '$helpers/spotify';

export const GET = async ({ request }) => {
	let result: SpotifyTrack | Record<string, never> = {};
	const customError = {
		status: 500,
		message: 'Something went wrong'
	};
	try {
		const token = request.headers.get('Authorization')?.split('Bearer ')[1];

		if (!token) {
			customError.status = 400;
			customError.message = 'No token provided';
			throw new Error(customError.message);
		}
		const fetchCurrentlyPlaying = fetch('https://api.spotify.com/v1/me/player/currently-playing', {
			method: 'GET',
			headers: {
				Authorization: `Bearer ${token}`
			}
		});

		const fetchRecentlyPlayed = fetch('https://api.spotify.com/v1/me/player/recently-played', {
			method: 'GET',
			headers: {
				Authorization: `Bearer ${token}`
			}
		});

		const [currentlyPlayingResponse, recentlyPlayedResponse] = await Promise.all([
			fetchCurrentlyPlaying,
			fetchRecentlyPlayed
		]);

		//api.spotify.com/v1/me/player/recently-played

		if (currentlyPlayingResponse.status === 204 && recentlyPlayedResponse.status === 204) {
			// Handle 204 No Content response
			return new Response(JSON.stringify({ status: 'success', data: null }), {
				status: 200,
				headers: { 'Content-Type': 'application/json' }
			});
		}

		if (!currentlyPlayingResponse.ok) {
			const errorResponse = await currentlyPlayingResponse.json();
			customError.status = currentlyPlayingResponse.status;
			customError.message = `Error fetching current track: ${errorResponse.error.message}`;
			throw new Error(customError.message);
		}
		const currentlyPlayingData =
			currentlyPlayingResponse.status !== 204 && (await currentlyPlayingResponse.json());
		const recentlyPlayedData = await recentlyPlayedResponse.json();

		return new Response(
			JSON.stringify({
				status: 'success',
				data: {
					currentlyPlaying: currentlyPlayingData,
					recentlyPlayed: recentlyPlayedData
				}
			}),
			{
				status: 200,
				headers: { 'Content-Type': 'application/json' }
			}
		);
	} catch (err: any) {
		return new Response(JSON.stringify({ status: 'fail', message: customError.message }), {
			status: customError.status,
			headers: { 'Content-Type': 'application/json' }
		});
	}
};
