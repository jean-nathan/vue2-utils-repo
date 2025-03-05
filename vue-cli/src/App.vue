<template>
  <div id="app">
      <transition-group tag="ul">
      <li v-for="language in languages" :key="language">
        {{ language }}
      </li>
    </transition-group>
    <button @click="filterAZ">A-Z</button>
    <button @click="filterZA">Z-A</button>
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      activePage: "VueCliList",
      languages: ["PHP", "JS", "PYTHON", "C++"]
    }
  },
  methods: {
    filterAZ() {
      this.languages.sort();
    },
    filterZA() {
      this.languages.sort().reverse();
    }
  }
};
</script>
<style scoped>
.v-enter-active,
.v-leave-active
 {
  transition: all 0.3s;
}

.v-enter,
.v-leave-to {
  opacity: 0;
  transform: translate3d(-20px,0,0);
}
</style>
