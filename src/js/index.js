import { createApp } from 'vue';
import { createRouter, createWebHashHistory } from 'vue-router';
import Vue3Storage from 'vue3-storage';
import App from './App';

import '../scss/style.scss';

const Home = () => import(/* webpackChunkName: "home" */ './components/Home');
const Guild = () => import(/* webpackChunkName: "guild" */ './components/Guild');
const Healing = () => import(/* webpackChunkName: "healing" */ './components/Healing');
const Houses = () => import(/* webpackChunkName: "houses" */ './components/Houses');
const Imbuing = () => import(/* webpackChunkName: "imbuing" */ './components/Imbuing');
const Loot = () => import(/* webpackChunkName: "loot" */ './components/Loot');
const Spells = () => import(/* webpackChunkName: "spells" */ './components/Spells');
const Timers = () => import(/* webpackChunkName: "transfer" */ './components/Timers');
const Transfer = () => import(/* webpackChunkName: "transfer" */ './components/Transfer');

const routes = [
    { path: '/', component: Home, meta: { title: 'Tibia Tools' } },
    { path: '/guild', component: Guild, meta: { title: 'Guild | Tibia Tools' } },
    { path: '/healing', component: Healing, meta: { title: 'Healing | Tibia Tools' } },
    { path: '/houses', component: Houses, meta: { title: 'Houses | Tibia Tools' } },
    { path: '/imbuing', component: Imbuing, meta: { title: 'Imbuing | Tibia Tools' } },
    { path: '/loot', component: Loot, meta: { title: 'Loot | Tibia Tools' } },
    { path: '/spells', component: Spells, meta: { title: 'Spells | Tibia Tools' } },
    { path: '/timers', component: Timers, meta: { title: 'Timers | Tibia Tools' } },
    { path: '/transfer', component: Transfer, meta: { title: 'Transfer | Tibia Tools' } }
];

const router = createRouter({
    history: createWebHashHistory(),
    routes
});

const DEFAULT_TITLE = 'Tibia Tools';

let options = {
    namespace: 'tibiaTools_'
};

const app = createApp({
    components: { App },
    template: `<App/>`
});

router.afterEach((to) => {
    document.title = to.meta.title || DEFAULT_TITLE;
});

app.use(router);
app.use(Vue3Storage, { namespace: "tibiaTools_" });

app.mount('#app');
