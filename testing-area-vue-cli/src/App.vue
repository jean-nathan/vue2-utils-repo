<template>
  <div id="app">
    <h1>AppPage</h1>
    <!--Define os link para o router-->
    <nav>
    <router-link to="/">Home</router-link>
    <router-link to="/cursos/">Cursos</router-link>
    <!--Local onde o componente aparecerá-->
    <router-view></router-view>
    </nav>
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
    }
  },
};
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
