import Vue from 'vue';
import VueRouter from 'vue-router';

import App from './App';
import Guild from './components/Guild';
import Healing from './components/Healing';
import Houses from './components/Houses';
import Imbuing from './components/Imbuing';
import Spells from './components/Spells';
import Transfer from './components/Transfer';

import '../scss/style.scss';

Vue.use(VueRouter);

const routes = [
    { path: '/guild', component: Guild },
    { path: '/healing', component: Healing },
    { path: '/houses', component: Houses },
    { path: '/imbuing', component: Imbuing },
    { path: '/spells', component: Spells },
    { path: '/transfer', component: Transfer }
];

const router = new VueRouter({
    routes
});

new Vue({
    el: '#app',
    router,
    components: { App },
    template: `<App/>`
});
