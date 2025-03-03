<template>
  <div id="app">
    <button @click="componentActive = 'VueCliHeader'">Renderizar componente VueCliHeader</button>
    <button @click="componentActive = 'VueCliFooter'">Renderizar componente VueCliFooter</button>
    <keep-alive>
      <component :is="componentActive"></component>
    </keep-alive>
  </div>
</template>

<script>
import VueCliHeader from './components/VueCliHeader.vue';
import VueCliFooter from './components/VueCliFooter.vue';

export default {
  name: 'App',
  data() {
    return {
      componentActive: "VueCliHeader"
    }
  },
  components: {
    VueCliHeader,
    VueCliFooter
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
