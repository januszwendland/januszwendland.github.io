<template>
    <article class="card">
        <div class="card-header">
            <h2 class="card-title">
                <img src="icons/houses.svg" alt="" width="18" height="18">
                Find free houses
            </h2>
        </div>
        <div class="card-content">
            <div class="input-group large left">
                <label for="server">Select server</label>
                <select id="server"
                    v-model="selectedServer"
                    v-on:change="checkServer">
                    <option value="" disabled selected>Select...</option>
                    <option
                        v-for="(server, index) in servers"
                        v-bind:value="server"
                        v-bind:key="index">{{ server }}</option>
                </select>
            </div>
            <small>This tool depends on <a href="https://tibiadata.com/" rel="noopener" target="_blank">TibiaData API</a></small>
            <div class="mt"
                v-if="selectedServer">
                <div class="filters-pills">
                    <span class="filters-pill"
                        v-for="(town, index) in towns"
                        v-on:click="filter(town)"
                        v-bind:class="{ 'selected': filterByTown === town }"
                        v-bind:key="index">{{ town }}</span>
                </div>
                <small class="filters-info">Filter by town.</small>
            </div>
            <div class="mt"
                v-if="selectedServer">
                <div class="filters-pills">
                    <span class="filters-pill"
                        v-bind:class="{ 'selected': isBidded }"
                        v-on:click="showBidded()">Is bidded</span>
                </div>
                <small class="filters-info">Show only houses with bid</small>
            </div>
            <template
                v-for="(town, name) in server"
                v-bind:key="name">
                <template v-if="selectedServer && (town != null && town.length) && (!filterByTown || filterByTown === name)">
                    <h3 class="mt">{{ name }}</h3>
                    <table class="mt table-fixed">
                        <thead>
                        <tr>
                            <th>Name</th>
                            <th class="hide-on-mobile">Rent</th>
                            <th class="hide-on-mobile">Size</th>
                            <th>Current bid</th>
                            <th>Time left</th>
                        </tr>
                        </thead>
                        <tbody>
                        <template
                            v-for="(house, index) in town"
                            v-bind:key="index">
                            <tr v-if="house.status !== 'rented'">
                                <td>
                                    <a v-bind:href="'https://www.tibia.com/community/?subtopic=houses&page=view&world=' + selectedServer + '&houseid=' + house.house_id" target="_blank">{{ house.name }}</a>
                                </td>
                                <td class="hide-on-mobile">{{ formatNumber(house.rent) }}</td>
                                <td class="hide-on-mobile">{{ house.size }}</td>
                                <td>{{ formatNumber(house.auction.current_bid) }}</td>
                                <td>{{ house.auction.time_left || "-" }}</td>
                            </tr>
                        </template>
                        </tbody>
                    </table>
                </template>
            </template>
            <div class="loader-wrapper" v-if="loader > 0">
                <div class="loader" role="status"></div>
            </div>
        </div>
    </article>
</template>

