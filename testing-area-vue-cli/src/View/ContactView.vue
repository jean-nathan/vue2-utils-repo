<template>
    <div>
    <div v-if="loading">
      <PageLoading />
    </div>
    <transition>
    <div v-if="api">
      <h1>{{ api.titulo }}</h1>
      <p>{{ api.descricao }}</p>
      <ul>
        <li>
          <b>Telefone:</b>
          {{ api.contato.telefone }}
        </li>
        <li>
          <b>Email:</b>
          {{ api.contato.email }}
        </li>
        <li>
          <b>Endereço:</b>
          {{ api.contato.endereco }}
        </li>
      </ul>
    </div>
  </transition>
  </div>
</template>

<script>
import fetchDataMixin from '@/mixins/fetchDataMixin';

export default {
  name: "ContactView",
  mixins: [fetchDataMixin],
  data() {
    return {
      loading: true,
      api: null,
    };
  },
  created() {
    this.fetchData('/contato');
  },
};
</script>

<style lang="scss" scoped>
</style>>
