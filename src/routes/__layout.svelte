<script lang="ts">
	import NavBar from '$lib/NavBar.svelte';
	import '../app.css';
</script>

<main>
	<slot />
	<NavBar />
</main>

<style>
	main {
		height: 100vh;
		display: grid;
		grid-template-rows: 1fr auto;
		width: 100%;
		max-width: 1024px;
	}
</style>
