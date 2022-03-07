<script>
  import CarouselFull from "../CarouselFull/CarouselFull.svelte";
  import ContactUs from "../ContactUs/ContactUs.svelte";
  import ImagePage from "../ImagePage/ImagePage.svelte";
  import Quotes from "../Quotes/Quotes.svelte";
  import TextPage from "../TextPage/TextPage.svelte";

  export let leftPage;
</script>

<div bind:this={leftPage} class="container">
  <div class="bg-image-container">
    <img class="bg-image" src="Home Left.jpg" alt="" />
  </div>
  <div id="home" class="logo-wrapper">
    <div class="logo-container">
      <img class="image-logo" src="Aviator Home Left.png" alt="" />
    </div>
  </div>
  <Quotes page="left" />
  <ImagePage imgInd={0} page="left" index={0} />
  <TextPage page="left" bgColor="#860116" index={1} />
  <CarouselFull
    itemInd={2}
    page="left"
    name="the impact"
    orient="full"
    index={2}
  />
  <TextPage page="left" bgColor="#860116" index={3} />
  <CarouselFull
    itemInd={1}
    page="left"
    name="floorplans"
    orient="full"
    index={4}
  />

  <ContactUs deviceType={"desktop"} bgColor="#860116" />
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
