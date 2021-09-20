<script lang="ts">
	import TotalWeight from '$lib/TotalWeight.svelte';
	import { routeTitle, workouts } from '$lib/stores';
	routeTitle.set('Charts');
</script>

<section>
	{#if $workouts.length > 0}
		<TotalWeight />
	{:else}
		<p>
			<span>No workout loaded</span>
			<span>Load yours from the <a href={'/'}>Home</a> page</span>
		</p>
	{/if}
</section>

<style lang="scss">
	section {
		padding: 0 1rem;
		display: grid;
		gap: 10px;

		p {
			display: flex;
			gap: 0.5rem;
			flex-direction: column;
			justify-content: center;
			align-items: center;

			span:first-child {
				font-size: 1.7rem;
			}
		}
	}
</style>
