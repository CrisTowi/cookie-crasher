import { writable } from 'svelte/store';

export const points = writable(7);
export const finalPoints = writable(0);
export const started = writable(false);
export const time = writable(10);
