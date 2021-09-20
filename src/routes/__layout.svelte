<script lang="ts">
	import '../app.css';
	import NavBar from '$lib/NavBar.svelte';
	import { routeTitle } from '$lib/stores';
</script>

<svelte:head>
	<title>{$routeTitle}</title>
</svelte:head>

<main>
	<h1>{$routeTitle}</h1>
	<slot />
	<NavBar />
</main>

<style lang="scss">
	main {
		height: 100vh;
		width: 100vw;
		max-width: 1024px;
		overflow-y: auto;
		display: flex;
		flex-direction: column;

		h1 {
			position: sticky;
			top: 0;
			background: linear-gradient(var(--bg-color) 0%, #111111c0 80%, rgba(0, 0, 0, 0) 100%);
			padding: 1rem;
			font-weight: 800;
		}
	}
</style>