<script>
    import axios from 'axios';

    export default {
        name: 'Houses',

        data: function () {
            return {
                servers: [
                    'Adra',
                    'Alumbra',
                    'Antica',
                    'Ardera',
                    'Astera',
                    'Bastia',
                    'Batabra',
                    'Belobra',
                    'Bona',
                    'Cadebra',
                    'Calmera',
                    'Celebra',
                    'Celesta',
                    'Collabra',
                    'Damora',
                    'Descubra',
                    'Dibra',
                    'Epoca',
                    'Esmera',
                    'Famosa',
                    'Fera',
                    'Ferobra',
                    'Firmera',
                    'Gentebra',
                    'Gladera',
                    'Harmonia',
                    'Havera',
                    'Honbra',
                    'Illusera',
                    'Impulsa',
                    'Inabra',
                    'Issobra',
                    'Kalibra',
                    'Karna',
                    'Libertabra',
                    'Lobera',
                    'Luminera',
                    'Lutabra',
                    'Marbera',
                    'Marcia',
                    'Menera',
                    'Monza',
                    'Mudabra',
                    'Mykera',
                    'Nadora',
                    'Nefera',
                    'Nossobra',
                    'Ocebra',
                    'Olima',
                    'Ombra',
                    'Optera',
                    'Pacera',
                    'Peloria',
                    'Premia',
                    'Quelibra',
                    'Quintera',
                    'Refugia',
                    'Reinobra',
                    'Seanera',
                    'Secura',
                    'Serdebra',
                    'Solidera',
                    'Suna',
                    'Talera',
                    'Tembra',
                    'Thyria',
                    'Trona',
                    'Utobra',
                    'Venebra',
                    'Versa',
                    'Visabra',
                    'Vunira',
                    'Wintera',
                    'Wizera',
                    'Xandebra',
                    'Yonabra',
                    'Zenobra',
                    'Zuna',
                    'Zunera'
                ],
                selectedServer: '',
                towns: [
                    'Ab\'Dendriel',
                    'Ankrahmun',
                    'Carlin',
                    'Darashia',
                    'Edron',
                    'Farmine',
                    'Gray Beach',
                    'Issavi',
                    'Kazordoon',
                    'Liberty Bay',
                    'Port Hope',
                    'Rathleton',
                    'Svargrond',
                    'Thais',
                    'Venore',
                    'Yalahar'
                ],
                server: {
                    'Ab\'Dendriel': null,
                    'Ankrahmun': null,
                    'Carlin': null,
                    'Darashia': null,
                    'Edron': null,
                    'Farmine': null,
                    'Gray Beach': null,
                    'Issavi': null,
                    'Kazordoon': null,
                    'Liberty Bay': null,
                    'Port Hope': null,
                    'Rathleton': null,
                    'Svargrond': null,
                    'Thais': null,
                    'Venore': null,
                    'Yalahar' : null
                },
                serverFree: {
                    'Ab\'Dendriel': null,
                    'Ankrahmun': null,
                    'Carlin': null,
                    'Darashia': null,
                    'Edron': null,
                    'Farmine': null,
                    'Gray Beach': null,
                    'Issavi': null,
                    'Kazordoon': null,
                    'Liberty Bay': null,
                    'Port Hope': null,
                    'Rathleton': null,
                    'Svargrond': null,
                    'Thais': null,
                    'Venore': null,
                    'Yalahar' : null
                },
                serverBidded: {
                    'Ab\'Dendriel': null,
                    'Ankrahmun': null,
                    'Carlin': null,
                    'Darashia': null,
                    'Edron': null,
                    'Farmine': null,
                    'Gray Beach': null,
                    'Issavi': null,
                    'Kazordoon': null,
                    'Liberty Bay': null,
                    'Port Hope': null,
                    'Rathleton': null,
                    'Svargrond': null,
                    'Thais': null,
                    'Venore': null,
                    'Yalahar' : null
                },
                filterByTown: null,
                isBidded: false,
                loader: 0
            }
        },

        methods: {
            checkServer: function() {
                let serverFree = this.serverFree,
                    serverBidded = this.serverBidded;

                this.filterByTown = null;

                if (this.selectedServer) {
                    this.towns.forEach(town => { 
                        this.loader++;
                        axios
                            .get('https://api.tibiadata.com/v3/houses/' + this.selectedServer + '/' + town)
                            .then(response => {
                                serverFree[town] = response.data.houses.house_list.filter(a => a.rented !== true);
                                serverBidded[town] = response.data.houses.house_list.filter(a => a.rented !== true).filter(a => a.auction.time_left !== '');

                                this.loader--;
                            })
                    });
                }

                this.server = serverFree;
            },
            filter: function(town) {
                if (town === this.filterByTown) {
                    this.filterByTown = null;
                } else {
                    this.filterByTown = town;
                }
            },
            showBidded: function() {
                this.isBidded = !this.isBidded;

                if (this.isBidded) {
                    this.server = this.serverBidded;
                } else {
                    this.server = this.serverFree;
                }
            },
            formatNumber: function (number) {
                return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
            }
        }
    }
</script>

