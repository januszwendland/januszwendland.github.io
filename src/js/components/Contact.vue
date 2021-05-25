<template>
    <div class="contact d-flex align-items-center justify-content-center p-3">
        <button class="close-popup" title="Hide contact"
            v-on:click="$emit('close')"></button>
        <div class="text-center text-muted">
            Find me on Discord: <span class="text-dark">Czit#6666</span><br>
            Find me in Tibia: <span class="text-dark">Nienienie</span>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'Contact'
    }
</script>
