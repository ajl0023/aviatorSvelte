<script>
	import Glide from '@glidejs/glide';
	import { afterUpdate, beforeUpdate, onMount } from 'svelte';
	import { currentPage } from '../../stores';
	import CarouselThumbs from '../CarouselThumbs/CarouselThumbs.svelte';
	import { images } from '../image';

	var glide = new Glide('div.glide.right', {
		dragThreshold: false
	});
	let page;
	currentPage.subscribe((value) => {
		page = value;
	});

	onMount(() => {
		glide.mount();
	});
	beforeUpdate(() => {});
	afterUpdate(() => {
		glide.go(`=${page}`);
	});
</script>

<div class="page">
	<div class="flex-container">
		<div class="content">
			<img
				src={'https://res.cloudinary.com/dt4xntymn/image/upload/v1630813204/titleimages/Renders_Page_Text_Right_odwpiy.png'}
				alt=""
			/>
		</div>
		<div class="carousel-container">
			<div data-glide-dir={`${page}`} class="glide right">
				<div class="glide__track" data-glide-el="track">
					<ul class="glide__slides">
						{#each images.slice(17, 33) as img, i}
							<li class="glide__slide">
								<img class="carousel-image lazy" data-src={img} alt="" />
							</li>
						{/each}
					</ul>
				</div>
			</div>
			<button
				on:click={() => {
					currentPage.update((n) => n + 1);
				}}
				class="page-arrow-container"
			>
				<img
					class="page-arrow"
					src="https://res.cloudinary.com/dt4xntymn/image/upload/v1630788553/misc/z-caroArrow_tejk9h.png"
					alt=""
				/>
			</button>
		</div>
		<CarouselThumbs page="right" />
	</div>
</div>

<style lang="scss">
	.content {
		max-width: 40%;
	}
	.page-arrow-container {
		width: 20px;
		height: 20px;
		position: absolute;
		right: -60px;
		bottom: 0;
		top: 50%;
		border: none;
		overflow: hidden;
		background: none;
		transform: rotate(180deg);
		border-radius: 50%;
		background-color: white;
		.page-arrow {
			object-fit: cover;
			width: 100%;
		}
	}
	.flex-container {
		display: flex;
		height: 100%;
		justify-content: center;
		align-items: flex-start;
		flex-direction: column;
	}
	.carousel-container {
		width: 50%;

		display: flex;
		position: relative;
	}
	.carousel-image {
		width: 100%;
		height: 100%;
		object-fit: contain;
	}
</style>
