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
        `<div class="d-flex flex-column justify-content-between wrapper">
            <div>
                <div class="container pt-3">
                    <div class="card text-white bg-dark">
                        <div class="card-body">
                            <h1 class="card-title">Tibia tools!</h1>
                            <p class="mb-0">My Tibia Tools, doing it when I need it.</p>
                            <div class="d-none d-md-block">
                                <hr class="mt-3 mb-3">
                                <p class="mb-0">For now there are only 2 tools:</p>
                                <ul>
                                    <li><strong>Check guild</strong> - check specific guild, filter members by vocation and find players who can share exp with you.</li>
                                    <li><strong>Imbuing calculator</strong> - calculate cost of imbuing.</li>
                                </ul>
                            </div>
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
            </div>
            <div class="pt-3 pb-3 pl-1 pr-1 d-flex align-items-center justify-content-end">
                <small class="text-muted">
                    Find me on Discord:
                    <span class="text-dark">Czit#6666</span>
                </small>
                <img src="img/skull-small.webp" width="50px" height="50px">
            </div>
        </div>`,
  
    data: {
        tools: [
            { component: 'guild', button: 'Check guild' },
            { component: 'imbuing', button: 'Imbuing calculator' }
        ],
        selected: null
    }
});
