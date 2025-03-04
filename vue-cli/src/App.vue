<template>
  <div id="app">
    <div class="modal" v-if="active">
      <div class="modal-container">
        <h1>Modal Aberto</h1>
        <p>Seu modal foi aberto com sucesso.</p>
        <button @click="active = !active">fechar</button>
      </div>
    </div>
    <button @click="active = !active">Abrir modal</button>
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      active: false,
    };
  },
  components: {},
  methods: {
    enter(element) {
      console.log(element.classList.add("teste"));
    },
    leave(element) {
      console.log("Elemento sumiu!",element)
    }
  }
};
</script>


<style>
  body {
    margin: 0;
  }

  .modal::before {
    content: "";
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background: rgba(166, 165, 165, 0.5);
  }

  .modal {
  display: flex;
  flex-direction: column;
  justify-content: center; /* Centraliza horizontalmente */
  align-items: center; /* Centraliza verticalmente */
  height: 100vh;
  }

  .modal-container {
    background: white;
    z-index: 1;
    padding: 70px;
    text-align: center;
    border-radius: 10px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  }

  .fade-enter-active,
  .fade-leave-active {
    transition: opacity 0.4s;
  }
  
  .fade-enter,
  .fade-leave-to
  {
    opacity: 0;
  }

</style>
