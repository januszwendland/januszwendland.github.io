<template>
    <div class="card">
        <div class="card-header">
            <h2 class="card-title">
                <img src="icons/transfer.svg" alt="" width="18px" height="18px">
                Where can I transfer?
            </h2>
        </div>
        <div class="card-content">
            <div class="input-group input-group-with-label">
                <label for="server">Current server</label>
                <select id="server"
                    v-model="selectedServer">
                    <option value="" disabled selected>Select...</option>
                    <option
                        v-for="server, key in servers"
                        v-bind:value="key">{{ key }}</option>
                </select>
            </div>
            <template v-if="selectedServer">
                <table>
                    <thead>
                    <tr>
                        <th>Name</th>
                        <th>Type</th>
                        <th>BattlEye</th>
                        <th>Blocked</th>
                        <th>Locked</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td>{{ selectedServer }}</td>
                        <td>{{ servers[selectedServer].type }}</td>
                        <td>
                            <span
                                v-bind:class="{ 'green': servers[selectedServer].green, 'yellow': !servers[selectedServer].green }">{{ servers[selectedServer].green }}</span>
                        </td>
                        <td>
                            <span
                                v-bind:class="{ 'blocked': servers[selectedServer].blocked, 'not-blocked': !servers[selectedServer].blocked }">{{ servers[selectedServer].blocked }}</span>
                        </td>
                        <td>
                            <span
                                v-bind:class="{ 'locked': servers[selectedServer].locked, 'not-locked': !servers[selectedServer].locked }">{{ servers[selectedServer].locked }}</span>
                        </td>
                    </tr>
                    </tbody>
                </table>
                <h3>You can transfer to:</h3>
                <table>
                    <thead>
                    <tr>
                        <th>Name</th>
                        <th>Type</th>
                        <th>BattlEye</th>
                        <th>Blocked</th>
                        <th>Locked</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr v-for="server, key in servers" v-if="checkServer(key, server)">
                        <td>{{ key }}</td>
                        <td>{{ server.type }}</td>
                        <td>
                            <span
                                v-bind:class="{ 'green': server.green, 'yellow': !server.green }">{{ server.green }}</span>
                        </td>
                        <td>
                            <span
                                v-bind:class="{ 'blocked': server.blocked, 'not-blocked': !server.blocked }">{{ server.blocked }}</span>
                        </td>
                        <td>
                            <span
                                v-bind:class="{ 'locked': server.locked, 'not-locked': !server.locked }">{{ server.locked }}</span>
                        </td>
                    </tr>
                    </tbody>
                </table>
            </template>
        </div>
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
