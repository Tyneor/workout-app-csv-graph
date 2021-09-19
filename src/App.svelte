<script lang="ts">
  import { Router, Route, navigate } from "svelte-routing";
  import { auth } from "./firebase";

  import Auth from "./pages/Auth.svelte";
  import History from "./pages/History.svelte";
  import Charts from "./pages/Charts.svelte";

  import Profile from "./components/Profile.svelte";
  import Appbar from "./components/Appbar.svelte";
  import { startRealTimeWorkoutsQuery } from "./stores";

  let user, unsubscribe: () => void;
  auth.onAuthStateChanged(async (firebaseUser) => {
    if (!firebaseUser) {
      if (unsubscribe instanceof Function) unsubscribe();
      user = null;
      navigate("/");
    } else {
      const { displayName, photoURL, uid } = firebaseUser;
      user = { displayName, photoURL, uid };
      unsubscribe = startRealTimeWorkoutsQuery(user.uid);
    }
    console.log("auth state changed, user : ", user);
  });

  export let url = "";
</script>

<Router {url}>
  <main>
    {#if user}
      <Profile {...user} />
      <section>
        <Route path="history" component={History} />
        <Route path="charts" component={Charts} />
      </section>
      <Appbar />
    {:else}
      <Route path="/">
        <Auth />
      </Route>
    {/if}
  </main>
</Router>

<style>
  main {
    padding-bottom: var(--app-bar-height);
  }

  section {
    padding: 1em;
  }
</style>
