<script lang="ts">
  import { createEventDispatcher } from "svelte";
  const dispatch = createEventDispatcher();

  let email = "";
  let password = "";
</script>

<form on:submit|preventDefault>
  <input type="email" placeholder="Email" bind:value={email} />
  <input type="password" placeholder="Password" bind:value={password} />
  <input
    type="submit"
    value="Se Connecter"
    on:click={(e) => dispatch('login-with-email', { email, password })} />
  <input
    type="submit"
    value="S'inscrire"
    on:click={(e) => dispatch('register-with-email', { email, password })} />
</form>
<button on:click={() => dispatch('login-with-google')}>
  Login with Google
</button>
