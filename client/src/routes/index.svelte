<script context="module">
  import { pageLayout } from "./../pageContent";
  import _ from "lodash";
  export const prerender = true;
  export async function load({ fetch }) {
    const categories = (
      await (await fetch("/api2/api/categories")).json()
    ).reduce((acc, item) => {
      acc[item._id] = item;
      return acc;
    }, {});

    const imagePages = await fetch("/api2/api/bg-pages");
    const pageCarousels = await fetch("/api2/api/page-carousels");
    const mobile = await fetch("/api2/api/mobile");
    pageLayout["image-pages"] = await imagePages.json();
    pageLayout["page-carousels"] = await pageCarousels.json();
    pageLayout["mobile"] = await mobile.json();
    pageLayout["mobile"] = pageLayout["mobile"].map((item) => {
      item["type"] = categories[item.category].category;
      return item;
    });

    function isObjectOrArray(item) {
      return _.isPlainObject(item) || Array.isArray(item);
    }
    const arr2 = [];
    let shouldExit = false;
    function changeUrls(obj) {
      if (Array.isArray(obj)) {
        for (const item of obj) {
          changeUrls(item);
        }
        return;
      }
      if (!isObjectOrArray(obj)) {
        return;
      } else {
        if (obj.url) {
          shouldExit = true;
          arr2.push(obj);
          return;
        } else {
          for (const key in obj) {
            if (isObjectOrArray(obj[key])) {
              if (Array.isArray(obj[key])) {
                obj[key] = obj[key].sort((a, b) => {
                  return a.order - b.order;
                });
              }
              if (shouldExit) {
                continue;
              } else {
                changeUrls(obj[key]);
                shouldExit = false;
              }
            }
          }
        }
      }
      return arr2;
    }
    function changeAllUrls(urls) {
      urls.map((item) => {
        if (dev) {
          item.url = item.url.replace(
            "http://test12312312356415616.store",
            hostName
          );
        } else {
          return item;
        }
      });
    }

    changeAllUrls(changeUrls(pageLayout, false));
    return {};
  }
</script>

<script>
  import { onDestroy, onMount } from "svelte";
  import Modal from "../components/Modal/Modal.svelte";
  import Navbar from "../components/Navbar/Navbar.svelte";

  import { browser, dev } from "$app/env";
  import "../global.scss";
  import { hostName } from "src/host";

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

  <CardContainer data={pageLayout["mobile"]} />

  <Modal />
  <Socials />
</div>

<style lang="scss">
</style>
