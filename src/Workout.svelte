<script lang="ts">
  import { createEventDispatcher } from "svelte";

  const dispatch = createEventDispatcher();

  function remove() {
    dispatch("remove", { id });
  }

  export let id; // document ID
  export let date;
  export let name;
</script>

<li><b>{name}</b> ({date.toDate()})</li>
