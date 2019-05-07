var Vue = require('vue/dist/vue.js');

Vue.component('cruelWorld', require('./components/cruelWorld.vue'));
Vue.component('videoElement', require('./components/videoElement.vue'));

const app = new Vue({
    el: '#app'
});
