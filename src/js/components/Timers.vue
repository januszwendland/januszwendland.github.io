<template>
    <article class="card">
        <div class="card-header">
            <h2 class="card-title">
                <img src="icons/timers.svg" alt="" width="18px" height="18px">
                <span>TIMERS <span class="red">(in progress)</span></span>
            </h2>
        </div>
        <div class="card-content">
            <div class="row row-wrap">
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
                ]
            }
        },

        methods: {
            formatNumber: function (number) {
                return number > 9 ? number : '0' + number;
            },
            showTime: function (timer) {
                let temp =  (Vue.ls.get(timer.name.replaceAll(' ', '')) - Date.now()) / 1000,
                    hours = this.formatNumber(Math.floor(temp / 3600)),
                    minutes = this.formatNumber(Math.floor((temp - (hours * 3600)) / 60)),
                    seconds = this.formatNumber(Math.ceil(temp - (hours * 3600) - (minutes * 60)));

                timer.on = true;
                timer.time = hours + ':' + minutes + ':' + seconds;
            },
            setTimers: function (timers) {
                timers.forEach(timer => {
                    let name = timer.name.replaceAll(' ', '');

                    if (Vue.ls.get(name)) {
                        this.showTime(timer);
                        timer.interval = setInterval(() => { this.showTime(timer) }, 1000);
                    }
                });
            },
            setTimer: function (timer) {
                let name = timer.name.replaceAll(' ', ''),
                    time = timer.cooldown * 60 * 60 * 1000;

                if (timer.on) {
                    timer.on = false;
                    clearInterval(timer.interval);
                    Vue.ls.remove(name);
                    timer.time = '00:00:00';
                } else {
                    Vue.ls.set(name, Date.now() + time, time);
                    this.showTime(timer);
                    timer.interval = setInterval(() => { this.showTime(timer) }, 1000);
                }
            }
        },

        mounted: function () {
            this.setTimers(this.timers);
        }
    }
</script>
