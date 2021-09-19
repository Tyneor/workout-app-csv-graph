<script lang="ts">
  import { db, auth } from "../firebase";
  import mockedWorkouts from "../../data/workouts.json";
  import CSVInput from "./CSVInput.svelte";

  export let uid: string;
  export let displayName: string;
  export let photoURL: string;

  const deleteAllUserWorkouts = async (uid) => {
    const snapshot = await db
      .collection("workouts")
      .where("uid", "==", uid)
      .get();
    snapshot.forEach((doc) => doc.ref.delete());
  };

  const addMockedWorkout = (uid) => {
    mockedWorkouts.forEach((_workout) => {
      const workout = Object.assign(
        { uid, startingDate: new Date() },
        _workout
      );
      db.collection("workouts").add(workout);
    });
  };
</script>

<style>
  nav {
    background-color: aqua;
  }
</style>

<nav>
  <h3>Hi {displayName ?? 'User'} !</h3>

  <div>
    <button on:click={() => auth.signOut()}>Logout</button>
    <button on:click={() => deleteAllUserWorkouts(uid)}>delete all my workouts</button>
    <button on:click={() => addMockedWorkout(uid)}>add mocked workouts</button>
    <CSVInput {uid} />
  </div>
  {#if photoURL}<img src={photoURL} width="100" alt="user avatar" />{/if}
</nav>
