<template>
    <div class="card">
        <div class="card-header">
            <h2 class="card-title">
                <img src="icons/loot.svg" alt="" width="18px" height="18px">
                In progress...
            </h2>
        </div>
        <div class="card-content">
            <textarea v-model="log"></textarea>
            <button v-on:click="parseLog">Split loot</button>
            <template v-if="parsed">
                <div v-for="player in logParsed">
                    {{ player.name }}<br>
                    Loot:
                    <input type="number"
                        v-model.number="player.loot"
                        v-on:change="updateResult"><br>
                    Supplies:
                    <input type="number"
                        v-model.number="player.supplies"
                        v-on:change="updateResult">
                </div>
                Team balance: {{ teamBalance }}<br>
                Each player balance: {{ playerBalance }}
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
