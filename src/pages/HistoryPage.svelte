<script lang="ts">
  import { db } from "../firebase";
  import InlineWorkout from "../history/InlineWorkout.svelte";

  // User ID passed from parent
  export let uid;

  let workouts = [];
  db.collection("workouts")
    .where("uid", "==", uid)
    .orderBy("startingDate", "desc")
    .onSnapshot((querySnapshot) => {
      workouts = querySnapshot.docs.map((doc) => doc.data());
    });

  const inlineProps = (workout) => {
    const { uid, notes, ...rest } = workout;
    return rest;
  };

  // $: console.log(workouts);
</script>

<style>
  .container {
    display: grid;
    gap: 10px;
  }
</style>

<div class="container">
  {#each workouts as workout}
    <InlineWorkout {...inlineProps(workout)} />
  {/each}
</div>
