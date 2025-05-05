<template>
  <div>
    <div v-if="loading">
      <PageLoading />
    </div>
    <transition>
      <div v-if="api" class="content">
        <div>
          <h1>{{ api.nome }}</h1>
          <p>{{ api.descricao }}</p>
          <h2>Aulas</h2>
          <ul class="aulas">
            <li v-for="aula in api.aulas" :key="aula.id">
              <router-link :to="{ name: 'aula', params: { aula: aula.id } }">{{
                aula.nome
              }}</router-link>
            </li>
          </ul>
        </div>
        <router-view></router-view>
      </div>
    </transition>
  </div>
</template>

<script>
import fetchDataMixin from "@/mixins/fetchDataMixin";

export default {
  name: "CourseView",
  props: ["curso"],
  mixins: [fetchDataMixin],
  data() {
    return {
      loading: true,
      api: null,
    };
  },
  created() {
    this.fetchData(`/curso/${this.curso}`).then((data) => {
      const aulaId = data.aulas[0].id;
      const { name, params } = this.$route;

      console.log(name, params.aula )

      if (name !== "aula" || params.aula !== aulaId) {
        this.$router.push({ name: "aula", params: { aula: aulaId } });
      }
    });
  },
};
</script>

<style scoped>
.aulas li a {
  display: block;
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.1);
  background: white;
  padding: 1.25rem;
  margin-bottom: 0.625rem;
  border-radius: 0.25rem;
}

.aulas li a.router-link-active {
  background: #4b8;
  color: white;
}
</style>
