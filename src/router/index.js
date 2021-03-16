import Vue from "vue";
import VueRouter from "vue-router";
import Words from "../views/Words.vue";
import Mandarin from "../views/Mandarin.vue";
import English from "../views/English.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    redirect: "/words",
  },
  {
    path: "/words",
    name: "words",
    component: Words,
  },
  {
    path: "/mandarin",
    name: "mandarin",
    component: Mandarin,
  },
  {
    path: "/english",
    name: "english",
    component: English,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  linkActiveClass: "active",
  routes,
});

export default router;
