<script lang="ts">
  import { parse } from "papaparse";
  import { db } from "../firebase";
  import { parseSet, ParsingError } from "../parsing";

  export let uid;

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

      const workouts: Map<number, any> = new Map();
      for (const line of res.data) {
        try {
          const { date, workoutName, exerciseName, ...set } = parseSet(line);
          if (workouts.has(date)) {
            const workout = workouts.get(date);
            const exercise = workout.exercises.find(
              (ex) => ex.name === exerciseName
            );
            if (exercise) {
              exercise.sets.push(set);
            } else {
              workout.exercises.push({ name: exerciseName, sets: [set] });
            }
          } else {
            const workout = {
              uid,
              name: workoutName,
              startingDate: new Date(date),
              exercises: [{ name: exerciseName, sets: [set] }],
            };
            workouts.set(date, workout);
          }
        } catch (error) {
          if (error instanceof ParsingError) {
            console.error("This set is invalid : ", line);
          }
        }
      }

      workouts.forEach((workout) => {
        db.collection("workouts").add(workout);
      });
    };

    reader.onerror = function () {
      console.error("Unable to read " + file.name);
    };
  };
</script>

<style>
  input {
    display: none;
  }
</style>

<button>
  <label>
    add workouts from csv
    <input bind:files type="file" accept=".csv" on:change={upload} />
  </label>
</button>
