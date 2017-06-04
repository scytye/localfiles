import Vue from 'vue';
import Router from 'vue-router';
Vue.use(Router);
const routes = [
  { path: '/', component: resolve => require(['../components/hello-weather.vue'], resolve) },
  { path: '/search', component: resolve => require(['../components/structure/search-city.vue'], resolve) },
];
export default new Router({
  base: "/",
  routes,
})
