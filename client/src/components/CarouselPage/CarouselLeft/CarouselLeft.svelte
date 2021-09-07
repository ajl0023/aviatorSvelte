<script>
  import Glide from "@glidejs/glide";
  import { afterUpdate,onMount } from "svelte";
  import { currentPage } from "../../../stores";
  import CarouselThumbs from "../../CarouselThumbs/CarouselThumbs.svelte";
  import { images } from "../image";


  var glide = new Glide("div.glide");
  let page;
  const setPage = currentPage.subscribe((value) => {
    page = value;
  });

  onMount(() => {
    glide.mount();
  });
  afterUpdate(() => {
    if (glide) {
      glide.go(`=${page}`);
    }
  });
</script>

<div class="page">
  <div class="flex-container">
    <div class="content">
      <img
        src={"https://res.cloudinary.com/dt4xntymn/image/upload/v1630813204/titleimages/Renders_Page_Text_Left_wd8jcv.png"}
        alt=""
      />
    </div>
    <div class="carousel-container">
      <div data-glide-dir={`${page}`} class="glide ">
        <div class="glide__track" data-glide-el="track">
          <ul class="glide__slides">
            {#each images.slice(0, 17) as img, i}
              <li class="glide__slide">
                <img class="carousel-image" src={img} alt="" />
              </li>
            {/each}
          </ul>
        </div>
      </div>
      <button
        on:click={() => {
          currentPage.update((n) => n - 1);
        }}
        class="page-arrow-container"
      >
        <img
          class="page-arrow"
          src="https://res.cloudinary.com/dt4xntymn/image/upload/v1630788553/misc/z-caroArrow_tejk9h.png"
          alt=""
        />
      </button>
    </div>
    <CarouselThumbs page="left" />
    <p style="color: red; font-size:9000px" />
  </div>
</div>

<style lang="scss">
  .page-arrow-container {
    width: 50px;
    height: 50px;
    position: absolute;
    left: -60px;
    bottom: 0;
    top: 50%;
    border: none;
    background: none;
    .page-arrow {
      object-fit: cover;
      width: 100%;
    }
  }
  .flex-container {
    display: flex;
    height: 100%;
    justify-content: center;
    align-items: flex-end;
    flex-direction: column;
  }
  .carousel-container {
    width: 50%;
    height: 50%;
    display: flex;
    position: relative;
  }
  .carousel-image {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
</style>
