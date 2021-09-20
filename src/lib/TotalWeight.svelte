<script lang="ts">
	import Chart from 'svelte-frappe-charts';
	import { timestampToDateFormatter, totalWeight } from './utils';
	import { workouts } from './stores';

	const dateFormatter = timestampToDateFormatter({
		day: 'numeric',
		month: 'numeric'
	});

	let data = {
		labels: ['Sun', 'Mon', 'Tues', 'Wed', 'Thurs', 'Fri', 'Sat'],
		datasets: [
			{
				values: [10, 12, 3, 9, 8, 15, 9]
			}
		]
	};

	$: if ($workouts.length > 0) {
		let dates = $workouts.map((workout) => dateFormatter(workout.startingDate));
		let totalWeights = $workouts.map((workout) => totalWeight(workout.exercises));
		data = {
			labels: dates,
			datasets: [{ values: totalWeights }]
		};
	}

	// let data = {
	//   labels: ["Sun", "Mon", "Tues", "Wed", "Thurs", "Fri", "Sat"],
	//   datasets: [
	//     {
	//       values: [10, 12, 3, 9, 8, 15, 9],
	//     },
	//   ],
	// };
</script>

<Chart {data} type="line" />
