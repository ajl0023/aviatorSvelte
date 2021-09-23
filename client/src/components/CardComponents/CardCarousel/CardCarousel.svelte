<script>
  import { browser } from "$app/env";
  import Glide from "@glidejs/glide";
  import { onDestroy, onMount } from "svelte";
  import { navToLink, textPages } from "../../../pageContent";
  import Arrow from "../Card/Arrow.svelte";
  let carousel;
  let lazyImage;
  let glide;
  let glideIndex = 0;
  let showMore = false;

  export let index;
  export let page;
  let overFlowing;
  let mainText;

  const images = {
    "the impact": [
      "https://res.cloudinary.com/dt4xntymn/image/upload/v1632252098/aviator/renders/Copy_of_CAYMAN_AVIATOR_20210722_2_v7skk3.jpg",
      "https://res.cloudinary.com/dt4xntymn/image/upload/v1632252098/aviator/renders/Copy_of_CAYMAN_AVIATOR_20210722_4_cloxr9.jpg",
      "https://res.cloudinary.com/dt4xntymn/image/upload/v1632252098/aviator/renders/Copy_of_CAYMAN_AVIATOR_20210722_5_scg5pj.jpg",
      "https://res.cloudinary.com/dt4xntymn/image/upload/v1632252098/aviator/renders/Copy_of_CAYMAN_AVIATOR_20210722_6_idtqug.jpg",
    ],
    "the concept": [
      "https://res.cloudinary.com/dt4xntymn/image/upload/v1631731354/aviator/bgphotos/theConcept/Waypoint_Sketch_xsevlg.jpg",
      "https://res.cloudinary.com/dt4xntymn/image/upload/v1631731354/aviator/bgphotos/theConcept/Telescope_Sketch_l4agfq.jpg",
      "https://res.cloudinary.com/dt4xntymn/image/upload/v1631731354/aviator/bgphotos/theConcept/Take_Off_Sketch_sx4qda.jpg",
      "https://res.cloudinary.com/dt4xntymn/image/upload/v1631731354/aviator/bgphotos/theConcept/Sketch_Carousel_Pics_1_o8wncj.jpg",
      "https://res.cloudinary.com/dt4xntymn/image/upload/v1631731354/aviator/bgphotos/theConcept/Geometry_Sketch_inkt7s.jpg",
      "https://res.cloudinary.com/dt4xntymn/image/upload/v1631731354/aviator/bgphotos/theConcept/Depth_Sketch_gz4wzm.jpg",
    ],
  };

  onMount(() => {
    glide = new Glide(carousel);

    glide.mount();
    glide.on("run", function () {
      glideIndex = glide.index;
    });
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
      <div class="indicator {page}">
        {#if glide}
          <p>
            {glideIndex}/{images[page.title].length - 1}
          </p>
        {/if}
      </div>
      <div class="glide__track" data-glide-el="track">
        <ul class="glide__slides">
          {#each images[page.title] as img, i}
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
  .indicator {
    top: 5px;

    z-index: 4;
    font-weight: 600;
    text-align: center;
    letter-spacing: 0.2em;
    right: 5px;
    position: absolute;
    padding: 5px 15px;
    border-radius: 14px;
    background-color: black;
    color: white;
    display: flex;
    justify-content: center;
    p {
      margin-right: -0.2em;
    }
  }
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
    bottom: 5px;
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
    right: 5px;
  }
  .carousel-image {
    object-fit: cover;
  }
  .show-more {
    display: block;
    max-height: 100%;
  }
</style>
