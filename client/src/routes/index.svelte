<<<<<<< HEAD
<script>
  import { onDestroy, onMount } from "svelte";
  import Modal from "../components/Modal/Modal.svelte";
  import Navbar from "../components/Navbar/Navbar.svelte";

  import { browser } from "$app/env";
  import "../global.scss";

  import "../bulma.prefixed.css";
  import ScrollContainer from "../components/ScrollContainer/ScrollContainer.svelte";
  import CardContainer from "../components/CardComponents/CardContainer/CardContainer.svelte";
  import Socials from "../components/Socials/Socials.svelte";
  import PinchZoom from "../draftComponents/PinchZoom.svelte";
  let windowThreshHold = false;

  function handleResponsiveResize() {
    if (window.innerWidth <= 650) {
      windowThreshHold = true;
    } else {
      windowThreshHold = false;
    }
  }
  onMount(() => {
    handleResponsiveResize();

    window.addEventListener("resize", handleResponsiveResize);
  });
  onDestroy(() => {
    if (browser) {
      window.removeEventListener("resize", handleResponsiveResize);
    }
  });
</script>

<div>
  <Navbar />

  <ScrollContainer />

  <CardContainer />

  <Modal />
  <Socials />
</div>

<style lang="scss">
</style>
=======
<script>
  import { onDestroy, onMount } from "svelte";
  import Modal from "../components/Modal/Modal.svelte";
  import Navbar from "../components/Navbar/Navbar.svelte";

  import { browser } from "$app/env";
  import "../global.scss";

  import "../bulma.prefixed.css";
  import ScrollContainer from "../components/ScrollContainer/ScrollContainer.svelte";
  import CardContainer from "../components/CardComponents/CardContainer/CardContainer.svelte";
  import Socials from "../components/Socials/Socials.svelte";

  let windowThreshHold = false;

  function handleResponsiveResize() {
    if (window.innerWidth <= 650) {
      windowThreshHold = true;
    } else {
      windowThreshHold = false;
    }
  }
  onMount(() => {
    handleResponsiveResize();

    window.addEventListener("resize", handleResponsiveResize);
  });
  onDestroy(() => {
    if (browser) {
      window.removeEventListener("resize", handleResponsiveResize);
    }
  });
</script>

<div>
  <Navbar />

  <ScrollContainer />

  <CardContainer />

  <Modal />
  <Socials />
</div>

<style lang="scss">
</style>
>>>>>>> aec34eecc6d7b7f4c69d77dadfff6192256ceff4
