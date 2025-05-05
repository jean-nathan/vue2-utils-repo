<template>
  <div>
    <ul :class="{column: isMenuTypeColumn}">
      <li>Sobre</li>
      <li>Produtos</li>
      <li>Serviços</li>
      <li>Contato</li>
    </ul>
    <button @click="isMenuTypeColumn = !isMenuTypeColumn">Mudar orientação Lista</button>
  </div>
</template>

<script>
export default {
  name: "testeView",
  data() {
    return {
      isMenuTypeColumn: false
    };
  },
};
</script>

<style scoped>
div {
  font-family: monospace;
}

ul {
  display: flex;
  flex-wrap: wrap;
  list-style: none;
  padding: 0px;
  margin: 0px;
  gap: 7px;
}

.column {
  flex-direction: column;
}

li {
  padding: 20px;
  background: #84e;
  color: white;
  border-radius: 4px;
  flex: 1;
  text-align: center;
}

button {
  margin-top: 20px;
  padding: 10px;
  font-family: inherit;
}

</style>
