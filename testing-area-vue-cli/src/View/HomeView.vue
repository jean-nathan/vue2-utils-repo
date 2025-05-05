<template>
  <div>
    <div v-if="loading">
      <PageLoading />
    </div>
    <transition>
    <div v-if="api" class="content">
      <div>
      <h1>Sobre a {{ api.titulo }}</h1>
      <p>{{ api.descricao }}</p>
      <router-link tag="button" to="/cursos" class="btn-courses">Cursos</router-link>
      <div>
        <h2>Avaliações</h2>
        <ul>
          <li v-for="avaliacao in api.avaliacoes" :key="avaliacao.nome">
            <p>{{ avaliacao.nome }}</p>
            <p>{{ avaliacao.descricao }}</p>
          </li>
        </ul>
      </div>
    </div>
      <img src="@/assets/boy-studing.png" alt="">
    </div>
    </transition>
  </div>
</template>

<script>
import fetchDataMixin from '@/mixins/fetchDataMixin';

export default {
  name: 'HomeView',
  mixins: [fetchDataMixin],
  data() {
    return {
      loading: true,
      api: null
    }
  },
  created() {
    this.fetchData('/home')
  }
}
</script>

<style scoped>
.btn-courses {
  border: none;
  background: #4b8;
  border-radius: .25rem;
  color: white;
  cursor: pointer;
  padding: .9375rem 2.5rem;
  font-size: 1rem;
  margin-bottom: 2.5rem;
  margin-top: .625rem;
  box-shadow: 0 4px 2px rgba(0, 0, 0, 0.1);
  font-family: 'Avenier', Arial, Helvetica, sans-serif;
}
</style>
