import Vue from 'vue'
import App from './App'
import VueFire from 'vuefire'
Vue.config.productionTip = false
Vue.use(VueFire)

new Vue({
  el: '#app',
  components: { App },
  template: '<App/>'
})
