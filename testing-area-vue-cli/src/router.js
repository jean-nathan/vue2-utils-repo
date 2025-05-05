import Vue from "vue"
import Router from "vue-router"

//Views
import HomeView from "@/View/HomeView.vue"
import ContactView from "./View/ContactView.vue";
import CoursesView from "./View/CoursesView.vue";
import CourseView from "./View/CourseView.vue";
import ClassView from "./View/ClassView.vue";
import TesteView from "./View/TesteView.vue";

Vue.use(Router);

const routes = [
  {
    path: "*", // Quando alguém digitar qualquer merda na url, ele redireciona para homeview
    redirect: "/"
    },
  {
    path: "/",
    components: {
      default: HomeView
    }
  },
  {
    path: "/contato",
    name: 'contato',
    component: ContactView
  },
  {
    path: "/cursos",
    name: 'contato',
    component: CoursesView
  },
  {
    path: "/cursos/:curso",
    name: 'curso',
    component: CourseView,
    props: true,
    children: [ // Usaremos ele pois temos um router-link na view curso
      {
        path: ":aula", // Não preciso colocar a barra, ele já entende por ser filho
        name: "aula",
        component: ClassView,
        props: true,
      }
    ]
  },
  {
    path: "/teste",
    name: "teste",
    component: TesteView
  },
];

const router = new Router({
  routes,
  scrollBehavior () { // <- to, from, savedPosition
    return {
      x: 0,
      y: 0
    }
  },
  base: process.env.BASE_URL, // ⚙️ Define o prefixo raiz para todas as rotas
  // ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░
  // Quando usar? ➔ Seu app Vue está dentro de uma subpasta do servidor (ex: /app/)
  // Funcionamento: ➔ Adiciona automaticamente o prefixo antes de todas as rotas
  // Exemplo: 
  // - Base: '/app/' 
  // - Rota: '/cursos' 
  // → URL Final: '/app/cursos'

  // ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░
  // Caso multilíngue: Combine com parâmetros de rota para idiomas
  // Exemplo: 
  // - Base: '/app/'
  // - Rota: '/:lang/cursos' 
  // → URL: '/app/en/cursos' (en = parâmetro de idioma)    
  mode: "history", // Usando o modo 'history' para URLs mais limpas (sem hash)
});

export default router;
