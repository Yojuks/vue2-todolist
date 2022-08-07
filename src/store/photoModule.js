import axios from "axios";

export default {
  state: { photos: [], dialogVisible: false, currentPhoto: {} },
  mutations: {
    setPhotos(state, payload) {
      state.photos = payload;
    },
    showDialog(state) {
      state.dialogVisible = true;
    },
    hideDialog(state) {
      state.dialogVisible = false;
    },
    setCurrentPhoto(state, payload) {
      state.currentPhoto = payload;
    }
  },
  getters: {
    getAllPhotos(state) {
      return state.photos;
    },
    getDialogVisible: (state) => state.dialogVisible,
    getCurrentPhoto: (state) => {
      console.log(state.currentPhoto);
      return state.currentPhoto;
    }
  },
  actions: {
    fetchPhotos(context) {
      axios
        .get("https://jsonplaceholder.typicode.com/photos?_limit=10")
        .then((res) => context.commit("setPhotos", res.data));
    }
  }
};
