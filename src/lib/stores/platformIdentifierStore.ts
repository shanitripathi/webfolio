import { writable } from 'svelte/store';

export const isIos = writable(false);
export const isMac = writable(false);
export const isFirefox = writable(false);
export const isAndroid = writable(false);
export const isSafari = writable(false);
