// store/index.js
import { createStore } from 'vuex';

export default createStore({
  state() {
    return {
      popupData: null
    };
  },
  mutations: {
    setPopupData(state, newData) {
      state.popupData = newData;
    },
    removePopupdata(state) {
      state.popupData = null
    }
  },
  actions: {
    updatePopupData(context, newData) {
      context.commit('setPopupData', newData);
    }
  },
  getters: {
    getPopupData: state => state.popupData
  }
});
