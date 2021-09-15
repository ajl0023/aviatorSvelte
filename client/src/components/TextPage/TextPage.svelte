<script>
  import { onMount } from "svelte";

  import { textPages } from "../../pageContent";
  import { scrollContainers } from "../../stores";

  export let index;
  export let bgColor;
  let scrollContainer;
  const disableWheel = (e) => {
    e.stopImmediatePropagation();
  };
  onMount(() => {
    scrollContainers.push(scrollContainer);
  });
</script>

<div style="background-color: {bgColor};" class="page container">
  <div class="text-content">
    <div class="bu-content bu-is-large">
      <div class="header-container">
        <h3 class="header bu-content-header">
          {textPages[index].header}
        </h3>
        <img class="header-stroke" src={textPages[index].headerBrush} alt="" />
      </div>
    </div>
    <div bind:this={scrollContainer} class="bu-content text-container">
      <div class="scroll-container-text">
        <img class="p-stroke" src={textPages[index].pgBrush} alt="" />

        <div class="text-p-container">
          {#each textPages[index].paragraphs as text, i}
            <p key={i} class="$1">
              {text}
            </p>
          {/each}
        </div>
      </div>
    </div>
  </div>
</div>

<style lang="scss">
  .p-stroke {
    left: 0;
    top: 0;
    bottom: 0;
    margin: auto;
    width: 100%;
    height: 100%;
    z-index: 1;
    position: absolute;
  }
  .container {
    margin: auto;
    overflow: hidden;
    display: flex;
    font-family: Capsuula;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color: white;
    height: 100%;
  }

  .text-content {
    max-width: 500px;
    display: flex;
    padding: 20px;
    z-index: 2;
    flex-direction: column;
    width: 100%;

    overflow: hidden;

    .scroll-container-text {
      position: relative;
    }
    .text-container {
      height: 100%;

      &::-webkit-scrollbar {
        width: 20px;
      }

      &::-webkit-scrollbar-track {
        background-color: transparent;
      }

      &::-webkit-scrollbar-thumb {
        background-color: #d6dee1;
        border-radius: 20px;
        border: 6px solid transparent;
        background-clip: content-box;
      }
    }
  }
  .header {
    white-space: nowrap;
    color: white;
    font-size: 3em;
    font-weight: 100;
    z-index: 2;
    position: relative;
    width: fit-content;
  }
  .header-container {
    width: fit-content;
    margin: auto;

    position: relative;
  }
  .text-p-container {
    position: relative;
    z-index: 2;
    font-size: 20px;
  }
  .header-stroke {
    left: 0;
    bottom: -10px;

    z-index: 1;
    position: absolute;
  }
</style>
