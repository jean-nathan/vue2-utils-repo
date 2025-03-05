<template>
  <div class="modal-wrapper">
    <div class="modal">
      <h1>Venda realizada com sucesso!</h1>
      <p>Em menos de 5 minutos você receberá um e-mail com informações do seu pedido.</p>
      <button @click="clicked">OK</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "VueCliModal",
  props: ["hasActive"],
  methods: {
    clicked() {
      this.hasActive();
    }
  }
}
</script>

<style scoped>
* {
  box-sizing: border-box;
}

.modal-wrapper {
  background: rgba(0,0,0, 0.4);
  position: fixed;
  height: 100vh;
  width: 100vw;
  left: 0;
  top: 0;
}

.modal {
  margin: 120px auto 0 auto;
  background: #e5e5e5e5;
  border-radius: 4px;
  max-width: 400px;
  padding: 20px;
  text-align: center;
}
</style>
