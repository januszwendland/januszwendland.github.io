import Vue from 'vue';
import guild from '../src/guild.vue';

var app = new Vue({
    el: '#app',

    components: {
        guild
    },

    template:
        `<guild></guild>`
  

});
