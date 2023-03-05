<script>
	import { getContext, setContext } from 'svelte';
	import CarouselFull from '../CarouselFull/CarouselFull.svelte';
	import ImagePage from '../ImagePage/ImagePage.svelte';
	import Quotes from '../Quotes/Quotes.svelte';
	import TextPage from '../TextPage/TextPage.svelte';

	export let rightPage;

	setContext('page_side', 'right');

	const pageLayout = getContext('pageLayout');

	const pageContent = getContext('pageContent');
</script>

<div bind:this="{rightPage}" class="container">
	<ImagePage image="{pageLayout['image-pages'][2]}" />
	<TextPage name="Floorplans" bgColor="{false}" text_content="{pageContent.textPages[4]}" />
	<ImagePage image="{pageLayout['image-pages'][1]}" />
	<TextPage name="The Impact" bgColor="{false}" text_content="{pageContent.textPages[2]}" />

	<CarouselFull orient="half" name="the concept" data="{pageLayout['page-carousels'][0]}" />
	<TextPage name="The Background" bgColor="{false}" text_content="{pageContent.textPages[0]}" />
	<Quotes />

	<div id="home" class="logo-wrapper">
		<div class="bg-image-container">
			<img class="bg-image" src="/images/Home Right.jpg" alt="" />
		</div>
		<div class="logo-container">
			<img class="image-logo" src="/images/Aviator Home Right.png" alt="" />
		</div>
	</div>
</div>

<style lang="scss">
	.bg-image-container {
		width: 100%;
		height: 100%;
		position: absolute;
		z-index: 1;
		margin: auto;
		.bg-image {
			width: 100%;
			height: 100%;
		}
	}
	.container {
		position: relative;
		align-items: center;
		transform: translateY(-700vh);
		transition: all 1s ease-out;
		height: 100vh;
		max-width: 50vw;
		width: 100%;
		.logo-wrapper {
			width: 50vw;
			height: 100vh;
			display: flex;
			align-items: center;
			justify-content: flex-start;
			z-index: 2;
			position: relative;
			.logo-container {
				max-width: 33%;
				z-index: 3;
				.image-logo {
					object-fit: contain;
					width: 100%;
				}
			}
			@media (max-width: 650px) {
				width: 100%;
				max-width: 100%;
				.logo-container {
					max-width: 40%;
					.image-logo {
						width: 100%;
					}
				}
				justify-content: center;
			}
		}
		@media (max-width: 650px) {
			max-width: 100%;
		}
	}
	@media (max-width: 650px) {
		.image-logo {
			display: none;
		}
		.container {
			width: 100vw;
		}
		.container {
			transform: translateY(0) !important;
			justify-content: center;
		}
	}
</style>
