import type { UnsplashUsersPhotos } from '$lib/types/unsplashResponseTypes';
import { writable } from 'svelte/store';

export const unsplashImageStore = writable<UnsplashUsersPhotos | []>([]);
