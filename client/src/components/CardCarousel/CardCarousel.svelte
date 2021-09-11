<script>
	import Glide from '@glidejs/glide';
	import { lazyLoadInstance } from '../../lazy.js';
	import { afterUpdate, onMount } from 'svelte';
	import { navToLink, textPages } from '../../pageContent';
	import Arrow from '../Card/Arrow.svelte';
	import { browser } from '$app/env';
	let carousel;
	let lazyImage;
	let firstImage;
	let showMore = false;
	export let index;
	export let page;
	const images = [
		'https://res.cloudinary.com/dt4xntymn/image/upload/v1630887731/rendersHighRes/33340_MULHOLLAND_INT_IMG_12A_00-min_ciecgp.jpg',
		'https://res.cloudinary.com/dt4xntymn/image/upload/v1630887728/rendersHighRes/33340_MULHOLLAND_INT_IMG_14A-min_a51cfk.jpg',
		'https://res.cloudinary.com/dt4xntymn/image/upload/v1630887729/rendersHighRes/33340_MULHOLLAND_INT_IMG_16A_00-min_qgp2ne.jpg',
		'https://res.cloudinary.com/dt4xntymn/image/upload/v1630887729/rendersHighRes/33340_MULHOLLAND_INT_IMG_24A-min_hsnpta.jpg',
		'https://res.cloudinary.com/dt4xntymn/image/upload/v1630887729/rendersHighRes/33340_MULHOLLAND_INT_IMG_26A-min_d1dxwf.jpg',
		'https://res.cloudinary.com/dt4xntymn/image/upload/v1630887729/rendersHighRes/33340_MULHOLLAND_INT_IMG_26B-min_jthbj4.jpg',
		'https://res.cloudinary.com/dt4xntymn/image/upload/v1630887728/rendersHighRes/33340_MULHOLLAND_INT_IMG_30A-min_yvenyq.jpg',
		'https://res.cloudinary.com/dt4xntymn/image/upload/v1630887729/rendersHighRes/33340_MULHOLLAND_INT_IMG_31A-min_mo1cj5.jpg',
		'https://res.cloudinary.com/dt4xntymn/image/upload/v1630887728/rendersHighRes/33340_MULHOLLAND_INT_IMG_34A-min_z5fw2h.jpg',
		'https://res.cloudinary.com/dt4xntymn/image/upload/v1630887730/rendersHighRes/33340_MULHOLLAND_INT_IMG_34B-min_ggb1xk.jpg',
		'https://res.cloudinary.com/dt4xntymn/image/upload/v1630887730/rendersHighRes/33340_MULHOLLAND_INT_IMG_34C-min_y3bogv.jpg',
		'https://res.cloudinary.com/dt4xntymn/image/upload/v1630887730/rendersHighRes/33340_MULHOLLAND_INT_IMG_3A_00-min_b0yvdi.jpg',
		'https://res.cloudinary.com/dt4xntymn/image/upload/v1630887731/rendersHighRes/33340_MULHOLLAND_INT_IMG_4A-min_ihzxkw.jpg'
	];
	const floorplans = [
		'https://res.cloudinary.com/dt4xntymn/image/upload/v1631328567/FloorPlans/2ND_FLOOR_20-0001_33340_Mullholland_Hwy_20200810_xhlvzr.jpg',
		'https://res.cloudinary.com/dt4xntymn/image/upload/v1631328567/FloorPlans/1ST_FLOOR_20-0001_33340_Mullholland_Hwy_20200810_ouauck.jpg'
	];
	onMount(() => {
		const glide = new Glide(carousel);

		glide.mount();
	});
</script>

<div bind:this={lazyImage} id={navToLink[index + 1]} class="bu-card card-container">
	<div class="carousel-container">
		<div bind:this={carousel} class="glide">
			<div class="glide__track" data-glide-el="track">
				<ul class="glide__slides">
					{#each page.title === 'renders' ? images : floorplans as img, i}
						<li class="glide__slide">
							<div class="glide-image-container">
								<img loading="lazy" class="carousel-image" src={img} alt="" />
							</div>
						</li>
					{/each}
				</ul>
			</div>
			<div class="glide__arrows" data-glide-el="controls">
				<button data-glide-dir="<" class="page-arrow-container arrow-left">
					<img
						class="page-arrow"
						src="https://res.cloudinary.com/dt4xntymn/image/upload/v1630788553/misc/z-caroArrow_tejk9h.png"
						alt=""
					/>
				</button>
				<button data-glide-dir=">" class="page-arrow-container arrow-right ">
					<img
						class="page-arrow"
						src="https://res.cloudinary.com/dt4xntymn/image/upload/v1630788553/misc/z-caroArrow_tejk9h.png"
						alt=""
					/>
				</button>
			</div>
		</div>
	</div>
	<div class="card-content bu-card-content">
		<div class="bu-media">
			<div class="bu-media-left">
				<figure class="bu-image bu-is-48x48">
					<div style="background-color: white; height: 100%; width:100%;" />
				</figure>
			</div>
			{#if textPages[index]}
				<h5 class="title is-4 font-white">
					{textPages[index].header}
				</h5>
			{/if}
		</div>
		<div class="content bu-is-clipped content font-white {showMore ? 'show-more' : ''}">
			{#if textPages[index]}
				{#each textPages[index].paragraphs as p}
					<p>{p}</p>
				{/each}
			{/if}
		</div>
		<br />
		<div
			on:click={() => {
				showMore = !showMore;
			}}
			class="bu-level bu-is-mobile"
		>
			<div class="bu-level-left">
				<p class="bu-level-left bu-level-item">Read More</p>
				<span class="bu-level-left bu-level-item bu-icon bu-is-small">
					<Arrow {showMore} />
				</span>
			</div>
		</div>
	</div>
</div>

<style lang="scss">
	h5 {
		font-family: Orator;
	}
	.font-white {
		color: white;
	}
	.card-content {
		background-color: transparent;
	}

	.content {
		max-height: 20rem;
		overflow: hidden;

		display: -webkit-box;
		-webkit-line-clamp: 4;
		-webkit-box-orient: vertical;
	}
	.card-container {
		display: flex;
		flex-direction: column;
		background-color: transparent;
	}

	.carousel-container {
		.glide-image-container {
			display: flex;
			padding-bottom: 100%;
			height: 0;
			position: relative;
			justify-content: center;
			img {
				width: 100%;
				height: 100%;
				position: absolute;
				object-fit: cover;
			}
		}
	}
	.page-arrow-container {
		width: 30px;
		border-radius: 50%;
		position: absolute;
		border: none;
		overflow: hidden;
		height: 30px;
		bottom: 0;

		img {
			width: 100%;
		}
	}
	.arrow-left {
		right: 40px;
	}
	.arrow-right {
		transform: rotate(180deg);
		right: 0;
	}
	.carousel-image {
		object-fit: cover;
	}
	.show-more {
		display: block;
		max-height: 100%;
	}
</style>
