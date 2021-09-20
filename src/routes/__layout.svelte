<script lang="ts">
	import '../app.css';
	import NavBar from '$lib/NavBar.svelte';
	import { routeTitle } from '$lib/stores';
</script>

<svelte:head>
	<title>{$routeTitle} | WOG</title>
</svelte:head>

<main>
	<h1>{$routeTitle}</h1>
	<slot />
	<div />
	<NavBar />
</main>

<style lang="scss">
	main {
		position: relative;
		display: grid;
		grid-template-rows: auto 1fr calc(42px + 1rem);
		height: 100vh;
		width: 100vw;
		overflow-y: auto;

		h1 {
			position: sticky;
			top: 0;
			background: linear-gradient(var(--bg-color) 0%, #111111c0 80%, rgba(0, 0, 0, 0) 100%);
			padding: 1rem;
			font-weight: 800;
		}
	}
</style>
