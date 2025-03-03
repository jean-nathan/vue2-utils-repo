<template>
  <div id="app">
    <button @click="componentActive = 'VueCliHeader'">VueCliHeader</button>
    <button @click="componentActive = 'VueCliFooter'">VueCliFooter</button>
    <keep-alive>
    <component :is="componentActive"></component>
    </keep-alive>
  </div>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      componentActive: ''  // Atribuir o nome do componente como string
    }
  },
  components: {
    VueCliHeader: () => import("./components/VueCliHeader.vue"),
    VueCliFooter: () => import("./components/VueCliFooter.vue")
  }
}
</script>



<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
