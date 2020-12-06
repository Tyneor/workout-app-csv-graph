<script lang="ts">
  import { parse } from "papaparse";
  import { parseLiftingSet, strDateAndTime } from "../utils";
  import type Workout from "../Workout";

  let files: FileList;
  let fields = [];
  // let sets = [];
  let workouts: Map<number, Workout[]> = new Map();

  const upload = () => {
    const file = files[0];
    const reader = new FileReader();
    reader.readAsText(file);
    reader.onload = () => {
      const res = parse(reader.result as string, { header: true });
      console.log(res);

      fields = res.meta.fields;

      const sets = [];
      for (const set of res.data) {
        try {
          sets.push(parseLiftingSet(set));
        } catch (error) {
          console.error(error);
        }
      }

      // sets.forEach((set) => {
      //   const { Date: setDate, ...rest } = set;
      //   if (workouts.has(setDate)) {
      //     workouts.get(setDate).push(rest);
      //   } else {
      //     workouts.set(setDate, [rest]);
      //   }
      // });
      // workouts = new Map(workouts); //trigger reactivity

      // console.log(workouts);
    };
    reader.onerror = function () {
      console.error("Unable to read " + file.name);
    };
  };
</script>

<input bind:files type="file" accept=".csv" on:change={upload} />

<!-- {#each Array.from(workouts) as workout}workout + {workout[0]}{/each} -->

{#each [...workouts] as [date, sets]}
  <h2>{strDateAndTime(date)}</h2>
  <table>
    <thead>
      <tr>
        {#each fields as field}
          <th>{field}</th>
        {/each}
      </tr>
    </thead>
    <tbody>
      {#each sets as set}
        <tr>
          {#each fields as field}
            <td>{set[field]}</td>
          {/each}
        </tr>
      {/each}
    </tbody>
  </table>
{/each}
