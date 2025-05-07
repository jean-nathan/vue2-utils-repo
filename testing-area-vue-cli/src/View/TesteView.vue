<template>
<div class="container">
  <span>Usando keypress: </span>
  <input type="text" @keypress="ativar">
  <br>
  <span>Usando keydown: </span>
  <input type="text" @keydown.enter="ativar">
  <br>
  <input type="text" @click.alt="ativar">
</div>
</template>

<script>
export default {
  name: "testeView",
  data() {
    return {
      totalScroll: 0
    };
  },
  methods: {
    ativar() {
      console.log('ativou')
    },
    handleScroll() {
      this.totalScroll = window.scrollY
      console.log('ativou', this.totalScroll)
    }
  },
  created() {
    window.addEventListener("scroll", this.handleScroll)
  }
};
</script>

<style scoped>
.container {
  height: 2000px;
}
</style>
