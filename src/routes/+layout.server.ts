import type { LayoutServerLoad } from './$types';
import type { UnsplashUsersPhotos } from '$lib/types/unsplashResponseTypes';
import cookie from 'cookie';

const unsplashUri = import.meta.env.VITE_UNSPLASH_URI;
const accessKey = import.meta.env.VITE_UNSPLASH_ACCESS_KEY;
const username = import.meta.env.VITE_UNSPLASH_USERNAME;
const url = `${unsplashUri}/users/${username}/photos?client_id=${accessKey}`;

export const load: LayoutServerLoad = async (input) => {
	const cookies = cookie.parse(input.request.headers.get('cookie') || '');
	const themeCookie = cookies['theme'] || 'dark';
	const clientId = cookies['clientId'];

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

	return {
		theme: themeCookie,
		unsplashPhotos,
		clientId: clientId || ''
	};
};
