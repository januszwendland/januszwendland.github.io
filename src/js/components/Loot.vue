<template>
    <div class="card">
        <div class="card-header">
            <h2 class="card-title">
                <img src="icons/loot.svg" alt="" width="18px" height="18px">
                In progress...
            </h2>
        </div>
        <div class="card-content">
            <form v-on:submit.prevent="parseLog">
                <div class="input-group large right">
                    <textarea v-model="log"></textarea>
                    <button>Split loot</button>
                </div>
                <small>Copy <strong>entire</strong> log from Party Hunt Analyser. Application <strong>do not</strong> store or validate pasted log.</small>
            </form>
            <small></small>
            <template v-if="parsed">
                <div class="mt">
                    <small>
                        You can edit values in text fields.<br>
                        You can remove player by clicking '<strong>x</strong>' icon.
                    </small>
                </div>
                <div class="row row-wrap">
                    <div class="col col-25"
                        v-for="(player, index) in logParsed">
                        <h3 class="mt ellipsis">
                            {{ player.name }}
                            <img src="icons/remove.svg" alt="" width="24px" height="24px"
                                v-on:click="removePlayer(index)">
                        </h3>
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
                transfer: []
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
                this.transfer = [];

                for (let i = 0; i < this.teamSize; i++) {
                    let name = temp[i * 6].replace(" (Leader)", ""),
                        loot = parseInt(temp[i * 6 + 1].replace(',', '').match(regex)),
                        supplies = parseInt(temp[i * 6 + 2].replace(',', '').match(regex)),
                        balance = loot - supplies;

                    this.logParsed.push({ name: name, loot: loot, supplies: supplies, balance: balance });
                    this.teamBalance = this.teamBalance + loot - supplies;
                }

                this.playerBalance = Math.floor(this.teamBalance / this.teamSize);

                if (isNaN(this.playerBalance)) this.playerBalance = 0;

                this.transferFromTo();

                this.parsed = true;
            },
            updateResult: function () {
                this.teamBalance = 0;

                this.logParsed.forEach(player => {
                    this.teamBalance = this.teamBalance + parseInt(player.loot) - parseInt(player.supplies);
                    player.balance = parseInt(player.loot) - parseInt(player.supplies);
                });

                this.playerBalance = Math.floor(this.teamBalance / this.teamSize);

                if (isNaN(this.playerBalance)) this.playerBalance = 0;

                this.transferFromTo();
            },
            removePlayer: function (index) {
                this.logParsed.splice(index, 1);
                this.teamSize--;
                this.updateResult();
            },
            transferFromTo: function () {
                let vm = this;

                vm.transfer = [];

                vm.logParsed.forEach((player, index) => {
                    if (player.balance > vm.playerBalance) {
                        let availableFunds = Math.abs(player.balance - vm.playerBalance),
                            playerIndex = index;
                
                        vm.logParsed.forEach((player, index) => {
                            if (availableFunds > 0 && player.balance < vm.playerBalance) {
                                let playerNeed = Math.abs(player.balance - vm.playerBalance),
                                    transferAmount = 0;

                                if (playerNeed < availableFunds) {
                                    transferAmount = playerNeed;
                                    availableFunds -= playerNeed;
                                } else {
                                    transferAmount = availableFunds;
                                    availableFunds = 0;
                                }

                                player.balance += transferAmount;
                                vm.logParsed[playerIndex].balance -= transferAmount;

                                vm.transfer.push({ from: vm.logParsed[playerIndex].name, to: player.name, gold: transferAmount });
                            }
                        });
                    }
                });
            }
        }
    }
</script>
