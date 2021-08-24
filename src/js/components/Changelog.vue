<template>
    <article class="popup">
        <button class="popup-close" title="Close popup"
            v-on:click="$emit('close')"></button>
        <p>In progress...</p>
    </article>
</template>

<script>
    export default {
        name: 'Changelog'
    }
</script>
