import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    redirect: "/login",
    name: "Home",
    component: () =>
      import(/* webpackChunkName: "Layout" */ "../views/Layout.vue"),
    children: [
      {
        path: "/task",
        name: "task",
        component: () =>
          import(/* webpackChunkName: "Task" */ "../views/Pages/Task.vue"),
      },
      {
        path: "/location",
        name: "location",
        component: () =>
          import(
            /* webpackChunkName: "Lcoation" */ "../views/Pages/Location.vue"
          ),
      },
    ],
  },
  {
    path: "/Login",
    name: "Login",
    component: () =>
      import(/* webpackChunkName: "Login" */ "../views/Auth/Login.vue"),
  },

  {
    path: "*",
    redirect: "/",
  },
];
const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
