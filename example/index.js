import Vue from 'vue'
import VMoji from '../src/'
import App from './index.vue'

Vue.use(VMoji)

new Vue({
  el: '#app',
  render () {
    return <App />
  }
})

