<script>
	import { onDestroy, onMount } from 'svelte';
	import CardContainer from '../components/CardContainer/CardContainer.svelte';
	import Modal from '../components/Modal/Modal.svelte';
	import Navbar from '../components/Navbar/Navbar.svelte';
	import ScrollContainer from '../components/ScrollContainer/ScrollContainer.svelte';
	import { browser } from '$app/env';
	import '../global.scss';

	import { lazyLoadInstance } from '../lazy.js';

	import '../bulma.prefixed.css';
	if (browser) {
		lazyLoadInstance();
	}
	let windowThreshHold = false;
	function handleResponsiveResize() {
		if (window.innerWidth <= 650) {
			windowThreshHold = true;
			return;
		} else {
			windowThreshHold = false;
		}
	}
	onMount(() => {
		handleResponsiveResize();
		window.addEventListener('resize', handleResponsiveResize);
	});
	onDestroy(() => {
		if (browser) {
			window.removeEventListener('resize', handleResponsiveResize);
		}
	});
</script>

<div>
	<Navbar />
	{#if !windowThreshHold}
		<ScrollContainer />
	{:else}
		<CardContainer />
	{/if}
	<Modal />
</div>

<style lang="scss">
</style>
