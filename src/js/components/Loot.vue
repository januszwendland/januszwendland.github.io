<template>
    <div class="card">
        <div class="card-header">
            <h2 class="card-title">
                <img src="icons/loot.svg" alt="" width="18px" height="18px">
                In progress...
            </h2>
        </div>
        <div class="card-content">
            <form class="input-group large right"
                v-on:submit.prevent="parseLog">
                <textarea v-model="log"></textarea>
                <button>Split loot</button>
            </form>
            <template v-if="parsed">
                <div class="row row-wrap">
                    <div class="col col-25"
                        v-for="(player, index) in logParsed">
                        <h3 class="mt ellipsis">{{ player.name }}</h3>
                        <div class="input-group left mts">
                            <label v-bind:for="'loot_' + index">Loot</label>
                            <input type="number" v-bind:id="'loot_' + index"
                                v-model.number="player.loot"
                                v-on:change="updateResult">
                        </div>
                        <div class="input-group left mts">
                            <label v-bind:for="'supplies_' + index">Supplies</label>
                            <input type="number" v-bind:id="'supplies_' + index"
                                v-model.number="player.supplies"
                                v-on:change="updateResult">
                        </div>
                    </div>
                </div>
                <div class="row mt">
                    <div class="col">
                        <div class="badge"
                            v-bind:class="{ 'green': teamBalance > 0, 'orange': teamBalance === 0, 'red': teamBalance < 0 }">
                            Team balance
                            <span>{{ teamBalance }}</span>
                        </div>
                    </div>
                    <div class="col">
                        <div class="badge"
                            v-bind:class="{ 'green': playerBalance > 0, 'orange': playerBalance === 0, 'red': playerBalance < 0 }">
                            Each player balance
                            <span>{{ playerBalance }}</span>
                        </div>
                    </div>
                </div>
            </template>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'Loot',

        data: function () {
            return {
                log: '',
                logParsed: [],
                parsed: false,
                teamSize: 0,
                teamBalance: 0,
                playerBalance: 0,
                transfer: {}
            }
        },

        methods: {
            parseLog: function () {
                let temp = this.log.split('\n'),
                    regex = /\d+/g;

                temp.splice(0, 6);

                this.teamSize = temp.length / 6;
                this.teamBalance = 0;
                this.logParsed = [];

                for (let i = 0; i < this.teamSize; i++) {
                    let name = temp[i * 6],
                        loot = parseInt(temp[i * 6 + 1].replace(',', '').match(regex)),
                        supplies = parseInt(temp[i * 6 + 2].replace(',', '').match(regex)),
                        balance = loot - supplies;

                    this.logParsed.push({ name: name, loot: loot, supplies: supplies, balance: balance });
                    this.teamBalance = this.teamBalance + loot - supplies;
                }

                this.playerBalance = this.teamBalance / this.teamSize;
                this.parsed = true;
            },
            updateResult: function () {
                this.teamBalance = 0;

                this.logParsed.forEach(player => {
                    this.teamBalance = this.teamBalance + parseInt(player.loot) - parseInt(player.supplies);
                    player.balance = parseInt(player.loot) - parseInt(player.supplies);
                });

                this.playerBalance = this.teamBalance / this.teamSize;
            }

        }
    }
</script>
