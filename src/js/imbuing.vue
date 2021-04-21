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
            <div class="col-4 col-md mt-3 mt-md-0 mb-3 mb-md-0">2 tokens = {{ formatPrice(parseFloat((token * 2).toFixed(3))) }}</div>
            <div class="col-4 col-md mt-3 mt-md-0 mb-3 mb-md-0">4 tokens = {{ formatPrice(parseFloat((token * 4).toFixed(3))) }}</div>
            <div class="col-4 col-md mt-3 mt-md-0 mb-3 mb-md-0">6 tokens = {{ formatPrice(parseFloat((token * 6).toFixed(3))) }}</div>
        </div>
        <p class="mt-3 mb-3">Calculate price for specific imbuement:</p>
        <div class="row mt-3 mb-3">
            <div class="col col-md-2 col-lg-1" v-for="(imbuement, index) in imbuements">
                <img v-bind:src="imbuement.img" v-bind:title="imbuement.name" v-on:click="showImbuement(index)">
            </div>
        </div>
        <div v-if="selected">
            <div class="row mt-3 mb-3 d-none d-md-flex">
                <div class="col-2"><strong>{{ imbuements[selectedIndex].name }}:</strong></div>
                <div class="col-2"><strong>Amount:</strong></div>
                <div class="col-6"><strong>Price:</strong></div>
                <div class="col-2"><strong>Sum:</strong></div>
            </div>
            <div class="row mt-3 mb-3 align-items-center">
                <div class="col-2 text-success">Basic</div>
                <div class="col-2">{{ imbuements[selectedIndex].basic.amount }}</div>
                <div class="col-6">
                    <div class="input-group">
                        <div class="input-group-prepend w-75">
                            <label for="basicPrice" class="input-group-text w-100">{{ imbuements[selectedIndex].basic.item }}</label>
                        </div>
                        <input type="number" v-model="basic" class="form-control" id="basicPrice">
                    </div>
                </div>
                <div class="col-2">{{ formatPrice(parseFloat((imbuements[selectedIndex].basic.amount * basic).toFixed(3))) }}</div>
            </div>
            <div class="row mt-3 mb-3 align-items-center">
                <div class="col-2 text-warning">Intricate</div>
                <div class="col-2">{{ imbuements[selectedIndex].intricate.amount }}</div>
                <div class="col-6">
                    <div class="input-group">
                        <div class="input-group-prepend w-75">
                            <label for="intricatePrice" class="input-group-text w-100">{{ imbuements[selectedIndex].intricate.item }}</label>
                        </div>
                        <input type="number" v-model="intricate" class="form-control" id="intricatePrice">
                    </div>
                </div>
                <div class="col-2">{{ formatPrice(parseFloat((imbuements[selectedIndex].intricate.amount * intricate).toFixed(3))) }}</div>
            </div>
            <div class="row mt-3 mb-3 align-items-center">
                <div class="col-2 text-danger">Powerful</div>
                <div class="col-2">{{ imbuements[selectedIndex].powerful.amount }}</div>
                <div class="col-6">
                    <div class="input-group">
                        <div class="input-group-prepend w-75">
                            <label for="powerfulPrice" class="input-group-text w-100">{{ imbuements[selectedIndex].powerful.item }}</label>
                        </div>
                        <input type="number" v-model="powerful" class="form-control" id="powerfulPrice">
                    </div>
                </div>
                <div class="col-2">{{ formatPrice(parseFloat((imbuements[selectedIndex].powerful.amount * powerful).toFixed(3))) }}</div>
            </div>
            <div class="row mt-3 mb-3 justify-content-end">
                <div class="col-2">
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
                        basic: { amount: 25, item: 'Vampire Teeth' },
                        intricate: { amount: 15, item: 'Bloody Pincers' },
                        powerful: { amount: 5, item: 'Piece of Dead Brain' }
                    },
                    {
                        name: 'Mana Leech',
                        img: 'img/mana-leech.webp',
                        basic: { amount: 25, item: 'Rope Belts' },
                        intricate: { amount: 25, item: 'Silencer Claws' },
                        powerful: { amount: 5, item: 'Some Grimeleech Wings' }
                    },
                    {
                        name: 'Critical Hit',
                        img: 'img/critical-hit.webp',
                        basic: { amount: 20, item: 'Protective Charms' },
                        intricate: { amount: 25, item: 'Sabreteeth' },
                        powerful: { amount: 5, item: 'Vexclaw Talons' }
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
