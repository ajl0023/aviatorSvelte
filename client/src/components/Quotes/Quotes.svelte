<script>
  export let page;
</script>

<div

  style="justify-content: {page === 'left' ? 'flex-end' : 'flex-start'}; 
  padding: {page === 'left' ? '0 0 0 40px' : '0 40px 0 0 '};"
  class="page bu-has-background-black"
>
  <div class="container">
    <div class="image-container">
      <img
        class="quote-photo"
        src={page === "left"
          ? "https://res.cloudinary.com/dt4xntymn/image/upload/v1631675421/aviator/quotes/Quote_Left_zvlxso.png"
          : "https://res.cloudinary.com/dt4xntymn/image/upload/v1631675424/aviator/quotes/Quote_Right_rhvyuw.png"}
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
      .image-container {
        width: 100%;
        height: 100%;
        .quote-photo {
          width: 100%;
        }
      }
    }
  }
</style>
