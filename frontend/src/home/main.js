// Import Vue
import Vue from 'vue';
import VueRouter from 'vue-router';

import 'ant-design-vue/dist/antd.css';
import Antd from 'ant-design-vue'

// Import Vue App, routes, store
import App from './App';
import routes from './routes';

Vue.use(VueRouter);
Vue.use(Antd)

// Configure router
const router = new VueRouter({
    routes,
    linkActiveClass: 'active',
    mode: 'history'
});

new Vue({
    el: '#app',
    render: h => h(App),
    router
});