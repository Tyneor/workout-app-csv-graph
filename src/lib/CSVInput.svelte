<script lang="ts">
	import { parse } from 'papaparse';
	import { parseSet, ParsingError } from './parsing';
	import { workouts } from './stores';

	let files: FileList;
	let fields = [];

	const upload = () => {
		const file = files[0];
		const reader = new FileReader();
		reader.readAsText(file);
		reader.onload = () => {
			const res = parse(reader.result as string, { header: true });
			console.log(res);

			fields = res.meta.fields;

			const _workouts: Map<number, WorkoutSession> = new Map();
			for (const line of res.data) {
				try {
					const { date, workoutName, exerciseName, ...set } = parseSet(line);
					if (_workouts.has(date)) {
						const workout = _workouts.get(date);
						const exercise = workout.exercises.find((ex) => ex.name === exerciseName);
						if (exercise) {
							exercise.sets.push(set);
						} else {
							workout.exercises.push({ name: exerciseName, sets: [set] });
						}
					} else {
						const workout: WorkoutSession = {
							name: workoutName,
							startingDate: new Date(date),
							exercises: [{ name: exerciseName, sets: [set] }]
						};
						_workouts.set(date, workout);
					}
				} catch (error) {
					if (error instanceof ParsingError) {
						console.error('This set is invalid : ', line);
					}
				}
			}
			workouts.set(Array.from(_workouts.values()));
		};

		reader.onerror = function () {
			console.error('Unable to read ' + file.name);
		};
	};
</script>

<button>
	<label>
		Load workouts from a CSV file
		<input bind:files type="file" accept=".csv" on:change={upload} />
	</label>
</button>

<style lang="scss">
	label {
		display: block;
		padding: 1rem;
		font-size: 1rem;
		letter-spacing: 0.8px;
		font-weight: 600;

		input {
			display: none;
		}
	}
</style>
