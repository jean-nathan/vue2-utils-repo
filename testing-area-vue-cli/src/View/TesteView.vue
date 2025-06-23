<template>
  <div>
    <button @click="modalAtivo = !modalAtivo">Cadastre-se</button>
    <transition name="modal">
    <div v-show="modalAtivo" class="modal-wrapper" @click="cliqueFora">
      <div class="modal">
        <h1>Cadastre-se</h1>
        <form action="">
          <label for="email">Email</label>
          <input type="email" name="email" id="email">

          <label for="password">Senha</label>
          <input type="password" name="password" id="password">
          <input type="submit" value="Logar">
        </form>

      </div>
    </div>
    </transition>
  </div>
</template>

<script>
export default {
  name: "testeView",
  data() {
    return {
      modalAtivo: false
    };
  },
  methods: {
    cliqueFora({currentTarget, target}) {
      if(currentTarget === target) {
        this.modalAtivo = false
      }
    }
  }
};
</script>

<style scoped>
* {
  box-sizing: border-box;
}

body {
  font-family: Arial, Helvetica, sans-serif;
}

h1 {
  margin: 0 0 20px 0;
}

.modal-wrapper {
  position: fixed;
  background: rgba(0,0,0, 0.4);
  width: 100vw;
  height: 100vh;
  top: 0;
  left: 0;
  overflow-y: scroll;
}

.modal {
  background: #e5e5e5;
  padding: 20px;
  max-width: 450px;
  margin: 120px auto;
}


label {
  display: block;
  margin-bottom: 5px;
}

input,
button {
  width: 100%;
  border: 2px solid rgba(0,0,0, 0.2);
  border-radius: 2px;
  padding: 15px 10px;
  font-size: 1rem;
  margin-bottom: 20px;
}

button {
  margin: 20px auto;
  display: block;
}

input[type="submit"], button {
  width: 200px;
  background: #84e;
  color: white;
  text-transform: uppercase;
  font-size: 1rem;
  font-family: inherit;
  cursor: pointer;
}

input[type="submit"]:active,
button:active {
  background: #94e;
}


.modal-enter,
.modal-leave-to {
  opacity: 0;
}

.modal-enter-active,
.modal-leave-active {
  transition: opacity .3s;
}

</style>
