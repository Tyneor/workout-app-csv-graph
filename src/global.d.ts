/// <reference types="@sveltejs/kit" />

interface WorkoutSession {
	startingDate: Date;
	name: string;
	exercises: Exercise[];
}

interface Exercise {
	name: string;
	notes?: string;
	sets: Set[];
}

interface WorkoutSet {
	reps: number;
	weight: number;
	unit: string;
	rpe?: number;
}
