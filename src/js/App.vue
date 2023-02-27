<template>
    <div class="wrapper">
        <nav class="top-nav">
            <router-link to="/"><h1>TIBIA TOOLS</h1></router-link>
        </nav>
        <main class="main" v-show="!showContact && !showAbout && !showChangelog && !showPrivacyPolicy">
            <section class="card" v-bind:class="{ 'collapsed' : collapsed }">
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
                            <img v-bind:src="tool.icon" alt="" width="18" height="18">
                            <span>
                                <strong>{{ tool.name }}</strong>: <span v-html="tool.description"></span>
                            </span>
                        </li>
                    </ul>
                </div>
            </section>
            <nav class="tools-nav">
                <template v-for="tool in tools">
                    <router-link v-bind:to="tool.link">
                        <img v-bind:src="tool.icon_white" v-bind:alt="tool.name" width="24" height="24">
                        <span>{{ tool.name }}</span>
                    </router-link>
                </template>
            </nav>
            <router-view></router-view>
        </main>
        <footer class="footer">
            <div class="footer-content">
                <a href="https://www.tibia.com" rel="noopener" target="_blank">
                    <img srcset="img/logo.webp, img/logo@2x.webp 2x" src="img/logo.webp" alt="Tibia logo" width="100" height="70">
                </a>
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
                    Tibia and TibiaME are trademarks of <a href="https://www.cipsoft.com/" rel="noopener" target="_blank">CipSoft GmbH</a>.<br>
                    tibia.tools © All rights reserved.
                </p>
            </div>
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
    import PrivacyPolicy from './components/PrivacyPolicy';

    export default {
        name: 'App',

        components: {
            About,
            Changelog,
            Contact,
            PrivacyPolicy
        },

        data: function () {
            return {
                tools: [
                    { 
                        name: 'Check guild',
                        description: 'Check specific guild, filter members by vocation and find players who can share exp with you.',
                        icon: 'icons/guild.svg',
                        icon_white: 'icons/guild_white.svg',
                        link: '/guild'
                    },
                    {
                        name: 'Healing calculator',
                        description: '<span class="red">(in progress)</span>',
                        icon: 'icons/healing.svg',
                        icon_white: 'icons/healing_white.svg',
                        link: '/healing'
                    },
                    {
                        name: 'Houses',
                        description: 'Find free houses.',
                        icon: 'icons/houses.svg',
                        icon_white: 'icons/houses_white.svg',
                        link: '/houses'
                    },
                    {
                        name: 'Imbuing calculator',
                        description: 'Calculate cost of imbuing.',
                        icon: 'icons/imbuing.svg',
                        icon_white: 'icons/imbuing_white.svg',
                        link: '/imbuing'
                    },
                    {
                        name: 'Loot',
                        description: 'Split loot based on party hunt log.',
                        icon: 'icons/loot.svg',
                        icon_white: 'icons/loot_white.svg',
                        link: '/loot'
                    },
                    {
                        name: 'Spells list',
                        description: 'Filter list by vocation or level, find where you can buy chosen spell. <span class="red">(in progress)</span>',
                        icon: 'icons/spells.svg',
                        icon_white: 'icons/spells_white.svg',
                        link: '/spells'
                    },
                    {
                        name: 'Timers',
                        description: 'Boss cooldown timers. <span class="red">(in progress)</span>',
                        icon: 'icons/timers.svg',
                        icon_white: 'icons/timers_white.svg',
                        link: '/timers'
                    },
                    {
                        name: 'Transfer',
                        description: 'Where can I transfer?',
                        icon: 'icons/transfer.svg',
                        icon_white: 'icons/transfer_white.svg',
                        link: '/transfer'
                    }
                ],
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
        },

        watch: {
            $route: {
                handler(val) {
                    if (val.path !== '/') {
                        this.collapsed = true;
                    } else {
                        this.collapsed = false;
                    }
                },
                deep: true
            }
        }
    }
</script>
