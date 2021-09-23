<script>
  import CarouselFull from "../CarouselFull/CarouselFull.svelte";
  import CarouselRight from "../CarouselRight/CarouselRight.svelte";
  import Credits from "../Credits/Credits.svelte";
  import Gallery from "../Gallery/Gallery.svelte";
  import ImagePage from "../ImagePage/ImagePage.svelte";
  import Quotes from "../Quotes/Quotes.svelte";
  import TextPage from "../TextPage/TextPage.svelte";

  export let rightPage;
</script>

<div bind:this={rightPage} class="container">
  <ImagePage index={2} />
  <TextPage index={2} />
  <CarouselFull orient="half" page="right" name="concept" />
  <TextPage index={0} />
  <Quotes page="right" />
  <div class="bg-image-container">
    <img
      class="bg-image"
      src="https://res.cloudinary.com/dt4xntymn/image/upload/v1632263453/aviator/home/Home_Right_rjgeno.jpg"
      alt=""
    />
  </div>
  <div class="logo-wrapper">
    <div class="logo-container">
      <img
        class="image-logo"
        src="https://res.cloudinary.com/dt4xntymn/image/upload/v1631674485/aviator/home/Aviator_Home_Right_cfdw58.png"
        alt=""
      />
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
    transform: translateY(-500vh);
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
