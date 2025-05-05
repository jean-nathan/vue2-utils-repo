<template>
  <div>
    <div v-if="loading">
      <PageLoading />
    </div>
    <transition>
      <div v-if="api">
        <h2>{{ api.nome }}</h2>
        <div class="video">
          <iframe
            width="560"
            height="315"
            :src="`https://www.youtube.com/embed/${api.youtube}`"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerpolicy="strict-origin-when-cross-origin"
            allowfullscreen
          ></iframe>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
import fetchDataMixin from "@/mixins/fetchDataMixin";

export default {
  name: "ClassView",
  props: ["aula"],
  mixins: [fetchDataMixin],
  data() {
    return {
      loading: true,
      api: null,
    };
  },
  created() {
    this.fetchData(`/aula/${this.aula}`);
  },
  beforeRouteUpdate(to, from, next) {
    this.fetchData(`/aula/${to.params.aula}`);
    next();
  },
};
</script>

<style scoped>
.video {
  position: relative;
  padding-bottom: 56.25%;
}

.video iframe {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}
</style>
