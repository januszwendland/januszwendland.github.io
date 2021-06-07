import Vue from 'vue';
import VueRouter from 'vue-router';

import App from './App';

import '../scss/style.scss';

const Guild = () => import(/* webpackChunkName: "guild" */ './components/Guild');
const Healing = () => import(/* webpackChunkName: "healing" */ './components/Healing');
const Houses = () => import(/* webpackChunkName: "houses" */ './components/Houses');
const Imbuing = () => import(/* webpackChunkName: "imbuing" */ './components/Imbuing');
const Spells = () => import(/* webpackChunkName: "spells" */ './components/Spells');
const Transfer = () => import(/* webpackChunkName: "transfer" */ './components/Transfer');

Vue.use(VueRouter);

const routes = [
    { path: '/guild', component: Guild, meta: { title: 'Guild | Tibia Tools' } },
    { path: '/healing', component: Healing, meta: { title: 'Healing | Tibia Tools' } },
    { path: '/houses', component: Houses, meta: { title: 'Houses | Tibia Tools' } },
    { path: '/imbuing', component: Imbuing, meta: { title: 'Imbuing | Tibia Tools' } },
    { path: '/spells', component: Spells, meta: { title: 'Spells | Tibia Tools' } },
    { path: '/transfer', component: Transfer, meta: { title: 'Transfer | Tibia Tools' } }
];

const router = new VueRouter({
    routes
});

const DEFAULT_TITLE = 'Some Default Title';

router.afterEach((to, from) => {
    Vue.nextTick(() => {
        document.title = to.meta.title || DEFAULT_TITLE;
    });
});

new Vue({
    el: '#app',
    router,
    components: { App },
    template: `<App/>`
});
