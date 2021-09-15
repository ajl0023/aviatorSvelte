<script>
  import Glide from "@glidejs/glide";
  import { onMount } from "svelte";
  import Arrow from "../CardComponents/Card/Arrow.svelte";

  let glider;
  export let name;

  const images = {
    concept: [
      "https://res.cloudinary.com/dt4xntymn/image/upload/v1631731354/aviator/bgphotos/theConcept/Waypoint_Sketch_xsevlg.jpg",
      "https://res.cloudinary.com/dt4xntymn/image/upload/v1631731354/aviator/bgphotos/theConcept/Telescope_Sketch_l4agfq.jpg",
      "https://res.cloudinary.com/dt4xntymn/image/upload/v1631731354/aviator/bgphotos/theConcept/Take_Off_Sketch_sx4qda.jpg",
      "https://res.cloudinary.com/dt4xntymn/image/upload/v1631731354/aviator/bgphotos/theConcept/Sketch_Carousel_Pics_1_o8wncj.jpg",
      "https://res.cloudinary.com/dt4xntymn/image/upload/v1631731354/aviator/bgphotos/theConcept/Geometry_Sketch_inkt7s.jpg",
      "https://res.cloudinary.com/dt4xntymn/image/upload/v1631731354/aviator/bgphotos/theConcept/Depth_Sketch_gz4wzm.jpg",
    ],
  };

  onMount(() => {
    const glide = new Glide(glider);
    glide.mount();
  });
</script>

<div class="page">
  <div bind:this={glider} class="glide">
    <div class="glide__track" data-glide-el="track">
      <ul class="glide__slides">
        {#each images[name] as img, i}
          <li class="glide__slide">
            <div class="dual-image-container">
              <div class="image-container">
                <img loading="lazy" class="carousel-image" src={img} alt="" />
              </div>
              <div class="image-container">
                <img
                  loading="lazy"
                  class="carousel-image"
                  src={images[name][i + 1]}
                  alt=""
                />
              </div>
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
  .glide__arrow--right {
    right: 20px;
    transform: rotate(180deg);
  }
  .glide__arrow--left {
    left: 20px;
  }
  .page-arrow-container {
    width: 30px;
    height: 30px;
    position: absolute;

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
