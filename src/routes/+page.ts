import { browser } from '$app/environment';
import type { UnsplashUsersPhotos } from '$lib/types/unsplashResponseTypes';
import { unsplashImageStore } from '$stores/unsplashImageStore';
import { get } from 'svelte/store';

const unsplashUri = import.meta.env.VITE_UNSPLASH_URI;
const accessKey = import.meta.env.VITE_UNSPLASH_ACCESS_KEY;
const username = import.meta.env.VITE_UNSPLASH_USERNAME;
const url = `${unsplashUri}/users/${username}/photos?client_id=${accessKey}`;

export const load = async () => {
	const savedUnsplashPhotos = get(unsplashImageStore);
	const arePhotosSaved = savedUnsplashPhotos && savedUnsplashPhotos.length > 0 && browser;
	let unsplashPhotos: UnsplashUsersPhotos = undefined;
	if (!arePhotosSaved) {
		try {
			const response = await fetch(url);
			if (!response.ok) {
				throw new Error(`HTTP error! status: ${response.status} ${response.statusText}`);
			}
			unsplashPhotos = await response.json();
		} catch (e) {
			console.error('error fetching unsplash images', e);
		}
		unsplashImageStore.set(unsplashPhotos);
	}
};
