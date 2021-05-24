import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: function () {
      return import(/* webpackChunkName: "about" */ "../views/About.vue");
    },
  },
  {
    path:"/logged",
    name:"Menu",
    component: function () {
      return import(/* webpackChunkName: "about" */ "../views/Menu.vue");
    },
  },
  {
    path:"/origin",
    name:"OriginDt",
    component: function () {
      return import(/* webpackChunkName: "about" */ "../views/OriginDt.vue");
    },
  },
  {
    path:"/vendor",
    name:"Vendor",
    component: function () {
      return import(/* webpackChunkName: "about" */ "../views/Vehicle.vue");
    },
  },{
    path:"/contract",
    name:"Contract",
    component: function () {
      return import(/* webpackChunkName: "about" */ "../views/Contract.vue");
    },
  },{
    path:"/itemsuf",
    name:"Itemsuf",
    component: function () {
      return import(/* webpackChunkName: "about" */ "../views/Itemsuf.vue");
    },
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
