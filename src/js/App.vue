<template>
    <div class="d-flex flex-column justify-content-between wrapper">
        <div>
            <div class="container pt-3">
                <div class="card text-white bg-dark">
                    <div class="card-body">
                        <h1 class="card-title">Tibia tools!</h1>
                        <div class="d-flex justify-content-between align-items-center">
                            <p class="mb-0">My Tibia Tools, doing it when I need it.</p>
                            <button class="d-none d-md-block collapse-list" title="Collapse list"
                                v-on:click="collapsed = !collapsed"
                                v-bind:class="{ 'collapsed' : collapsed }"></button>
                        </div>
                        <div class="d-none d-md-block" v-if="!collapsed">
                            <hr class="mt-3 mb-3">
                            <ul class="m-0 pl-4">
                                <li>
                                    <strong>Check guild</strong> - check specific guild, filter members by vocation and find players who can share exp with you.
                                </li>
                                <li>
                                    <strong>Imbuing calculator</strong> - calculate cost of imbuing.
                                </li>
                                <li>
                                    <strong>Houses</strong> - find free houses.
                                </li>
                                <li>
                                    <strong>Healing calculator</strong> - soon!
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <nav class="navbar">
                    <button type="button" class="btn btn-lg mt-3 mr-md-3"
                        v-for="tool in tools"
                        v-on:click="selected = tool.component; collapsed = true"
                        v-bind:class="{ 'btn-success' : selected === tool.component, 'btn-outline-success' : selected !== tool.component }">
                        <strong>{{ tool.button }}</strong>
                    </button>
                </nav>
            </div>
            <component v-bind:is="selected" />
        </div>
        <div class="pt-3 pb-3 pl-1 pr-1 d-flex align-items-center justify-content-end">
            <small class="text-muted">
                Find me on Discord:
                <span class="text-dark">Czit#6666</span>
            </small>
            <img srcset="img/skull.webp, img/skull@2x.webp 2x" src="img/skull.webp" width="50px" height="50px" alt="">
        </div>
    </div>
</template>

<script>
    import Guild from './components/Guild';
    import Imbuing from './components/Imbuing';
    import Houses from './components/Houses';
    import Healing from './components/Healing';

    export default {
        name: 'App',

        components: {
            Guild,
            Imbuing,
            Houses,
            Healing
        },

        data: function () {
            return {
                tools: [
                    { component: 'Guild', button: 'Check guild' },
                    { component: 'Imbuing', button: 'Imbuing calculator' },
                    { component: 'Houses', button: 'Houses' },
                    { component: 'Healing', button: 'Healing calculator' }
                ],
                selected: null,
                collapsed: false
            }
        }
    }
</script>
