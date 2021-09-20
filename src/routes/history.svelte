<script lang="ts">
	import { routeTitle } from '$lib/stores';
	import { workouts } from '$lib/stores';
	import InlineWorkout from '$lib/InlineWorkout.svelte';
	routeTitle.set('History');
</script>

<section>
	{#each $workouts as workoutSession}
		<InlineWorkout {workoutSession} />
	{/each}
</section>

<style>
	section {
		padding: 0 1rem;
		display: grid;
		gap: 10px;
	}
</style>
