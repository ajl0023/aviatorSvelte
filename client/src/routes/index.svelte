<script>
	import { onDestroy, onMount } from 'svelte';
	import Modal from '../components/Modal/Modal.svelte';
	import Navbar from '../components/Navbar/Navbar.svelte';
	import { browser } from '$app/env';
	import '../global.scss';

	import { lazyLoadInstance } from '../lazy.js';

	import '../bulma.prefixed.css';
	if (browser) {
		lazyLoadInstance();
	}

	let windowThreshHold = false;
	let CardContainer;
	let ScrollContainer;
	function handleResponsiveResize() {
		if (window.innerWidth <= 650) {
			if (!CardContainer) {
				import('../components/CardContainer/CardContainer.svelte')
					.then((module) => {
						return module.default;
					})
					.then((comp) => {
						CardContainer = comp;
					});
			}
			windowThreshHold = true;

			return;
		} else {
			if (!ScrollContainer) {
				
				ScrollContainer = 'loading';
				import('../components/ScrollContainer/ScrollContainer.svelte')
					.then((module) => {
						return module.default;
					})
					.then((comp) => {
						ScrollContainer = comp;
					});
				return;
			}

			windowThreshHold = false;
		}
	}
	onMount(() => {
		handleResponsiveResize();

		window.addEventListener('resize', handleResponsiveResize);
		if (window.innerWidth <= 650) {
		}
	});
	onDestroy(() => {
		if (browser) {
			window.removeEventListener('resize', handleResponsiveResize);
		}
	});
</script>

<div>
	<Navbar />
	{#if ScrollContainer && ScrollContainer !== 'loading'}
		<svelte:component this={ScrollContainer} />
	{/if}{#if CardContainer}
		<svelte:component this={CardContainer} />
	{/if}
	<Modal />
</div>

<style lang="scss">
</style>
