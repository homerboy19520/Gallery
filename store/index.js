import axios from "axios";

export const state = () => ({
  request: null,
  dataGallery: [],
  activeSlide: null,
});
export const getters = {
  name(state) {
    return state.name;
  },

  userData(state) {
    if (state.dataGallery) {
      return state.dataGallery;
    }
  },

  isPrivateModal(state) {
    if (state.activeSlide) {
      return state.activeSlide.is_private;
    } else return false;
  },
};
export const mutations = {
  saveData(state, data) {
    for (let keys in data) {
      data[keys].forEach((item) => state.dataGallery.push(item));
    }
  },

  setActiveSlide(state, slideNumber) {
    state.activeSlide = state.dataGallery[slideNumber];
  },

  resetActiveSlide(state) {
    state.activeSlide = null;
  },
};

export const actions = {
  async getData({ commit }) {
    const request = await this.$axios.$get(
      "https://dev.rusdat.net/mock/example.json"
    );
    commit("saveData", request);
  },
};
