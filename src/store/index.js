// store/index.js
import { createStore } from 'vuex';

export default createStore({
  state() {
    return {
      popupData: ''
    };
  },
  mutations: {
    setPopupData(state, newData) {
      state.popupData = newData;
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
