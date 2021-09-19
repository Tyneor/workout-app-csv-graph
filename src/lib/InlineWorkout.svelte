<script lang="ts">
	import { timestampToDateFormatter } from './utils';
	import InlineExercise from './InlineExercise.svelte';

	export let workoutSession: WorkoutSession;

	const dateFormatter = timestampToDateFormatter({
		day: 'numeric',
		month: 'long',
		year: 'numeric'
	});

	const inlineProps = (exercise: Exercise) => {
		const { notes, ...rest } = exercise;
		return rest;
	};
</script>

<div>
	<h1><b>{workoutSession.name}</b></h1>
	<h2>{dateFormatter(workoutSession.startingDate)}</h2>

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
					<InlineExercise {...inlineProps(exercise)} />
				</tr>
			{/each}
		</tbody>
	</table>
</div>

<style>
	div {
		border: 1px solid black;
		padding: 10px;
		border-radius: 5px;
	}

	h1 {
		font-size: medium;
	}
	h2 {
		font-size: small;
	}

	table {
		width: 100%;
	}

	table th:nth-child(1) {
		text-align: left;
	}

	table th:nth-child(2) {
		text-align: right;
	}
</style>
