<script setup>
    import MenuNavigation from './MenuNavigation.vue';
    import ImageOnly from './ImageOnly.vue';
    import banner from '../assets/banner.png'
</script>
<template>
    <header>
        <MenuNavigation />
        <ImageOnly class="min-w-full h-24 sm:h-2/5" :src="banner" alt="Image banner" width="1440" height=230 />
    </header>
</template>