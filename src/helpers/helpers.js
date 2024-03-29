import axios from "axios";
import Vue from "vue";
import VueFlashMessage from "vue-flash-message";
import "vue-flash-message/dist/vue-flash-message.min.css";

Vue.use(VueFlashMessage, {
  messageOptions: {
    timeout: 3000,
    pauseOnInteract: true,
  },
});
const vm = new Vue();
const baseURL = "https://mandarin-api-production.up.railway.app/words";

const handleError = (fn) => (...params) =>
  fn(...params).catch((error) => {
    vm.flash(`${error.response.status}: ${error.response.statusText}`, "error");
  });
export const api = {
  getWords: handleError(async () => {
    const res = await axios.get(baseURL);
    return res.data;
  }),
};
