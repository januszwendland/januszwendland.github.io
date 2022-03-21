<template>
    <article class="popup">
        <button class="popup-close" title="Close popup"
            v-on:click="$emit('close')"></button>
        <div class="popup-content">
            <p>Few handy Tibia tools (for me) which i develop in free time.</p>
            <p>If you need something or have an idea for a new tool, please contact me.</p>
        </div>
    </article>
</template>

<script>
    export default {
        name: 'About'
    }
</script>
