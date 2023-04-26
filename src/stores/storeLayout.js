import { defineStore } from "pinia";

export const useLayoutStore = defineStore("storeLayout", {
  state: () => ({
    drawer: {
      open: false,
    },
    miniState: {
      active: true,
    },
  }),
  getters: {},
  actions: {
    setDrawer() {
      this.drawer.open = !this.drawer.open;
    },

    setMiniState(state) {
      this.miniState.active = state;
    },
  },
});
