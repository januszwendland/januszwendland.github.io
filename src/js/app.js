import Vue from 'vue';
import guild from './guild';
import imbuing from './imbuing';

import '../scss/style.scss';

var app = new Vue({
    el: '#app',

    components: {
        guild,
        imbuing
    },

    template:
        `<div>
            <div class="container pt-3">
                <div class="card text-white bg-dark">
                    <div class="card-body">
                        <h1 class="card-title">Tibia tools!</h1>
                        <p>This are my Tibia tools, doing it when I need it.</p>
                        <hr>
                        <p class="mb-0">For now there are only 2 tools:</p>
                        <ul>
                            <li><strong>Check guild</strong> - check specific guild, filter members by vocation and find players who can share exp with you.</li>
                            <li><strong>Imbuing calculator</strong> - calculate cost of imbuing.</li>
                        </ul>
                    </div>
                </div>
                <nav class="navbar mt-md-3">
                    <button type="button" class="btn btn-lg mt-3 mt-md-0 mr-md-3"
                        v-for="tool in tools"
                        v-on:click="selected = tool.component;"
                        v-bind:class="{ 'btn-success' : selected === tool.component, 'btn-outline-success' : selected !== tool.component }">
                        {{ tool.button }}
                    </button>
                </nav>
            </div>
            <component v-bind:is="selected"></component>
        </div>`,
  
    data: {
        tools: [
            { component: 'guild', button: 'Check guild' },
            { component: 'imbuing', button: 'Imbuing calculator' }
        ],
        selected: null
    }
});
