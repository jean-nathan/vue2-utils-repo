<template>
  <div id="app">
    <button @click="clicked">Abrir Modal</button>
    <transition name="modal">
      <VueCliModal 
      v-if="active"
      :hasActive="clicked"
      />
    </transition>
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
  components: {
    VueCliModal: () => import("./components/VueCliModal.vue")
  },
  methods: {
    clicked() {
      this.active = !this.active
    }
  }
}
</script>


<style scoped>
* {
  box-sizing: border-box;
}

.modal-enter,
.modal-leave-to {
  opacity: 0;
}

.modal-enter-active,
.modal-leave-to {
  transition: opacity .3s;
}
</style>
