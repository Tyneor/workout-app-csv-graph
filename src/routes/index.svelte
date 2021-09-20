<script context="module" lang="ts">
	export const prerender = true;
</script>

<script lang="ts">
	import { routeTitle, workouts } from '$lib/stores';
	import CSVInput from '$lib/CSVInput.svelte';
	routeTitle.set('Home');
</script>

<section>
	<CSVInput />
	<span>Number of workouts: {$workouts.length}</span>
</section>

<style>
	section {
		height: 100%;
		display: flex;
		flex-direction: column;
		gap: 1rem;
		justify-content: center;
		align-items: center;
	}
</style>
