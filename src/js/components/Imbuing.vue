<template>
    <div class="card">
        <div class="card-header">
            <h2 class="card-title">
                <img src="icons/imbuing.svg" alt="" width="18px" height="18px">
                Imbuing calculator
            </h2>
        </div>
        <div class="card-content">
            <div class="row">
                <div class="col">
                    <div class="input-group left">
                        <label for="tokenPrice">
                            <img src="img/gold-token.webp" title="Gold Token" width="32px" height="32px">
                        </label>
                        <input type="number" id="tokenPrice" v-model="token">
                    </div>
                </div>
                <div class="col">
                    <div class="imbuing basic">
                        Basic
                        <span>{{ formatPrice(parseFloat((token * 2).toFixed(3))) }}</span>
                    </div>
                </div>
                <div class="col">
                    <div class="imbuing intricate">
                        Intricate
                        <span>{{ formatPrice(parseFloat((token * 4).toFixed(3))) }}</span>
                    </div>
                </div>
                <div class="col">
                    <div class="imbuing powerful">
                        Powerful
                        <span>{{ formatPrice(parseFloat((token * 6).toFixed(3))) }}</span>
                    </div>
                </div>
            </div>
            <small>Calculate based on gold token price.</small>
            <div class="mt">
                <div class="filters-imgs">
                    <img
                        v-for="(imbuement, index) in imbuements"
                        v-bind:src="imbuement.img"
                        v-bind:title="imbuement.name"
                        v-bind:class="{ 'selected': selectedIndex === index }"
                        v-on:click="showImbuement(index)">
                </div>
                <small class="filters-info">Calculate price for specific imbuement.</small>
            </div>
            <div v-if="selected">
                <h3 class="mt">{{ imbuements[selectedIndex].name }}</h3>
                <div class="row mt">
                    <div class="col">
                        <div class="input-group left">
                            <label for="basicPrice">
                                <img width="32px" height="32px"
                                    v-bind:src="imbuements[selectedIndex].basic.img"
                                    v-bind:title="imbuements[selectedIndex].basic.name">
                                * {{ imbuements[selectedIndex].basic.amount }}
                            </label>
                            <input type="number" id="basicPrice" v-model="basic">
                        </div>
                    </div>
                    <div class="col">
                        <div class="imbuing basic">
                            Basic
                            <span>{{ formatPrice(parseFloat((imbuements[selectedIndex].basic.amount * basic).toFixed(3))) }}</span>
                        </div>
                    </div>
                </div>
                <div class="row mt">
                    <div class="col">
                        <div class="input-group left">
                            <label for="intricatePrice">
                                <img width="32px" height="32px"
                                    v-bind:src="imbuements[selectedIndex].intricate.img"
                                    v-bind:title="imbuements[selectedIndex].intricate.name">
                                * {{ imbuements[selectedIndex].intricate.amount }}
                            </label>
                            <input type="number" id="intricatePrice" v-model="intricate">
                        </div>
                    </div>
                    <div class="col">
                        <div class="imbuing intricate">
                            Intricate
                            <span>
                                {{ formatPrice(parseFloat((
                                    imbuements[selectedIndex].basic.amount * basic +
                                    imbuements[selectedIndex].intricate.amount * intricate
                                ).toFixed(3))) }}
                            </span>
                        </div>
                    </div>
                </div>
                <div class="row mt">
                    <div class="col">
                        <div class="input-group left">
                            <label for="powerfulPrice">
                                <img width="32px" height="32px"
                                    v-bind:src="imbuements[selectedIndex].powerful.img"
                                    v-bind:title="imbuements[selectedIndex].powerful.name">
                                * {{ imbuements[selectedIndex].powerful.amount }}
                            </label>
                            <input type="number" id="powerfulPrice" v-model="powerful">
                        </div>
                    </div>
                    <div class="col">
                        <div class="imbuing powerful">
                            Powerful
                            <span>
                                {{ formatPrice(parseFloat((
                                    imbuements[selectedIndex].basic.amount * basic +
                                    imbuements[selectedIndex].intricate.amount * intricate +
                                    imbuements[selectedIndex].powerful.amount * powerful
                                ).toFixed(3))) }}
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'Imbuing',

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
                    {
                        name: 'Fire Damage',
                        img: 'img/fire-damage.webp',
                        basic: { amount: 25, name: 'Fiery Hearts', img: 'img/fiery-heart.webp' },
                        intricate: { amount: 5, name: 'Green Dragon Scales', img: 'img/green-dragon-scale.webp' },
                        powerful: { amount: 5, name: 'Demon Horns', img: 'img/demon-horn.webp' }
                    },
                    {
                        name: 'Earth Damage',
                        img: 'img/earth-damage.webp',
                        basic: { amount: 25, name: 'Swamp Grass', img: 'img/swamp-grass.webp' },
                        intricate: { amount: 20, name: 'Poisonous Slimes', img: 'img/poisonous-slime.webp' },
                        powerful: { amount: 2, name: 'Slime Hearts', img: 'img/slime-heart.webp' }
                    },
                    {
                        name: 'Ice Damage',
                        img: 'img/ice-damage.webp',
                        basic: { amount: 25, name: 'Frosty Hearts', img: 'img/frosty-heart.webp' },
                        intricate: { amount: 10, name: 'Seacrest Hair', img: 'img/seacrest-hair.webp' },
                        powerful: { amount: 5, name: 'Polar Bear Paws', img: 'img/polar-bear-paw.webp' }
                    },
                    {
                        name: 'Energy Damage',
                        img: 'img/energy-damage.webp',
                        basic: { amount: 25, name: 'Rorc Feathers', img: 'img/rorc-feather.webp' },
                        intricate: { amount: 5, name: 'Peacock Feather Fans', img: 'img/peacock-feather-fan.webp' },
                        powerful: { amount: 1, name: 'Energy Vein', img: 'img/energy-vein.webp' }
                    },
                    {
                        name: 'Death Damage',
                        img: 'img/death-damage.webp',
                        basic: { amount: 25, name: 'Piles of Grave Earth', img: 'img/pile-of-grave-earth.webp' },
                        intricate: { amount: 20, name: 'Demonic Skeletal Hands', img: 'img/demonic-skeletal-hand.webp' },
                        powerful: { amount: 5, name: 'Petrified Screams', img: 'img/petrified-scream.webp' }
                    },
                    {
                        name: 'Death Protection',
                        img: 'img/death-protection.webp',
                        basic: { amount: 25, name: 'Flasks of Embalming Fluid', img: 'img/flask-of-embalming-fluid.webp' },
                        intricate: { amount: 20, name: 'Gloom Wolf Furs', img: 'img/gloom-wolf-fur.webp' },
                        powerful: { amount: 5, name: 'Mystical Hourglasses', img: 'img/mystical-hourglass.webp' }
                    },
                    {
                        name: 'Earth Protection',
                        img: 'img/earth-protection.webp',
                        basic: { amount: 25, name: 'Pieces of Swampling Wood', img: 'img/piece-of-swampling-wood.webp' },
                        intricate: { amount: 20, name: 'Snake Skins', img: 'img/snake-skin.webp' },
                        powerful: { amount: 10, name: 'Brimstone Fangs', img: 'img/brimstone-fangs.webp' }
                    },
                    {
                        name: 'Fire Protection',
                        img: 'img/fire-protection.webp',
                        basic: { amount: 20, name: 'Green Dragon Leathers', img: 'img/green-dragon-leather.webp' },
                        intricate: { amount: 10, name: 'Blazing Bones', img: 'img/blazing-bone.webp' },
                        powerful: { amount: 5, name: 'Draken Sulphur', img: 'img/draken-sulphur.webp' }
                    },
                    {
                        name: 'Ice Protection',
                        img: 'img/ice-protection.webp',
                        basic: { amount: 25, name: 'Winter Wolf Furs', img: 'img/winter-wolf-fur.webp' },
                        intricate: { amount: 15, name: 'Thick Furs', img: 'img/thick-fur.webp' },
                        powerful: { amount: 10, name: 'Deepling Warts', img: 'img/deepling-warts.webp' }
                    },
                    {
                        name: 'Energy Protection',
                        img: 'img/energy-protection.webp',
                        basic: { amount: 20, name: 'Wyvern Talismans', img: 'img/wyvern-talisman.webp' },
                        intricate: { amount: 15, name: 'Crawler Head Platings', img: 'img/crawler-head-plating.webp' },
                        powerful: { amount: 10, name: 'Wyrm Scales', img: 'img/wyrm-scale.webp' }
                    },
                    {
                        name: 'Holy Protection',
                        img: 'img/holy-protection.webp',
                        basic: { amount: 25, name: 'Cultish Robes', img: 'img/cultish-robe.webp' },
                        intricate: { amount: 25, name: 'Cultish Masks', img: 'img/cultish-mask.webp' },
                        powerful: { amount: 20, name: 'Hellspawn Tails', img: 'img/hellspawn-tail.webp' }
                    },
                    {
                        name: 'Paralysis Deflection',
                        img: 'img/paralysis-deflection.webp',
                        basic: { amount: 20, name: 'Wereboar Hooves', img: 'img/wereboar-hooves.webp' },
                        intricate: { amount: 15, name: 'Crystallized Anger', img: 'img/crystallized-anger.webp' },
                        powerful: { amount: 5, name: 'Quills', img: 'img/quill.webp' }
                    },
                    {
                        name: 'Walking Speed',
                        img: 'img/walking-speed.webp',
                        basic: { amount: 15, name: 'Damselfly Wings', img: 'img/damselfly-wing.webp' },
                        intricate: { amount: 25, name: 'Compasses', img: 'img/compass.webp' },
                        powerful: { amount: 20, name: 'Waspoid Wings', img: 'img/waspoid-wing.webp' }
                    },
                    {
                        name: 'Capacity',
                        img: 'img/capacity.webp',
                        basic: { amount: 20, name: 'Fairy Wings', img: 'img/fairy-wings.webp' },
                        intricate: { amount: 10, name: 'Little Bowls of Myrrh', img: 'img/little-bowl-of-myrrh.webp' },
                        powerful: { amount: 5, name: 'Goosebump Leather', img: 'img/goosebump-leather.webp' }
                    },
                    {
                        name: 'Axe Fighting',
                        img: 'img/axe-fighting.webp',
                        basic: { amount: 20, name: 'Orc Teeth', img: 'img/orc-tooth.webp' },
                        intricate: { amount: 25, name: 'Battle Stones', img: 'img/battle-stone.webp' },
                        powerful: { amount: 20, name: 'Moohtant Horns', img: 'img/moohtant-horn.webp' }
                    },
                    {
                        name: 'Sword Fighting',
                        img: 'img/sword-fighting.webp',
                        basic: { amount: 25, name: 'Lion\'s Manes', img: 'img/lions-mane.webp' },
                        intricate: { amount: 25, name: 'Mooh\'tah Shells', img: 'img/moohtah-shell.webp' },
                        powerful: { amount: 5, name: 'War Crystals', img: 'img/war-crystal.webp' }
                    },
                    {
                        name: 'Club Fighting',
                        img: 'img/club-fighting.webp',
                        basic: { amount: 20, name: 'Cyclops Toes', img: 'img/cyclops-toe.webp' },
                        intricate: { amount: 15, name: 'Ogre Nose Rings', img: 'img/ogre-nose-ring.webp' },
                        powerful: { amount: 10, name: 'Warmaster\'s Wristguards', img: 'img/warmasters-wristguards.webp' }
                    },
                    {
                        name: 'Distance Fighting',
                        img: 'img/distance-fighting.webp',
                        basic: { amount: 25, name: 'Elven Scouting Glasses', img: 'img/elven-scouting-glass.webp' },
                        intricate: { amount: 20, name: 'Elven Hoofs', img: 'img/elven-hoof.webp' },
                        powerful: { amount: 10, name: 'Metal Spikes', img: 'img/metal-spike.webp' }
                    },
                    {
                        name: 'Shielding',
                        img: 'img/shielding.webp',
                        basic: { amount: 20, name: 'Pieces of Scarab Shell', img: 'img/piece-of-scarab-shell.webp' },
                        intricate: { amount: 25, name: 'Brimstone Shells', img: 'img/brimstone-shell.webp' },
                        powerful: { amount: 25, name: 'Frazzle Skins', img: 'img/frazzle-skin.webp' }
                    },
                    {
                        name: 'Magic Level',
                        img: 'img/magic-level.webp',
                        basic: { amount: 25, name: 'Elvish Talismans', img: 'img/elvish-talisman.webp' },
                        intricate: { amount: 15, name: 'Broken Shamanic Staffs', img: 'img/broken-shamanic-staff.webp' },
                        powerful: { amount: 15, name: 'Strands of Medusa Hair', img: 'img/strand-of-medusa-hair.webp' }
                    }
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
