<script>
  import { onMount } from "svelte";
  import ContactUs from "../../ContactUs/ContactUs.svelte";

  import Card from "../Card/Card.svelte";
  import CardCarousel from "../CardCarousel/CardCarousel.svelte";

  import CardGallery from "../CardGallery/CardGallery.svelte";
  import _ from "lodash";
  import { pageLayout } from "../../../pageContent";
  let cardLayout = [];
  onMount(async () => {
    cardLayout = pageLayout.mobile;
  });
</script>

<div class="card-wrapper">
  <div class="bg-image-container">
    <img class="bg-image" src="mobile/bg.jpg" alt="" />
  </div>
  <div id="home" class="logo-wrapper">
    <div class="logo-container">
      <img class="image-logo" src="mobile/mobile-logo.png" alt="" />
    </div>
  </div>
  <div id="quote" class="quote-container">
    <div class="quote-image-container">
      <img src="mobile/quotes.png" alt="" class="quote-image" />
    </div>
  </div>
  <div class="card-container">
    {#each cardLayout as card, i}
      {#if cardLayout[i].type === "bg-pages" || cardLayout[i].type === "video"}
        <Card page={card} index={i} />
      {:else if cardLayout[i].type === "gallery"}
        <CardGallery />
      {:else}
        <CardCarousel
          carouselName={cardLayout[i].carousel}
          page={card}
          index={i}
        />
      {/if}
    {/each}
    <div id="contact" class="contact-us-container">
      <ContactUs />
    </div>
  </div>
</div>

<style lang="scss">
  .contact-us-container {
    width: 100%;
    padding: 30px;
    height: 100vh;
  }
  .quote-container {
    width: 100%;
    height: 70vh;
    position: relative;

    .quote-image-container {
      padding: 50px;
      width: 100%;
      clip-path: inset(0);
      height: 500px;
      top: 0;
      bottom: 0;
      left: 0;
      margin: auto;
      right: 0;

      .quote-image {
        top: 0;
        bottom: 0;
        left: 0;
        padding: 30px;
        right: 0;
        width: 100%;
        margin: auto;
        object-fit: cover;
        position: fixed;
      }
    }
  }
  .bg-image-container {
    position: absolute;
    z-index: 1;
    width: 100%;
    height: 100%;
    &::before {
      display: block;
      background-color: rgba(10, 10, 10, 0.6);
      backdrop-filter: blur(4px);

      height: 100%;
      width: 100%;
      z-index: 2;
      position: absolute;
      content: "";
    }
    .bg-image {
      z-index: 1;
      position: relative;
      width: 100%;
      object-position: center center;
      object-fit: cover;
      height: 100%;
    }
  }
  .card-container {
    position: relative;
    background-color: #2c2a2b;
  }
  .logo-wrapper {
    z-index: 2;
    position: relative;
    width: 100vw;
    height: 100vh;

    display: flex;

    justify-content: center;
    align-items: center;
    .logo-container {
      max-width: 65%;
      .image-logo {
        object-fit: contain;

        width: 100%;
      }
    }
  }
</style>
