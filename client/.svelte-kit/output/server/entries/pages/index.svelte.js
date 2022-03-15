import { n as noop, a as safe_not_equal, c as create_ssr_component, b as subscribe, e as escape, d as add_attribute, f as each, v as validate_component, o as onDestroy, g as now, l as loop, h as createEventDispatcher, i as compute_rest_props, j as spread, k as escape_object } from "../../chunks/index-272d5b4a.js";
import _ from "lodash";
import "../../chunks/host-b5b4a144.js";
import "@glidejs/glide";
import "vanilla-lazyload";
import "@use-gesture/vanilla";
const pageLayout = {};
const pageContent = [
  "home",
  "quote",
  "the background",
  "the concept",
  "the impact",
  "video render",
  "floorplans",
  "contact"
];
const navButtons = [
  "home",
  "quote",
  "the background",
  "the concept",
  "the impact",
  "video render",
  "floorplans",
  "contact"
];
const pageLength = pageContent.length;
const textPages = [
  {
    header: "The Background",
    paragraphs: [
      "The 2019 Woolsey Malibu fire wiped out many structures, one of which was a dome-like building (like an observatory). What was left was a secluded property with a breathtaking 360-degree view of the Pacific Ocean and the Malibu mountains.   Apel Design accepted the challenge of creating a piece of architecture that would have a minimal environment impact and yet evoke and complete the site conditions. The site dictated three major criteria, first that it was a fire-rebuilt home, second the challenges of accessibility to the site and finally, it must be an \u201Coff the grid\u201D home."
    ],
    headerBrush: "background/Background Brush PNG.png",
    pgBrush: "background/bg-content.png"
  },
  {
    header: "The Concept",
    paragraphs: [
      "Conceptually, Apel Design wanted to create the notion that the architecture of building continues beyond. In a sense, the forms flow throughout and never stop. The architecture forms emerge from the ground, extends to the horizon and divides into two beautiful irregular volumetric elements as if the architecture was slicing the space, emphasizing the gorgeous views of the Malibu mountains and the Pacific Ocean. The bird-like building program also incorporates the ideas of flow and continuation; the first level proposes an open floor plan with a glass facade that opens up the space to a beautiful deck and a second floor for bedrooms that are elevated from the ground to again emphasize this notion of flow and lightness."
    ],
    headerBrush: "/concept/concept-title-brush.png",
    pgBrush: "/concept/concept-text-brush.png"
  },
  {
    header: "The Impact",
    paragraphs: [
      "Apel Design designed this project to have minimal environmental impact, this off-grid house will fully be powered by solar and biodiesel. The project will implement the latest technology to power the house. All the materials use will be LEED compliant to assure rigorous and environmentally friendly materials."
    ],
    headerBrush: "/impact/impact-title-brush.png",
    pgBrush: "/impact/impact-pg-brush.png"
  },
  {
    header: "Video Render",
    paragraphs: [
      "Take a dive into The Aviator with our 3D rendering. To get a feeling of the completed project and vision, please click on the video to the right."
    ],
    headerBrush: "/video render/video-render-title-brush.png",
    pgBrush: "/video render/video-render-text-brush.png"
  },
  {
    header: "Floorplans",
    paragraphs: [
      "Look through some of aviator's highly detailed floorplans to get a full layout of the design."
    ],
    headerBrush: "/floorplans/floorplans-title-brush.png",
    pgBrush: "/floorplans/floorplans-text-brush.png"
  }
];
const navToLink = navButtons.map((item) => {
  return item.replace(/\s/g, "-");
});
const subscriber_queue = [];
function writable(value, start = noop) {
  let stop;
  const subscribers = /* @__PURE__ */ new Set();
  function set(new_value) {
    if (safe_not_equal(value, new_value)) {
      value = new_value;
      if (stop) {
        const run_queue = !subscriber_queue.length;
        for (const subscriber of subscribers) {
          subscriber[1]();
          subscriber_queue.push(subscriber, value);
        }
        if (run_queue) {
          for (let i = 0; i < subscriber_queue.length; i += 2) {
            subscriber_queue[i][0](subscriber_queue[i + 1]);
          }
          subscriber_queue.length = 0;
        }
      }
    }
  }
  function update(fn) {
    set(fn(value));
  }
  function subscribe2(run, invalidate = noop) {
    const subscriber = [run, invalidate];
    subscribers.add(subscriber);
    if (subscribers.size === 1) {
      stop = start(set) || noop;
    }
    run(value);
    return () => {
      subscribers.delete(subscriber);
      if (subscribers.size === 0) {
        stop();
        stop = null;
      }
    };
  }
  return { set, update, subscribe: subscribe2 };
}
let scrollContainers = [];
const modal = writable({
  visibility: false,
  content: null,
  type: null
});
const pagePositionsStore = () => {
  const state = {
    page: null,
    left: 0,
    shouldScroll: true,
    inital: false,
    right: -700
  };
  const { subscribe: subscribe2, set, update } = writable(state);
  const methods = {
    toggleScroll(e) {
      update((state2) => {
        state2.shouldScroll = false;
        setTimeout(() => {
          state2.shouldScroll = true;
        }, 1100);
        return state2;
      });
    },
    disableScroll() {
      update((state2) => {
        state2.shouldScroll = false;
      });
    },
    enable() {
      update((state2) => {
        state2.shouldScroll = true;
      });
    },
    scrollCheck(e) {
      if (scrollContainers.includes(e.target.parentElement.parentElement.parentElement)) {
        return new Promise((res, rej) => {
          scrollContainers.forEach((ele) => {
            ele.onscroll = () => {
              res(false);
            };
          });
          setTimeout(() => {
            res(state.shouldScroll);
          }, 100);
        });
      } else {
        return Promise.resolve(state.shouldScroll);
      }
    },
    scrollEve(e) {
      this.scrollCheck(e).then((val) => {
        if (val) {
          if (e.deltaY > 0 && state.page < pageLength - 1) {
            state.left = state.left - 100;
            state.right = state.right + 100;
            state.page += 1;
          } else if (e.deltaY < 0 && state.page > 0) {
            state.left = state.left + 100;
            state.right = state.right - 100;
            state.page -= 1;
          }
          this.toggleScroll(e);
        }
      });
    },
    handleResize(left, right) {
      update((state2) => {
        state2.left = left;
        state2.right = right;
        return state2;
      });
    }
  };
  return {
    subscribe: subscribe2,
    set,
    update,
    ...methods
  };
};
const pagePositions = pagePositionsStore();
var Modal_svelte_svelte_type_style_lang = "";
const css$h = {
  code: ".video-container.svelte-1uwzqqj .video-modal.svelte-1uwzqqj{position:absolute;top:0;bottom:0;left:0;right:0;height:100%;width:100%}img.svelte-1uwzqqj.svelte-1uwzqqj{width:100%;object-fit:cover;height:100%}",
  map: null
};
const Modal = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $modal, $$unsubscribe_modal;
  $$unsubscribe_modal = subscribe(modal, (value) => $modal = value);
  $$result.css.add(css$h);
  $$unsubscribe_modal();
  return `<div class="${"bu-modal " + escape($modal.visibility ? "bu-is-active" : "")}"><div class="${"bu-modal-background"}"></div>
  <div class="${"bu-modal-content"}"><div class="${"bu-image bu-is-4by3"}">${$modal.type === "video" ? `<div class="${"video-container svelte-1uwzqqj"}"><iframe height="${"100%"}" class="${"video-modal svelte-1uwzqqj"}" width="${"100%"}"${add_attribute("src", function() {
    if ($modal.content) {
      var regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=)([^#\&\?]*).*/;
      var match = $modal.content.match(regExp);
      if (match && match[2].length == 11) {
        return "https://www.youtube.com/embed/" + match[2];
      } else {
        return "error";
      }
    }
  }(), 0)} title="${"YouTube video player"}" frameborder="${"0"}" allow="${"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"}" allowfullscreen></iframe></div>` : `<img${add_attribute("src", $modal.content, 0)} alt="${""}" class="${"svelte-1uwzqqj"}">`}</div></div>
  <button class="${"bu-modal-close bu-is-large"}" aria-label="${"close"}"></button>
</div>`;
});
var Hamburger_svelte_svelte_type_style_lang = "";
const css$g = {
  code: '.burger-label.svelte-mdnmtl.svelte-mdnmtl{block-size:18px;display:flex;justify-content:center;cursor:pointer;inline-size:18px;font-size:14px;line-height:21px;align-items:center}.burger-label.svelte-mdnmtl .main-trigger-icon-container.svelte-mdnmtl{position:relative;display:block;block-size:18px;inline-size:100%}.burger-label.svelte-mdnmtl .main-trigger-icon-container .main-trigger-icon.svelte-mdnmtl{background-color:white;inline-size:100%;position:absolute;display:block;transition:all 300ms ease-in-out;block-size:2px;top:calc(36% + 2px)}.burger-label.svelte-mdnmtl .main-trigger-icon-container .main-trigger-icon.svelte-mdnmtl:before{transition:all 300ms ease-in-out;block-size:2px;background-color:white;content:"";top:-5px;display:block;position:absolute;inline-size:100%}.burger-label.svelte-mdnmtl .main-trigger-icon-container .main-trigger-icon.svelte-mdnmtl:after{transition:all 300ms ease-in-out;block-size:2px;background-color:white;content:"";top:5px;display:block;position:absolute;inline-size:100%}.burger-input.svelte-mdnmtl.svelte-mdnmtl{opacity:1;display:none}.burger-input.svelte-mdnmtl:checked~.burger-label.svelte-mdnmtl{z-index:4}.burger-input:checked~.burger-label.svelte-mdnmtl .main-trigger-icon.svelte-mdnmtl{transition:all 300ms ease-in-out;background-color:transparent}.burger-input:checked~.burger-label.svelte-mdnmtl .main-trigger-icon.svelte-mdnmtl:before{top:0;z-index:4;background-color:black;transform:rotate(45deg);transition:all 300ms ease-in-out}.burger-input:checked~.burger-label.svelte-mdnmtl .main-trigger-icon.svelte-mdnmtl:after{top:0;z-index:4;background-color:black;transform:rotate(-45deg);transition:all 300ms ease-in-out}.burger-input.svelte-mdnmtl:checked~.side-menu-container.svelte-mdnmtl{background-color:white;height:100vh;font-family:Capsuula;bottom:0;top:0;display:flex;flex-direction:column;transition:all 400ms ease-in-out;z-index:3;left:0;position:absolute}.burger-input:checked~.side-menu-container.svelte-mdnmtl .side-menu-item-container.svelte-mdnmtl{padding:40px 8px;overflow-y:scroll;height:100%;margin-top:1.5rem;position:relative}.burger-input:checked~.side-menu-container.svelte-mdnmtl .side-menu-item-container.svelte-mdnmtl::before{content:"";height:100%;width:100%;display:block;opacity:30%;background-size:200px;z-index:1;position:absolute;top:0;bottom:0;left:0;right:0;margin:auto;background-repeat:no-repeat;background-position:center center}.burger-input:checked~.side-menu-container.svelte-mdnmtl .side-menu-item-container.svelte-mdnmtl::-webkit-scrollbar{display:none}.burger-input:checked~.side-menu-container.svelte-mdnmtl .side-menu-item-container li.svelte-mdnmtl:nth-child(-n+10){font-size:23px;z-index:2;position:relative;font-weight:600;display:flex;text-transform:uppercase;align-items:center;color:black;cursor:pointer;padding:20px 110px 20px 20px;border-bottom:1px solid #d0d1d2}.burger-input.svelte-mdnmtl:checked~.header-mask.svelte-mdnmtl{position:fixed;block-size:100vh;top:0;left:0;z-index:2;bottom:0;inline-size:100%;background-color:rgba(0, 0, 0, 0.5)}.side-menu-container.svelte-mdnmtl.svelte-mdnmtl{position:relative;background-color:white;height:100vh;font-family:Capsuula;bottom:0;top:0;display:flex;flex-direction:column;transition:all 400ms ease-in-out;z-index:3;left:-600px;position:absolute}.side-menu-container.svelte-mdnmtl .side-menu-item-container.svelte-mdnmtl{padding:40px 8px;overflow-y:scroll;height:100%;margin-top:1.5rem;position:relative}.side-menu-container.svelte-mdnmtl .side-menu-item-container.svelte-mdnmtl::before{content:"";height:100%;width:100%;display:block;opacity:30%;background-size:200px;z-index:1;position:absolute;top:0;bottom:0;left:0;right:0;margin:auto;background-repeat:no-repeat;background-position:center center}.side-menu-container.svelte-mdnmtl .side-menu-item-container.svelte-mdnmtl::-webkit-scrollbar{display:none}.side-menu-container.svelte-mdnmtl .side-menu-item-container li.svelte-mdnmtl:nth-child(-n+10){font-size:23px;z-index:2;position:relative;font-weight:600;display:flex;text-transform:uppercase;align-items:center;color:black;cursor:pointer;padding:20px 110px 20px 20px;border-bottom:1px solid #d0d1d2}.sidebar-logo-container.svelte-mdnmtl.svelte-mdnmtl{max-width:266px;margin:auto;padding:30px}.sidebar-logo-container.svelte-mdnmtl img.svelte-mdnmtl{width:100%;object-fit:cover}',
  map: null
};
const Hamburger = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$unsubscribe_pagePositions;
  $$unsubscribe_pagePositions = subscribe(pagePositions, (value) => value);
  let mainInput;
  $$result.css.add(css$g);
  $$unsubscribe_pagePositions();
  return `<div><input type="${"checkbox"}" id="${"burger-trigger"}" class="${"burger-input svelte-mdnmtl"}"${add_attribute("this", mainInput, 0)}>
  <label for="${"burger-trigger"}" class="${"burger-label svelte-mdnmtl"}"><span class="${"main-trigger-icon-container svelte-mdnmtl"}"><i class="${"main-trigger-icon svelte-mdnmtl"}"></i></span></label>
  <div class="${"side-menu-container svelte-mdnmtl"}"><ul name="${"list-container"}" class="${"side-menu-item-container svelte-mdnmtl"}">${each(navButtons, (label, i) => {
    return `<li class="${"svelte-mdnmtl"}">${escape(label)}
        </li>`;
  })}</ul>
    <div class="${"sidebar-logo-container svelte-mdnmtl"}"><a href="${"https://www.apeldesign.com/"}">
        <img src="${"By Apel Design Black.png"}" alt="${""}" class="${"svelte-mdnmtl"}"></a></div></div>

  <div data-id="${"header-mask"}" class="${"header-mask svelte-mdnmtl"}"></div>
</div>`;
});
var Navbar_svelte_svelte_type_style_lang = "";
const css$f = {
  code: '.wrapper.svelte-1acjjfq.svelte-1acjjfq{width:100vw;position:fixed;z-index:4}.container.svelte-1acjjfq.svelte-1acjjfq{color:white;display:flex;justify-content:space-between;align-items:center;font-family:"Orator";padding:20px 40px;font-weight:100}.container.svelte-1acjjfq .left-container.svelte-1acjjfq{display:flex;align-items:center}.container.svelte-1acjjfq .logo-container.svelte-1acjjfq{max-width:12em;height:66px}.container.svelte-1acjjfq .logo-container img.svelte-1acjjfq{width:100%;object-fit:cover}@media(max-width: 650px){.secondary-main-trigger-icon.svelte-1acjjfq.svelte-1acjjfq{display:none}.logo.svelte-1acjjfq.svelte-1acjjfq{display:none}}.nav-menu-label.svelte-1acjjfq.svelte-1acjjfq{display:flex;align-items:center;flex-grow:1}.nav-menu-label.svelte-1acjjfq .secondary-main-trigger-icon.svelte-1acjjfq{font-size:18px;margin-left:9px;line-height:18px;cursor:pointer;line-height:20px;margin-top:-4px;font-family:Capsuula;font-weight:600;margin-bottom:-8px;text-transform:uppercase;height:fit-content}',
  map: null
};
const Navbar = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css$f);
  return `<nav class="${"wrapper svelte-1acjjfq"}"><div class="${"container svelte-1acjjfq"}"><div class="${"left-container svelte-1acjjfq"}">${validate_component(Hamburger, "Hamburger").$$render($$result, {}, {}, {})}
      <div><label class="${"nav-menu-label svelte-1acjjfq"}" for="${"burger-trigger"}"><p class="${"secondary-main-trigger-icon svelte-1acjjfq"}">menu</p></label></div></div>

    <div class="${"logo-container svelte-1acjjfq"}"><a href="${"https://www.apeldesign.com/"}">
        <img class="${"logo svelte-1acjjfq"}" src="${"By Apel Design White.png"}" alt="${""}"></a></div></div>
</nav>`;
});
var global = "";
var bulma_prefixed = "";
var Arrow_svelte_svelte_type_style_lang = "";
const css$e = {
  code: ".arrow.svelte-1d2wgtf{fill:white;transform:rotate(180deg)}.rotate.svelte-1d2wgtf{transform:rotate(0deg)}",
  map: null
};
const Arrow = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { showMore } = $$props;
  let { styleP } = $$props;
  if ($$props.showMore === void 0 && $$bindings.showMore && showMore !== void 0)
    $$bindings.showMore(showMore);
  if ($$props.styleP === void 0 && $$bindings.styleP && styleP !== void 0)
    $$bindings.styleP(styleP);
  $$result.css.add(css$e);
  return `


<svg class="${"arrow " + escape(showMore ? "rotate" : "") + " svelte-1d2wgtf"}" version="${"1.1"}"${add_attribute("style", styleP, 0)} id="${"Layer_1"}" xmlns="${"http://www.w3.org/2000/svg"}" xmlns:xlink="${"http://www.w3.org/1999/xlink"}" x="${"0px"}" y="${"0px"}" viewBox="${"0 0 330 330"}" xml:space="${"preserve"}"><path id="${"XMLID_224_"}" d="${"M325.606,229.393l-150.004-150C172.79,76.58,168.974,75,164.996,75c-3.979,0-7.794,1.581-10.607,4.394\r\n	l-149.996,150c-5.858,5.858-5.858,15.355,0,21.213c5.857,5.857,15.355,5.858,21.213,0l139.39-139.393l139.397,139.393\r\n	C307.322,253.536,311.161,255,315,255c3.839,0,7.678-1.464,10.607-4.394C331.464,244.748,331.464,235.251,325.606,229.393z"}"></path><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g></svg>`;
});
var CarouselFull_svelte_svelte_type_style_lang = "";
const css$d = {
  code: ".ellipsis-container.svelte-11p2yqi.svelte-11p2yqi{display:flex}.ellipsis-container.svelte-11p2yqi .ellipsis.svelte-11p2yqi{border-radius:50%;background-color:#4e4a4a;width:4px;height:4px}.ellipsis-container.svelte-11p2yqi .ellipsis.svelte-11p2yqi:nth-child(-n+2){margin-right:2px}.circle-click.svelte-11p2yqi.svelte-11p2yqi{border:3px solid #4e4a4a;border-radius:50%;width:30px;height:30px;position:absolute;z-index:2;bottom:5px;left:5px;display:flex;justify-content:center;align-items:center}.page.svelte-11p2yqi.svelte-11p2yqi{position:relative}.indicator.svelte-11p2yqi.svelte-11p2yqi{top:5px;z-index:2;font-weight:600;text-align:center;letter-spacing:0.2em;font-family:Capsuula;position:absolute;padding:5px 15px;border-radius:14px;background-color:black;color:white;display:flex;justify-content:center}.indicator.svelte-11p2yqi p.svelte-11p2yqi{margin-right:-0.2em}.left.svelte-11p2yqi.svelte-11p2yqi{right:5px}.right.svelte-11p2yqi.svelte-11p2yqi{left:5px}.glide__arrow--right.svelte-11p2yqi.svelte-11p2yqi{right:20px;transform:rotate(180deg);touch-action:none}.glide__arrow--left.svelte-11p2yqi.svelte-11p2yqi{left:20px;touch-action:none}.page-arrow-container.svelte-11p2yqi.svelte-11p2yqi{width:30px;height:30px;position:absolute;touch-action:none;bottom:0;top:50%;border-radius:50%;background-color:rgba(0, 0, 0, 0.5);border:none;overflow:hidden}.page-arrow-container.svelte-11p2yqi .page-arrow-relative.svelte-11p2yqi{position:absolute;top:0;left:0;bottom:0;right:0;padding:5px;margin:auto}.glide__slides.svelte-11p2yqi.svelte-11p2yqi{height:100%;display:flex;justify-content:center}.glide__slide.svelte-11p2yqi.svelte-11p2yqi{display:flex;justify-content:center}.glide__arrows.svelte-11p2yqi.svelte-11p2yqi{position:absolute;left:0;margin:auto;top:0;bottom:0;right:0;width:100%}.glide.svelte-11p2yqi.svelte-11p2yqi{height:100%}.glide.svelte-11p2yqi .glide__track.svelte-11p2yqi{height:100%}.glide.svelte-11p2yqi .glide__track .dual-image-container.svelte-11p2yqi{width:100%;height:100%;overflow:hidden}.glide.svelte-11p2yqi .glide__track .dual-image-container .carousel-full.svelte-11p2yqi{height:100% !important}.glide.svelte-11p2yqi .glide__track .dual-image-container .image-container.svelte-11p2yqi{width:100%;height:50%}.glide.svelte-11p2yqi .glide__track .dual-image-container .image-container img.svelte-11p2yqi{width:100%;object-fit:cover;height:100%;object-position:center center}",
  map: null
};
const CarouselFull = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let glider;
  let { name } = $$props;
  let { orient } = $$props;
  let { page } = $$props;
  let { itemInd } = $$props;
  const data = pageLayout["page-carousels"];
  const images = {
    "the concept": data[itemInd].images,
    floorplans: data[itemInd].images,
    "the impact": data[itemInd].images
  };
  const halfCarousel = {
    "the concept": Array.from("x".repeat(images["the concept"].length / 2))
  };
  if ($$props.name === void 0 && $$bindings.name && name !== void 0)
    $$bindings.name(name);
  if ($$props.orient === void 0 && $$bindings.orient && orient !== void 0)
    $$bindings.orient(orient);
  if ($$props.page === void 0 && $$bindings.page && page !== void 0)
    $$bindings.page(page);
  if ($$props.itemInd === void 0 && $$bindings.itemInd && itemInd !== void 0)
    $$bindings.itemInd(itemInd);
  $$result.css.add(css$d);
  return `<div class="${"page svelte-11p2yqi"}"><div class="${"indicator " + escape(page) + " svelte-11p2yqi"}">${``}</div>
  <div class="${"circle-click svelte-11p2yqi"}"><div class="${"ellipsis-container svelte-11p2yqi"}"><div class="${"ellipsis svelte-11p2yqi"}"></div>
      <div class="${"ellipsis svelte-11p2yqi"}"></div>
      <div class="${"ellipsis svelte-11p2yqi"}"></div></div></div>
  <div class="${"glide svelte-11p2yqi"}"${add_attribute("this", glider, 0)}><div class="${"glide__track svelte-11p2yqi"}" data-glide-el="${"track"}"><ul class="${"glide__slides svelte-11p2yqi"}">${each(orient === "half" ? halfCarousel["the concept"] : images[name], (img, i) => {
    return `<li class="${"glide__slide svelte-11p2yqi"}"><div class="${"dual-image-container svelte-11p2yqi"}"><div class="${["image-container svelte-11p2yqi", orient === "full" ? "carousel-full" : ""].join(" ").trim()}"><img loading="${"lazy"}" class="${"carousel-image svelte-11p2yqi"}"${add_attribute("src", images[name][i].url, 0)} alt="${""}"></div>
              ${orient === "half" ? `<div class="${"image-container svelte-11p2yqi"}"><img loading="${"lazy"}" class="${"carousel-image svelte-11p2yqi"}"${add_attribute("src", images[name][i + 1].url, 0)} alt="${""}">
                </div>` : ``}</div>
          </li>`;
  })}</ul></div>
    <div class="${"glide__arrows svelte-11p2yqi"}" data-glide-el="${"controls"}"><button class="${"glide__arrow page-arrow-container glide__arrow--left svelte-11p2yqi"}" data-glide-dir="${"<"}"><div class="${"page-arrow-relative svelte-11p2yqi"}">${validate_component(Arrow, "Arrow").$$render($$result, {
    styleP: "object-fit:cover;width:100%;fill:white; transform:rotate(-90deg); height:100%; "
  }, {}, {})}</div></button>
      <button class="${"glide__arrow page-arrow-container glide__arrow--right svelte-11p2yqi"}" data-glide-dir="${">"}"><div class="${"page-arrow-relative svelte-11p2yqi"}">${validate_component(Arrow, "Arrow").$$render($$result, {
    styleP: "object-fit:cover;width:100%;fill:white; transform:rotate(-90deg); height:100%; "
  }, {}, {})}</div></button></div></div>
</div>`;
});
var ContactUs_svelte_svelte_type_style_lang = "";
const css$c = {
  code: ".header-stroke.svelte-1u7r85d.svelte-1u7r85d{left:0;top:30px;height:60%;z-index:1;position:absolute}.header-container.svelte-1u7r85d.svelte-1u7r85d{position:relative;height:fit-content}.success-message.svelte-1u7r85d.svelte-1u7r85d{color:white}.bu-button.svelte-1u7r85d.svelte-1u7r85d{background-color:#a4632e}.form-container.svelte-1u7r85d.svelte-1u7r85d{width:100%;max-width:500px}.form-container.svelte-1u7r85d .bu-field.svelte-1u7r85d{margin:15px}.form-container.svelte-1u7r85d .bu-field .svelte-1u7r85d::placeholder{color:black;font-size:0.8em;opacity:0.5}.container.svelte-1u7r85d.svelte-1u7r85d{width:100%;height:100%;display:flex;justify-content:center;align-items:center;flex-direction:column}h5.svelte-1u7r85d.svelte-1u7r85d{text-transform:uppercase;color:white;z-index:2;position:relative;font-family:Capsuula}",
  map: null
};
const ContactUs = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { bgColor } = $$props;
  let { deviceType } = $$props;
  let form;
  if ($$props.bgColor === void 0 && $$bindings.bgColor && bgColor !== void 0)
    $$bindings.bgColor(bgColor);
  if ($$props.deviceType === void 0 && $$bindings.deviceType && deviceType !== void 0)
    $$bindings.deviceType(deviceType);
  $$result.css.add(css$c);
  return `<div style="${"background-color:" + escape(bgColor)}" class="${"container svelte-1u7r85d"}"><div class="${"header-container svelte-1u7r85d"}"><h5 class="${"bu-is-size-1 svelte-1u7r85d"}">contact</h5>
    ${deviceType ? `<img class="${"header-stroke svelte-1u7r85d"}"${add_attribute("src", "concept/concept-title-brush.png", 0)} alt="${""}">` : ``}</div>

  ${`<form name="${"emailForm"}" data-netlify="${"true"}" class="${"form-container svelte-1u7r85d"}"${add_attribute("this", form, 0)}><input type="${"hidden"}" name="${"form-name"}" value="${"emailForm"}" class="${"svelte-1u7r85d"}">

      <div class="${"bu-field svelte-1u7r85d"}"><div class="${"bu-control svelte-1u7r85d"}"><input id="${"name-input"}" class="${"bu-input svelte-1u7r85d"}" type="${"text"}" name="${"name"}" placeholder="${"Name"}"></div></div>
      <div class="${"bu-field svelte-1u7r85d"}"><div class="${"bu-control svelte-1u7r85d"}"><input id="${"email-input"}" class="${"bu-input svelte-1u7r85d"}" type="${"email"}" name="${"email"}" placeholder="${"Email"}"></div></div>
      <div class="${"bu-field svelte-1u7r85d"}"><div class="${"bu-control svelte-1u7r85d"}"><input id="${"country-input"}" class="${"bu-input svelte-1u7r85d"}" type="${"text"}" name="${"country"}" placeholder="${"Country"}"></div></div>
      <div class="${"bu-field svelte-1u7r85d"}"><div class="${"bu-control svelte-1u7r85d"}"><input id="${"phone-input"}" class="${"bu-input svelte-1u7r85d"}" type="${"phone"}" name="${"phone"}" placeholder="${"Phone"}"></div></div>
      <div class="${"bu-field svelte-1u7r85d"}"><div class="${"bu-control svelte-1u7r85d"}"><textarea id="${"message-input"}" class="${"bu-textarea svelte-1u7r85d"}" type="${"text"}" name="${"message"}" placeholder="${"Message"}"></textarea></div></div>
      <div class="${"bu-field svelte-1u7r85d"}"><div class="${"bu-control svelte-1u7r85d"}"><input type="${"submit"}" class="${"bu-button bu-is-link bu-is-fullwidth svelte-1u7r85d"}"></div></div></form>`}
</div>`;
});
var ImagePage_svelte_svelte_type_style_lang = "";
const css$b = {
  code: '.blur.svelte-1aqh5gk.svelte-1aqh5gk{left:0;right:0;z-index:0;position:relative}.blur.svelte-1aqh5gk.svelte-1aqh5gk::before{pointer-events:none;position:absolute;content:"";height:100%;display:block;left:0;right:0;top:0;-webkit-backdrop-filter:blur(5px);backdrop-filter:blur(5px)}@supports not ((-webkit-backdrop-filter: none) or (backdrop-filter: none)){.blur.svelte-1aqh5gk.svelte-1aqh5gk::before{background:rgba(0, 0, 0, 0.5)}}.image-container.svelte-1aqh5gk.svelte-1aqh5gk{height:100%}.image-container.svelte-1aqh5gk .main-image.svelte-1aqh5gk{width:100%;object-fit:cover;height:100%}.play-button.svelte-1aqh5gk.svelte-1aqh5gk{position:absolute;width:160px;position:absolute;top:50%;left:50%;transform:translate(-50%, -50%);height:auto;z-index:5;object-fit:cover}',
  map: null
};
const ImagePage = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$unsubscribe_modal;
  $$unsubscribe_modal = subscribe(modal, (value) => value);
  let { index } = $$props;
  let { imgInd } = $$props;
  const images = [...pageLayout["image-pages"], {}];
  if ($$props.index === void 0 && $$bindings.index && index !== void 0)
    $$bindings.index(index);
  if ($$props.imgInd === void 0 && $$bindings.imgInd && imgInd !== void 0)
    $$bindings.imgInd(imgInd);
  $$result.css.add(css$b);
  $$unsubscribe_modal();
  return `${imgInd >= 0 ? `<div class="${"page"}"><div class="${"image-container " + escape(images[imgInd].type === "video" ? "blur" : "") + " svelte-1aqh5gk"}">${images[imgInd].type === "video" ? `<img alt="${""}" src="${"playButton.png"}" class="${"play-button svelte-1aqh5gk"}">` : ``}

      <img${add_attribute("data-src", images[imgInd].image.url, 0)} alt="${""}" class="${"main-image lazy svelte-1aqh5gk"}"></div></div>` : ``}`;
});
var Quotes_svelte_svelte_type_style_lang = "";
const css$a = {
  code: ".page.svelte-1rt6bgt.svelte-1rt6bgt{display:flex;align-items:center}.page.svelte-1rt6bgt .container.svelte-1rt6bgt{max-width:700px;height:auto;display:flex;align-items:center}.page.svelte-1rt6bgt .container .image-container.svelte-1rt6bgt{width:100%;height:80%}.page.svelte-1rt6bgt .container .image-container .quote-photo.svelte-1rt6bgt{height:560px;width:100%}@media screen and (max-width: 800px){.page.svelte-1rt6bgt .container .image-container .quote-photo.svelte-1rt6bgt{height:300px}}",
  map: null
};
const Quotes = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { page } = $$props;
  if ($$props.page === void 0 && $$bindings.page && page !== void 0)
    $$bindings.page(page);
  $$result.css.add(css$a);
  return `<div style="${"justify-content: " + escape(page === "left" ? "flex-end" : "flex-start") + "; padding: " + escape(page === "left" ? "0 0 0 40px" : "0 40px 0 0 ") + ";"}" class="${"page svelte-1rt6bgt"}"><div class="${"container svelte-1rt6bgt"}"><div class="${"image-container svelte-1rt6bgt"}"><img class="${"quote-photo svelte-1rt6bgt"}"${add_attribute("src", page === "left" ? "Quote Left.png" : "Quote Right.png", 0)} alt="${""}"></div></div>
</div>`;
});
var TextPage_svelte_svelte_type_style_lang = "";
const css$9 = {
  code: ".p-stroke.svelte-1b0fg2l.svelte-1b0fg2l{left:0;top:0;bottom:0;margin:auto;width:100%;height:100%;z-index:1;position:absolute}.container.svelte-1b0fg2l.svelte-1b0fg2l{margin:auto;overflow:hidden;display:flex;font-family:Capsuula;flex-direction:column;justify-content:center;align-items:center;color:white;height:100%}.text-content.svelte-1b0fg2l.svelte-1b0fg2l{max-width:500px;display:flex;padding:20px;z-index:2;flex-direction:column;width:100%;overflow:hidden}.text-content.svelte-1b0fg2l .scroll-container-text.svelte-1b0fg2l{position:relative}.text-content.svelte-1b0fg2l .text-container.svelte-1b0fg2l{height:100%}.text-content.svelte-1b0fg2l .text-container.svelte-1b0fg2l::-webkit-scrollbar{width:20px}.text-content.svelte-1b0fg2l .text-container.svelte-1b0fg2l::-webkit-scrollbar-track{background-color:transparent}.text-content.svelte-1b0fg2l .text-container.svelte-1b0fg2l::-webkit-scrollbar-thumb{background-color:#d6dee1;border-radius:20px;border:6px solid transparent;background-clip:content-box}.header.svelte-1b0fg2l.svelte-1b0fg2l{white-space:nowrap;color:white;font-size:3em;font-weight:100;z-index:2;position:relative;width:fit-content}@media screen and (max-width: 891px){.header.svelte-1b0fg2l.svelte-1b0fg2l{font-size:2.3em}}.header-container.svelte-1b0fg2l.svelte-1b0fg2l{width:fit-content;margin:auto;position:relative}.text-p-container.svelte-1b0fg2l.svelte-1b0fg2l{position:relative;z-index:2;font-size:20px}.header-stroke.svelte-1b0fg2l.svelte-1b0fg2l{left:0;bottom:-10px;z-index:1;position:absolute}",
  map: null
};
const TextPage = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { index } = $$props;
  let { bgColor } = $$props;
  let scrollContainer;
  if ($$props.index === void 0 && $$bindings.index && index !== void 0)
    $$bindings.index(index);
  if ($$props.bgColor === void 0 && $$bindings.bgColor && bgColor !== void 0)
    $$bindings.bgColor(bgColor);
  $$result.css.add(css$9);
  return `<div style="${"background-color: " + escape(bgColor) + ";"}" class="${"page container svelte-1b0fg2l"}"><div class="${"text-content svelte-1b0fg2l"}"><div class="${"bu-content bu-is-large"}"><div class="${"header-container svelte-1b0fg2l"}"><h3 class="${"header bu-content-header svelte-1b0fg2l"}">${escape(textPages[index].header)}</h3>
        <img class="${"header-stroke svelte-1b0fg2l"}"${add_attribute("src", textPages[index].headerBrush, 0)} alt="${""}"></div></div>
    <div class="${"bu-content text-container svelte-1b0fg2l"}"${add_attribute("this", scrollContainer, 0)}><div class="${"scroll-container-text svelte-1b0fg2l"}"><img class="${"p-stroke svelte-1b0fg2l"}"${add_attribute("src", textPages[index].pgBrush, 0)} alt="${""}">

        <div class="${"text-p-container svelte-1b0fg2l"}">${each(textPages[index].paragraphs, (text, i) => {
    return `<p${add_attribute("key", i, 0)} class="${"$1"}">${escape(text)}
            </p>`;
  })}</div></div></div></div>
</div>`;
});
var LeftContainer_svelte_svelte_type_style_lang = "";
const css$8 = {
  code: ".bg-image-container.svelte-x4nibx.svelte-x4nibx{width:100%;height:100%;position:absolute;z-index:1}.bg-image-container.svelte-x4nibx .bg-image.svelte-x4nibx{width:100%;height:100%}.container.svelte-x4nibx.svelte-x4nibx{position:relative;align-items:center;transition:all 1s ease-out;height:100vh;max-width:50vw;width:100%}.container.svelte-x4nibx .logo-wrapper.svelte-x4nibx{width:50vw;height:100vh;display:flex;align-items:center;justify-content:flex-end;z-index:2;position:relative}.container.svelte-x4nibx .logo-wrapper .logo-container.svelte-x4nibx{max-width:33%}.container.svelte-x4nibx .logo-wrapper .logo-container .image-logo.svelte-x4nibx{object-fit:contain;width:100%}@media(max-width: 650px){.container.svelte-x4nibx .logo-wrapper.svelte-x4nibx{width:100%;max-width:100%;justify-content:center}.container.svelte-x4nibx .logo-wrapper .logo-container.svelte-x4nibx{max-width:40%}.container.svelte-x4nibx .logo-wrapper .logo-container .image-logo.svelte-x4nibx{width:100%}}@media(max-width: 650px){.container.svelte-x4nibx.svelte-x4nibx{max-width:100%}}@media(max-width: 650px){.image-logo.svelte-x4nibx.svelte-x4nibx{display:none}.container.svelte-x4nibx.svelte-x4nibx{width:100vw}.container.svelte-x4nibx.svelte-x4nibx{transform:translateY(0) !important;justify-content:center}}",
  map: null
};
const LeftContainer = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { leftPage } = $$props;
  if ($$props.leftPage === void 0 && $$bindings.leftPage && leftPage !== void 0)
    $$bindings.leftPage(leftPage);
  $$result.css.add(css$8);
  return `<div class="${"container svelte-x4nibx"}"${add_attribute("this", leftPage, 0)}><div class="${"bg-image-container svelte-x4nibx"}"><img class="${"bg-image svelte-x4nibx"}" src="${"Home Left.jpg"}" alt="${""}"></div>
  <div id="${"home"}" class="${"logo-wrapper svelte-x4nibx"}"><div class="${"logo-container svelte-x4nibx"}"><img class="${"image-logo svelte-x4nibx"}" src="${"Aviator Home Left.png"}" alt="${""}"></div></div>
  ${validate_component(Quotes, "Quotes").$$render($$result, { page: "left" }, {}, {})}
  ${validate_component(ImagePage, "ImagePage").$$render($$result, { imgInd: 0, page: "left", index: 0 }, {}, {})}
  ${validate_component(TextPage, "TextPage").$$render($$result, {
    page: "left",
    bgColor: "#860116",
    index: 1
  }, {}, {})}
  ${validate_component(CarouselFull, "CarouselFull").$$render($$result, {
    itemInd: 2,
    page: "left",
    name: "the impact",
    orient: "full",
    index: 2
  }, {}, {})}
  ${validate_component(TextPage, "TextPage").$$render($$result, {
    page: "left",
    bgColor: "#860116",
    index: 3
  }, {}, {})}
  ${validate_component(CarouselFull, "CarouselFull").$$render($$result, {
    itemInd: 1,
    page: "left",
    name: "floorplans",
    orient: "full",
    index: 4
  }, {}, {})}

  ${validate_component(ContactUs, "ContactUs").$$render($$result, {
    deviceType: "desktop",
    bgColor: "#860116"
  }, {}, {})}
</div>`;
});
var RightContainer_svelte_svelte_type_style_lang = "";
const css$7 = {
  code: ".bg-image-container.svelte-6oo7v1.svelte-6oo7v1{width:100%;height:100%;position:absolute;z-index:1;margin:auto}.bg-image-container.svelte-6oo7v1 .bg-image.svelte-6oo7v1{width:100%;height:100%}.container.svelte-6oo7v1.svelte-6oo7v1{position:relative;align-items:center;transform:translateY(-700vh);transition:all 1s ease-out;height:100vh;max-width:50vw;width:100%}.container.svelte-6oo7v1 .logo-wrapper.svelte-6oo7v1{width:50vw;height:100vh;display:flex;align-items:center;justify-content:flex-start;z-index:2;position:relative}.container.svelte-6oo7v1 .logo-wrapper .logo-container.svelte-6oo7v1{max-width:33%}.container.svelte-6oo7v1 .logo-wrapper .logo-container .image-logo.svelte-6oo7v1{object-fit:contain;width:100%}@media(max-width: 650px){.container.svelte-6oo7v1 .logo-wrapper.svelte-6oo7v1{width:100%;max-width:100%;justify-content:center}.container.svelte-6oo7v1 .logo-wrapper .logo-container.svelte-6oo7v1{max-width:40%}.container.svelte-6oo7v1 .logo-wrapper .logo-container .image-logo.svelte-6oo7v1{width:100%}}@media(max-width: 650px){.container.svelte-6oo7v1.svelte-6oo7v1{max-width:100%}}@media(max-width: 650px){.image-logo.svelte-6oo7v1.svelte-6oo7v1{display:none}.container.svelte-6oo7v1.svelte-6oo7v1{width:100vw}.container.svelte-6oo7v1.svelte-6oo7v1{transform:translateY(0) !important;justify-content:center}}",
  map: null
};
const RightContainer = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { rightPage } = $$props;
  if ($$props.rightPage === void 0 && $$bindings.rightPage && rightPage !== void 0)
    $$bindings.rightPage(rightPage);
  $$result.css.add(css$7);
  return `<div class="${"container svelte-6oo7v1"}"${add_attribute("this", rightPage, 0)}>${validate_component(ImagePage, "ImagePage").$$render($$result, { imgInd: 2, page: "right", index: 5 }, {}, {})}
  ${validate_component(TextPage, "TextPage").$$render($$result, { index: 4 }, {}, {})}
  ${validate_component(ImagePage, "ImagePage").$$render($$result, { imgInd: 1, index: 2 }, {}, {})}
  ${validate_component(TextPage, "TextPage").$$render($$result, { index: 2 }, {}, {})}
  ${validate_component(CarouselFull, "CarouselFull").$$render($$result, {
    itemInd: 0,
    orient: "half",
    page: "right",
    name: "the concept"
  }, {}, {})}
  ${validate_component(TextPage, "TextPage").$$render($$result, { index: 0 }, {}, {})}
  ${validate_component(Quotes, "Quotes").$$render($$result, { page: "right" }, {}, {})}
  <div class="${"bg-image-container svelte-6oo7v1"}"><img class="${"bg-image svelte-6oo7v1"}" src="${"Home Right.jpg"}" alt="${""}"></div>
  <div class="${"logo-wrapper svelte-6oo7v1"}"><div class="${"logo-container svelte-6oo7v1"}"><img class="${"image-logo svelte-6oo7v1"}" src="${"Aviator Home Right.png"}" alt="${""}"></div></div>
</div>`;
});
var ScrollContainer_svelte_svelte_type_style_lang = "";
const css$6 = {
  code: ".page{width:50vw;height:100vh;overflow:hidden}",
  map: null
};
const ScrollContainer = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$unsubscribe_pagePositions;
  $$unsubscribe_pagePositions = subscribe(pagePositions, (value) => value);
  let leftPage;
  let rightPage;
  $$result.css.add(css$6);
  let $$settled;
  let $$rendered;
  do {
    $$settled = true;
    $$rendered = `<div class="${"scroll-container"}">${validate_component(LeftContainer, "LeftContainer").$$render($$result, { this: leftPage }, {
      this: ($$value) => {
        leftPage = $$value;
        $$settled = false;
      }
    }, {})}

	${validate_component(RightContainer, "RightContainer").$$render($$result, { this: rightPage }, {
      this: ($$value) => {
        rightPage = $$value;
        $$settled = false;
      }
    }, {})}
</div>`;
  } while (!$$settled);
  $$unsubscribe_pagePositions();
  return $$rendered;
});
var Card_svelte_svelte_type_style_lang = "";
const css$5 = {
  code: '.main-image.svelte-h7uk7g.svelte-h7uk7g{object-fit:cover}h5.svelte-h7uk7g.svelte-h7uk7g{font-size:2em;font-family:Capsuula}.font-white.svelte-h7uk7g.svelte-h7uk7g{color:white}.square-place-holder.svelte-h7uk7g.svelte-h7uk7g{width:100%;height:100%;display:flex;align-items:center}.square-place-holder.svelte-h7uk7g img.svelte-h7uk7g{width:100%;object-fit:cover}.card-content.svelte-h7uk7g.svelte-h7uk7g{background-color:transparent}.play-button-container.svelte-h7uk7g.svelte-h7uk7g{position:absolute;width:25%;top:50%;left:50%;transform:translate(-50%, -50%);height:auto;z-index:5;object-fit:cover}.content.svelte-h7uk7g.svelte-h7uk7g{max-height:20rem;overflow:hidden;display:-webkit-box;-webkit-line-clamp:4;-webkit-box-orient:vertical}.card-container.svelte-h7uk7g.svelte-h7uk7g{display:flex;flex-direction:column;background-color:transparent}.card-container.svelte-h7uk7g:nth-child(4) .show-more.svelte-h7uk7g{display:none !important}.blur.svelte-h7uk7g.svelte-h7uk7g{left:0;right:0;z-index:0;position:relative}.blur.svelte-h7uk7g.svelte-h7uk7g::before{pointer-events:none;position:absolute;content:"";height:100%;display:block;left:0;right:0;top:0;z-index:2;-webkit-backdrop-filter:blur(5px);backdrop-filter:blur(5px)}@supports not ((-webkit-backdrop-filter: none) or (backdrop-filter: none)){.blur.svelte-h7uk7g.svelte-h7uk7g::before{background:rgba(0, 0, 0, 0.5)}}.show-more.svelte-h7uk7g.svelte-h7uk7g{display:block;max-height:100%}',
  map: null
};
const Card = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$unsubscribe_modal;
  $$unsubscribe_modal = subscribe(modal, (value) => value);
  let { index } = $$props;
  let { page } = $$props;
  let mainText;
  onDestroy(() => {
  });
  if ($$props.index === void 0 && $$bindings.index && index !== void 0)
    $$bindings.index(index);
  if ($$props.page === void 0 && $$bindings.page && page !== void 0)
    $$bindings.page(page);
  $$result.css.add(css$5);
  $$unsubscribe_modal();
  return `<div class="${"bu-card card-container svelte-h7uk7g"}"${add_attribute("id", navToLink[index + 2], 0)}><div class="${"bu-card-image"}"><figure class="${"bu-image bu-is-4by3 " + escape(page.type === "video" ? "blur" : "") + " svelte-h7uk7g"}">${page.type === "video" ? `<div class="${"play-button-container svelte-h7uk7g"}"><figure class="${"bu-image bu-is-square "}"><img src="${"playButton.png"}" alt="${""}"></figure></div>` : ``}
      <img loading="${"lazy"}" class="${"main-image svelte-h7uk7g"}"${add_attribute("src", page && page.images[0].url, 0)} alt="${""}"></figure></div>
  <div class="${"card-content bu-card-content svelte-h7uk7g"}"><div class="${"bu-media"}"><div class="${"bu-media-left"}"><figure class="${"bu-image bu-is-48x48"}"><div class="${"square-place-holder svelte-h7uk7g"}" style="${"height: 100%; width:100%;"}"><img src="${"mobile/mobile-logo.png"}" alt="${""}" class="${"svelte-h7uk7g"}"></div></figure></div>
      ${textPages[index] ? `<h5 class="${"title is-4 font-white svelte-h7uk7g"}">${escape(textPages[index].header)}</h5>` : ``}</div>
    <div class="${"content bu-is-clipped content font-white " + escape("") + " svelte-h7uk7g"}"${add_attribute("this", mainText, 0)}>${textPages[index] ? `${each(textPages[index].paragraphs, (p) => {
    return `${escape(p)}`;
  })}` : ``}</div>
    <br>
    ${``}</div>
</div>`;
});
function is_date(obj) {
  return Object.prototype.toString.call(obj) === "[object Date]";
}
function tick_spring(ctx, last_value, current_value, target_value) {
  if (typeof current_value === "number" || is_date(current_value)) {
    const delta = target_value - current_value;
    const velocity = (current_value - last_value) / (ctx.dt || 1 / 60);
    const spring2 = ctx.opts.stiffness * delta;
    const damper = ctx.opts.damping * velocity;
    const acceleration = (spring2 - damper) * ctx.inv_mass;
    const d = (velocity + acceleration) * ctx.dt;
    if (Math.abs(d) < ctx.opts.precision && Math.abs(delta) < ctx.opts.precision) {
      return target_value;
    } else {
      ctx.settled = false;
      return is_date(current_value) ? new Date(current_value.getTime() + d) : current_value + d;
    }
  } else if (Array.isArray(current_value)) {
    return current_value.map((_2, i) => tick_spring(ctx, last_value[i], current_value[i], target_value[i]));
  } else if (typeof current_value === "object") {
    const next_value = {};
    for (const k in current_value) {
      next_value[k] = tick_spring(ctx, last_value[k], current_value[k], target_value[k]);
    }
    return next_value;
  } else {
    throw new Error(`Cannot spring ${typeof current_value} values`);
  }
}
function spring(value, opts = {}) {
  const store = writable(value);
  const { stiffness = 0.15, damping = 0.8, precision = 0.01 } = opts;
  let last_time;
  let task;
  let current_token;
  let last_value = value;
  let target_value = value;
  let inv_mass = 1;
  let inv_mass_recovery_rate = 0;
  let cancel_task = false;
  function set(new_value, opts2 = {}) {
    target_value = new_value;
    const token = current_token = {};
    if (value == null || opts2.hard || spring2.stiffness >= 1 && spring2.damping >= 1) {
      cancel_task = true;
      last_time = now();
      last_value = new_value;
      store.set(value = target_value);
      return Promise.resolve();
    } else if (opts2.soft) {
      const rate = opts2.soft === true ? 0.5 : +opts2.soft;
      inv_mass_recovery_rate = 1 / (rate * 60);
      inv_mass = 0;
    }
    if (!task) {
      last_time = now();
      cancel_task = false;
      task = loop((now2) => {
        if (cancel_task) {
          cancel_task = false;
          task = null;
          return false;
        }
        inv_mass = Math.min(inv_mass + inv_mass_recovery_rate, 1);
        const ctx = {
          inv_mass,
          opts: spring2,
          settled: true,
          dt: (now2 - last_time) * 60 / 1e3
        };
        const next_value = tick_spring(ctx, last_value, value, target_value);
        last_time = now2;
        last_value = value;
        store.set(value = next_value);
        if (ctx.settled) {
          task = null;
        }
        return !ctx.settled;
      });
    }
    return new Promise((fulfil) => {
      task.promise.then(() => {
        if (token === current_token)
          fulfil();
      });
    });
  }
  const spring2 = {
    set,
    update: (fn, opts2) => set(fn(target_value, value), opts2),
    subscribe: store.subscribe,
    stiffness,
    damping,
    precision
  };
  return spring2;
}
var PinchZoom_svelte_svelte_type_style_lang = "";
const css$4 = {
  code: ".carousel-img.svelte-1ayejam{width:100%;height:100%;position:absolute;object-fit:cover}",
  map: null
};
const PinchZoom = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { img } = $$props;
  let imageElement;
  createEventDispatcher();
  if ($$props.img === void 0 && $$bindings.img && img !== void 0)
    $$bindings.img(img);
  $$result.css.add(css$4);
  return `<img class="${"carousel-img svelte-1ayejam"}" loading="${"lazy"}"${add_attribute("src", img.url, 0)} draggable="${"false"}" alt="${""}"${add_attribute("this", imageElement, 0)}>`;
});
var CardCarousel_svelte_svelte_type_style_lang = "";
const css$3 = {
  code: ".indicator.svelte-3bk6jg.svelte-3bk6jg{top:5px;z-index:4;font-weight:600;text-align:center;letter-spacing:0.2em;right:5px;position:absolute;padding:5px 15px;border-radius:14px;background-color:black;color:white;display:flex;justify-content:center}.indicator.svelte-3bk6jg p.svelte-3bk6jg{margin-right:-0.2em}.square-place-holder.svelte-3bk6jg.svelte-3bk6jg{width:100%;height:100%;display:flex;align-items:center}.square-place-holder.svelte-3bk6jg img.svelte-3bk6jg{width:100%;object-fit:cover}h5.svelte-3bk6jg.svelte-3bk6jg{font-size:2em;font-family:Capsuula}.font-white.svelte-3bk6jg.svelte-3bk6jg{color:white}.card-content.svelte-3bk6jg.svelte-3bk6jg{background-color:transparent}.content.svelte-3bk6jg.svelte-3bk6jg{max-height:20rem;overflow:hidden;display:-webkit-box;-webkit-line-clamp:4;-webkit-box-orient:vertical}.card-container.svelte-3bk6jg.svelte-3bk6jg{display:flex;flex-direction:column;background-color:transparent}.carousel-container.svelte-3bk6jg .glide-image-container.svelte-3bk6jg{display:flex;padding-bottom:100%;height:0;position:relative;justify-content:center}.page-arrow-container.svelte-3bk6jg.svelte-3bk6jg{width:30px;height:30px;position:absolute;bottom:5px;border-radius:50%;background-color:rgba(0, 0, 0, 0.5);border:none;overflow:hidden}.page-arrow-container.svelte-3bk6jg .page-arrow-relative.svelte-3bk6jg{position:absolute;top:0;left:0;bottom:0;right:0;padding:5px;margin:auto}.arrow-left.svelte-3bk6jg.svelte-3bk6jg{right:40px}.arrow-right.svelte-3bk6jg.svelte-3bk6jg{right:5px}.show-more.svelte-3bk6jg.svelte-3bk6jg{display:block;max-height:100%}",
  map: null
};
const CardCarousel = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { index } = $$props;
  let { page } = $$props;
  let { carouselName } = $$props;
  let carousel;
  let lazyImage;
  let glideContainer;
  let mainText;
  let slider;
  spring(0, { stiffness: 0.1, damping: 0.89 });
  onDestroy(() => {
  });
  if ($$props.index === void 0 && $$bindings.index && index !== void 0)
    $$bindings.index(index);
  if ($$props.page === void 0 && $$bindings.page && page !== void 0)
    $$bindings.page(page);
  if ($$props.carouselName === void 0 && $$bindings.carouselName && carouselName !== void 0)
    $$bindings.carouselName(carouselName);
  $$result.css.add(css$3);
  return `<div${add_attribute("id", navToLink[index + 2], 0)} class="${"bu-card card-container svelte-3bk6jg"}"${add_attribute("this", lazyImage, 0)}><div class="${"carousel-container svelte-3bk6jg"}"><div class="${"glide"}"${add_attribute("this", carousel, 0)}><div class="${"indicator svelte-3bk6jg"}">${``}</div>
      <div class="${"glide__track"}" data-glide-el="${"track"}"><ul class="${"glide__slides"}"${add_attribute("this", slider, 0)}>${each(page.images, (img, i) => {
    return `<li style="${"width:" + escape("") + "px"}" class="${"glide__slide"}"${add_attribute("this", glideContainer, 0)}><div class="${"glide-image-container svelte-3bk6jg"}">${validate_component(PinchZoom, "PinchZoom").$$render($$result, { img }, {}, {})}</div>
            </li>`;
  })}</ul></div>
      <div class="${"glide__arrows"}" data-glide-el="${"controls"}"><button class="${"glide__arrow page-arrow-container glide__arrow--left arrow-left svelte-3bk6jg"}"><div class="${"page-arrow-relative svelte-3bk6jg"}">${validate_component(Arrow, "Arrow").$$render($$result, {
    styleP: "object-fit:cover;width:100%;fill:white; transform:rotate(-90deg); height:100%; "
  }, {}, {})}</div></button>
        <button class="${"glide__arrow page-arrow-container glide__arrow--right arrow-right svelte-3bk6jg"}"><div class="${"page-arrow-relative svelte-3bk6jg"}">${validate_component(Arrow, "Arrow").$$render($$result, {
    styleP: "object-fit:cover;width:100%;fill:white; transform:rotate(90deg); height:100%; "
  }, {}, {})}</div></button></div></div></div>
  <div class="${"card-content bu-card-content svelte-3bk6jg"}"><div class="${"bu-media"}"><div class="${"bu-media-left"}"><figure class="${"bu-image bu-is-48x48"}"><div class="${"square-place-holder svelte-3bk6jg"}" style="${"height: 100%; width:100%;"}"><img src="${"mobile/mobile-logo.png"}" alt="${""}" class="${"svelte-3bk6jg"}"></div></figure></div>
      ${textPages[index] ? `<h5 class="${"title is-4 font-white svelte-3bk6jg"}">${escape(textPages[index].header)}</h5>` : ``}</div>
    <div class="${"content bu-is-clipped content font-white " + escape("show-more") + " svelte-3bk6jg"}"${add_attribute("this", mainText, 0)}>${textPages[index] ? `${each(textPages[index].paragraphs, (p) => {
    return `<p>${escape(p)}</p>`;
  })}` : ``}</div>
    <br>
    ${``}</div>
</div>`;
});
var CardGallery_svelte_svelte_type_style_lang = "";
const css$2 = {
  code: "@keyframes svelte-9rfmxn-example{0%{opacity:0}100%{width:100%}}.bu-title.svelte-9rfmxn.svelte-9rfmxn{font-family:Orator;color:white;font-weight:200}.gallery-container.svelte-9rfmxn.svelte-9rfmxn{display:grid;width:100%;gap:6px;overflow:hidden;grid-template-columns:repeat(4, minmax(50px, 1fr))}.image-container.svelte-9rfmxn.svelte-9rfmxn{position:relative;padding-bottom:100%}.image-container.svelte-9rfmxn img.svelte-9rfmxn{height:100%;object-fit:cover;width:100%;border-radius:4px;animation-fill-mode:forwards;position:absolute}.container.svelte-9rfmxn.svelte-9rfmxn{overflow:hidden;display:flex;justify-content:center;flex-direction:column;align-items:center;padding:20px;margin-bottom:20px}",
  map: null
};
const CardGallery = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$unsubscribe_modal;
  $$unsubscribe_modal = subscribe(modal, (value) => value);
  const images = [];
  $$result.css.add(css$2);
  $$unsubscribe_modal();
  return `<div><div id="${"behind-the-scenes"}" class="${"container svelte-9rfmxn"}"><div class="${"bu-title bu-has-text-centered svelte-9rfmxn"}">behind the scenes</div>
    <div class="${"gallery-container svelte-9rfmxn"}">${each(images, (image, i) => {
    return `<div class="${"image-container svelte-9rfmxn"}"><img${add_attribute("src", image, 0)} loading="${"lazy"}" alt="${""}" class="${"svelte-9rfmxn"}">
        </div>`;
  })}</div></div>
</div>`;
});
var CardContainer_svelte_svelte_type_style_lang = "";
const css$1 = {
  code: '.contact-us-container.svelte-1fciopb.svelte-1fciopb{width:100%;padding:30px;height:100vh}.quote-container.svelte-1fciopb.svelte-1fciopb{width:100%;height:70vh;position:relative}.quote-container.svelte-1fciopb .quote-image-container.svelte-1fciopb{padding:50px;width:100%;clip-path:inset(0);height:500px;top:0;bottom:0;left:0;margin:auto;right:0}.quote-container.svelte-1fciopb .quote-image-container .quote-image.svelte-1fciopb{top:0;bottom:0;left:0;padding:30px;right:0;width:100%;margin:auto;object-fit:cover;position:fixed}.bg-image-container.svelte-1fciopb.svelte-1fciopb{position:absolute;z-index:1;width:100%;height:100%}.bg-image-container.svelte-1fciopb.svelte-1fciopb::before{display:block;background-color:rgba(10, 10, 10, 0.6);backdrop-filter:blur(4px);height:100%;width:100%;z-index:2;position:absolute;content:""}.bg-image-container.svelte-1fciopb .bg-image.svelte-1fciopb{z-index:1;position:relative;width:100%;object-position:center center;object-fit:cover;height:100%}.card-container.svelte-1fciopb.svelte-1fciopb{position:relative;background-color:#2c2a2b}.logo-wrapper.svelte-1fciopb.svelte-1fciopb{z-index:2;position:relative;width:100vw;height:100vh;display:flex;justify-content:center;align-items:center}.logo-wrapper.svelte-1fciopb .logo-container.svelte-1fciopb{max-width:65%}.logo-wrapper.svelte-1fciopb .logo-container .image-logo.svelte-1fciopb{object-fit:contain;width:100%}',
  map: null
};
const CardContainer = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let cardLayout = [];
  $$result.css.add(css$1);
  return `<div class="${"card-wrapper"}"><div class="${"bg-image-container svelte-1fciopb"}"><img class="${"bg-image svelte-1fciopb"}" src="${"mobile/bg.jpg"}" alt="${""}"></div>
  <div id="${"home"}" class="${"logo-wrapper svelte-1fciopb"}"><div class="${"logo-container svelte-1fciopb"}"><img class="${"image-logo svelte-1fciopb"}" src="${"mobile/mobile-logo.png"}" alt="${""}"></div></div>
  <div id="${"quote"}" class="${"quote-container svelte-1fciopb"}"><div class="${"quote-image-container svelte-1fciopb"}"><img src="${"mobile/quotes.png"}" alt="${""}" class="${"quote-image svelte-1fciopb"}"></div></div>
  <div class="${"card-container svelte-1fciopb"}">${each(cardLayout, (card, i) => {
    return `${cardLayout[i].type === "bg-pages" || cardLayout[i].type === "video" ? `${validate_component(Card, "Card").$$render($$result, { page: card, index: i }, {}, {})}` : `${cardLayout[i].type === "gallery" ? `${validate_component(CardGallery, "CardGallery").$$render($$result, {}, {}, {})}` : `${validate_component(CardCarousel, "CardCarousel").$$render($$result, {
      carouselName: cardLayout[i].carousel,
      page: card,
      index: i
    }, {}, {})}`}`}`;
  })}
    <div id="${"contact"}" class="${"contact-us-container svelte-1fciopb"}">${validate_component(ContactUs, "ContactUs").$$render($$result, {}, {}, {})}</div></div>
</div>`;
});
const Facebook = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, []);
  return `<svg${spread([
    { role: "img" },
    { fill: "white" },
    { viewBox: "0 0 24 24" },
    { xmlns: "http://www.w3.org/2000/svg" },
    escape_object($$restProps)
  ], {})}>${slots.default ? slots.default({}) : ``}<title>Facebook</title><path d="${"M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"}"></path></svg>`;
});
const Instagram = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, []);
  return `<svg${spread([
    { role: "img" },
    { fill: "white" },
    { viewBox: "0 0 24 24" },
    { xmlns: "http://www.w3.org/2000/svg" },
    escape_object($$restProps)
  ], {})}>${slots.default ? slots.default({}) : ``}<title>Instagram</title><path d="${"M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.14.63c-.789.306-1.459.717-2.126 1.384S.935 3.35.63 4.14C.333 4.905.131 5.775.072 7.053.012 8.333 0 8.74 0 12s.015 3.667.072 4.947c.06 1.277.261 2.148.558 2.913.306.788.717 1.459 1.384 2.126.667.666 1.336 1.079 2.126 1.384.766.296 1.636.499 2.913.558C8.333 23.988 8.74 24 12 24s3.667-.015 4.947-.072c1.277-.06 2.148-.262 2.913-.558.788-.306 1.459-.718 2.126-1.384.666-.667 1.079-1.335 1.384-2.126.296-.765.499-1.636.558-2.913.06-1.28.072-1.687.072-4.947s-.015-3.667-.072-4.947c-.06-1.277-.262-2.149-.558-2.913-.306-.789-.718-1.459-1.384-2.126C21.319 1.347 20.651.935 19.86.63c-.765-.297-1.636-.499-2.913-.558C15.667.012 15.26 0 12 0zm0 2.16c3.203 0 3.585.016 4.85.071 1.17.055 1.805.249 2.227.415.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.36 1.057.413 2.227.057 1.266.07 1.646.07 4.85s-.015 3.585-.074 4.85c-.061 1.17-.256 1.805-.421 2.227-.224.562-.479.96-.899 1.382-.419.419-.824.679-1.38.896-.42.164-1.065.36-2.235.413-1.274.057-1.649.07-4.859.07-3.211 0-3.586-.015-4.859-.074-1.171-.061-1.816-.256-2.236-.421-.569-.224-.96-.479-1.379-.899-.421-.419-.69-.824-.9-1.38-.165-.42-.359-1.065-.42-2.235-.045-1.26-.061-1.649-.061-4.844 0-3.196.016-3.586.061-4.861.061-1.17.255-1.814.42-2.234.21-.57.479-.96.9-1.381.419-.419.81-.689 1.379-.898.42-.166 1.051-.361 2.221-.421 1.275-.045 1.65-.06 4.859-.06l.045.03zm0 3.678c-3.405 0-6.162 2.76-6.162 6.162 0 3.405 2.76 6.162 6.162 6.162 3.405 0 6.162-2.76 6.162-6.162 0-3.405-2.76-6.162-6.162-6.162zM12 16c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm7.846-10.405c0 .795-.646 1.44-1.44 1.44-.795 0-1.44-.646-1.44-1.44 0-.794.646-1.439 1.44-1.439.793-.001 1.44.645 1.44 1.439z"}"></path></svg>`;
});
const Linkedin = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, []);
  return `<svg${spread([
    { role: "img" },
    { fill: "white" },
    { viewBox: "0 0 24 24" },
    { xmlns: "http://www.w3.org/2000/svg" },
    escape_object($$restProps)
  ], {})}>${slots.default ? slots.default({}) : ``}<title>LinkedIn</title><path d="${"M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"}"></path></svg>`;
});
var Socials_svelte_svelte_type_style_lang = "";
const css = {
  code: ".container.svelte-l6eggz{position:fixed;z-index:3;right:40px;bottom:25px;width:15px;height:auto;display:flex;flex-direction:column;gap:18px;opacity:60%;object-fit:cover}",
  map: null
};
const Socials = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `<div class="${"container svelte-l6eggz"}"><a href="${"https://www.facebook.com/apeldesign/"}">${validate_component(Facebook, "Facebook").$$render($$result, {}, {}, {})}</a>
  <a href="${"https://www.instagram.com/apeldesigninc/"}">${validate_component(Instagram, "Instagram").$$render($$result, {}, {}, {})}</a>
  <a href="${"https://www.linkedin.com/in/amit-apel-05373727"}">${validate_component(Linkedin, "Linkedin").$$render($$result, {}, {}, {})}</a>
</div>`;
});
const prerender = true;
async function load({ fetch }) {
  const categories = (await (await fetch("/api2/api/categories")).json()).reduce((acc, item) => {
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
      {
        return item;
      }
    });
  }
  changeAllUrls(changeUrls(pageLayout));
  return {};
}
const Routes = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  onDestroy(() => {
  });
  return `<div>${validate_component(Navbar, "Navbar").$$render($$result, {}, {}, {})}

  ${validate_component(ScrollContainer, "ScrollContainer").$$render($$result, {}, {}, {})}

  ${validate_component(CardContainer, "CardContainer").$$render($$result, { data: pageLayout["mobile"] }, {}, {})}

  ${validate_component(Modal, "Modal").$$render($$result, {}, {}, {})}
  ${validate_component(Socials, "Socials").$$render($$result, {}, {}, {})}
</div>`;
});
export { Routes as default, load, prerender };
