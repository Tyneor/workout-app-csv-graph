<script context="module" lang="ts">
	export const load = ({ page }) => {
		const index = page.params.index;
		return { props: { index } };
	};
</script>

<script lang="ts">
	import { timestampToDateFormatter } from '$lib/utils';
	import { routeTitle, workouts } from '$lib/stores';
	import InlineExercise from '$lib/InlineExercise.svelte';

	export let index = 0;

	const dateFormatter = timestampToDateFormatter({
		day: 'numeric',
		month: 'long',
		year: 'numeric'
	});

	let workoutSession = $workouts[index];
	routeTitle.set(workoutSession.name);
</script>

<section>
	{dateFormatter(workoutSession.startingDate)}

	<table>
		<thead>
			<tr>
				<th>Exercise</th>
				<th>Best set</th>
			</tr>
		</thead>
		<tbody>
			{#each workoutSession.exercises as exercise}
				<tr>
					<InlineExercise {...exercise} />
				</tr>
			{/each}
		</tbody>
	</table>
</section>
