<template>
    <div class="container guild">
        <h2 class="mt-3 mt-md-5 mb-3">Check guild</h2>
        <form v-on:submit.prevent="check" class="d-block">
            <div class="input-group">
                <input v-model="guildName" placeholder="Guild name" class="form-control form-control-lg">
                <div class="input-group-append">
                    <button v-on:click="check" type="button" class="btn btn-lg btn-primary">Check</button>
                </div>
            </div>
        </form>
        <div v-if="guild">
            <div class="mt-2 mt-md-3">
                <div class="d-md-inline-block">
                    <div class="d-flex d-md-block flex-wrap">
                        <span class="badge bg-secondary mt-2 mr-2 m-md-0" v-bind:class="{ 'bg-success': ed }" v-on:click="filter('ed')">Druid</span>
                        <span class="badge bg-secondary mt-2 mr-2 m-md-0" v-bind:class="{ 'bg-info': ek }" v-on:click="filter('ek')">Knight</span>
                        <span class="badge bg-secondary mt-2 mr-2 m-md-0" v-bind:class="{ 'bg-warning': rp }" v-on:click="filter('rp')">Paladin</span>
                        <span class="badge bg-secondary mt-2 mr-2 m-md-0" v-bind:class="{ 'bg-danger': ms }" v-on:click="filter('ms')">Sorcerer</span>
                    </div>
                    <small>Filter by vocation.</small>
                </div>
                <div class="d-md-inline-block mt-3 mt-md-0 ml-md-3">
                    <div class="input-group">
                        <div class="input-group-prepend w-50">
                            <label for="share" class="input-group-text w-100">Share</label>
                        </div>
                        <input type="number" v-model="share" class="form-control" id="share">
                    </div>
                    <small>Find who can share exp with given lvl.</small>
                </div>
            </div>
            <div class="mt-3 mb-3">
                <div class="row">
                    <div class="col-2 d-none d-md-block">
                        <strong>Rank</strong>
                    </div>
                    <div class="col-4 col-md-3">
                        <strong>Name</strong>
                    </div>
                    <div class="col-2">
                        <strong class="d-none d-md-inline">Vocation</strong>
                        <strong class="d-md-none">Voc</strong>
                    </div>
                    <div class="col-2 col-md-1">
                        <strong>Lvl</strong>
                    </div>
                    <div class="col-4 col-md-2">
                        <strong>Last login</strong>
                    </div>
                    <div class="col-2 d-none d-md-block">
                        <strong>Days from last login</strong>
                    </div>
                </div>
                <template v-for="rank in guild">
                    <template v-for="character in rank.characters">
                        <member :member="character" :rank="rank.rank_title" v-show="(all || filterMember(character.vocation)) && shareExp(character.level)"></member>
                    </template>
                </template>
            </div>
        </div>
    </div>
</template>

<script>
    import axios from 'axios';
    import member from './member';

    export default {
        name: 'guild',

        components: {
            member
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
                share: 0
            }
        },

        methods: {
            check: function () {
                this.guild = null;
                
                if (this.guildName.length > 2) {
                    axios
                        .get('https://api.tibiadata.com/v2/guild/' + this.guildName.replace(' ', '+') + '.json')
                        .then(response => {
                            this.guild = response.data.guild.members;

                            if (response.data.guild.error) {
                                alert(response.data.guild.error);
                            }
                        })
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
