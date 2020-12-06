<script lang="ts">
  export let displayName: string;
  export let photoURL: string;
</script>

<h3>Hi {displayName ?? 'User'} !</h3>
{#if photoURL}<img src={photoURL} width="100" alt="user avatar" />{/if}
