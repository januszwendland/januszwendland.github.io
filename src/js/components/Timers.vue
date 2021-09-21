<template>
    <article class="card">
        <div class="card-header">
            <h2 class="card-title">
                <img src="icons/timers.svg" alt="" width="18px" height="18px">
                <span>TIMERS <span class="red">(in progress)</span></span>
            </h2>
        </div>
        <div class="card-content">
            <div class="row">
                <div class="col col-50">
                    <form class="input-group large right"
                        v-on:submit.prevent="addChar">
                        <input placeholder="Character name" v-model="name">
                        <button>Add</button>
                    </form>
                    <small>Add your character, you can add multiple characters.</small>
                </div>
            </div>
            <div class="flex mt">
                <h3 class="pointer"
                    v-for="char in chars"
                    v-on:click="setActiveChar(char)"
                    v-bind:class="{ 'green': char === activeChar }">
                    {{ char }}
                    <img src="icons/remove.svg" alt="" width="24px" height="24px" title="Remove char"
                        v-on:click.stop="removeChar(char)">
                </h3>
            </div>
            <small v-if="activeChar">
                You can remove character by clicking on 'x' icon.<br>
                Active character have <strong class="green">green</strong> color.
            </small>
            <div class="flex mt" v-if="activeChar">
                <div v-for="timer in timers" class="timer">
                    <img v-bind:src="timer.img" alt="" width="64px" height="64px">
                    <div class="timer-text">
                        <h3>{{ timer.name }}</h3>
                        <div class="timer-time">{{ timer.time }}</div>
                    </div>
                    <div class="timer-controls" v-on:click="setTimer(timer)">
                        <img src="icons/start.svg" alt="Start timer" width="32px" height="32px" v-show="!timer.on">
                        <img src="icons/stop.svg" alt="Stop timer" width="32px" height="32px" v-show="timer.on">
                    </div>
                </div>
            </div>
        </div>
    </article>
</template>

<style scoped lang="scss">
@import '../../scss/variables.scss';

.timer {
    border: 1px solid $gray;
    border-radius: 0.3rem;
    overflow: hidden;
    margin: 0 0.5rem 0.5rem 0;
    padding: 0.75rem;
    position: relative;
    display: flex;
    align-items: center;
}
.timer-text {
    padding: 0 0 0 0.75rem;
    text-align: center;
    h3 {
        font-weight: 300;
        font-size: 1.12rem;
        padding: 0;
        margin: 0 0 0.25rem;
    }
}
.timer-time {
    font-weight: 700;
    font-size: 1.12rem;
}
.timer-controls {
    opacity: 0;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    background: rgba(white, 0.95);
    transition: opacity 0.3s;
    &:hover {
        opacity: 1;
    }
}

@media (max-width: 767.98px) {
    .timer {
        width: 100%;
        margin: 0 0 0.5rem;
    }
    .timer-text {
        width: 100%;
    }
}
</style>

<script>
    import Vue from 'vue';
    import Storage from 'vue-ls';

    let options = {
        namespace: 'tibiaTools_'
    };

    Vue.use(Storage, options);

    export default {
        name: 'Timers',

        data: function () {
            return {
                timers: [
                    { name: 'Grand Master Oberon', img: 'img/timers/grand-master-oberon.gif', cooldown: 20, on: false, time: '00:00:00', interval: null },
                    { name: 'Scarlett Etzel', img: 'img/timers/scarlett-etzel.gif', cooldown: 20, on: false, time: '00:00:00', interval: null },
                    { name: 'Urmahlullu', img: 'img/timers/urmahlullu.gif', cooldown: 20, on: false, time: '00:00:00', interval: null }
                ],
                chars: [],
                activeChar: null,
                name: null
            }
        },

        methods: {
            formatNumber: function (number) {
                return number > 9 ? number : '0' + number;
            },
            showTime: function (timer) {
                let name = this.activeChar.replaceAll(' ', '_') + '_' + timer.name.replaceAll(' ', '_'),
                    temp =  (Vue.ls.get(name) - Date.now()) / 1000,
                    hours = this.formatNumber(Math.floor(temp / 3600)),
                    minutes = this.formatNumber(Math.floor((temp - (hours * 3600)) / 60)),
                    seconds = this.formatNumber(Math.ceil(temp - (hours * 3600) - (minutes * 60)));

                timer.on = true;
                timer.time = hours + ':' + minutes + ':' + seconds;
            },
            resetTimer: function (timer) {
                timer.on = false;
                timer.time = '00:00:00';
                clearInterval(timer.interval);
            },
            setTimers: function () {
                this.timers.forEach(timer => {
                    let name = this.activeChar.replaceAll(' ', '_') + '_' + timer.name.replaceAll(' ', '_');

                    if (Vue.ls.get(name)) {
                        this.showTime(timer);
                        timer.interval = setInterval(() => { this.showTime(timer) }, 1000);
                    } else {
                        this.resetTimer(timer);
                    }
                });
            },
            setTimer: function (timer) {
                let name = this.activeChar.replaceAll(' ', '_') + '_' + timer.name.replaceAll(' ', '_'),
                    time = timer.cooldown * 60 * 60 * 1000;

                if (timer.on) {
                    this.resetTimer(timer);
                    Vue.ls.remove(name);
                } else {
                    Vue.ls.set(name, Date.now() + time, time);
                    this.showTime(timer);
                    timer.interval = setInterval(() => { this.showTime(timer) }, 1000);
                }
            },
            checkChars: function () {
                if (Vue.ls.get('chars')) {
                    this.chars = Vue.ls.get('chars');

                    if (this.chars.length) {
                        this.activeChar = this.chars[0];
                        this.setTimers();
                    } else {
                        this.activeChar = null;
                    }
                }
            },
            addChar: function () {
                if (this.name && !this.chars.includes(this.name)) {
                    this.chars.push(this.name);
                    Vue.ls.set('chars', this.chars);

                    if (!this.activeChar) {
                        this.setActiveChar(this.name);
                    }

                    this.name = null;
                } else if (this.chars.includes(this.name)) {
                    alert('Character already added!');
                }
            },
            removeChar: function (char) {
                this.chars = this.chars.filter(item => item !== char);
                Vue.ls.set('chars', this.chars);

                this.timers.forEach(timer => {
                    let name = char.replaceAll(' ', '_') + '_' + timer.name.replaceAll(' ', '_');

                    this.resetTimer(timer);
                    Vue.ls.remove(name);
                });

                this.checkChars();
            },
            setActiveChar: function (char) {
                if (this.activeChar !== char) {
                    this.activeChar = char;

                    this.timers.forEach(timer => {
                        this.resetTimer(timer);
                    });

                    this.setTimers();
                }
            }
        },

        mounted: function () {
            this.checkChars();
        },

        beforeUnmount: function () {
            this.timers.forEach(timer => {
                clearInterval(timer.interval);
            });
        }
    }
</script>
