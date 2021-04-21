<template>
    <div class="container imbuing">
        <h2 class="mt-3 mt-md-5 mb-3">Imbuing calculator</h2>
        <p class="mt-3 mb-3">Calculate based on gold token price:</p>
        <div class="row mt-3 mb-3 align-items-center">
            <div class="col-12 col-md mt-3 mt-md-0 mb-3 mb-md-0">
                <div class="input-group">
                    <div class="input-group-prepend">
                        <label for="tokenPrice" class="input-group-text"><img src="img/gold-token.webp" title="Gold Token"></label>
                    </div>
                    <input type="number" v-model="token" class="form-control" id="tokenPrice">
                </div>
            </div>
            <div class="col-4 col-md mt-3 mt-md-0 mb-3 mb-md-0"><span class="text-success">Basic:</span> {{ formatPrice(parseFloat((token * 2).toFixed(3))) }}</div>
            <div class="col-4 col-md mt-3 mt-md-0 mb-3 mb-md-0"><span class="text-warning">Intricate:</span> {{ formatPrice(parseFloat((token * 4).toFixed(3))) }}</div>
            <div class="col-4 col-md mt-3 mt-md-0 mb-3 mb-md-0"><span class="text-danger">Powerful:</span> {{ formatPrice(parseFloat((token * 6).toFixed(3))) }}</div>
        </div>
        <p class="mt-3 mb-3">Calculate price for specific imbuement:</p>
        <div class="row mt-3 mb-3">
            <div class="col col-md-2 col-lg-1" v-for="(imbuement, index) in imbuements">
                <img v-bind:src="imbuement.img" v-bind:title="imbuement.name" v-on:click="showImbuement(index)">
            </div>
        </div>
        <div v-if="selected">
            <div class="row mt-3 mb-3 d-none d-md-flex">
                <div class="col-3"><strong>{{ imbuements[selectedIndex].name }}:</strong></div>
                <div class="col-3"><strong>Amount:</strong></div>
                <div class="col-3"><strong>Item price:</strong></div>
                <div class="col-3"><strong>Sum:</strong></div>
            </div>
            <div class="row mt-3 mb-3 align-items-center">
                <div class="col-3 text-success">Basic</div>
                <div class="col-3">{{ imbuements[selectedIndex].basic.amount }}</div>
                <div class="col-3">
                    <div class="input-group">
                        <div class="input-group-prepend">
                            <label for="basicPrice" class="input-group-text">
                                <img v-bind:src="imbuements[selectedIndex].basic.img" v-bind:title="imbuements[selectedIndex].basic.name">
                            </label>
                        </div>
                        <input type="number" v-model="basic" class="form-control" id="basicPrice">
                    </div>
                </div>
                <div class="col-3">{{ formatPrice(parseFloat((imbuements[selectedIndex].basic.amount * basic).toFixed(3))) }}</div>
            </div>
            <div class="row mt-3 mb-3 align-items-center">
                <div class="col-3 text-warning">Intricate</div>
                <div class="col-3">{{ imbuements[selectedIndex].intricate.amount }}</div>
                <div class="col-3">
                    <div class="input-group">
                        <div class="input-group-prepend">
                            <label for="intricatePrice" class="input-group-text">
                                <img v-bind:src="imbuements[selectedIndex].intricate.img" v-bind:title="imbuements[selectedIndex].intricate.name">
                            </label>
                        </div>
                        <input type="number" v-model="intricate" class="form-control" id="intricatePrice">
                    </div>
                </div>
                <div class="col-3">{{ formatPrice(parseFloat((imbuements[selectedIndex].intricate.amount * intricate).toFixed(3))) }}</div>
            </div>
            <div class="row mt-3 mb-3 align-items-center">
                <div class="col-3 text-danger">Powerful</div>
                <div class="col-3">{{ imbuements[selectedIndex].powerful.amount }}</div>
                <div class="col-3">
                    <div class="input-group">
                        <div class="input-group-prepend">
                            <label for="powerfulPrice" class="input-group-text">
                                <img v-bind:src="imbuements[selectedIndex].powerful.img" v-bind:title="imbuements[selectedIndex].powerful.name">
                            </label>
                        </div>
                        <input type="number" v-model="powerful" class="form-control" id="powerfulPrice">
                    </div>
                </div>
                <div class="col-3">{{ formatPrice(parseFloat((imbuements[selectedIndex].powerful.amount * powerful).toFixed(3))) }}</div>
            </div>
            <div class="row mt-3 mb-3 justify-content-end">
                <div class="col-3">
                    <strong>Total:</strong>
                    {{ formatPrice(parseFloat((
                        imbuements[selectedIndex].powerful.amount * powerful +
                        imbuements[selectedIndex].intricate.amount * intricate +
                        imbuements[selectedIndex].basic.amount * basic
                    ).toFixed(3))) }}
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'imbuing',

        data: function () {
            return {
                token: 0,
                basic: 0,
                intricate: 0,
                powerful: 0,
                selected: null,
                selectedIndex: null,
                imbuements: [
                    {
                        name: 'Life Leech',
                        img: 'img/life-leech.webp',
                        basic: { amount: 25, name: 'Vampire Teeth', img: 'img/vampire-teeth.webp' },
                        intricate: { amount: 15, name: 'Bloody Pincers', img: 'img/bloody-pincers.webp' },
                        powerful: { amount: 5, name: 'Piece of Dead Brain', img: 'img/piece-of-dead-brain.webp' }
                    },
                    {
                        name: 'Mana Leech',
                        img: 'img/mana-leech.webp',
                        basic: { amount: 25, name: 'Rope Belts', img: 'img/rope-belt.webp' },
                        intricate: { amount: 25, name: 'Silencer Claws', img: 'img/silencer-claws.webp' },
                        powerful: { amount: 5, name: 'Some Grimeleech Wings', img: 'img/some-grimeleech-wings.webp' }
                    },
                    {
                        name: 'Critical Hit',
                        img: 'img/critical-hit.webp',
                        basic: { amount: 20, name: 'Protective Charms', img: 'img/protective-charm.webp' },
                        intricate: { amount: 25, name: 'Sabreteeth', img: 'img/sabretooth.webp' },
                        powerful: { amount: 5, name: 'Vexclaw Talons', img: 'img/vexclaw-talon.webp' }
                    },
                ]
            }
        },

        methods: {
            formatPrice: function (price) {
                let parts = price.toString().split(".");
                parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, " ");
                return parts.join(".");
            },
            showImbuement: function (index) {
                this.selected = true;
                this.selectedIndex = index;
                this.basic = 0;
                this.intricate = 0;
                this.powerful = 0;
            }
        }
    }
</script>
