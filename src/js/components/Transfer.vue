<template>
    <div class="container transfer">
        <h2 class="mt-3 mt-md-5 mb-3">Where can I transfer?</h2>
        <div class="input-group">
            <div class="input-group-prepend">
                <label for="server" class="input-group-text w-100">Current server</label>
            </div>
            <select class="form-control form-control-lg" id="server"
                v-model="selectedServer">
                <option value="" disabled selected>Select...</option>
                <option
                    v-for="server, key in servers"
                    v-bind:value="key">{{ key }}</option>
            </select>
        </div>
        <template v-if="selectedServer">
            <div class="row mt-3 mb-3">
                <div class="col-6 col-md-3">
                    <strong>Name</strong>
                </div>
                <div class="col-6 col-md-3">
                    <strong>Type</strong>
                </div>
                <div class="d-none d-md-block col-2">
                    <strong>BattlEye</strong>
                </div>
                <div class="d-none d-md-block col-2">
                    <strong>Blocked</strong>
                </div>
                <div class="d-none d-md-block col-2">
                    <strong>Locked</strong>
                </div>
            </div>
            <div class="row pb-1 mb-1">
                <div class="col-6 col-md-3">{{ selectedServer }}</div>
                <div class="col-6 col-md-3">{{ servers[selectedServer].type }}</div>
                <div class="d-none d-md-block col-2">
                    <span class="badge"
                        v-bind:class="{ 'badge-success': servers[selectedServer].green, 'badge-warning': !servers[selectedServer].green }">{{ servers[selectedServer].green }}</span>
                </div>
                <div class="d-none d-md-block col-2">
                    <span class="badge"
                        v-bind:class="{ 'badge-primary' : servers[selectedServer].blocked, 'badge-secondary': !servers[selectedServer].blocked }">{{ servers[selectedServer].blocked }}</span>
                </div>
                <div class="d-none d-md-block col-2">
                    <span class="badge"
                        v-bind:class="{ 'badge-dark': servers[selectedServer].locked, 'badge-secondary': !servers[selectedServer].locked }">{{ servers[selectedServer].locked }}</span>
                </div>
            </div>
            <h3 class="mt-3 mb-3">
                <span class="badge bg-info">You can transfer to:</span>
            </h3>
            <div class="row mt-3 mb-3">
                <div class="col-6 col-md-3">
                    <strong>Name</strong>
                </div>
                <div class="col-6 col-md-3">
                    <strong>Type</strong>
                </div>
                <div class="d-none d-md-block col-2">
                    <strong>BattlEye</strong>
                </div>
                <div class="d-none d-md-block col-2">
                    <strong>Blocked</strong>
                </div>
                <div class="d-none d-md-block col-2">
                    <strong>Locked</strong>
                </div>
            </div>
            <template v-for="server, key in servers" v-if="checkServer(key, server)">
                <div class="row border-bottom pb-1 mb-1">
                    <div class="col-6 col-md-3">{{ key }}</div>
                    <div class="col-6 col-md-3">{{ server.type }}</div>
                    <div class="d-none d-md-block col-2">
                        <span class="badge"
                            v-bind:class="{ 'badge-success': server.green, 'badge-warning': !server.green }">{{ server.green }}</span>
                    </div>
                    <div class="d-none d-md-block col-2">
                        <span class="badge"
                            v-bind:class="{ 'badge-primary': server.blocked, 'badge-secondary': !server.blocked }">{{ server.blocked }}</span>
                    </div>
                    <div class="d-none d-md-block col-2">
                        <span class="badge"
                            v-bind:class="{ 'badge-dark': server.locked, 'badge-secondary': !server.locked }">{{ server.locked }}</span>
                    </div>
                </div>
            </template>
        </template>
    </div>
</template>

