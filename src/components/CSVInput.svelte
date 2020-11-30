<script lang="ts">
  import { parse } from "papaparse";

  let files: FileList;
  let fields = [];
  // let sets = [];
  let workouts: Map<number, any[]> = new Map();

  const convertDate = (date) => {
    function pad(s) {
      return s < 10 ? "0" + s : s;
    }
    const d = new Date(date);
    return `${pad(d.getDate())}/${pad(d.getMonth() + 1)}/${d.getFullYear()}`;
  };

  const upload = () => {
    const file = files[0];
    const reader = new FileReader();
    reader.readAsText(file);
    reader.onload = () => {
      const res = parse(reader.result as string, { header: true });
      console.log(res);

      fields = res.meta.fields;
      if (fields.indexOf("Date") !== 0) {
        return;
      }
      fields.shift();

      let sets: any[] = res.data;
      sets = sets.filter((set) => set.Date);
      sets.forEach((set) => (set.Date = new Date(set.Date).getTime()));
      // sets.sort((set1, set2) => set2.Date - set1.Date);

      sets.forEach((set) => {
        const { Date: setDate, ...rest } = set;
        if (workouts.has(setDate)) {
          workouts.get(setDate).push(rest);
        } else {
          workouts.set(setDate, [rest]);
        }
      });
      workouts = new Map(workouts); //trigger reactivity

      console.log(workouts);
    };
    reader.onerror = function () {
      console.error("Unable to read " + file.name);
    };
  };
</script>

<input bind:files type="file" accept=".csv" on:change={upload} />

<!-- {#each Array.from(workouts) as workout}workout + {workout[0]}{/each} -->

{#each [...workouts] as [date, sets]}
  <h2>{new Date(date)}</h2>
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
            <td>
              {#if field === 'Date'}
                {new Date(set[field]).toLocaleString('fr-FR')}
              {:else}{set[field]}{/if}
            </td>
          {/each}
        </tr>
      {/each}
    </tbody>
  </table>
{/each}
