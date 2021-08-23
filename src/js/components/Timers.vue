<template>
    <div class="card">
        <div class="card-header">
            <h2 class="card-title">
                <img src="icons/timers.svg" alt="" width="18px" height="18px">
                TIMERS (<span class="red">in progress</span>)
            </h2>
        </div>
    </div>
</template>

<script>
    import Vue from 'vue';
    import Storage from 'vue-ls';

    let options = {
        namespace: 'tibiaTools_'
    };

    Vue.use(Storage, options);

    export default {
        name: 'Timers',

        mounted: function() {
            console.log('test');
            Vue.ls.set('foo', 'boo');
        }
    }
</script>
