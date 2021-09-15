<script>
  import Glide from "@glidejs/glide";

  import { afterUpdate, onDestroy, onMount } from "svelte";
  import { navToLink, textPages } from "../../../pageContent";
  import Arrow from "../Card/Arrow.svelte";
  import { browser } from "$app/env";
  let carousel;
  let lazyImage;
  let firstImage;
  let showMore = false;

  export let index;
  export let page;
  let overFlowing;
  let mainText;
  const images = [
    "https://res.cloudinary.com/dt4xntymn/image/upload/v1630887731/rendersHighRes/33340_MULHOLLAND_INT_IMG_12A_00-min_ciecgp.jpg",
    "https://res.cloudinary.com/dt4xntymn/image/upload/v1630887728/rendersHighRes/33340_MULHOLLAND_INT_IMG_14A-min_a51cfk.jpg",
    "https://res.cloudinary.com/dt4xntymn/image/upload/v1630887729/rendersHighRes/33340_MULHOLLAND_INT_IMG_16A_00-min_qgp2ne.jpg",
    "https://res.cloudinary.com/dt4xntymn/image/upload/v1630887729/rendersHighRes/33340_MULHOLLAND_INT_IMG_24A-min_hsnpta.jpg",
    "https://res.cloudinary.com/dt4xntymn/image/upload/v1630887729/rendersHighRes/33340_MULHOLLAND_INT_IMG_26A-min_d1dxwf.jpg",
    "https://res.cloudinary.com/dt4xntymn/image/upload/v1630887729/rendersHighRes/33340_MULHOLLAND_INT_IMG_26B-min_jthbj4.jpg",
    "https://res.cloudinary.com/dt4xntymn/image/upload/v1630887728/rendersHighRes/33340_MULHOLLAND_INT_IMG_30A-min_yvenyq.jpg",
    "https://res.cloudinary.com/dt4xntymn/image/upload/v1630887729/rendersHighRes/33340_MULHOLLAND_INT_IMG_31A-min_mo1cj5.jpg",
    "https://res.cloudinary.com/dt4xntymn/image/upload/v1630887728/rendersHighRes/33340_MULHOLLAND_INT_IMG_34A-min_z5fw2h.jpg",
    "https://res.cloudinary.com/dt4xntymn/image/upload/v1630887730/rendersHighRes/33340_MULHOLLAND_INT_IMG_34B-min_ggb1xk.jpg",
    "https://res.cloudinary.com/dt4xntymn/image/upload/v1630887730/rendersHighRes/33340_MULHOLLAND_INT_IMG_34C-min_y3bogv.jpg",
    "https://res.cloudinary.com/dt4xntymn/image/upload/v1630887730/rendersHighRes/33340_MULHOLLAND_INT_IMG_3A_00-min_b0yvdi.jpg",
    "https://res.cloudinary.com/dt4xntymn/image/upload/v1630887731/rendersHighRes/33340_MULHOLLAND_INT_IMG_4A-min_ihzxkw.jpg",
  ];
  const floorplans = [
    "http://res.cloudinary.com/dt4xntymn/image/upload/v1631731354/aviator/bgphotos/theConcept/Waypoint_Sketch_xsevlg.jpg",
    "http://res.cloudinary.com/dt4xntymn/image/upload/v1631731354/aviator/bgphotos/theConcept/Telescope_Sketch_l4agfq.jpg",
    "http://res.cloudinary.com/dt4xntymn/image/upload/v1631731354/aviator/bgphotos/theConcept/Take_Off_Sketch_sx4qda.jpg",
    "http://res.cloudinary.com/dt4xntymn/image/upload/v1631731354/aviator/bgphotos/theConcept/Sketch_Carousel_Pics_1_o8wncj.jpg",
    "http://res.cloudinary.com/dt4xntymn/image/upload/v1631731354/aviator/bgphotos/theConcept/Geometry_Sketch_inkt7s.jpg",
    "http://res.cloudinary.com/dt4xntymn/image/upload/v1631731354/aviator/bgphotos/theConcept/Depth_Sketch_gz4wzm.jpg",
  ];
  onMount(() => {
    const glide = new Glide(carousel);

    glide.mount();

    if (browser) {
      window.addEventListener("resize", checkOverFlow);
    }

    checkOverFlow();
  });
  function checkOverFlow() {
    if (mainText.scrollHeight > mainText.clientHeight) {
      overFlowing = true;
    } else {
      overFlowing = false;
    }
  }

  onDestroy(() => {
    if (browser) {
      window.removeEventListener("resize", checkOverFlow);
    }
  });
</script>

<div
  bind:this={lazyImage}
  id={navToLink[index + 2]}
  class="bu-card card-container"
>
  <div class="carousel-container">
    <div bind:this={carousel} class="glide">
      <div class="glide__track" data-glide-el="track">
        <ul class="glide__slides">
          {#each page.title === "renders" ? images : floorplans as img, i}
            <li class="glide__slide">
              <div class="glide-image-container">
                <img loading="lazy" class="carousel-image" src={img} alt="" />
              </div>
            </li>
          {/each}
        </ul>
      </div>
      <div class="glide__arrows" data-glide-el="controls">
        <button
          class="glide__arrow page-arrow-container glide__arrow--left arrow-left"
          data-glide-dir="<"
        >
          <div class="page-arrow-relative">
            <Arrow
              styleP="object-fit:cover;width:100%;fill:white; transform:rotate(-90deg); height:100%; "
            />
          </div></button
        >
        <button
          class="glide__arrow  page-arrow-container glide__arrow--right arrow-right"
          data-glide-dir=">"
        >
          <div class="page-arrow-relative">
            <Arrow
              styleP="object-fit:cover;width:100%;fill:white; transform:rotate(90deg); height:100%; "
            />
          </div>
        </button>
      </div>
    </div>
  </div>
  <div class="card-content bu-card-content">
    <div class="bu-media">
      <div class="bu-media-left">
        <figure class="bu-image bu-is-48x48">
          <div class="square-place-holder" style=" height: 100%; width:100%;">
            <img
              src="https://res.cloudinary.com/dt4xntymn/image/upload/v1631742128/aviator/mobile/miniLogo_h1qtki.png"
              alt=""
            />
          </div>
        </figure>
      </div>
      {#if textPages[index]}
        <h5 class="title is-4 font-white">
          {textPages[index].header}
        </h5>
      {/if}
    </div>
    <div
      bind:this={mainText}
      class="content bu-is-clipped content font-white {showMore
        ? 'show-more'
        : ''}"
    >
      {#if textPages[index]}
        {#each textPages[index].paragraphs as p}
          <p>{p}</p>
        {/each}
      {/if}
    </div>
    <br />
    {#if overFlowing}
      <div
        on:click={() => {
          showMore = !showMore;
        }}
        class="bu-level bu-is-mobile"
      >
        <div class="bu-level-left">
          <p class="bu-level-left bu-level-item">Read More</p>
          <span class="bu-level-left bu-level-item bu-icon bu-is-small">
            <Arrow styleP="height:16px; width:16px;" {showMore} />
          </span>
        </div>
      </div>
    {/if}
  </div>
</div>

<style lang="scss">
  .square-place-holder {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    img {
      width: 100%;

      object-fit: cover;
    }
  }
  h5 {
    font-size: 2em;
    font-family: Capsuula;
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
    height: 30px;
    position: absolute;
    bottom: 0;
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
  .arrow-left {
    right: 40px;
  }
  .arrow-right {
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
