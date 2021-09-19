<script>
  import { Link } from "svelte-routing";

  import History from "svelte-material-icons/History.svelte";
  import ChartLine from "svelte-material-icons/ChartLine.svelte";
</script>

<nav>
  <Link to="history">
    <div class="link">
      <History />
      <span>History</span>
    </div>
  </Link>

  <Link to="charts">
    <div class="link">
      <ChartLine />
      <span>Charts</span>
    </div>
  </Link>
</nav>

<style>
  nav {
    background-color: #333;
    overflow: hidden;
    position: fixed;
    bottom: 0;
    width: 100%;
    height: var(--app-bar-height);
    display: flex;
    justify-content: space-evenly;
    align-items: center;
  }

  .link {
    display: inline;
    color: rgb(235, 235, 235);
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .link:hover {
    color: white;
  }
</style>
