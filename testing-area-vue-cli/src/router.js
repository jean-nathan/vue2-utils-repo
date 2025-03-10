import Vue from "vue";
import Router from "vue-router";

//Views
import HomePage from "./View/HomePage.vue";
import CursosPage from "./View/CursosPage.vue";
import CursoPage from "./View/CursoPage.vue";
import CursoAulas from "./View/CursoAulas.vue";
import CursoDescricao from "./View/CursoDescricao.vue";

Vue.use(Router);

const routes = [
  {
    path: "/",
    component: HomePage,
  },
  {
    path: "/cursos",
    component: CursosPage,
    props: true,
    beforeEnter: (to, from, next) => {
      console.log("Foi para cursos!")
      next()
    },
    children: [
      {
        name: "curso",
        path: ":curso",
        props: true,
        component: CursoPage,
        children: [
          {
            name: "aulas",
            path: "aulas",
            component: CursoAulas,
          },
          {
            name: "descricao",
            path: "descricao",
            component: CursoDescricao,
          },
        ],
      },
    ],
  },
];

const router = new Router({
  routes,
  base: process.env.BASE_URL, // PADRAO
  mode: "history", // Usando o modo 'history' para URLs mais limpas (sem hash)
});

export default router;
