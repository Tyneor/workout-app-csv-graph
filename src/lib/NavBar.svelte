<script lang="ts">
	import { page } from '$app/stores';
	import Icon from '$lib/Icon.svelte';
	import { mdiCalculator, mdiChartTimelineVariant, mdiHistory, mdiHome } from '@mdi/js';

	const pages = [
		{ path: '/', title: 'Home', icon: mdiHome },
		{ path: '/history', title: 'History', icon: mdiHistory },
		{ path: '/charts', title: 'Charts', icon: mdiChartTimelineVariant },
		{ path: '/calculator', title: 'calculator', icon: mdiCalculator }
	];
</script>

<nav>
	<ul>
		{#each pages as { path, title, icon }, i}
			<li class:active={$page.path === path}>
				<a sveltekit:prefetch href={path}><Icon path={icon} /></a>
			</li>
		{/each}
	</ul>
</nav>

<style lang="scss">
	nav {
		position: fixed;
		bottom: 0;
		width: 100%;
		display: flex;
		justify-content: center;
		background: linear-gradient(rgba(0, 0, 0, 0) 0%, #111111d0 30%, var(--bg-color) 100%);

		ul {
			position: relative;
			display: flex;
			justify-content: center;
			align-items: center;
			gap: 1rem;
			padding-bottom: 0.5rem;
			list-style: none;

			li {
				position: relative;
				height: 100%;

				a {
					transition: color 0.2s linear;
					color: white;

					&:hover,
					&:active {
						color: var(--accent-color);
					}
				}

				&.active::after {
					--size: 6px;
					content: ' ';
					position: relative;
					display: block;
					left: 50%;
					transform: translateX(-50%);
					bottom: 0;
					width: var(--size);
					height: var(--size);
					border-radius: 100px;
					background-color: var(--accent-color);
				}
			}
		}
	}
</style>
