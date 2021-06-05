<template>
    <div class="wrapper">
        <nav class="top-nav">
            <img src="img/logo.webp" alt="" width="32px" height="32px">
            <h1>Tibia Tools</h1>
        </nav>
        <main class="main" v-if="!showContact && !showAbout && !showChangelog && !showPrivacyPolicy">
            <article class="card" v-bind:class="{ 'collapsed' : collapsed }">
                <div class="card-header">
                    <h2 class="card-title">Tools Description</h2>
                    <button class="card-collapse-btn" title="Collapse card"
                        v-on:click="collapsed = !collapsed"
                        v-bind:class="{ 'collapsed' : collapsed }">
                        <span></span>
                        <span></span>
                        <span></span>
                    </button>
                </div>
                <div class="card-content" v-if="!collapsed">
                    <ul class="tools">
                        <li v-for="tool in tools">
                            <img v-bind:src="tool.icon" alt="" width="18px" height="18px">
                            <span>
                                <strong>{{ tool.name }}</strong>: {{ tool.description }}
                            </span>
                        </li>
                    </ul>
                </div>
            </article>
            <nav class="tools-nav">
                <button type="button"
                    v-for="tool in tools"
                    v-on:click="selectedTool = tool.component; collapsed = true"
                    v-bind:class="{ 'selected' : selectedTool === tool.component, 'not-selected' : selectedTool !== tool.component }">
                    <img v-bind:src="tool.icon_white" v-bind:alt="tool.name" width="24px" height="24px">
                    <span>{{ tool.name }}</span>
                </button>
            </nav>
            <component v-bind:is="selectedTool" />
        </main>
        <footer class="footer">
            <ul class="footer-btns">
                <li>
                    <button v-on:click="showContact = true">Contact</button>
                </li>
                <li>
                    <button v-on:click="showAbout = true">About</button>
                </li>
                <li>
                    <button v-on:click="showChangelog = true">Changelog</button>
                </li>
                <li>
                    <button v-on:click="showPrivacyPolicy = true">Privacy Policy</button>
                </li>
            </ul>
            <p>
                Tibia and TibiaME are trademarks of <a href="https://www.cipsoft.com/">CipSoft GmbH</a>.<br>
                tibia.tools © All rights reserved.
            </p>
        </footer>
        <contact v-if="showContact" v-on:close="closePopup" />
        <about v-if="showAbout" v-on:close="closePopup" />
        <changelog v-if="showChangelog" v-on:close="closePopup" />
        <privacy-policy v-if="showPrivacyPolicy" v-on:close="closePopup" />
    </div>
</template>

<script>
    import About from './components/About';
    import Changelog from './components/Changelog';
    import Contact from './components/Contact';
    import Guild from './components/Guild';
    import Healing from './components/Healing';
    import Houses from './components/Houses';
    import Imbuing from './components/Imbuing';
    import PrivacyPolicy from './components/PrivacyPolicy';
    import Spells from './components/Spells';
    import Transfer from './components/Transfer';

    export default {
        name: 'App',

        components: {
            About,
            Changelog,
            Contact,
            Guild,
            Healing,
            Houses,
            Imbuing,
            PrivacyPolicy,
            Spells,
            Transfer
        },

        data: function () {
            return {
                tools: [
                    { 
                        component: 'Guild',
                        name: 'Check guild',
                        description: 'Check specific guild, filter members by vocation and find players who can share exp with you.',
                        icon: 'icons/guild.svg',
                        icon_white: 'icons/guild_white.svg'
                    },
                    {
                        component: 'Healing',
                        name: 'Healing calculator',
                        description: 'In progress...',
                        icon: 'icons/healing.svg',
                        icon_white: 'icons/healing_white.svg'
                    },
                    {
                        component: 'Houses',
                        name: 'Houses',
                        description: 'Find free houses.',
                        icon: 'icons/houses.svg',
                        icon_white: 'icons/houses_white.svg'
                    },
                    {
                        component: 'Imbuing',
                        name: 'Imbuing calculator',
                        description: 'Calculate cost of imbuing.',
                        icon: 'icons/imbuing.svg',
                        icon_white: 'icons/imbuing_white.svg'
                    },
                    {
                        component: 'Spells',
                        name: 'Spells list',
                        description: 'Filter list by vocation or level, find where you can buy chosen spell.',
                        icon: 'icons/spells.svg',
                        icon_white: 'icons/spells_white.svg'
                    },
                    {
                        component: 'Transfer',
                        name: 'Transfer',
                        description: 'Where can I transfer?',
                        icon: 'icons/transfer.svg',
                        icon_white: 'icons/transfer_white.svg'
                    }
                ],
                selectedTool: null,
                collapsed: false,
                showAbout: false,
                showChangelog: false,
                showContact: false,
                showPrivacyPolicy: false
            }
        },

        methods: {
            closePopup: function() {
                this.showAbout = false;
                this.showChangelog = false;
                this.showContact = false;
                this.showPrivacyPolicy = false;
            }
        }
    }
</script>
