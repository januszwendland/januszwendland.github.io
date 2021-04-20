import Vue from 'vue';
import guild from './guild';

import '../scss/style.scss';

var app = new Vue({
    el: '#app',

    components: {
        guild
    },

    template:
        `<guild></guild>`
  

});
