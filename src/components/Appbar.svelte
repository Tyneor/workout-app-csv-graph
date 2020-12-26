<script>
  import History from "svelte-material-icons/History.svelte";
  import ChartLine from "svelte-material-icons/ChartLine.svelte";
</script>

<style>
  nav {
    background-color: #333;
    overflow: hidden;
    position: fixed;
    bottom: 0;
    width: 100%;
    height: var(--app-bar-height);
  }

  ul {
    list-style-type: none;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    height: 100%;
  }

  li {
    display: inline;
    color: white;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
</style>

<nav>
  <ul>
    <li>
      <History />
      <span>History</span>
    </li>
    <li>
      <ChartLine />
      <span>Graphs</span>
    </li>
  </ul>
</nav>
