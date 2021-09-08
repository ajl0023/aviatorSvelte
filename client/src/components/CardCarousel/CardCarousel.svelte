<script>
	import Glide from '@glidejs/glide';
	import { lazyLoadInstance } from '../../lazy.js';
	import { afterUpdate, onMount } from 'svelte';
	import { navToLink, textPages } from '../../pageContent';

	let carousel;
	let lazyImage;
	let firstImage;
	export let index;
	export let page;
	const images = [
		'http://res.cloudinary.com/dt4xntymn/image/upload/v1630887731/rendersHighRes/33340_MULHOLLAND_INT_IMG_12A_00-min_ciecgp.jpg',
		'http://res.cloudinary.com/dt4xntymn/image/upload/v1630887728/rendersHighRes/33340_MULHOLLAND_INT_IMG_14A-min_a51cfk.jpg',
		'http://res.cloudinary.com/dt4xntymn/image/upload/v1630887729/rendersHighRes/33340_MULHOLLAND_INT_IMG_16A_00-min_qgp2ne.jpg',
		'http://res.cloudinary.com/dt4xntymn/image/upload/v1630887729/rendersHighRes/33340_MULHOLLAND_INT_IMG_24A-min_hsnpta.jpg',
		'http://res.cloudinary.com/dt4xntymn/image/upload/v1630887729/rendersHighRes/33340_MULHOLLAND_INT_IMG_26A-min_d1dxwf.jpg',
		'http://res.cloudinary.com/dt4xntymn/image/upload/v1630887729/rendersHighRes/33340_MULHOLLAND_INT_IMG_26B-min_jthbj4.jpg',
		'http://res.cloudinary.com/dt4xntymn/image/upload/v1630887728/rendersHighRes/33340_MULHOLLAND_INT_IMG_30A-min_yvenyq.jpg',
		'http://res.cloudinary.com/dt4xntymn/image/upload/v1630887729/rendersHighRes/33340_MULHOLLAND_INT_IMG_31A-min_mo1cj5.jpg',
		'http://res.cloudinary.com/dt4xntymn/image/upload/v1630887728/rendersHighRes/33340_MULHOLLAND_INT_IMG_34A-min_z5fw2h.jpg',
		'http://res.cloudinary.com/dt4xntymn/image/upload/v1630887730/rendersHighRes/33340_MULHOLLAND_INT_IMG_34B-min_ggb1xk.jpg',
		'http://res.cloudinary.com/dt4xntymn/image/upload/v1630887730/rendersHighRes/33340_MULHOLLAND_INT_IMG_34C-min_y3bogv.jpg',
		'http://res.cloudinary.com/dt4xntymn/image/upload/v1630887730/rendersHighRes/33340_MULHOLLAND_INT_IMG_3A_00-min_b0yvdi.jpg',
		'http://res.cloudinary.com/dt4xntymn/image/upload/v1630887731/rendersHighRes/33340_MULHOLLAND_INT_IMG_4A-min_ihzxkw.jpg'
	];
	const floorplans = [
		'https://res.cloudinary.com/dt4xntymn/image/upload/v1630888753/floorPlansResized/SITE_PLAN__33340_Mullholland_Hwy_20200810_mt2t3r.jpg',
		'https://res.cloudinary.com/dt4xntymn/image/upload/v1630888757/floorPlansResized/1ST_FLOOR__33340_Mullholland_Hwy_20200810_-_Copy_rkqlng.jpg',
		'https://res.cloudinary.com/dt4xntymn/image/upload/v1630888753/floorPlansResized/SITE_PLAN__33340_Mullholland_Hwy_20200810_mt2t3r.jpg'
	];
	onMount(() => {
		const firstChild = lazyImage.firstElementChild.getElementsByTagName('img')[0];

		const glide = new Glide(carousel);

		glide.mount();

		var intersectionObserver = new IntersectionObserver(function (entries) {
			// If intersectionRatio is 0, the target is out of view
			// and we do not need to do anything.

			if (entries[0].intersectionRatio <= 0) return;
			firstChild.src = page.title === 'renders' ? images[0] : floorplans[0];
			intersectionObserver.disconnect();
		});
		// start observing

		intersectionObserver.observe(lazyImage);
	});
	afterUpdate(() => {});
</script>

<div bind:this={lazyImage} id={navToLink[index + 1]} class="bu-card card-container">
	<div class="carousel-container">
		<div bind:this={carousel} class="glide">
			<div class="glide__track" data-glide-el="track">
				<ul class="glide__slides">
					{#each page.title === 'renders' ? images : floorplans as img, i}
						<li class="glide__slide">
							<div class="glide-image-container">
								<img
									loading={i !== 0 && 'lazy'}
									class="carousel-image lazy"
									src={i !== 0 && img}
									alt=""
								/>
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
		<div class="content bu-is-clipped content font-white">
			{#if textPages[index]}
				{#each textPages[index].paragraphs as p}
					<p>{p}</p>
				{/each}
			{/if}
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
		img {
			object-position: right;
			object-fit: cover;
		}
		.glide-image-container {
			display: flex;
			position: relative;
			justify-content: center;
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
</style>
