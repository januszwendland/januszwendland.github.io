<template>
    <div class="popup">
        <button class="popup-close" title="Close popup"
            v-on:click="$emit('close')"></button>
        <p>In progress...</p>
    </div>
</template>

<script>
    export default {
        name: 'About'
    }
</script>
