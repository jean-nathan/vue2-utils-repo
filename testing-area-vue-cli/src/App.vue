<template>
  <div id="app">
    <TheHeader />
    <router-view class="container"></router-view>
  </div>
</template>

<script>
import TheHeader from '@/components/TheHeader.vue';

export default {
  name: "App",
  data() {
    return {
    }
  },
  components: {
    TheHeader
  }
};
</script>
<style>

/* reset simples */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}


body {
  font-family: 'Avenier', Arial, Helvetica, sans-serif;
  color: #234;
}

ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

a {
  font-weight: bold;
  text-decoration: none;
  color: #234;
}

img {
  max-width: 100%;
}

.container {
  max-width: 50rem;
  margin: 0 auto;
  padding: 1.25rem;
}

/* Transição global */

.v-enter {
  opacity: 0;                           /* O elemento começa invisível */
  transform: translate3d(-20px, 0, 0);  /* O elemento começa deslocado 20px para a esquerda */
}

.v-enter-active {
  transition: all 0.3s;                 /* Toda mudança de estilo será animada durante 0.3 segundos */
  /* Quando o Vue adiciona o elemento na tela, ele começa com os estilos de .v-enter */
  /* Em seguida, o Vue aplica o estado final (opacity: 1 e transform: translate3d(0, 0, 0)) */
  /* Como temos "transition", a mudança de opacity (de 0 para 1) e transform (de -20px para 0px) será suave */
}

.content {
  display: grid;
  grid-template-columns: 1fr minmax(200px, 400px);
  grid-gap: 1.875rem;
}

@media screen and (max-width: 25rem) {
  .content {
    display: block;
  }
}

</style>
