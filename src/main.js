var Vue = require('vue');

Vue.options.replace = true;

var app = new Vue(require('./app.vue')).$mount('#app');
