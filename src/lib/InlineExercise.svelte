<script lang="ts">
	import { getBestSet } from './utils';

	export let name: string;
	export let sets: WorkoutSet[];

	const bestSet = getBestSet(sets);
</script>

<td>{sets.length} x {name}</td>
<td>{bestSet.weight} {bestSet.unit} x {bestSet.reps}</td>

<style>
	td:nth-child(1) {
		text-align: left;
	}

	td:nth-child(2) {
		text-align: right;
	}
</style>
