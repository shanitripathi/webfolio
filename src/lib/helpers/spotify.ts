export type SpotifyTrack =
	| {
			timestamp: number;
			context: {
				external_urls: {
					spotify: string;
				};
				href: string;
				type: string;
				uri: string;
			};
			progress_ms: number;
			item: {
				album: {
					album_type: string;
					artists: Array<{
						external_urls: {
							spotify: string;
						};
						href: string;
						id: string;
						name: string;
						type: string;
						uri: string;
					}>;
					available_markets: string[];
					external_urls: {
						spotify: string;
					};
					href: string;
					id: string;
					images: Array<{
						height: number;
						url: string;
						width: number;
					}>;
					name: string;
					release_date: string;
					release_date_precision: string;
					total_tracks: number;
					type: string;
					uri: string;
				};
				artists: Array<{
					external_urls: {
						spotify: string;
					};
					href: string;
					id: string;
					name: string;
					type: string;
					uri: string;
				}>;
				available_markets: string[];
				disc_number: number;
				duration_ms: number;
				explicit: boolean;
				external_ids: {
					isrc: string;
				};
				external_urls: {
					spotify: string;
				};
				href: string;
				id: string;
				is_local: boolean;
				name: string;
				popularity: number;
				preview_url: string;
				track_number: number;
				type: string;
				uri: string;
			};
			currently_playing_type: string;
			actions: {
				disallows: {
					resuming: boolean;
					skipping_prev: boolean;
				};
			};
			is_playing: boolean;
	  }
	| Record<string, never>;

export const getSpotifyToken = async () => {
	let token = '';
	try {
		const response = await fetch('https://accounts.spotify.com/api/token', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/x-www-form-urlencoded'
			},
			body: new URLSearchParams({
				grant_type: 'client_credentials',
				client_id: import.meta.env.VITE_SPOTIFY_CLIENT_ID,
				client_secret: import.meta.env.VITE_SPOTIFY_CLIENT_SECRET
			}).toString()
		});
		if (!response.ok) {
			console.log(
				'this is the response',
				import.meta.env.VITE_SPOTIFY_CLIENT_ID,
				import.meta.env.VITE_SPOTIFY_CLIENT_SECRET
			);
			throw new Error('error fetching spotify token');
		}
		const data = await response.json();
		console.log('this is the data', data);
		token = (data.access_token as string) ?? '';
	} catch (err) {
		console.log('error fetching spotify token', err);
	} finally {
		return token;
	}
};

export const getCurrentTrack = async (token: string) => {
	let result: SpotifyTrack | Record<string, never> = {};
	try {
		const response = await fetch('https://api.spotify.com/v1/me/player/currently-playing', {
			method: 'GET',
			headers: {
				Authorization: `Bearer ${token}`
			}
		});
		if (!response.ok) {
			console.log('this is the response', response);
			throw new Error('error fetching current track');
		}
		result = await response.json();
		// console.log('this is the result', result);
	} catch (err) {
		// console.error(err);
	} finally {
		return result;
	}
};
