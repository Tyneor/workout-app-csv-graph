import { writable } from 'svelte/store';
import type { Writable } from 'svelte/store';

export const routeTitle = writable('');
export const workouts: Writable<WorkoutSession[]> = writable([]);
