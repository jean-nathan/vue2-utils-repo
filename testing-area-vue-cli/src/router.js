import Vue from "vue";
import Router from "vue-router";

//Views
import HomePage from "./View/HomePage.vue";
import CursosPage from "./View/CursosPage.vue";

Vue.use(Router);

const routes = [
  {
    path: "/",
    component: HomePage
  },
  {
    path: "/cursos",
    component: CursosPage
  },
  {
    path: "/cursos/:curso",
    component: CursosPage
  }
];

const router = new Router({
  routes,
  base: process.env.BASE_URL, // PADRAO
  mode: "history" // Usando o modo 'history' para URLs mais limpas (sem hash)
});

export default router;
