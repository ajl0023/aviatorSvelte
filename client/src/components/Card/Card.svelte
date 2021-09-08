<script>
	import { onMount } from 'svelte';

	import { navToLink, textPages } from '../../pageContent';
	import { modal } from '../../stores';
	import Arrow from './Arrow.svelte';

	export let index;
	let showMore = false;

	const images = [
		{
			type: 'image',
			url:
				'https://res.cloudinary.com/dt4xntymn/image/upload/v1630790318/misc/bgPhotos/bg1_lcs2gw.jpg'
		},
		{
			type: 'image',
			url:
				'https://res.cloudinary.com/dt4xntymn/image/upload/v1630790318/misc/bgPhotos/bg2_oyi2w7.jpg'
		},

		{
			type: 'carousel'
		},
		{
			type: 'carousel'
		},
		{
			type: 'image',
			url:
				'https://res.cloudinary.com/dt4xntymn/image/upload/v1630790318/misc/bgPhotos/bg3_mi7jx9.jpg'
		},
		{
			type: 'video',
			url:
				'https://res.cloudinary.com/dt4xntymn/image/upload/v1630790318/misc/bgPhotos/bg4_ma0d9j.jpg',
			videoUrl: 'https://www.youtube.com/embed/nTS10ZQM5Ms'
		},
		{
			type: 'gallery',
			url:
				'https://res.cloudinary.com/dt4xntymn/image/upload/v1630790318/misc/bgPhotos/bg3_mi7jx9.jpg'
		},

		{
			type: 'video',
			url:
				'https://res.cloudinary.com/dt4xntymn/image/upload/v1630790322/misc/bgPhotos/drone_s8lkqw.png'
		}
	];
</script>

<div class="bu-card card-container" id={navToLink[index + 1]}>
	<div class="bu-card-image">
		<figure
			on:click={() => {
				if (images[index].type === 'video') {
					$modal.visibility = true;
					$modal.content = images[index].videoUrl;
					$modal.type = 'video';
				}
			}}
			class="bu-image bu-is-4by3 {images[index].type === 'video' ? 'blur' : ''}"
		>
			{#if images[index].type === 'video'}
				<div class="play-button-container">
					<figure class="bu-image bu-is-square ">
						<img
							src="https://res.cloudinary.com/dt4xntymn/image/upload/v1630788553/misc/playButton_rbgj1t.png"
							alt=""
						/>
					</figure>
				</div>
			{/if}
			<img loading="lazy" class="main-image" src={images[index] && images[index].url} alt="" />
		</figure>
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
	.main-image {
		object-fit: cover;
	}
	h5 {
		font-family: Orator;
	}
	.font-white {
		color: white;
	}
	.card-content {
		background-color: transparent;
	}
	.play-button-container {
		position: absolute;
		width: 25%;
		top: 50%; /* position the top  edge of the element at the middle of the parent */
		left: 50%; /* position the left edge of the element at the middle of the parent */

		transform: translate(-50%, -50%);
		height: auto;
		z-index: 5;
		object-fit: cover;
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
		&:nth-child(4) {
			.show-more {
				display: none !important;
			}
		}
	}

	.blur {
		left: 0;
		right: 0;
		z-index: 0;
		position: relative;

		&::before {
			pointer-events: none;
			position: absolute;
			content: '';
			height: 100%;
			display: block;
			left: 0;
			right: 0;
			top: 0;
			z-index: 2;
			backdrop-filter: blur(5px);
		}
	}
	.show-more {
		display: block;
		max-height: 100%;
	}
</style>
