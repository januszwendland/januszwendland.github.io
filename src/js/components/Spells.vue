<template>
    <article class="card">
        <div class="card-header">
            <h2 class="card-title">
                <img src="icons/spells.svg" alt="" width="18" height="18">
                <span>Spells list <span class="red">(in progress)</span></span>
            </h2>
        </div>
        <div class="card-content">
            <div class="filters">
                <div>
                    <div class="filters-pills">
                        <span class="filters-pill"
                            v-bind:class="{ 'selected': vocation === 'ed' }"
                            v-on:click="setVocation('ed')">Druid</span>
                        <span class="filters-pill"
                            v-bind:class="{ 'selected': vocation === 'ek' }"
                            v-on:click="setVocation('ek')">Knight</span>
                        <span class="filters-pill"
                            v-bind:class="{ 'selected': vocation === 'rp' }"
                            v-on:click="setVocation('rp')">Paladin</span>
                        <span class="filters-pill"
                            v-bind:class="{ 'selected': vocation === 'ms' }"
                            v-on:click="setVocation('ms')">Sorcerer</span>
                    </div>
                    <small class="filters-info">Filter by vocation.</small>
                </div>
            </div>
            <table class="mt">
                <tbody>
                <tr v-for="(spell, index) in spells" v-bind:key="index">
                    <td>{{ spell.name }}</td>
                    <td class="hide-on-mobile">{{ spell.word }}</td>
                    <td class="hide-on-mobile">{{ spell.group }}</td>
                    <td class="hide-on-mobile">{{ spell.type }}</td>
                    <td>{{ spell.lvl }}</td>
                    <td class="hide-on-mobile">{{ spell.mana }}</td>
                    <td class="hide-on-mobile">{{ spell.price }}</td>
                    <td class="hide-on-mobile">{{ spell.premium }}</td>
                </tr>
                </tbody>
            </table>
        </div>
    </article>
</template>

