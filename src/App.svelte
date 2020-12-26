<script lang="ts">
  import HistoryPage from "./pages/HistoryPage.svelte";
  import AuthPage from "./pages/AuthPage.svelte";

  import Profile from "./components/Profile.svelte";
  // import AuthForm from "./components/AuthForm.svelte";
  import Appbar from "./components/Appbar.svelte";

  let user;

  $: console.log(user?.uid);
</script>

<style>
  main {
    padding-bottom: var(--app-bar-height);
  }

  section {
    padding: 1em;
  }
</style>

<main>
  {#if user}
    <Profile {...user} />
    <section>
      <HistoryPage uid={user.uid} />
    </section>
    <Appbar />
  {:else}
    <AuthPage bind:user />
  {/if}
</main>
