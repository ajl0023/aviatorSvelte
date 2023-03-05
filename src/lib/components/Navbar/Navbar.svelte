<script>
	import Hamburger from '../Hamburger/Hamburger.svelte';
</script>

<nav class="wrapper">
	<div class="container">
		<div class="left-container">
			<Hamburger />
			<div>
				<label class="nav-menu-label" for="burger-trigger">
					<p class="secondary-main-trigger-icon">menu</p>
				</label>
			</div>
		</div>

		<div class="logo-container">
			<a href="https://www.apeldesign.com/" target="_blank" rel="noreferrer">
				<!-- <Logo fill="white" /> -->
				<img class="logo" src="/images/By Apel Design White.png" alt="" />
			</a>
		</div>
	</div>
</nav>

<style lang="scss">
	.wrapper {
		width: 100vw;
		position: fixed;
		z-index: 4;
	}
	.container {
		color: white;
		display: flex;
		justify-content: space-between;
		align-items: center;
		font-family: 'Orator';
		padding: 20px 40px;

		font-weight: 100;

		.left-container {
			display: flex;

			align-items: center;
		}
		.logo-container {
			max-width: 12em;
			height: 66px;
			img {
				width: 100%;
				object-fit: cover;
			}
		}
	}

	@media (max-width: 650px) {
		.secondary-main-trigger-icon {
			display: none;
		}
		.logo {
			display: none;
		}
	}
	.nav-menu-label {
		display: flex;

		align-items: center;
		flex-grow: 1;
		.secondary-main-trigger-icon {
			font-size: 18px;
			margin-left: 9px;
			line-height: 18px;
			cursor: pointer;
			line-height: 20px;
			margin-top: -4px;
			font-family: Capsuula;
			font-weight: 600;
			margin-bottom: -8px;
			text-transform: uppercase;

			height: fit-content;
		}
	}
</style>
