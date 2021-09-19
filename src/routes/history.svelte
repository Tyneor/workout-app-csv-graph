<script>
	import { workouts } from '$lib/store';
	import InlineWorkout from '$lib/InlineWorkout.svelte';
</script>

<svelte:head>
	<title>History</title>
</svelte:head>

<section>
	<h1>History</h1>

	{#each $workouts as workoutSession}
		<InlineWorkout {workoutSession} />
	{/each}
</section>
