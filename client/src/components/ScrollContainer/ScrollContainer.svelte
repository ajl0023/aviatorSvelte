<script>
  import { onMount } from "svelte";
  import { pageLength } from "../../pageContent";
  import { pagePositions } from "../../stores";
  import LeftContainer from "../LeftContainer/LeftContainer.svelte";
  import RightContainer from "../RightContainer/RightContainer.svelte";


  let leftPage;
  let rightPage;
  let carouselPage;
  let leftElement;
  let rightElement;
  let page = 0;
  let test = 0;

  let shouldScroll = true;

  const handleCarouselPage = (e) => {};

  onMount(() => {
    leftElement = leftPage.$$.ctx[0];
    rightElement = rightPage.$$.ctx[0];

    // leftElement.style.transform = `translateY( ${window.innerHeight * -9}px)`;

    // rightElement.style.transform = `translateY( ${0}px)`;
  });

  const handleScrollAnimation = (e) => {
    if (window.innerWidth <= 650) {
      return;
    }
    if ($pagePositions.inital === false) {
      $pagePositions.inital = true;
    }
    if ($pagePositions.shouldScroll) {
      if (e.deltaY > 0 && $pagePositions.page < pageLength - 1) {
        $pagePositions.left = $pagePositions.left - 100;
        $pagePositions.right = $pagePositions.right + 100;

        $pagePositions.page += 1;
      } else if (e.deltaY < 0 && $pagePositions.page > 0) {
        $pagePositions.left = $pagePositions.left + 100;
        $pagePositions.right = $pagePositions.right - 100;
        // leftElement.style.transform = `translateY( ${pagePositions.left}px)`;

        // rightElement.style.transform = `translateY( ${pagePositions.right}px)`;

        $pagePositions.page -= 1;
      }
      pagePositions.toggleScroll();
    }
  };
  //DELETE THIS

  $: {
    if (leftElement && rightElement && $pagePositions.inital) {
      leftElement.style.transform = `translateY( ${$pagePositions.left}vh)`;
      rightElement.style.transform = `translateY( ${$pagePositions.right}vh)`;
    }
  }
</script>

<div class="scroll-container" on:mousewheel={handleScrollAnimation}>
  <LeftContainer bind:this={leftPage} />

  <RightContainer bind:this={rightPage} />
</div>

<style lang="scss">
  :global {
    .page {
      width: 50vw;
      height: 100vh;

      overflow: hidden;
    }
  }
</style>
