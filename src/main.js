import Vue from 'vue'
import App from './App.vue'
import router from './router'
import BootstrapVue from './plugins/bootstrap'
import HighchartsVue from './plugins/highcharts'
import VueBus from './plugins/bus'

Vue.config.productionTip = false

new Vue({
  router,
  BootstrapVue,
  HighchartsVue,
  render: h => h(App)
}).$mount('#app')
