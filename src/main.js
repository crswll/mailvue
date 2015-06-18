var Vue = require('vue');

Vue.options.replace = true;

Vue.use(require('vue-touch'));
Vue.use(require('vue-resource'));

var app = new Vue(require('./app.vue')).$mount('#app');

var director = require('director');
var router = director.Router();

router.configure({
  notfound: function () {
    router.setRoute('/');
  }
});

router.on(['/', '/:page'], function (page) {
 app.route = page || 'home';
});

router.init('/');
