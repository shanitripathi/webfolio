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
		const response = await fetch('https://api.spotify.com/v1/me/player/currently-playing', {
			method: 'GET',
			headers: {
				Authorization: `Bearer ${token}`
			}
		});

		if (response.status === 204) {
			// Handle 204 No Content response
			return new Response(JSON.stringify({ status: 'success', data: null }), {
				status: 200,
				headers: { 'Content-Type': 'application/json' }
			});
		}

		if (!response.ok) {
			const errorResponse = await response.json();
			customError.status = response.status;
			customError.message = `Error fetching current track: ${errorResponse.error.message}`;
			throw new Error(customError.message);
		}

		result = await response.json();

		return new Response(JSON.stringify({ status: 'success', data: result }), {
			status: 200,
			headers: { 'Content-Type': 'application/json' }
		});
	} catch (err: any) {
		return new Response(JSON.stringify({ status: 'fail', message: customError.message }), {
			status: customError.status,
			headers: { 'Content-Type': 'application/json' }
		});
	}
};
