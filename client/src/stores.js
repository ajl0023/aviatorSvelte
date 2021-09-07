import { writable } from "svelte/store";

export const currentPage = writable(0);
export const galleryImg = writable(0);
export const modal = writable({
  visibility: false,
  content: null,
  type: null,
});
const pagePositionsStore = () => {
  const state = {
    page: null,
    left: 0,
    shouldScroll: true,
    inital: false,
    right: -900,
  };
  const { subscribe, set, update } = writable(state);
  const methods = {
    toggleScroll() {
      update((state) => {
        state.shouldScroll = false;
        setTimeout(() => {
          state.shouldScroll = true;
        }, 1100);
        return state;
      });
    },
    handleResize(left, right) {
      update((state) => {
        state.left = left;
        state.right = right;

        return state;
      });
    },
  };
  return {
    subscribe,
    set,
    update,
    ...methods,
  };
};
export const pagePositions = pagePositionsStore();