<script>
    export default {
        name: 'Transfer',

        data: function () {
            return {
                servers: {
                    'Adra': { type: 'open pvp', green: true, blocked: true, locked: false },
                    'Antica': { type: 'open pvp', green: false, blocked: false, locked: false },
                    'Astera': { type: 'optional pvp', green: false, blocked: false, locked: false },
                    'Belobra': { type: 'optional pvp', green: false, blocked: false, locked: false },
                    'Bona': { type: 'optional pvp', green: false, blocked: false, locked: false },
                    'Calmera': { type: 'optional pvp', green: false, blocked: false, locked: false },
                    'Carnera': { type: 'retro open pvp', green: true, blocked: false, locked: false },
                    'Celebra': { type: 'optional pvp', green: false, blocked: false, locked: false },
                    'Celesta': { type: 'optional pvp', green: false, blocked: false, locked: false },
                    'Concorda': { type: 'optional pvp', green: true, blocked: false, locked: false },
                    'Damora': { type: 'optional pvp', green: true, blocked: false, locked: false },
                    'Descubra': { type: 'optional pvp', green: true, blocked: false, locked: false },
                    'Dibra': { type: 'open pvp', green: true, blocked: false, locked: false },
                    'Emera': { type: 'retro open pvp', green: true, blocked: false, locked: false },
                    'Epoca': { type: 'retro open pvp', green: false, blocked: false, locked: false },
                    'Estela': { type: 'open pvp', green: false, blocked: false, locked: false },
                    'Fera': { type: 'retro hardcore pvp', green: true, blocked: false, locked: false },
                    'Ferobra': { type: 'open pvp', green: false, blocked: false, locked: false },
                    'Fervora': { type: 'retro open pvp', green: true, blocked: false, locked: false },
                    'Firmera': { type: 'retro open pvp', green: false, blocked: false, locked: false },
                    'Garnera': { type: 'open pvp', green: false, blocked: false, locked: false },
                    'Gentebra': { type: 'optional pvp', green: false, blocked: false, locked: false },
                    'Gladera': { type: 'optional pvp', green: false, blocked: false, locked: false },
                    'Harmonia': { type: 'optional pvp', green: false, blocked: false, locked: false },
                    'Honbra': { type: 'open pvp', green: true, blocked: false, locked: false },
                    'Impera': { type: 'open pvp', green: false, blocked: false, locked: false },
                    'Inabra': { type: 'open pvp', green: false, blocked: false, locked: false },
                    'Javibra': { type: 'retro open pvp', green: true, blocked: false, locked: false },
                    'Juva': { type: 'open pvp', green: true, blocked: false, locked: false },
                    'Kalibra': { type: 'optional pvp', green: false, blocked: false, locked: false },
                    'Karna': { type: 'optional pvp', green: true, blocked: true, locked: false },
                    'Kenora': { type: 'open pvp', green: false, blocked: false, locked: false },
                    'Libertabra': { type: 'retro hardcore pvp', green: true, blocked: true, locked: false },
                    'Lobera': { type: 'open pvp', green: false, blocked: false, locked: false },
                    'Luminera': { type: 'optional pvp', green: false, blocked: false, locked: false },
                    'Lutabra': { type: 'retro open pvp', green: false, blocked: false, locked: false },
                    'Menera': { type: 'optional pvp', green: false, blocked: false, locked: false },
                    'Mercera': { type: 'optional pvp', green: true, blocked: false, locked: false },
                    'Mitigera': { type: 'optional pvp', green: true, blocked: false, locked: false },
                    'Monza': { type: 'optional pvp', green: false, blocked: false, locked: false },
                    'Mudabra': { type: 'retro open pvp', green: true, blocked: true, locked: false },
                    'Nefera': { type: 'optional pvp', green: false, blocked: false, locked: false },
                    'Nexa': { type: 'retro hardcore pvp', green: true, blocked: false, locked: false },
                    'Nossobra': { type: 'retro open pvp', green: true, blocked: false, locked: false },
                    'Ombra': { type: 'open pvp', green: true, blocked: false, locked: false },
                    'Optera': { type: 'optional pvp', green: true, blocked: true, locked: false },
                    'Pacembra': { type: 'optional pvp', green: true, blocked: false, locked: false },
                    'Pacera': { type: 'optional pvp', green: false, blocked: false, locked: false },
                    'Peloria': { type: 'open pvp', green: false, blocked: false, locked: false },
                    'Premia': { type: 'open pvp', green: false, blocked: false, locked: false },
                    'Quelibra': { type: 'open pvp', green: false, blocked: false, locked: false },
                    'Quintera': { type: 'open pvp', green: false, blocked: false, locked: false },
                    'Ragna': { type: 'retro hardcore pvp', green: true, blocked: true, locked: false },
                    'Refugia': { type: 'optional pvp', green: false, blocked: false, locked: false },
                    'Reinobra': { type: 'optional pvp', green: false, blocked: true, locked: false },
                    'Relania': { type: 'optional pvp', green: false, blocked: false, locked: false },
                    'Relembra': { type: 'retro open pvp', green: false, blocked: false, locked: false },
                    'Secura': { type: 'optional pvp', green: false, blocked: false, locked: false },
                    'Serdebra': { type: 'open pvp', green: false, blocked: false, locked: false },
                    'Serenebra': { type: 'optional pvp', green: false, blocked: false, locked: false },
                    'Solidera': { type: 'open pvp', green: false, blocked: false, locked: false },
                    'Talera': { type: 'open pvp', green: false, blocked: false, locked: false },
                    'Unica': { type: 'retro open pvp', green: true, blocked: false, locked: false },
                    'Unisera': { type: 'open pvp', green: true, blocked: false, locked: false },
                    'Utobra': { type: 'open pvp', green: true, blocked: true, locked: false },
                    'Venebra': { type: 'optional pvp', green: true, blocked: false, locked: false },
                    'Visabra': { type: 'retro hardcore pvp', green: true, blocked: false, locked: false },
                    'Vunira': { type: 'open pvp', green: false, blocked: false, locked: false },
                    'Wintera': { type: 'open pvp', green: false, blocked: false, locked: false },
                    'Wizera': { type: 'open pvp', green: true, blocked: true, locked: false },
                    'Xandebra': { type: 'open pvp', green: true, blocked: false, locked: false },
                    'Xylona': { type: 'open pvp', green: true, blocked: false, locked: false },
                    'Yonabra': { type: 'optional pvp', green: false, blocked: false, locked: false },
                    'Ysolera': { type: 'open pvp', green: true, blocked: false, locked: false },
                    'Zenobra': { type: 'open pvp', green: true, blocked: true, locked: false },
                    'Zuna': { type: 'hardcore pvp', green: false, blocked: false, locked: true },
                    'Zunera': { type: 'hardcore pvp', green: false, blocked: false, locked: true }
                },
                selectedServer: ''
            }
        },

        methods: {
            checkServer: function (name, props) {
                let fromName = this.selectedServer,
                    fromProps = this.servers[this.selectedServer];

                if (name === fromName) return false;

                if (props.blocked) return false;

                if (fromProps.locked) return (fromProps.locked && props.locked);
                
                if (fromProps.type === 'retro hardcore pvp') {
                    if (props.green) return fromProps.green;
                };

                if (props.type === 'retro hardcore pvp') return false;

                if (fromProps.type === 'retro open pvp' || fromProps.type === 'open pvp') {
                    if (!fromProps.green) return !props.green;
                } else {
                    if (props.type === 'retro open pvp' || props.type ===  'open pvp') return false;
                }

                if (!fromProps.green) return !props.green;

                return true;
            }
        }
    }
</script>
