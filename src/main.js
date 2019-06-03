import Vue from 'vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import '../static/asset/md.style.css'
//import 'highlight.js/styles/github.css';
import 'highlight.js/styles/rainbow.css';
import App from './App.vue'
import router from './router/index';

Vue.use(ElementUI);

new Vue({
  router,
  el: '#app',
  render: h => h(App)
});