<script>
    export default {
        name: 'Spells',

        data: function () {
            return {
                spells: [
                    { name: 'Animate Dead Rune', word: 'adana mort', group: 'support', type: 'rune', lvl: 27, mana: 600, price: 1200, premium: true, druid: true, knight: false, paladin: false, sorcerer: false },
                    { name: 'Annihilation', word: 'exori gran ico', group: 'attack', type: 'instant', lvl: 110, mana: 300, price: 20000, premium: true, druid: false, knight: false, paladin: false, sorcerer: false },
                    { name: 'Apprentice\'s Strike', word: 'exori min flam', group: 'attack', type: 'instant', lvl: 8, mana: 6, price: 0, premium: false, druid: true, knight: false, paladin: false, sorcerer: false },
                    { name: 'Arrow Call', word: 'exevo infir con', group: 'support', type: 'instant', lvl: 1, mana: 10, price: 0, premium: false, druid: false, knight: false, paladin: false, sorcerer: false },
                    { name: 'Avalanche Rune', word: 'adori mas frigo', group: 'support', type: 'rune', lvl: 30, mana: 530, price: 1200, premium: false, druid: true, knight: false, paladin: false, sorcerer: false },
                    { name: 'Berserk', word: 'exori', group: 'attack', type: 'instant', lvl: 35, mana: 115, price: 2500, premium: true, druid: false, knight: false, paladin: false, sorcerer: false },
                    { name: 'Blood Rage', word: 'utito tempo', group: 'support', type: 'instant', lvl: 60, mana: 290, price: 8000, premium: true, druid: false, knight: false, paladin: false, sorcerer: false },
                    { name: 'Bruise Bane', word: 'exura infir ico', group: 'healing', type: 'instant', lvl: 1, mana: 10, price: 0, premium: false, druid: false, knight: false, paladin: false, sorcerer: false },
                    { name: 'Brutal Strike', word: 'exori ico', group: 'attack', type: 'instant', lvl: 16, mana: 30, price: 1000, premium: true, druid: false, knight: false, paladin: false, sorcerer: false },
                    { name: 'Buzz', word: 'exori infir vis', group: 'attack', type: 'instant', lvl: 1, mana: 6, price: 0, premium: false, druid: false, knight: false, paladin: false, sorcerer: false },
                    { name: 'Cancel Invisibility', word: 'exana ina', group: 'support', type: 'instant', lvl: 26, mana: 200, price: 1600, premium: true, druid: false, knight: false, paladin: false, sorcerer: false },
                    { name: 'Cancel Magic Shield', word: 'exana vita', group: 'support', type: 'instant', lvl: 14, mana: 50, price: 450, premium: true, druid: true, knight: false, paladin: false, sorcerer: false },
                    { name: 'Challenge', word: 'exeta res', group: 'support', type: 'instant', lvl: 20, mana: 40, price: 2000, premium: true, druid: false, knight: false, paladin: false, sorcerer: false },
                    { name: 'Chameleon Rune', word: 'adevo ina', group: 'support', type: 'rune', lvl: 27, mana: 600, price: 1300, premium: false, druid: true, knight: false, paladin: false, sorcerer: false },
                    { name: 'Charge', word: 'utani tempo hur', group: 'support', type: 'instant', lvl: 25, mana: 100, price: 1300, premium: true, druid: false, knight: false, paladin: false, sorcerer: false },
                    { name: 'Chill Out', word: 'exevo infir frigo hur', group: 'attack', type: 'instant', lvl: 1, mana: 8, price: 0, premium: false, druid: true, knight: false, paladin: false, sorcerer: false },
                    { name: 'Chivalrous Challenge', word: 'exeta amp res', group: 'support', type: 'instant', lvl: 150, mana: 80, price: 250000, premium: true, druid: false, knight: false, paladin: false, sorcerer: false },
                    { name: 'Conjure Arrow', word: 'exevo con', group: 'support', type: 'instant', lvl: 13, mana: 100, price: 450, premium: false, druid: false, knight: false, paladin: false, sorcerer: false },
                    { name: 'Conjure Explosive Arrow', word: 'exevo con flam', group: 'support', type: 'instant', lvl: 25, mana: 290, price: 1000, premium: false, druid: false, knight: false, paladin: false, sorcerer: false },
                    { name: 'Conjure Wand of Darkness', word: 'exevo gran mort', group: 'support', type: 'instant', lvl: 41, mana: 250, price: 5000, premium: true, druid: false, knight: false, paladin: false, sorcerer: false },
                    { name: 'Convince Creature Rune', word: 'adeta sio', group: 'support', type: 'rune', lvl: 16, mana: 200, price: 800, premium: false, druid: true, knight: false, paladin: false, sorcerer: false },
                    { name: 'Creature Illusion', word: 'utevo res ina "creature"', group: 'support', type: 'instant', lvl: 23, mana: 100, price: 1000, premium: false, druid: true, knight: false, paladin: false, sorcerer: false },
                    { name: 'Cure Bleeding', word: 'exana kor', group: 'healing', type: 'instant', lvl: 45, mana: 30, price: 2500, premium: true, druid: true, knight: false, paladin: false, sorcerer: false },
                    { name: 'Cure Burning', word: 'exana flam', group: 'healing', type: 'instant', lvl: 30, mana: 30, price: 2000, premium: true, druid: true, knight: false, paladin: false, sorcerer: false },
                    { name: 'Cure Curse', word: 'exana mort', group: 'healing', type: 'instant', lvl: 80, mana: 40, price: 6000, premium: true, druid: false, knight: false, paladin: false, sorcerer: false },
                    { name: 'Cure Electrification', word: 'exana vis', group: 'healing', type: 'instant', lvl: 22, mana: 30, price: 1000, premium: true, druid: true, knight: false, paladin: false, sorcerer: false },
                    { name: 'Cure Poison', word: 'exana pox', group: 'healing', type: 'instant', lvl: 10, mana: 30, price: 150, premium: false, druid: true, knight: false, paladin: false, sorcerer: false },
                    { name: 'Cure Poison Rune', word: 'adana pox', group: 'support', type: 'rune', lvl: 15, mana: 200, price: 600, premium: false, druid: true, knight: false, paladin: false, sorcerer: false },
                    { name: 'Curse', word: 'utori mort', group: 'attack', type: 'instant', lvl: 75, mana: 30, price: 6000, premium: true, druid: false, knight: false, paladin: false, sorcerer: false },
                    { name: 'Death Strike', word: 'exori mort', group: 'attack', type: 'instant', lvl: 16, mana: 20, price: 800, premium: true, druid: false, knight: false, paladin: false, sorcerer: false },
                    { name: 'Destroy Field Rune', word: 'adito grav', group: 'support', type: 'rune', lvl: 17, mana: 120, price: 700, premium: false, druid: true, knight: false, paladin: false, sorcerer: false },
                    { name: 'Disintegrate Rune', word: 'adito tera', group: 'support', type: 'rune', lvl: 21, mana: 200, price: 900, premium: true, druid: true, knight: false, paladin: false, sorcerer: false },
                    { name: 'Divine Caldera', word: 'exevo mas san', group: 'attack', type: 'instant', lvl: 50, mana: 160, price: 3000, premium: true, druid: false, knight: false, paladin: false, sorcerer: false },
                    { name: 'Divine Dazzle', word: 'exana amp res', group: 'support', type: 'instant', lvl: 250, mana: 80, price: 250000, premium: true, druid: false, knight: false, paladin: false, sorcerer: false },
                    { name: 'Divine Healing', word: 'exura san', group: 'healing', type: 'instant', lvl: 35, mana: 160, price: 3000, premium: false, druid: false, knight: false, paladin: false, sorcerer: false },
                    { name: 'Divine Missile', word: 'exori san', group: 'attack', type: 'instant', lvl: 40, mana: 20, price: 1800, premium: true, druid: false, knight: false, paladin: false, sorcerer: false },
                    { name: 'Electrify', word: 'utori vis', group: 'attack', type: 'instant', lvl: 34, mana: 30, price: 2500, premium: true, druid: false, knight: false, paladin: false, sorcerer: false },
                    { name: 'Enchant Party', word: 'utori mas sio', group: 'support', type: 'instant', lvl: 32, mana: 0, price: 4000, premium: true, druid: false, knight: false, paladin: false, sorcerer: false },
                    { name: 'Enchant Spear', word: 'exeta con', group: 'support', type: 'instant', lvl: 45, mana: 350, price: 2000, premium: true, druid: false, knight: false, paladin: false, sorcerer: false },
                    { name: 'Energy Beam', word: 'exevo vis lux', group: 'attack', type: 'instant', lvl: 23, mana: 40, price: 1000, premium: false, druid: false, knight: false, paladin: false, sorcerer: false },
                    { name: 'Energy Bomb Rune', word: 'adevo mas vis', group: 'support', type: 'rune', lvl: 37, mana: 880, price: 2300, premium: true, druid: false, knight: false, paladin: false, sorcerer: false },
                    { name: 'Energy Field Rune', word: 'adevo grav vis', group: 'support', type: 'rune', lvl: 18, mana: 320, price: 700, premium: false, druid: true, knight: false, paladin: false, sorcerer: false },
                    { name: 'Energy Strike', word: 'exori vis', group: 'attack', type: 'instant', lvl: 12, mana: 20, price: 800, premium: true, druid: true, knight: false, paladin: false, sorcerer: false },
                    { name: 'Energy Wall Rune', word: 'adevo mas grav vis', group: 'support', type: 'rune', lvl: 41, mana: 1000, price: 2500, premium: false, druid: true, knight: false, paladin: false, sorcerer: false },
                    { name: 'Energy Wave', word: 'exevo vis hur', group: 'attack', type: 'instant', lvl: 38, mana: 170, price: 2500, premium: false, druid: false, knight: false, paladin: false, sorcerer: false },
                    { name: 'Envenom', word: 'utori pox', group: 'attack', type: 'instant', lvl: 50, mana: 30, price: 6000, premium: true, druid: true, knight: false, paladin: false, sorcerer: false },
                    { name: 'Eternal Winter', word: 'exevo gran mas frigo', group: 'attack', type: 'instant', lvl: 60, mana: 1050, price: 8000, premium: true, druid: true, knight: false, paladin: false, sorcerer: false },
                    { name: 'Ethereal Spear', word: 'exori con', group: 'attack', type: 'instant', lvl: 23, mana: 25, price: 1100, premium: true, druid: false, knight: false, paladin: false, sorcerer: false },
                    { name: 'Explosion Rune', word: 'adevo mas hur', group: 'support', type: 'rune', lvl: 31, mana: 570, price: 1800, premium: false, druid: true, knight: false, paladin: false, sorcerer: false },
                    { name: 'Expose Weakness', word: 'exori moe', group: 'support', type: 'instant', lvl: 275, mana: 400, price: 400000, premium: true, druid: false, knight: false, paladin: false, sorcerer: false },
                    { name: 'Fair Wound Cleansing', word: 'exura med ico', group: 'healing', type: 'instant', lvl: 300, mana: 90, price: 500000, premium: true, druid: false, knight: false, paladin: false, sorcerer: false },
                    { name: 'Fierce Berserk', word: 'exori gran', group: 'attack', type: 'instant', lvl: 90, mana: 340, price: 7500, premium: true, druid: false, knight: false, paladin: false, sorcerer: false },
                    { name: 'Find Person', word: 'exiva "name"', group: 'support', type: 'instant', lvl: 8, mana: 20, price: 80, premium: false, druid: true, knight: false, paladin: false, sorcerer: false },
                    { name: 'Fire Bomb Rune', word: 'adevo mas flam', group: 'support', type: 'rune', lvl: 27, mana: 600, price: 1500, premium: false, druid: true, knight: false, paladin: false, sorcerer: false },
                    { name: 'Fire Field Rune', word: 'adevo grav flam', group: 'support', type: 'rune', lvl: 15, mana: 240, price: 500, premium: false, druid: true, knight: false, paladin: false, sorcerer: false },
                    { name: 'Fire Wall Rune', word: 'adevo mas grav flam', group: 'support', type: 'rune', lvl: 33, mana: 780, price: 2000, premium: false, druid: true, knight: false, paladin: false, sorcerer: false },
                    { name: 'Fire Wave', word: 'exevo flam hur', group: 'attack', type: 'instant', lvl: 18, mana: 25, price: 850, premium: false, druid: false, knight: false, paladin: false, sorcerer: false },
                    { name: 'Fireball Rune', word: 'adori flam', group: 'support', type: 'rune', lvl: 27, mana: 460, price: 1600, premium: true, druid: false, knight: false, paladin: false, sorcerer: false },
                    { name: 'Flame Strike', word: 'exori flam', group: 'attack', type: 'instant', lvl: 14, mana: 20, price: 800, premium: true, druid: true, knight: false, paladin: false, sorcerer: false },
                    { name: 'Food', word: 'exevo pan', group: 'support', type: 'instant', lvl: 14, mana: 120, price: 300, premium: false, druid: true, knight: false, paladin: false, sorcerer: false },
                    { name: 'Front Sweep', word: 'exori min', group: 'attack', type: 'instant', lvl: 70, mana: 200, price: 4000, premium: true, druid: false, knight: false, paladin: false, sorcerer: false },
                    { name: 'Great Energy Beam', word: 'exevo gran vis lux', group: 'attack', type: 'instant', lvl: 29, mana: 110, price: 1800, premium: false, druid: false, knight: false, paladin: false, sorcerer: false },
                    { name: 'Great Fire Wave', word: 'exevo gran flam hur', group: 'attack', type: 'instant', lvl: 38, mana: 120, price: 25000, premium: true, druid: false, knight: false, paladin: false, sorcerer: false },
                    { name: 'Great Fireball Rune', word: 'adori mas flam', group: 'support', type: 'rune', lvl: 30, mana: 530, price: 1200, premium: false, druid: false, knight: false, paladin: false, sorcerer: false },
                    { name: 'Great Light', word: 'utevo gran lux', group: 'support', type: 'instant', lvl: 13, mana: 60, price: 500, premium: false, druid: true, knight: false, paladin: false, sorcerer: false },
                    { name: 'Groundshaker', word: 'exori mas', group: 'attack', type: 'instant', lvl: 33, mana: 160, price: 1500, premium: true, druid: false, knight: false, paladin: false, sorcerer: false },
                    { name: 'Haste', word: 'utani hur', group: 'support', type: 'instant', lvl: 14, mana: 60, price: 600, premium: true, druid: true, knight: false, paladin: false, sorcerer: false },
                    { name: 'Heal Friend', word: 'exura sio "name"', group: 'healing', type: 'instant', lvl: 18, mana: 120, price: 800, premium: true, druid: true, knight: false, paladin: false, sorcerer: false },
                    { name: 'Heal Party', word: 'utura mas sio', group: 'support', type: 'instant', lvl: 32, mana: 0, price: 4000, premium: true, druid: true, knight: false, paladin: false, sorcerer: false },
                    { name: 'Heavy Magic Missile Rune', word: 'adori vis', group: 'support', type: 'rune', lvl: 25, mana: 350, price: 1500, premium: false, druid: true, knight: false, paladin: false, sorcerer: false },
                    { name: 'Hell\'s Core', word: 'exevo gran mas flam', group: 'attack', type: 'instant', lvl: 60, mana: 1100, price: 8000, premium: true, druid: false, knight: false, paladin: false, sorcerer: false },
                    { name: 'Holy Flash', word: 'utori san', group: 'attack', type: 'instant', lvl: 70, mana: 30, price: 7500, premium: true, druid: false, knight: false, paladin: false, sorcerer: false },
                    { name: 'Holy Missile Rune', word: 'adori san', group: 'support', type: 'rune', lvl: 27, mana: 300, price: 1600, premium: true, druid: false, knight: false, paladin: false, sorcerer: false },
                    { name: 'Ice Strike', word: 'exori frigo', group: 'attack', type: 'instant', lvl: 15, mana: 20, price: 800, premium: true, druid: true, knight: false, paladin: false, sorcerer: false },
                    { name: 'Ice Wave', word: 'exevo frigo hur', group: 'attack', type: 'instant', lvl: 18, mana: 25, price: 850, premium: false, druid: true, knight: false, paladin: false, sorcerer: false },
                    { name: 'Icicle Rune', word: 'adori frigo', group: 'support', type: 'rune', lvl: 28, mana: 460, price: 1700, premium: true, druid: true, knight: false, paladin: false, sorcerer: false },
                    { name: 'Ignite', word: 'utori flam', group: 'attack', type: 'instant', lvl: 26, mana: 30, price: 1500, premium: true, druid: false, knight: false, paladin: false, sorcerer: false },
                    { name: 'Inflict Wound', word: 'utori kor', group: 'attack', type: 'instant', lvl: 40, mana: 30, price: 2500, premium: true, druid: false, knight: false, paladin: false, sorcerer: false },
                    { name: 'Intense Healing', word: 'exura gran', group: 'healing', type: 'instant', lvl: 20, mana: 70, price: 350, premium: false, druid: true, knight: false, paladin: false, sorcerer: false },
                    { name: 'Intense Healing Rune', word: 'adura gran', group: 'support', type: 'rune', lvl: 15, mana: 120, price: 600, premium: false, druid: true, knight: false, paladin: false, sorcerer: false },
                    { name: 'Intense Recovery', word: 'utura gran', group: 'healing', type: 'instant', lvl: 100, mana: 165, price: 10000, premium: true, druid: false, knight: false, paladin: false, sorcerer: false },
                    { name: 'Intense Wound Cleansing', word: 'exura gran ico', group: 'healing', type: 'instant', lvl: 80, mana: 200, price: 6000, premium: true, druid: false, knight: false, paladin: false, sorcerer: false },
                    { name: 'Invisible', word: 'utana vid', group: 'support', type: 'instant', lvl: 35, mana: 440, price: 2000, premium: false, druid: true, knight: false, paladin: false, sorcerer: false },
                    { name: 'Levitate', word: 'exani hur "up|down"', group: 'support', type: 'instant', lvl: 12, mana: 50, price: 500, premium: true, druid: true, knight: false, paladin: false, sorcerer: false },
                    { name: 'Light', word: 'utevo lux', group: 'support', type: 'instant', lvl: 8, mana: 20, price: 0, premium: false, druid: true, knight: false, paladin: false, sorcerer: false },
                    { name: 'Light Healing', word: 'exura', group: 'healing', type: 'instant', lvl: 8, mana: 20, price: 0, premium: false, druid: true, knight: false, paladin: false, sorcerer: false },
                    { name: 'Light Magic Missile Rune', word: 'adori min vis', group: 'support', type: 'rune', lvl: 15, mana: 120, price: 500, premium: false, druid: true, knight: false, paladin: false, sorcerer: false },
                    { name: 'Lightning', word: 'exori amp vis', group: 'attack', type: 'instant', lvl: 55, mana: 60, price: 5000, premium: true, druid: false, knight: false, paladin: false, sorcerer: false },
                    { name: 'Magic Patch', word: 'exura infir', group: 'healing', type: 'instant', lvl: 1, mana: 6, price: 0, premium: false, druid: true, knight: false, paladin: false, sorcerer: false },
                    { name: 'Magic Rope', word: 'exani tera', group: 'support', type: 'instant', lvl: 9, mana: 20, price: 200, premium: true, druid: true, knight: false, paladin: false, sorcerer: false },
                    { name: 'Magic Shield', word: 'utamo vita', group: 'support', type: 'instant', lvl: 14, mana: 50, price: 450, premium: false, druid: true, knight: false, paladin: false, sorcerer: false },
                    { name: 'Magic Wall Rune', word: 'adevo grav tera', group: 'support', type: 'rune', lvl: 32, mana: 750, price: 2100, premium: true, druid: false, knight: false, paladin: false, sorcerer: false },
                    { name: 'Mass Healing', word: 'exura gran mas res', group: 'healing', type: 'instant', lvl: 36, mana: 150, price: 2200, premium: true, druid: true, knight: false, paladin: false, sorcerer: false },
                    { name: 'Mud Attack', word: 'exori infir tera', group: 'attack', type: 'instant', lvl: 1, mana: 6, price: 0, premium: false, druid: true, knight: false, paladin: false, sorcerer: false },
                    { name: 'Nature\'s Embrace', word: 'exura gran sio para', group: 'healing', type: 'instant', lvl: 300, mana: 400, price: 500000, premium: true, druid: true, knight: false, paladin: false, sorcerer: false },
                    { name: 'Paralyse Rune', word: 'adana ani', group: 'support', type: 'rune', lvl: 54, mana: 1400, price: 1900, premium: true, druid: true, knight: false, paladin: false, sorcerer: false },
                    { name: 'Physical Strike', word: 'exori moe ico', group: 'attack', type: 'instant', lvl: 16, mana: 20, price: 800, premium: true, druid: true, knight: false, paladin: false, sorcerer: false },
                    { name: 'Poison Bomb Rune', word: 'adevo mas pox', group: 'support', type: 'rune', lvl: 25, mana: 520, price: 1000, premium: true, druid: true, knight: false, paladin: false, sorcerer: false },
                    { name: 'Poison Field Rune', word: 'adevo grav pox', group: 'support', type: 'rune', lvl: 14, mana: 200, price: 300, premium: false, druid: true, knight: false, paladin: false, sorcerer: false },
                    { name: 'Poison Wall Rune', word: 'adevo mas grav pox', group: 'support', type: 'rune', lvl: 29, mana: 640, price: 1600, premium: false, druid: true, knight: false, paladin: false, sorcerer: false },
                    { name: 'Protect Party', word: 'utamo mas sio', group: 'support', type: 'instant', lvl: 32, mana: 0, price: 4000, premium: true, druid: false, knight: false, paladin: false, sorcerer: false },
                    { name: 'Protector', word: 'utamo tempo', group: 'support', type: 'instant', lvl: 55, mana: 200, price: 6000, premium: true, druid: false, knight: false, paladin: false, sorcerer: false },
                    { name: 'Rage of the Skies', word: 'exevo gran mas vis', group: 'attack', type: 'instant', lvl: 55, mana: 600, price: 6000, premium: true, druid: false, knight: false, paladin: false, sorcerer: false },
                    { name: 'Recovery', word: 'utura', group: 'healing', type: 'instant', lvl: 50, mana: 75, price: 4000, premium: true, druid: false, knight: false, paladin: false, sorcerer: false },
                    { name: 'Restoration', word: 'exura max vita', group: 'healing', type: 'instant', lvl: 300, mana: 260, price: 500000, premium: true, druid: true, knight: false, paladin: false, sorcerer: false },
                    { name: 'Salvation', word: 'exura gran san', group: 'healing', type: 'instant', lvl: 60, mana: 210, price: 8000, premium: true, druid: false, knight: false, paladin: false, sorcerer: false },
                    { name: 'Sap Strength', word: 'exori kor', group: 'support', type: 'instant', lvl: 175, mana: 300, price: 200000, premium: true, druid: false, knight: false, paladin: false, sorcerer: false },
                    { name: 'Scorch', word: 'exevo infir flam hur', group: 'attack', type: 'instant', lvl: 1, mana: 8, price: 0, premium: false, druid: false, knight: false, paladin: false, sorcerer: false },
                    { name: 'Sharpshooter', word: 'utito tempo san', group: 'support', type: 'instant', lvl: 60, mana: 450, price: 8000, premium: true, druid: false, knight: false, paladin: false, sorcerer: false },
                    { name: 'Soulfire Rune', word: 'adevo res flam', group: 'support', type: 'rune', lvl: 27, mana: 420, price: 1800, premium: true, druid: true, knight: false, paladin: false, sorcerer: false },
                    { name: 'Stalagmite Rune', word: 'adori tera', group: 'support', type: 'rune', lvl: 24, mana: 350, price: 1400, premium: false, druid: true, knight: false, paladin: false, sorcerer: false },
                    { name: 'Stone Shower Rune', word: 'adori mas tera', group: 'support', type: 'rune', lvl: 28, mana: 430, price: 1100, premium: true, druid: true, knight: false, paladin: false, sorcerer: false },
                    { name: 'Strong Energy Strike', word: 'exori gran vis', group: 'attack', type: 'instant', lvl: 80, mana: 60, price: 7500, premium: true, druid: false, knight: false, paladin: false, sorcerer: false },
                    { name: 'Strong Ethereal Spear', word: 'exori gran con', group: 'attack', type: 'instant', lvl: 90, mana: 55, price: 10000, premium: true, druid: false, knight: false, paladin: false, sorcerer: false },
                    { name: 'Strong Flame Strike', word: 'exori gran flam', group: 'attack', type: 'instant', lvl: 70, mana: 60, price: 6000, premium: true, druid: false, knight: false, paladin: false, sorcerer: false },
                    { name: 'Strong Haste', word: 'utani gran hur', group: 'support', type: 'instant', lvl: 20, mana: 100, price: 1300, premium: true, druid: true, knight: false, paladin: false, sorcerer: false },
                    { name: 'Strong Ice Strike', word: 'exori gran frigo', group: 'attack', type: 'instant', lvl: 80, mana: 60, price: 6000, premium: true, druid: true, knight: false, paladin: false, sorcerer: false },
                    { name: 'Strong Ice Wave', word: 'exevo gran frigo hur', group: 'attack', type: 'instant', lvl: 40, mana: 170, price: 7500, premium: true, druid: true, knight: false, paladin: false, sorcerer: false },
                    { name: 'Strong Terra Strike', word: 'exori gran tera', group: 'attack', type: 'instant', lvl: 70, mana: 60, price: 6000, premium: true, druid: true, knight: false, paladin: false, sorcerer: false },
                    { name: 'Sudden Death Rune', word: 'adori gran mort', group: 'support', type: 'rune', lvl: 45, mana: 985, price: 3000, premium: false, druid: false, knight: false, paladin: false, sorcerer: false },
                    { name: 'Summon Creature', word: 'utevo res "creature"', group: 'support', type: 'instant', lvl: 25, mana: 0, price: 2000, premium: false, druid: true, knight: false, paladin: false, sorcerer: false },
                    { name: 'Summon Druid Familiar', word: 'utevo gran res dru', group: 'support', type: 'instant', lvl: 200, mana: 3000, price: 50000, premium: true, druid: true, knight: false, paladin: false, sorcerer: false },
                    { name: 'Summon Knight Familiar', word: 'utevo gran res eq', group: 'support', type: 'instant', lvl: 200, mana: 1000, price: 50000, premium: true, druid: false, knight: false, paladin: false, sorcerer: false },
                    { name: 'Summon Paladin Familiar', word: 'utevo gran res sac', group: 'support', type: 'instant', lvl: 200, mana: 2000, price: 50000, premium: true, druid: false, knight: false, paladin: false, sorcerer: false },
                    { name: 'Summon Sorcerer Familiar', word: 'utevo gran res ven', group: 'support', type: 'instant', lvl: 200, mana: 3000, price: 50000, premium: true, druid: false, knight: false, paladin: false, sorcerer: false },
                    { name: 'Swift Foot', word: 'utamo tempo san', group: 'support', type: 'instant', lvl: 55, mana: 400, price: 6000, premium: true, druid: false, knight: false, paladin: false, sorcerer: false },
                    { name: 'Terra Strike', word: 'exori tera', group: 'attack', type: 'instant', lvl: 13, mana: 20, price: 800, premium: true, druid: true, knight: false, paladin: false, sorcerer: false },
                    { name: 'Terra Wave', word: 'exevo tera hur', group: 'attack', type: 'instant', lvl: 38, mana: 170, price: 2500, premium: false, druid: true, knight: false, paladin: false, sorcerer: false },
                    { name: 'Thunderstorm Rune', word: 'adori mas vis', group: 'support', type: 'rune', lvl: 28, mana: 430, price: 1100, premium: true, druid: false, knight: false, paladin: false, sorcerer: false },
                    { name: 'Train Party', word: 'utito mas sio', group: 'support', type: 'instant', lvl: 32, mana: 0, price: 4000, premium: true, druid: false, knight: false, paladin: false, sorcerer: false },
                    { name: 'Ultimate Energy Strike', word: 'exori max vis', group: 'attack', type: 'instant', lvl: 100, mana: 100, price: 15000, premium: true, druid: false, knight: false, paladin: false, sorcerer: false },
                    { name: 'Ultimate Flame Strike', word: 'exori max flam', group: 'attack', type: 'instant', lvl: 90, mana: 100, price: 15000, premium: true, druid: false, knight: false, paladin: false, sorcerer: false },
                    { name: 'Ultimate Healing', word: 'exura vita', group: 'healing', type: 'instant', lvl: 30, mana: 160, price: 1000, premium: false, druid: true, knight: false, paladin: false, sorcerer: false },
                    { name: 'Ultimate Healing Rune', word: 'adura vita', group: 'support', type: 'rune', lvl: 24, mana: 400, price: 1500, premium: false, druid: true, knight: false, paladin: false, sorcerer: false },
                    { name: 'Ultimate Ice Strike', word: 'exori max frigo', group: 'attack', type: 'instant', lvl: 100, mana: 100, price: 15000, premium: true, druid: true, knight: false, paladin: false, sorcerer: false },
                    { name: 'Ultimate Light', word: 'utevo vis lux', group: 'support', type: 'instant', lvl: 26, mana: 140, price: 1600, premium: true, druid: true, knight: false, paladin: false, sorcerer: false },
                    { name: 'Ultimate Terra Strike', word: 'exori max tera', group: 'attack', type: 'instant', lvl: 90, mana: 100, price: 15000, premium: true, druid: true, knight: false, paladin: false, sorcerer: false },
                    { name: 'Whirlwind Throw', word: 'exori hur', group: 'attack', type: 'instant', lvl: 28, mana: 40, price: 1500, premium: true, druid: false, knight: false, paladin: false, sorcerer: false },
                    { name: 'Wild Growth Rune', word: 'adevo grav vita', group: 'support', type: 'rune', lvl: 27, mana: 600, price: 2000, premium: true, druid: true, knight: false, paladin: false, sorcerer: false },
                    { name: 'Wound Cleansing', word: 'exura ico', group: 'healing', type: 'instant', lvl: 8, mana: 40, price: 0, premium: false, druid: false, knight: false, paladin: false, sorcerer: false },
                    { name: 'Wrath of Nature', word: 'exevo gran mas tera', group: 'attack', type: 'instant', lvl: 55, mana: 700, price: 6000, premium: true, druid: true, knight: false, paladin: false, sorcerer: false }
                ],
                vocation: null
            }
        },

        methods: {
            setVocation: function (vocation) {
                if (this.vocation === vocation) {
                    this.vocation = null;
                } else {
                    this.vocation = vocation;
                }
            }
        }
    }
</script>
