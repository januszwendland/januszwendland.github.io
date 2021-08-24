<template>
    <article class="card">
        <div class="card-header">
            <h2 class="card-title">
                <img src="icons/houses.svg" alt="" width="18px" height="18px">
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
                        v-for="server in servers"
                        v-bind:value="server">{{ server }}</option>
                </select>
            </div>
            <div class="mt"
                v-if="selectedServer">
                <div class="filters-pills">
                    <span class="filters-pill"
                        v-for="town in towns"
                        v-on:click="filter(town)"
                        v-bind:class="{ 'selected': filterByTown === town }">{{ town }}</span>
                </div>
                <small class="filters-info">Filter by town.</small>
            </div>
            <div
                v-for="(town, name) in server"
                v-if="selectedServer && (town != null && town.length)"
                v-show="!filterByTown || filterByTown === name">
                <h3 class="mt">{{ name }}:</h3>
                <table class="mt table-fixed">
                    <thead>
                    <tr>
                        <th>Name</th>
                        <th class="hide-on-mobile">Rent</th>
                        <th class="hide-on-mobile">Size</th>
                        <th>Status</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr
                        v-for="house in town"
                        v-if="house.status !== 'rented'">
                        <td>
                            <a v-bind:href="'https://www.tibia.com/community/?subtopic=houses&page=view&world=' + selectedServer + '&houseid=' + house.houseid" target="_blank">{{ house.name }}</a>
                        </td>
                        <td class="hide-on-mobile">{{ house.rent }}</td>
                        <td class="hide-on-mobile">{{ house.size }}</td>
                        <td>{{ house.status }}</td>
                    </tr>
                    </tbody>
                </table>
            </div>
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
                servers: [ 'Adra', 'Alumbra', 'Antica', 'Astera', 'Belobra', 'Bona', 'Calmera', 'Carnera', 'Celebra', 'Celesta', 'Concorda', 'Damora', 'Descubra', 'Dibra', 'Emera', 'Epoca', 'Estela', 'Famosa', 'Fera', 'Ferobra', 'Fervora', 'Firmera', 'Garnera', 'Gentebra', 'Gladera', 'Harmonia', 'Honbra', 'Impera', 'Inabra', 'Javibra', 'Juva', 'Kalibra', 'Karna', 'Kenora', 'Libertabra', 'Lobera', 'Luminera', 'Lutabra', 'Marcia', 'Menera', 'Mercera', 'Mitigera', 'Monza', 'Mudabra', 'Nefera', 'Nexa', 'Nossobra', 'Ombra', 'Optera', 'Pacembra', 'Pacera', 'Peloria', 'Premia', 'Quelibra', 'Quintera', 'Ragna', 'Refugia', 'Reinobra', 'Relania', 'Relembra', 'Secura', 'Serdebra', 'Serenebra', 'Solidera', 'Talera', 'Tembra', 'Unica', 'Unisera', 'Utobra', 'Venebra', 'Visabra', 'Vunira', 'Wintera', 'Wizera', 'Xandebra', 'Xylona', 'Yonabra', 'Ysolera', 'Zenobra', 'Zuna', 'Zunera' ],
                selectedServer: '',
                towns: [ 'Ab\'Dendriel', 'Ankrahmun', 'Carlin', 'Darashia', 'Edron', 'Farmine', 'Gray Beach', 'Issavi', 'Kazordoon', 'Liberty Bay', 'Port Hope', 'Rathleton', 'Svargrond', 'Thais', 'Venore', 'Yalahar' ],
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
                filterByTown: null,
                loader: 0
            }
        },

        methods: {
            checkServer: function() {
                let server = this.server;
                this.filterByTown = null;

                if (this.selectedServer) {
                    this.towns.forEach(town => { 
                        this.loader++;
                        axios
                            .get('https://api.tibiadata.com/v2/houses/' + this.selectedServer + '/' + town + '.json')
                            .then(response => {
                                server[town] = response.data.houses.houses.filter(a => a.status !== 'rented');

                                if (response.data.houses.error) {
                                    alert(response.data.houses.error);
                                }

                                this.loader--;
                            })
                    });
                }
            },
            filter: function(town) {
                if (town === this.filterByTown) {
                    this.filterByTown = null;
                } else {
                    this.filterByTown = town;
                }
            }
        }
    }
</script>
