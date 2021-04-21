<template>
    <div class="container imbuing">
        <h2 class="mt-3 mt-md-5 mb-3">Imbuing calculator</h2>
        <p class="mt-3 mb-3">Calculate based on gold token price:</p>
        <div class="row mt-3 mb-3 align-items-center">
            <div class="col-12 col-lg mt-3 mt-lg-0 mb-3 mb-lg-0">
                <div class="input-group">
                    <div class="input-group-prepend">
                        <label for="tokenPrice" class="input-group-text">
                            <img src="img/gold-token.webp" title="Gold Token">
                        </label>
                    </div>
                    <input type="number" v-model="token" class="form-control" id="tokenPrice">
                </div>
            </div>
            <div class="col-12 col-lg mt-1 mt-lg-0">
                <div class="badge bg-success d-flex d-lg-inline-flex align-items-center justify-content-between">
                    Basic
                    <span class="badge badge-dark ml-2">{{ formatPrice(parseFloat((token * 2).toFixed(3))) }}</span>
                </div>
            </div>
            <div class="col-12 col-lg mt-1 mt-lg-0">
                <div class="badge bg-warning d-flex d-lg-inline-flex align-items-center justify-content-between">
                    Intricate
                    <span class="badge badge-dark ml-2">{{ formatPrice(parseFloat((token * 4).toFixed(3))) }}</span>
                </div>
            </div>
            <div class="col-12 col-lg mt-1 mt-lg-0">
                <div class="badge bg-danger d-flex d-lg-inline-flex align-items-center justify-content-between">
                    Powerful
                    <span class="badge badge-dark ml-2">{{ formatPrice(parseFloat((token * 6).toFixed(3))) }}</span>
                </div>
            </div>
        </div>
        <p class="mt-3 mb-3">Calculate price for specific imbuement:</p>
        <div class="row mt-3 mb-3">
            <div class="col col-md-2 col-lg-1" v-for="(imbuement, index) in imbuements">
                <img v-bind:src="imbuement.img" v-bind:title="imbuement.name" v-on:click="showImbuement(index)">
            </div>
        </div>
        <div v-if="selected">
            <h3 class="m-0 h5">
                <span class="badge bg-info">{{ imbuements[selectedIndex].name }}</span>
            </h3>
            <div class="row mt-3 mb-3 d-none d-md-flex align-items-center">
                <div class="col-2"></div>
                <div class="col-md-4 col-lg-3">
                    <strong>Item price:</strong>
                </div>
                <div class="col-2">
                    <strong>Sum:</strong>
                </div>
            </div>
            <div class="row mt-3 mb-3 align-items-center">
                <div class="col-4 col-md-2">
                    <span class="badge bg-success w-100 text-center">Basic</span>
                </div>
                <div class="col-8 col-md-4 col-lg-3">
                    <div class="input-group">
                        <div class="input-group-prepend w-50">
                            <label for="basicPrice" class="input-group-text w-100">
                                <img v-bind:src="imbuements[selectedIndex].basic.img" v-bind:title="imbuements[selectedIndex].basic.name">
                                * {{ imbuements[selectedIndex].basic.amount }}
                            </label>
                        </div>
                        <input type="number" v-model="basic" class="form-control" id="basicPrice">
                    </div>
                </div>
                <div class="col-4 d-md-none"></div>
                <div class="col-8 col-md-2">
                    <strong class="d-md-none">Sum:</strong>
                    {{ formatPrice(parseFloat((imbuements[selectedIndex].basic.amount * basic).toFixed(3))) }}
                </div>
            </div>
            <div class="row mt-3 mb-3 align-items-center">
                <div class="col-4 col-md-2">
                    <span class="badge bg-warning w-100 text-center">Intricate</span>
                </div>
                <div class="col-8 col-md-4 col-lg-3">
                    <div class="input-group">
                        <div class="input-group-prepend w-50">
                            <label for="intricatePrice" class="input-group-text w-100">
                                <img v-bind:src="imbuements[selectedIndex].intricate.img" v-bind:title="imbuements[selectedIndex].intricate.name">
                                * {{ imbuements[selectedIndex].intricate.amount }}
                            </label>
                        </div>
                        <input type="number" v-model="intricate" class="form-control" id="intricatePrice">
                    </div>
                </div>
                <div class="col-4 d-md-none"></div>
                <div class="col-8 col-md-2">
                    <strong class="d-md-none">Sum:</strong>
                    {{ formatPrice(parseFloat((imbuements[selectedIndex].intricate.amount * intricate).toFixed(3))) }}
                </div>
            </div>
            <div class="row mt-3 mb-3 align-items-center">
                <div class="col-4 col-md-2">
                    <span class="badge bg-danger w-100 text-center">Powerful</span>
                </div>
                <div class="col-8 col-md-4 col-lg-3">
                    <div class="input-group">
                        <div class="input-group-prepend w-50">
                            <label for="powerfulPrice" class="input-group-text w-100">
                                <img v-bind:src="imbuements[selectedIndex].powerful.img" v-bind:title="imbuements[selectedIndex].powerful.name">
                                * {{ imbuements[selectedIndex].powerful.amount }}
                            </label>
                        </div>
                        <input type="number" v-model="powerful" class="form-control" id="powerfulPrice">
                    </div>
                </div>
                <div class="col-4 d-md-none"></div>
                <div class="col-8 col-md-2">
                    <strong class="d-md-none">Sum:</strong>
                    {{ formatPrice(parseFloat((imbuements[selectedIndex].powerful.amount * powerful).toFixed(3))) }}
                </div>
                <div class="col-4 d-md-none"></div>
                <div class="col-8 col-md-3 mt-3 mt-md-0">
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
