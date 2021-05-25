<template>
    <div class="d-flex flex-column justify-content-between wrapper">
        <div v-if="!showContact && !showAbout && !showChangelog && !showPrivacyPolicy">
            <div class="container pt-3">
                <div class="card text-dark bg-light">
                    <div class="card-header">
                        <h1 class="card-title display-4">Tibia tools!</h1>
                        <div class="d-flex justify-content-between align-items-center">
                            <p class="mb-0 lead">Few useful tools.</p>
                            <button class="collapse-list" title="Collapse list"
                                v-on:click="collapsed = !collapsed"
                                v-bind:class="{ 'collapsed' : collapsed }"></button>
                        </div>
                    </div>
                    <div class="card-body" v-if="!collapsed">
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
                                <strong>Transfer</strong> - where can I transfer?
                            </li>
                            <li>
                                <strong>Healing calculator</strong> - soon!
                            </li>
                        </ul>
                    </div>
                </div>
                <nav class="navbar">
                    <button type="button" class="btn btn-lg mt-3 mr-md-3"
                        v-for="tool in tools"
                        v-on:click="selected = tool.component; collapsed = true"
                        v-bind:class="{ 'btn-primary' : selected === tool.component, 'btn-outline-primary' : selected !== tool.component }">{{ tool.button }}</button>
                </nav>
            </div>
            <component v-bind:is="selected" />
        </div>
        <footer class="container text-center pt-3 pb-3 text-muted footer">
            <button class="btn btn-link" v-on:click="showContact = true">Contact</button> |
            <button class="btn btn-link" v-on:click="showAbout = true">About</button> |
            <button class="btn btn-link" v-on:click="showChangelog = true">Changelog</button> |
            <button class="btn btn-link" v-on:click="showPrivacyPolicy = true">Privacy Policy</button>
            <div class="pt-2">
                Tibia and TibiaME are trademarks of <a href="https://www.cipsoft.com/">CipSoft GmbH</a>.<br>
                tibia.tools © All rights reserved.
            </div>
        </footer>
        <contact v-if="showContact" v-on:close="closePopup" />
        <about v-if="showAbout" v-on:close="closePopup" />
        <changelog v-if="showChangelog" v-on:close="closePopup" />
        <privacy-policy v-if="showPrivacyPolicy" v-on:close="closePopup" />
    </div>
</template>

<script>
    import Guild from './components/Guild';
    import Imbuing from './components/Imbuing';
    import Houses from './components/Houses';
    import Transfer from './components/Transfer';
    import Healing from './components/Healing';
    import Contact from './components/Contact';
    import About from './components/About';
    import Changelog from './components/Changelog';
    import PrivacyPolicy from './components/PrivacyPolicy';

    export default {
        name: 'App',

        components: {
            Guild,
            Imbuing,
            Houses,
            Transfer,
            Healing,
            Contact,
            About,
            Changelog,
            PrivacyPolicy
        },

        data: function () {
            return {
                tools: [
                    { component: 'Guild', button: 'Check guild' },
                    { component: 'Imbuing', button: 'Imbuing calculator' },
                    { component: 'Houses', button: 'Houses' },
                    { component: 'Transfer', button: 'Transfer' },
                    { component: 'Healing', button: 'Healing calculator' }
                ],
                selected: null,
                collapsed: false,
                showContact: false,
                showAbout: false,
                showChangelog: false,
                showPrivacyPolicy: false
            }
        },

        methods: {
            closePopup: function() {
                this.showContact = false;
                this.showAbout = false;
                this.showChangelog = false;
                this.showPrivacyPolicy = false;
            }
        }
    }
</script>
