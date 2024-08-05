const {
	VITE_SPOTIFY_CLIENT_ID: clientId,
	VITE_SPOTIFY_CLIENT_SECRET: clientSecret,
	VITE_SPOTIFY_REFRESH_TOKEN: refreshToken
} = import.meta.env;

const basic = Buffer.from(`${clientId}:${clientSecret}`).toString('base64');
const TOKEN_ENDPOINT = `https://accounts.spotify.com/api/token`;

export const GET = async (request) => {
	const customError = {
		status: 500,
		message: 'Something Went wrong'
	};

	try {
		const response = await fetch(TOKEN_ENDPOINT, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/x-www-form-urlencoded',
				Authorization: `Basic ${basic}`
			},
			body: new URLSearchParams({
				grant_type: 'refresh_token',
				refresh_token: refreshToken
			}).toString()
		});
		if (!response.ok) {
			customError.status = response.status;
			customError.message = 'error fetching spotify token';
			throw new Error('error fetching spotify token');
		}
		const data = await response.json();
		return new Response(
			JSON.stringify({
				status: 'success',
				data: {
					access_token: data.access_token
				}
			}),
			{
				status: 200,
				headers: { 'Content-Type': 'application/json' }
			}
		);
	} catch (e: any) {
		return new Response(JSON.stringify({ status: 'fail', message: customError.message }), {
			status: customError.status
		});
	}
};
