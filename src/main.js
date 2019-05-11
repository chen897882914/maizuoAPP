import Vue from 'vue';
import Vant from 'vant';
import 'vant/lib/index.css';
import App from './App';
import router from './router/index';
import store from './store/index'
import '@/filters/index'
import axios from 'axios';
import 'amfe-flexible';

import { PullRefresh } from 'vant';

import { loading,clear } from '@/utils/index';

Vue.prototype.axios = axios;
Vue.prototype.$loading = loading;
Vue.prototype.$clear = clear;
let env = 'prod';
if( env === 'dev' ){
  axios.defaults.baseURL = 'https://www.easy-mock.com/mock/5cd636d37f8f72433eeaa0d5/api';
} else if ( env === 'test' ) {
  axios.defaults.baseURL = 'http://132.232.87.95:3000/api';
} else if ( env === 'prod' ) {
  axios.defaults.baseURL = 'http://132.232.94.151:3000/api';
}

Vue.use(Vant);
Vue.use(PullRefresh);

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
