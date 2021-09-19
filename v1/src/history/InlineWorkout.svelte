<script lang="ts">
  import { timestampToDateFormatter } from "../utils";
  import type { Set } from "../utils";
  import InlineExercise from "./InlineExercise.svelte";

  interface Exercise {
    name: string;
    notes?: string;
    sets: Set[];
  }

  export let startingDate;
  export let name: string;
  export let exercises: Exercise[];

  const dateFormatter = timestampToDateFormatter({
    day: "numeric",
    month: "long",
  });

  const inlineProps = (exercise: Exercise) => {
    const { notes, ...rest } = exercise;
    return rest;
  };
</script>

<div>
  <h1><b>{name}</b></h1>
  <h2>{dateFormatter(startingDate)}</h2>

  <table>
    <thead>
      <tr>
        <th>Exercise</th>
        <th>Best set</th>
      </tr>
    </thead>
    <tbody>
      {#each exercises as exercise}
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
