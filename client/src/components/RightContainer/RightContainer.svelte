<script>
  import CarouselFull from "../CarouselFull/CarouselFull.svelte";
  import CarouselRight from "../CarouselRight/CarouselRight.svelte";
  import Credits from "../Credits/Credits.svelte";
  import Gallery from "../Gallery/Gallery.svelte";
  import ImagePage from "../ImagePage/ImagePage.svelte";
  import TextPage from "../TextPage/TextPage.svelte";



  let name = "world";
  export let rightPage;
  export let carouselPage;
</script>

<div bind:this={rightPage} class="container">
  <Credits page="right" />
  <ImagePage index={4} />
  <Gallery />
  <ImagePage index={3} />

  <TextPage index={4} />
  <CarouselFull />
  <CarouselRight {carouselPage} page="right" />
  <ImagePage index={1} />
  <TextPage index={0} />
  <div class="logo-wrapper">
    <div class="logo-container">
      <img
        class="image-logo"
        src="https://res.cloudinary.com/dt4xntymn/image/upload/v1630788553/misc/Maliview_Right_Logo_njwkyp.png"
        alt=""
      />
    </div>
  </div>
</div>

<style lang="scss">
  .container {
    align-items: center;
    transform: translateY(-900vh);
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
