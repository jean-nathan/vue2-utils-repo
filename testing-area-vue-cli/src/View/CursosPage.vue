<template>
  <div>
    <h1>Sessao de Cursos</h1>
    <h2>Curso - {{ curso }}</h2>
    <router-link to="/cursos/javascript">JavaScript</router-link>
    <router-link to="/cursos/html">HTML</router-link>
    <router-link to="/cursos/css">CSS</router-link>
  </div>
</template>

<script>
export default {
  name: "CursosPage",
  computed: {
    curso() {
      return this.$route.params.curso
    }
  },
  created() {
      console.log('Esse componente foi criado');
    },
    beforeRouteUpdate(to, from, next) {
      console.log(to);
      console.log(from);
      console.log(next);
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
