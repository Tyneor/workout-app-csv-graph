<script lang="ts">
  import Workout from "./Workout.svelte";
  import { db } from "./firebase";
  import { collectionData } from "rxfire/firestore";
  import { startWith } from "rxjs/operators";

  // User ID passed from parent
  export let uid;

  // Form Text
  let name = "Cool Workout";

  // Query requires an index, see screenshot below
  const query = db.collection("workouts").where("uid", "==", uid);
  // .orderBy("created");

  const workouts = collectionData(query, "id").pipe(startWith([]));
  console.log($workouts);

  function add() {
    db.collection("workouts").add({
      uid,
      name,
      date: new Date(),
    });
    name = "";
  }
</script>

<style>
  input {
    display: block;
  }
</style>

<ul>
  {#each $workouts as workout}
    <Workout {...workout} />
  {/each}
</ul>

<input bind:value={name} />

<button on:click={add}>Add Workout</button>
