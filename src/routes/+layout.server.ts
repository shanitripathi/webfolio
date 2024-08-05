import type { LayoutServerLoad } from './$types';
import type { UnsplashUsersPhotos } from '$lib/types/unsplashResponseTypes';
import cookie from 'cookie';
import { getSpotifyToken, getCurrentTrack, type SpotifyTrack } from '$helpers/spotify';

const unsplashUri = import.meta.env.VITE_UNSPLASH_URI;
const accessKey = import.meta.env.VITE_UNSPLASH_ACCESS_KEY;
const username = import.meta.env.VITE_UNSPLASH_USERNAME;
const url = `${unsplashUri}/users/${username}/photos?client_id=${accessKey}`;

export const load: LayoutServerLoad = async (input) => {
	const cookies = cookie.parse(input.request.headers.get('cookie') || '');
	const themeCookie = cookies['theme'] || 'dark';
	const clientId = cookies['clientId'];
	const isMessageSent = !!cookies['messageSent'];
	const pageRef = input.url.searchParams.get('ref') ?? '';

	let unsplashPhotos: UnsplashUsersPhotos = undefined;

	try {
		const response = await fetch(url);
		if (!response.ok) {
			throw new Error(`HTTP error! status: ${response.status} ${response.statusText}`);
		}
		unsplashPhotos = await response.json();
	} catch (e) {
		console.error('error fetching unsplash images ', e);
	}

	let currentTrack: SpotifyTrack = {};

	try {
		const spotifyAccessTokenResponse = await input.fetch('/api/spotify/accessToken');
		if (!spotifyAccessTokenResponse.ok) {
			throw new Error('error fetching spotify token');
		}
		const spotifyAccessToken = await spotifyAccessTokenResponse.json();
		const token = spotifyAccessToken.data.access_token;

		const spotifyNowPlayingResponse = await input.fetch('/api/spotify/nowPlaying', {
			headers: {
				Authorization: `Bearer ${token}`
			}
		});
		if (!spotifyNowPlayingResponse.ok) {
			throw new Error('error fetching current track');
		}
		const data = await spotifyNowPlayingResponse.json();
		if (data?.data) {
			currentTrack = data.data;
		}
	} catch (e) {
		console.error('error fetching spotify token', e);
	}

	return {
		theme: themeCookie,
		unsplashPhotos,
		clientId: clientId || '',
		isMessageSent,
		pageRef,
		currentTrack
	};
};
