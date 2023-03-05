<script>
	import { getContext, setContext } from 'svelte';
	import CarouselFull from '../CarouselFull/CarouselFull.svelte';
	import ContactUs from '../ContactUs/ContactUs.svelte';

	import ImagePage from '../ImagePage/ImagePage.svelte';
	import Quotes from '../Quotes/Quotes.svelte';
	import TextPage from '../TextPage/TextPage.svelte';

	export let leftPage;

	setContext('page_side', 'left');

	const pageLayout = getContext('pageLayout');

	const pageContent = getContext('pageContent');
</script>

<div bind:this="{leftPage}" class="container">
	<div id="home" class="logo-wrapper">
		<div class="bg-image-container">
			<img class="bg-image" src="/images/Home Left.jpg" alt="" />
		</div>
		<div class="logo-container">
			<img class="image-logo" src="/images/Aviator Home Left.png" alt="" />
		</div>
	</div>
	<Quotes />

	<ImagePage image="{pageLayout['image-pages'][0]}" />
	<TextPage
		name="The Concept"
		page="left"
		bgColor="{true}"
		text_content="{pageContent.textPages[1]}"
	/>

	<CarouselFull orient="half" name="the impact" data="{pageLayout['page-carousels'][1]}" />

	<TextPage
		name="The Concept"
		page="left"
		bgColor="#860116"
		text_content="{pageContent.textPages[3]}"
	/>
	<CarouselFull orient="full" name="floorplans" data="{pageLayout['page-carousels'][2]}" />
	<ContactUs deviceType="{'desktop'}" bgColor="#860116" />
</div>

<style lang="scss">
	.bg-image-container {
		width: 100%;
		height: 100%;
		position: absolute;
		z-index: 1;

		.bg-image {
			width: 100%;
			height: 100%;
		}
	}
	.container {
		position: relative;
		align-items: center;

		transition: all 1s ease-out;
		height: 100vh;
		max-width: 50vw;
		width: 100%;
		.logo-wrapper {
			width: 50vw;
			height: 100vh;

			display: flex;
			align-items: center;
			justify-content: flex-end;
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
