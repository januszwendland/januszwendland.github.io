<template>
    <div class="changelog">
        <button class="close-popup" title="Hide contact"
            v-on:click="$emit('close')"></button>
        <div class="container">
            <h2 class="mt-3 mt-md-5 mb-3">Soon!</h2>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'Changelog',

        data: function () {
            return {

            }
        },

        methods: {

        }
    }
</script>
