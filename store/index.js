import axios from "axios";

export const state = () => ({
  request: null,
  name: "Artur",
  data: {
    photos: [
      {
        origin: "https://i.ibb.co/D1qCHPc/1.jpg",
        is_private: false,
      },
      {
        origin: "https://i.ibb.co/VWxT6RG/4.jpg",
        is_private: false,
      },
      {
        origin: "https://i.ibb.co/y6D9y4w/20.jpg",
        is_private: false,
      },
      {
        origin: "https://i.ibb.co/CmsJ6b1/23.jpg",
        is_private: false,
      },
      {
        origin: "https://i.ibb.co/881C5xY/Group-15.png",
        is_private: true,
      },
      {
        origin: "https://i.ibb.co/881C5xY/Group-15.png",
        is_private: true,
      },
      {
        origin: "https://i.ibb.co/881C5xY/Group-15.png",
        is_private: true,
      },
    ],
    videos: [
      {
        preview: "https://i.ibb.co/881C5xY/Group-15.png",
        origin: "https://dev.rusdat.net/mock/3207126055.mp4",
        is_private: true,
      },
    ],
  },
});
export const getters = {
  name(state) {
    return state.name;
  },
};

export const mutations = {
  saveData(state, data) {
    let request = JSON.stringify(data);
    console.log(request);

    let final = JSON.parse(request);
    console.log(final);
  },
};

export const actions = {
  // async getData({ state, commit }) {
  //   const request = await this.$axios.$get(
  //     "https://dev.rusdat.net/mock/example.json"
  //   );
  //   commit("saveData", request);
  // },
};
