<script>
  import { highResBts } from "../../pageContent";
  import { modal } from "../../stores";



  const images = [
    "http://res.cloudinary.com/dt4xntymn/image/upload/v1630879411/gallery/2021.05.29_roof_2_ontfwx.jpg",

    "http://res.cloudinary.com/dt4xntymn/image/upload/v1630879411/gallery/Amit_and_Russel_m0lcjt.jpg",
    "http://res.cloudinary.com/dt4xntymn/image/upload/v1630879411/gallery/Bike_frqokt.jpg",
    "http://res.cloudinary.com/dt4xntymn/image/upload/v1630879411/gallery/Framing_d7ovrn.jpg",
    "http://res.cloudinary.com/dt4xntymn/image/upload/v1630879411/gallery/Humming_Bird_vgziao.jpg",
    "http://res.cloudinary.com/dt4xntymn/image/upload/v1630879411/gallery/circle_window_with_pendant_light_fbnnsd.jpg",
    "http://res.cloudinary.com/dt4xntymn/image/upload/v1630879411/gallery/dining_room_discussion_wyhfjh.jpg",
    "http://res.cloudinary.com/dt4xntymn/image/upload/v1630879412/gallery/electrical_2_hzrwdq.jpg",
    "http://res.cloudinary.com/dt4xntymn/image/upload/v1630879412/gallery/electrical_discussion_fzgod7.jpg",
    "http://res.cloudinary.com/dt4xntymn/image/upload/v1630879412/gallery/framing_discussion_skcuns.jpg",
    "http://res.cloudinary.com/dt4xntymn/image/upload/v1630879411/gallery/kitchen_discussion_2_mqzixc.jpg",
    "http://res.cloudinary.com/dt4xntymn/image/upload/v1630879411/gallery/kitchen_discussion_3_wwredc.jpg",
    "http://res.cloudinary.com/dt4xntymn/image/upload/v1630879411/gallery/kitchen_discussion_ynx88u.jpg",
  ];
</script>

<div>
  <div id="behind-the-scenes" class="container">
    <div class="bu-title bu-has-text-centered">behind the scenes</div>
    <div class="gallery-container">
      {#each images as image, i}
        <img
          on:click={() => {
            $modal.visibility = true;
            $modal.content = highResBts[i];
            $modal.type = "image";
          }}
          src={image}
          alt=""
        />{/each}
    </div>
  </div>
</div>

<style lang="scss">
  @keyframes example {
    0% {
      opacity: 0;
    }

    100% {
      width: 100%;
    }
  }
  .bu-title {
    font-family: Orator;
    color: white;
  }
  .gallery-container {
    display: grid;
    grid-template-columns: repeat(3, minmax(20px, 1fr));
    grid-gap: 25px;
    padding: 15px;

    img {
      border-radius: 4px;
      animation-fill-mode: forwards;
    }
  }
</style>
