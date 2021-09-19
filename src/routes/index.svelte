<script context="module" lang="ts">
	export const prerender = true;
</script>

<script lang="ts">
	import CSVInput from '$lib/CSVInput.svelte';
</script>

<svelte:head>
	<title>Home</title>
</svelte:head>

<section>
	<h1>Welcome</h1>

	<CSVInput />
</section>
