<script lang="ts">
  import { auth, googleProvider } from "./firebase";

  import Profile from "./Profile.svelte";
  import Workouts from "./Workouts.svelte";
  import AuthForm from "./AuthForm.svelte";
  import CSVInput from "./components/CSVInput.svelte";

  let user;

  function loginWithGoogle() {
    auth.signInWithPopup(googleProvider);
  }

  function loginWithEmail({ email, password }) {
    auth.signInWithEmailAndPassword(email, password);
  }

  function registerWithEmail({ email, password }) {
    auth.createUserWithEmailAndPassword(email, password);
  }

  auth.onAuthStateChanged(async (firebaseUser) => {
    if (!firebaseUser) {
      user = firebaseUser;
    } else {
      const { displayName, photoURL, uid } = firebaseUser;
      user = { displayName, photoURL, uid };
    }
  });
</script>

<main>
  {#if user}
    <Profile displayName={user.displayName} photoURL={user.photoURL} />
    <button on:click={() => auth.signOut()}>Logout</button>
    <hr />
    <Workouts uid={user.uid} />

    <hr />

    <CSVInput />
  {:else}
    <AuthForm
      on:login-with-google={loginWithGoogle}
      on:login-with-email={(e) => loginWithEmail(e.detail)}
      on:register-with-email={(e) => registerWithEmail(e.detail)} />
  {/if}
</main>
