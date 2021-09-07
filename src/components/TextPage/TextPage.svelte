<script>
  import { textPages } from "../../pageContent";


  export let index;
  export let bgColor;
</script>

<div style="background-color: {bgColor};" class="page container">
  <div class="text-content">
    <div class="bu-content">
      <div class="bu-content bu-is-large">
        <h3 class="header bu-content-header bu-is-underlined">
          {textPages[index].header}
        </h3>
      </div>
      {#each textPages[index].paragraphs as text, i}
        <p key={i} class="$1">
          {text}
        </p>
      {/each}
    </div>
  </div>
</div>

<style lang="scss">
  .container {
    margin: auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color: white;
    .header {
      text-transform: uppercase;
      color: white;
    }
    @media (max-width: 650px) {
      width: 100%;
      height: 100%;
      display: none;
    }

    .text-content {
      max-width: 50%;
      overflow: hidden;
      width: 100%;
    }
    @media (max-width: 1400px) {
      .text-content {
        padding: 30px;
        overflow: hidden;
        max-width: 100%;
      }
    }
    @media (max-width: 950px) {
      .text-content {
        padding-top: 67px;
      }
    }
  }
</style>
