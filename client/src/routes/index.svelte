<script context="module">
  import { pageLayout } from "./../pageContent";
  import _ from 'lodash'
  export const prerender = true;

  export async function load({ params, fetch, session, stuff }) {
    const imagePages = await fetch("http://localhost:3000/api/bg-pages");
    const carouselRenders = await fetch(
      "http://localhost:3000/api/carousel-renders"
    );
    const pageCarousels = await fetch(
      "http://localhost:3000/api/page-carousels"
    );
    const bts = await fetch("http://localhost:3000/api/behind-the-scenes");
    pageLayout["image-pages"] = await imagePages.json();

    pageLayout["carousel-renders"] = await carouselRenders.json();
    pageLayout["page-carousels"] = await pageCarousels.json();

    pageLayout["bts"] = await bts.json();
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
			} //iterate through object
			else {
				if (obj.url) {
					shouldExit = true;
					arr2.push(obj);
					return;
				} else {
					for (const key in obj) {
						if (isObjectOrArray(obj[key])) {
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
				item.url = item.url.replace('http://localhost:3000/mock-bb-storage/', 'main-images/');
			});
		}

		changeAllUrls(changeUrls(pageLayout, false));
    return {
      status: 200,
      props: {
        pageLayout: {
          imagePages,
        },
      },
    };
  }
</script>

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
