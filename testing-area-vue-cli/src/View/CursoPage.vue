<template>
  <div>
    <h2>{{ curso }}</h2>
    <router-link :to="{name: 'descricao'}">Descricao</router-link>
    <router-link :to="{name: 'aulas'}">Aulas</router-link>
    <transition>
    <router-view mode="out-in" name="topDown"></router-view>
    </transition>
  </div>
</template>

<script>
export default {
  name: "CursoPage",
  props: ["curso"],
  created() {
      console.log('Esse componente foi criado');
    },
    beforeRouteUpdate(to, from, next) {
      console.log(to);
      console.log(from);
      console.log(next);
      next();
    }
  }
</script>

<style scoped>
a {
  padding: 10px;
}

nav {
  padding: 20px 0;
}

.router-link-exact-active {
  color: #84e;
  font-weight: 600;
}

.topDown-enter, .topDown-leave-to {
  transform: translate3d(0, -40px,0) scale(.2);
  opacity: 0;
}

.topDown-enter-active,
.topDown-leave-active 
{
  transition: all .3s;
}
</style>
