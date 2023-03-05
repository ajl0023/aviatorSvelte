<script>
	import { getContext } from "svelte";


  const page_side = getContext("page_side");
</script>

<div
  style="justify-content: {page_side === 'left' ? 'flex-end' : 'flex-start'}; 
  padding: {page_side === 'left' ? '0 0 0 40px' : '0 40px 0 0 '};"
  class="page"
>
  <div class="container">
    <div class="image-container">
      <img
        class="quote-photo"
        src={page_side === "left" ? "/images/Quote Left.png" : "/images/Quote Right.png"}
        alt=""
      />
    </div>
  </div>
</div>

<style lang="scss">
  .page {
    display: flex;
    align-items: center;

    .container {
      max-width: 700px;
      height: auto;
      display: flex;
      align-items: center;
      .image-container {
        width: 100%;
        height: 80%;
        .quote-photo {
          height: 560px;
          width: 100%;
          @media screen and (max-width: 800px) {
            height: 300px;
          }
        }
      }
    }
  }
</style>
