<script>
	import Glide from '@glidejs/glide';
	import { onMount } from 'svelte';
	import Arrow from '../Card/Arrow.svelte';

	let glider;
	const images = [
		'https://res.cloudinary.com/dt4xntymn/image/upload/v1631328567/FloorPlans/2ND_FLOOR_20-0001_33340_Mullholland_Hwy_20200810_xhlvzr.jpg',
		'https://res.cloudinary.com/dt4xntymn/image/upload/v1631328567/FloorPlans/1ST_FLOOR_20-0001_33340_Mullholland_Hwy_20200810_ouauck.jpg'
	];

	onMount(() => {
		const glide = new Glide(glider);
		glide.mount();
	});
</script>

<div class="page">
	<div bind:this={glider} class="glide">
		<div class="glide__track" data-glide-el="track">
			<ul class="glide__slides">
				{#each images as img, i}
					<li class="glide__slide">
						<div class="image-container">
							<img loading="lazy" class="carousel-image" src={img} alt="" />
						</div>
					</li>
				{/each}
			</ul>
		</div>
		<div class="glide__arrows" data-glide-el="controls">
			<button class="glide__arrow page-arrow-container glide__arrow--left" data-glide-dir="<">
				<div class="page-arrow-relative">
					<Arrow
						styleP="object-fit:cover;width:100%;fill:white; transform:rotate(-90deg); height:100%; "
					/>
				</div></button
			>
			<button class="glide__arrow  page-arrow-container glide__arrow--right" data-glide-dir=">">
				<div class="page-arrow-relative">
					<Arrow
						styleP="object-fit:cover;width:100%;fill:white; transform:rotate(-90deg); height:100%; "
					/>
				</div>
			</button>
		</div>
	</div>
</div>

<style lang="scss">
	.glide__arrow--right {
		right: 20px;
		transform: rotate(180deg);
	}
	.glide__arrow--left {
		left: 20px;
	}
	.page-arrow-container {
		width: 30px;
		height: 30px;
		position: absolute;

		bottom: 0;
		top: 50%;
		border-radius: 50%;
		background-color: rgba(0 0 0 / 0.5);
		border: none;
		overflow: hidden;

		.page-arrow-relative {
			position: absolute;
			top: 0;
			left: 0;
			bottom: 0;

			right: 0;
			padding: 5px;
			margin: auto;
		}
	}

	.glide__slides {
		height: 100%;
		display: flex;

		justify-content: center;
	}

	.glide__slide {
		display: flex;
		justify-content: center;
	}
	.glide__arrows {
		position: absolute;
		left: 0;
		margin: auto;
		top: 0;
		bottom: 0;
		right: 0;
		width: 100%;
	}
	.glide {
		height: 100%;
		.glide__track {
			height: 100%;
			.image-container {
				width: 80%;
				img {
					width: 100%;
					object-fit: cover;
					height: 100%;
				}
			}
		}
	}
</style>
