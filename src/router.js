import Vue from "vue";
import VueRouter from "vue-router";
import MainPage from "./pages/MainPage.vue";
import TodoApp from "./pages/Todolist/TodoApp.vue";

Vue.use(VueRouter);

const routes = [
  { path: "/", component: MainPage },
  { path: "/photo", component: () => import("./pages/PhotosPage.vue") },
  { path: "/todolist", component: TodoApp }
];

export default new VueRouter({ mpde: "history", routes });
