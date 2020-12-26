<script lang="ts">
  import { auth } from "./firebase";

  import HistoryPage from "./pages/HistoryPage.svelte";
  import AuthPage from "./pages/AuthPage.svelte";

  import Profile from "./components/Profile.svelte";
  // import AuthForm from "./components/AuthForm.svelte";
  import Appbar from "./components/Appbar.svelte";
  import { startRealTimeWorkoutsQuery } from "./stores";

  let user;

  auth.onAuthStateChanged(async (firebaseUser) => {
    if (!firebaseUser) {
      user = firebaseUser;
    } else {
      const { displayName, photoURL, uid } = firebaseUser;
      user = { displayName, photoURL, uid };
      startRealTimeWorkoutsQuery(user.uid);
    }
    console.log(user);
  });
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
      <HistoryPage />
    </section>
    <Appbar />
  {:else}
    <AuthPage />
  {/if}
</main>
