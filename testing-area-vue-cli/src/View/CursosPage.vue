<template>
  <div>
    <h1>Sessao de Cursos</h1>
    <h2>{{ curso }}</h2>
    <router-link :to="{name: 'curso', params: {curso: 'javascript'}}">JavaScript</router-link>
    <router-link :to="{name: 'curso', params: {curso: 'html'}}">HTML</router-link>
    <router-link :to="{name: 'curso', params: {curso: 'css'}}">CSS</router-link>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "CursosPage",
  props: ["curso"],
  created() {
      console.log('Componente CursosPage foi criado');
    },
    beforeRouteUpdate(to, from, next) {
      console.log(to);
      console.log(from);
      console.log(next);
      next();
    }
  }
</script>

<style scoped>
a {
  padding: 10px;
}

nav {
  padding: 20px 0;
}

.router-link-exact-active {
  color: #84e;
  font-weight: 600;
}
</style>
