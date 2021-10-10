<script>
  import Glide from "@glidejs/glide";
  import { onMount } from "svelte";
  import Arrow from "../CardComponents/Card/Arrow.svelte";

  let glider;
  export let name;
  export let orient;
  export let page;

  const images = {
    concept: [
      "https://res.cloudinary.com/dt4xntymn/image/upload/v1631731354/aviator/bgphotos/theConcept/Waypoint_Sketch_xsevlg.jpg",
      "https://res.cloudinary.com/dt4xntymn/image/upload/v1631731354/aviator/bgphotos/theConcept/Telescope_Sketch_l4agfq.jpg",
      "https://res.cloudinary.com/dt4xntymn/image/upload/v1631731354/aviator/bgphotos/theConcept/Take_Off_Sketch_sx4qda.jpg",
      "https://res.cloudinary.com/dt4xntymn/image/upload/v1631731354/aviator/bgphotos/theConcept/Sketch_Carousel_Pics_1_o8wncj.jpg",
      "https://res.cloudinary.com/dt4xntymn/image/upload/v1631731354/aviator/bgphotos/theConcept/Geometry_Sketch_inkt7s.jpg",
      "https://res.cloudinary.com/dt4xntymn/image/upload/v1631731354/aviator/bgphotos/theConcept/Depth_Sketch_gz4wzm.jpg",
    ],
    floorplans: [
      "https://res.cloudinary.com/dt4xntymn/image/upload/v1632507698/aviator/floorplans/2540_Cayman_Rd_SITE_PLAN-1_rpr882.jpg",
      "https://res.cloudinary.com/dt4xntymn/image/upload/v1632507698/aviator/floorplans/2540_Cayman_Rd_1ST_LEVEL_20210629-1_ckq7vd.jpg",
      "https://res.cloudinary.com/dt4xntymn/image/upload/v1632507697/aviator/floorplans/2540_Cayman_Rd_2ND_LEVEL_20210629-1_g4bs0x.jpg",
    ],
    impact: [
      "https://res.cloudinary.com/dt4xntymn/image/upload/v1632444185/aviator/renders/CAYMAN_AVIATOR_20210722_6_e52vf4.jpg",
      "https://res.cloudinary.com/dt4xntymn/image/upload/v1632444185/aviator/renders/CAYMAN_AVIATOR_20210722_5_om9us1.jpg",
      "https://res.cloudinary.com/dt4xntymn/image/upload/v1632444185/aviator/renders/CAYMAN_AVIATOR_20210722_1_xebfit.jpg",
      "https://res.cloudinary.com/dt4xntymn/image/upload/v1632444184/aviator/renders/CAYMAN_AVIATOR_20210722_2_sqndug.jpg",
      "https://res.cloudinary.com/dt4xntymn/image/upload/v1632444184/aviator/renders/CAYMAN_AVIATOR_20210722_3_yfhhss.jpg",
      "https://res.cloudinary.com/dt4xntymn/image/upload/v1632444184/aviator/renders/CAYMAN_AVIATOR_20210722_4_cdgjbd.jpg",
    ],
  };

  const halfCarousel = {
    concept: Array.from("x".repeat(images.concept.length / 2)),
  };

  let glide;
  let glideIndex = 0;
  onMount(() => {
    glide = new Glide(glider);

    glide.mount();
    glide.on("run", function () {
      glideIndex = glide.index;
    });
  });
</script>

<div class="page">
  <div class="indicator {page}">
    {#if glide}
      <p>
        {glideIndex + 1}/{orient === "half"
          ? halfCarousel[name].length
          : images[name].length}
      </p>
    {/if}
  </div>
  <div class="circle-click">
    <div class="ellipsis-container">
      <div class="ellipsis" />
      <div class="ellipsis" />
      <div class="ellipsis" />
    </div>
  </div>
  <div bind:this={glider} class="glide">
    <div class="glide__track" data-glide-el="track">
      <ul class="glide__slides">
        {#each orient === "half" ? halfCarousel[name] : images[name] as img, i}
          <li class="glide__slide">
            <div class="dual-image-container">
              <div
                class:carousel-full={orient === "full"}
                class="image-container"
              >
                <img
                  loading="lazy"
                  class="carousel-image"
                  src={images[name][i]}
                  alt=""
                />
              </div>
              {#if orient === "half"}
                <div class="image-container">
                  <img
                    loading="lazy"
                    class="carousel-image"
                    src={images[name][i + 1]}
                    alt=""
                  />
                </div>
              {/if}
            </div>
          </li>
        {/each}
      </ul>
    </div>
    <div class="glide__arrows" data-glide-el="controls">
      <button
        class="glide__arrow page-arrow-container glide__arrow--left"
        data-glide-dir="<"
      >
        <div class="page-arrow-relative">
          <Arrow
            styleP="object-fit:cover;width:100%;fill:white; transform:rotate(-90deg); height:100%; "
          />
        </div></button
      >
      <button
        class="glide__arrow  page-arrow-container glide__arrow--right"
        data-glide-dir=">"
      >
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
  .ellipsis-container {
    display: flex;

    .ellipsis {
      border-radius: 50%;
      background-color: rgb(78, 74, 74);
      width: 4px;
      height: 4px;
      &:nth-child(-n + 2) {
        margin-right: 2px;
      }
    }
  }
  .circle-click {
    border: 3px solid rgb(78, 74, 74);
    border-radius: 50%;
    width: 30px;
    height: 30px;
    position: absolute;
    z-index: 2;
    bottom: 5px;
    left: 5px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .page {
    position: relative;
  }
  .indicator {
    top: 5px;

    z-index: 2;
    font-weight: 600;
    text-align: center;
    letter-spacing: 0.2em;
    font-family: Capsuula;
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
  .left {
    right: 5px;
  }
  .right {
    left: 5px;
  }
  .glide__arrow--right {
    right: 20px;
    transform: rotate(180deg);
    touch-action: none;
  }
  .glide__arrow--left {
    left: 20px;
    touch-action: none;
  }
  .page-arrow-container {
    width: 30px;
    height: 30px;
    position: absolute;
    touch-action: none;

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
      .dual-image-container {
        width: 100%;
        height: 100%;
        overflow: hidden;
        .carousel-full {
          height: 100% !important;
        }
        .image-container {
          width: 100%;
          height: 50%;
          img {
            width: 100%;
            object-fit: cover;
            height: 100%;
            object-position: center center;
          }
        }
      }
    }
  }
</style>
