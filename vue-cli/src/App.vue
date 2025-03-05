<template>
  <div id="app">
    <nav>
        <a @click="activePage = 'homePage'">Home</a>
        <span> | </span>
        <a @click="activePage = 'aboutPage'">Sobre</a>
    </nav>
    <transition mode="out-in">
    <component :is="activePage"></component>
    </transition>
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      activePage: "HomePage"
    }
  },
  components: {
    HomePage: () => import("./Pages/HomePage.vue"),
    AboutPage: () => import("./Pages/AboutPage.vue")
  }
};
</script>
<style scoped>
.v-enter-active {
  transition: all 0.3s;
}
.v-enter {
  opacity: 0;
  transform: translate3d(0,-20px,0);
}
</style>
