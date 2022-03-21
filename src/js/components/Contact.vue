<template>
    <article class="popup">
        <button class="popup-close" title="Close popup"
            v-on:click="$emit('close')"></button>
        <div class="popup-content">
            <p>
                Find me on Discord: <strong>Czit#6666</strong><br>
                Find me in Tibia: <strong>Cite</strong>
            </p>
        </div>
    </article>
</template>

<script>
    export default {
        name: 'Contact'
    }
</script>
