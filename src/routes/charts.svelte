<script lang="ts">
	import TotalWeight from '$lib/TotalWeight.svelte';
	import { routeTitle } from '$lib/stores';
	routeTitle.set('Charts');
</script>

<TotalWeight />
