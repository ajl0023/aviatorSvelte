<script>
	import Glide from '@glidejs/glide';
	import { onMount } from 'svelte';

	let glider;
	const images = [
		'https://res.cloudinary.com/dt4xntymn/image/upload/v1630877054/FloorPlans/SITE_PLAN__33340_Mullholland_Hwy_20200810_ix5bw3.jpg',
		'https://res.cloudinary.com/dt4xntymn/image/upload/v1630877054/FloorPlans/2ND_FLOOR__33340_Mullholland_Hwy_20200810_gbaey8.jpg',
		'https://res.cloudinary.com/dt4xntymn/image/upload/v1630877054/FloorPlans/1ST_FLOOR__33340_Mullholland_Hwy_20200810_niansx.jpg'
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
						<img class="carousel-image" src={img} alt="" />
					</li>
				{/each}
			</ul>
		</div>
		<div class="glide__arrows" data-glide-el="controls">
			<button class="glide__arrow glide__arrow--left" data-glide-dir="<">
				<img
					src="https://res.cloudinary.com/dt4xntymn/image/upload/v1630788553/misc/z-caroArrow_tejk9h.png"
					alt=""
				/></button
			>
			<button class="glide__arrow glide__arrow--right" data-glide-dir=">">
				<img
					src="https://res.cloudinary.com/dt4xntymn/image/upload/v1630788553/misc/z-caroArrow_tejk9h.png"
					alt=""
				/>
			</button>
		</div>
	</div>
</div>

<style lang="scss">
	.glide__arrows {
		position: absolute;
		z-index: 121233;
		width: 100%;

		transform: translateY(50vh);
		display: flex;
		justify-content: space-between;
		padding: 20px;
		top: 0;
	}
	.glide__arrow {
		border: none;
		background-color: transparent;
		width: 50px;
		height: 50px;
	}
	.glide__arrow--right {
		transform: rotate(180deg);
		right: 60px;
	}
	.glide {
		height: 100%;
		.glide__track {
			height: 100%;
			img {
				height: 100%;
			}
		}
	}
</style>
