<template>
    <div class="card">
        <div class="card-header">
            <h2 class="card-title">
                <img src="icons/guild.svg" alt="" width="18px" height="18px">
                Check guild
            </h2>
        </div>
        <div class="card-content">
            <form v-on:submit.prevent="check">
                <input placeholder="Guild name" v-model="guildName">
                <button v-on:click="check">Check</button>
            </form>
            <div v-if="guild">
                <div>
                    <div>
                        <span
                            v-bind:class="{ 'selected': ed }"
                            v-on:click="filter('ed')">Druid</span>
                        <span
                            v-bind:class="{ 'selected': ek }"
                            v-on:click="filter('ek')">Knight</span>
                        <span
                            v-bind:class="{ 'selected': rp }"
                            v-on:click="filter('rp')">Paladin</span>
                        <span
                            v-bind:class="{ 'selected': ms }"
                            v-on:click="filter('ms')">Sorcerer</span>
                    </div>
                    <small>Filter by vocation.</small>
                </div>
                <div>
                    <div>
                        <label for="share">Share</label>
                        <input type="number" id="share" v-model="share">
                    </div>
                    <small>Find who can share exp with given lvl.</small>
                </div>
                <table>
                    <thead>
                    <tr>
                        <th>Rank</th>
                        <th>Name</th>
                        <th>Vocation</th>
                        <th>Lvl</th>
                        <th>Last login</th>
                        <th>Days from last login</th>
                    </tr>
                    </thead>
                    <tbody>
                    <template v-for="rank in guild">
                        <template v-for="character in rank.characters">
                            <member
                                v-bind:member="character"
                                v-bind:rank="rank.rank_title"
                                v-show="(all || filterMember(character.vocation)) && shareExp(character.level)"
                                v-on:loader="setLoader" />
                        </template>
                    </template>
                    </tbody>
                </table>
            </div>
            <div class="loader-wrapper" v-if="loader > 0">
                <div class="loader" role="status"></div>
            </div>
        </div>
    </div>
</template>

<script>
    import axios from 'axios';
    import Member from './Member';

    export default {
        name: 'Guild',

        components: {
            Member
        },

        data: function () {
            return {
                guildName: '',
                guild: null,
                ed: false,
                ek: false,
                rp: false,
                ms: false,
                all: true,
                share: 0,
                loader: 0
            }
        },

        methods: {
            setLoader: function(value) {
                if (value) {
                    this.loader++;
                } else {
                    this.loader--;
                }
            },
            check: function () {
                this.guild = null;
                this.loader++;


                if (this.guildName.length > 2) {
                    axios
                        .get('https://api.tibiadata.com/v2/guild/' + this.guildName.replace(' ', '+') + '.json')
                        .then(response => {
                            this.guild = response.data.guild.members;

                            if (response.data.guild.error) {
                                alert(response.data.guild.error);
                            }

                            this.loader--;
                        });
                }
            },
            filter: function (vocation) {
                switch (vocation) {
                    case 'ed':
                        this.ed = !this.ed;
                        this.ek = false;
                        this.rp = false;
                        this.ms = false;
                        this.all = !this.ed;
                        break;
                    case 'ek':
                        this.ed = false;
                        this.ek = !this.ek;
                        this.rp = false;
                        this.ms = false;
                        this.all = !this.ek;
                        break;
                    case 'rp':
                        this.ed = false;
                        this.ek = false;
                        this.rp = !this.rp;
                        this.ms = false;
                        this.all = !this.rp;
                        break;
                    case 'ms':
                        this.ed = false;
                        this.ek = false;
                        this.rp = false;
                        this.ms = !this.ms;
                        this.all = !this.ms;
                        break;
                }
            },
            filterMember: function (vocation) {
                if (this.ed && vocation.indexOf("Druid") != -1) {
                    return true;
                }

                if (this.ek && vocation.indexOf("Knight") != -1) {
                    return true;
                }

                if (this.rp && vocation.indexOf("Paladin") != -1) {
                    return true;
                }

                if (this.ms && vocation.indexOf("Sorcerer") != -1) {
                    return true;
                }

                return false;
            },
            shareExp: function (level) {
                if (this.share > 0) {
                    if (level >= Math.floor(this.share * (2 / 3)) && level <= Math.floor(this.share * (3 / 2)) + 1) {
                        return true;
                    } else {
                        return false;
                    }
                }

                return true;
            }
        }
    }
</script>
