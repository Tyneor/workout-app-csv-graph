<script lang="ts">
  import type { Set } from "../utils";
  import { getBestSet } from "../utils";

  export let name: string;
  export let sets: Set[];

  const bestSet = getBestSet(sets);
</script>

<style>
  td:nth-child(1) {
    text-align: left;
  }

  td:nth-child(2) {
    text-align: right;
  }
</style>

<td>{sets.length} x {name}</td>
<td>{bestSet.weight} {bestSet.unit} x {bestSet.reps}</td>
