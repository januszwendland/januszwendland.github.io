<template>
    <article class="popup">
        <button class="popup-close" title="Close popup"
            v-on:click="$emit('close')"></button>
        <div class="popup-content">
            <p>In progress...</p>
        </div>
    </article>
</template>

<script>
    export default {
        name: 'PrivacyPolicy'
    }
</script>
