<template>
    <article class="card">
        <div class="card-header">
            <h2 class="card-title">
                <img src="icons/timers.svg" alt="" width="18px" height="18px">
                <span>TIMERS <span class="red">(in progress)</span></span>
            </h2>
        </div>
        <div class="card-content">
            <div class="row row-wrap timers-row">
                <div v-for="boss in bosses" class="timers-boss">
                    <img v-bind:src="boss.img" alt="" width="64px" height="64px">
                    <div class="timers-text">
                        <h3>{{ boss.name }}</h3>
                        <div class="timers-time">00:00:00</div>
                    </div>
                    <div class="timers-controls">
                        <img src="icons/start.svg" alt="Start timer" width="32px" height="32px" v-show="!boss.on">
                        <img src="icons/stop.svg" alt="Stop timer" width="32px" height="32px" v-show="boss.on">
                    </div>
                </div>
            </div>
        </div>
    </article>
</template>

<style scoped lang="scss">
@import '../../scss/variables.scss';

.timers-boss {
    border: 1px solid $gray;
    border-radius: 0.3rem;
    overflow: hidden;
    margin: 0 0.5rem 0.5rem 0;
    padding: 0.75rem;
    position: relative;
    display: flex;
    align-items: center;
}
.timers-text {
    padding: 0 0 0 0.75rem;
    text-align: center;
    h3 {
        font-weight: 300;
        font-size: 1.12rem;
        padding: 0;
        margin: 0 0 0.25rem;
    }
}
.timers-time {
    font-weight: 700;
    font-size: 1.12rem;
}
.timers-controls {
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
    .timers-boss {
        width: 100%;
        margin: 0 0 0.5rem;
    }
    .timers-text {
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
                bosses: {
                    'Oberon': { name: 'Grand Master Oberon', img: 'img/timers/grand-master-oberon.gif', time: 20, on: false },
                    'Scarlett': { name: 'Scarlett Etzel', img: 'img/timers/scarlett-etzel.gif', time: 20, on: false },
                    'Urmahlullu': { name: 'Urmahlullu', img: 'img/timers/urmahlullu.gif', time: 20, on: false }
                }
            }
        }
    }
</script>
