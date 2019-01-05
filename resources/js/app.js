
require('./bootstrap');

window.Vue = require('vue');

import VueRouter from 'vue-router';
Vue.use(VueRouter);


Vue.component('example-component', require('./components/ExampleComponent.vue').default);


let routes = [
    { path: '/dashboard', component: require('./components/Dashboard').default },
    { path: '/profile', component: require('./components/Profile').default },
    { path: '/users', component: require('./components/Users').default }
];

const router = new VueRouter({
    mode : 'history',
    routes // short for `routes: routes`
})


const app = new Vue({
    el: '#app',
    router
});
