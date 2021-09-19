<script lang="ts">
  import InlineWorkout from "../history/InlineWorkout.svelte";
  import { workouts } from "../stores";

  const inlineProps = (workout) => {
    const { uid, notes, ...rest } = workout;
    return rest;
  };

  $: console.log($workouts);
</script>

<style>
  .container {
    display: grid;
    gap: 10px;
  }
</style>

<div class="container">
  {#each $workouts as workout}
    <InlineWorkout {...inlineProps(workout)} />
  {/each}
</div>
