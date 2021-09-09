<script>
	import Card from '../Card/Card.svelte';
	import CardCarousel from '../CardCarousel/CardCarousel.svelte';
	import CardCredits from '../CardCredits/CardCredits.svelte';
	import CardGallery from '../CardGallery/CardGallery.svelte';

	const cardLayout = [
		{
			title: 'malibu life',
			type: 'image'
		},
		{
			title: 'discover',
			type: 'image'
		},
		{
			title: 'renders',
			type: 'carousel'
		},
		{
			title: 'floorplans',
			type: 'carousel'
		},
		{
			title: 'equestrian',
			type: 'image'
		},

		{
			title: 'video render',
			type: 'video'
		},
		{
			title: 'behind the scenes',
			type: 'gallery'
		},
		{
			title: 'drone footage',
			type: 'video'
		}
	];
</script>

<div class="card-wrapper">
	<div id="home" class="logo-wrapper">
		<div class="logo-container">
			<img
				class="image-logo"
				src="https://res.cloudinary.com/dt4xntymn/image/upload/v1630788553/misc/homeLogo_yufrin.png"
				alt=""
			/>
		</div>
	</div>
	<div class="card-container">
		{#each cardLayout as card, i}
			{#if cardLayout[i].type === 'image' || cardLayout[i].type === 'video'}
				<Card page={card} index={i} />
			{:else if cardLayout[i].type === 'gallery'}
				<CardGallery />
			{:else}
				<!-- <CardCarousel page={card} index={i} /> -->
			{/if}
		{/each}
		<CardCredits />
	</div>
</div>

<style lang="scss">
	.card-container {
		background-color: #2c2a2b;
	}
	.logo-wrapper {
		width: 100vw;
		height: 100vh;

		display: flex;

		justify-content: center;
		align-items: center;
		.logo-container {
			max-width: 33%;
			.image-logo {
				object-fit: contain;

				width: 100%;
			}
		}
	}
</style>
