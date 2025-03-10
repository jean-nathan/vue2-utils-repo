<template>
  <div>
    <h2>{{ curso }}</h2>
    <router-link :to="{name: 'descricao'}">Descricao</router-link>
    <router-link :to="{name: 'aulas'}">Aulas</router-link>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "CursoPage",
  props: ["curso"],
  created() {
      console.log('Esse componente foi criado');
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
