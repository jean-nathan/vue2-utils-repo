import Vue from 'vue'
import App from './App.vue'
import router from './router.js';

Vue.config.productionTip = false

// Componentes globais
const globalComponents = [
  {name: 'PageLoading', component: () => import('@/components/PageLoading.vue')}
]

globalComponents.forEach(globalComponent => {
  Vue.component(globalComponent.name, globalComponent.component)
})



new Vue({
  render: h => h(App),
  router
}).$mount('#app');
