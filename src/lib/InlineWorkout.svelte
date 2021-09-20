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

<style lang="scss">
	div {
		background-color: #181818;
		padding: 1rem;
		border-radius: 5px;
		cursor: pointer;

		&:hover,
		&:active {
			background-color: #242424;

			h1 {
				color: var(--accent-color);
			}
		}

		h1 {
			font-size: 1rem;
			font-weight: 500;
		}
		h2 {
			font-size: 0.8rem;
			font-weight: 400;
			color: #aaa;
		}

		table {
			width: 100%;
			margin-top: 0.3rem;
			font-size: 0.9rem;

			th:nth-child(1) {
				text-align: left;
			}

			th:nth-child(2) {
				text-align: right;
			}
		}
	}
</style>
