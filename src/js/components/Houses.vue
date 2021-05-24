<template>
    <div class="container houses">
        <h2 class="mt-3 mt-md-5 mb-3">Find free houses</h2>
        <div class="input-group">
            <div class="input-group-prepend">
                <label for="server" class="input-group-text w-100">Select server</label>
            </div>
            <select class="form-control form-control-lg" id="server"
                v-model="selectedServer"
                v-on:change="checkServer()">
                <option value="" disabled selected>Select...</option>
                <option
                    v-for="server in servers"
                    v-bind:value="server">{{ server }}</option>
            </select>
        </div>
        <div class="d-md-inline-block"
            v-if="selectedServer">
            <div class="houses-filter-by-town">
                <span class="badge bg-secondary mt-2 mr-2"
                    v-for="town in towns"
                    v-on:click="filterByTown = town"
                    v-bind:class="{ 'bg-success': filterByTown === town }">{{ town }}</span>
            </div>
            <small>Filter by town.</small>
        </div>
        <div class="mt-3"
            v-for="town, name in server"
            v-if="selectedServer && (town != null && town.length)"
            v-show="!filterByTown || filterByTown === name">
            <h3>
                <span class="badge bg-info">{{ name }}</span>
            </h3>
            <div class="row mt-3 mb-3">
                <div class="col-3">
                    <strong>Name</strong>
                </div>
                <div class="col-2">
                    <strong>Rent</strong>
                </div>
                <div class="col-2">
                    <strong>Size</strong>
                </div>
                <div class="col-5">
                    <strong>Status</strong>
                </div>
            </div>
            <div class="row border-bottom pb-1 mb-1"
                v-for="house in town"
                v-if="house.status !== 'rented'">
                <div class="col-3">
                    <a class="text-success"
                        v-bind:href="'https://www.tibia.com/community/?subtopic=houses&page=view&world=' + selectedServer + '&houseid=' + house.houseid" target="_blank">{{ house.name }}</a>
                </div>
                <div class="col-2">{{ house.rent }}</div>
                <div class="col-2">{{ house.size }}</div>
                <div class="col-5">{{ house.status }}</div>
            </div>
        </div>
        <div class="d-flex align-items-center justify-content-center spinner" v-if="spinner > 0">
            <div class="spinner-border text-primary" style="width: 3rem; height: 3rem;" role="status">
                <span class="sr-only">Loading...</span>
            </div>
        </div>
    </div>
</template>

<script>
    import axios from 'axios';

    export default {
        name: 'Houses',

        data: function () {
            return {
                servers: [ 'Adra', 'Antica', 'Astera', 'Belobra', 'Bona', 'Calmera', 'Carnera', 'Celebra', 'Celesta', 'Concorda', 'Damora', 'Descubra', 'Dibra', 'Emera', 'Epoca', 'Estela', 'Fera', 'Ferobra', 'Fervora', 'Firmera', 'Garnera', 'Gentebra', 'Gladera', 'Harmonia', 'Honbra', 'Impera', 'Inabra', 'Javibra', 'Juva', 'Kalibra', 'Karna', 'Kenora', 'Libertabra', 'Lobera', 'Luminera', 'Lutabra', 'Menera', 'Mercera', 'Mitigera', 'Monza', 'Mudabra', 'Nefera', 'Nexa', 'Nossobra', 'Ombra', 'Optera', 'Pacembra', 'Pacera', 'Peloria', 'Premia', 'Quelibra', 'Quintera', 'Ragna', 'Refugia', 'Reinobra', 'Relania', 'Relembra', 'Secura', 'Serdebra', 'Serenebra', 'Solidera', 'Talera', 'Unica', 'Unisera', 'Utobra', 'Venebra', 'Visabra', 'Vunira', 'Wintera', 'Wizera', 'Xandebra', 'Xylona', 'Yonabra', 'Ysolera', 'Zenobra', 'Zuna', 'Zunera' ],
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
                spinner: 0
            }
        },

        methods: {
            checkServer: function() {
                let server = this.server;
                this.filterByTown = null;

                if (this.selectedServer) {
                    this.towns.forEach(town => { 
                        this.spinner++;
                        axios
                            .get('https://api.tibiadata.com/v2/houses/' + this.selectedServer + '/' + town + '.json')
                            .then(response => {
                                server[town] = response.data.houses.houses.filter(a => a.status !== 'rented');

                                if (response.data.houses.error) {
                                    alert(response.data.houses.error);
                                }

                                this.spinner--;
                            })
                    });
                }
            }
        }
    }
</script>
