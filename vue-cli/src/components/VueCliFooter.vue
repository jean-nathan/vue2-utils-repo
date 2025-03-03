<template>
  <div>
    <h1>Componente 2 - VueCliFooter</h1>
  </div>
</template>

<script>
export default {
  name: "VueCliFooter",
  data() {
    return {
      title: "Componente - VueCliFooter"
    }
  },
  destroyed() {
    console.log("Componente VueCliFooter foi destruido!")
  }
}
</script>

<style>

</style>
