<script lang="ts">
  import { auth, googleProvider } from "../firebase";

  import AuthForm from "../components/AuthForm.svelte";

  function loginWithGoogle() {
    auth.signInWithPopup(googleProvider);
  }

  function loginWithEmail({ email, password }) {
    auth.signInWithEmailAndPassword(email, password);
  }

  function registerWithEmail({ email, password }) {
    auth.createUserWithEmailAndPassword(email, password);
  }
</script>

<AuthForm
  on:login-with-google={loginWithGoogle}
  on:login-with-email={(e) => loginWithEmail(e.detail)}
  on:register-with-email={(e) => registerWithEmail(e.detail)} />
