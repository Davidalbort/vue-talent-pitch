<script setup>
import IconMessage from './icons/IconMessage.vue'
import IconNotification from './icons/IconNotification.vue'
import IconCompany from './icons/IconCompany.vue'
import IconMenu from './icons/IconMenu.vue'
import IconArrowDown from './icons/IconArrowDown.vue'
import IconPlus from './icons/IconPlus.vue'
import ImageOnly from './ImageOnly.vue'
import profile from '../assets/profile.png'
</script>

<template>
  <nav
    class="bg-blue-primary px-4 h-14 flex flex-row justify-between items-center"
  >
    <IconMenu class="ml-4 lg:hidden" />
    <a href="https://website.talentpitch.co/" class="hidden md:block pl-4">
      <IconCompany />
    </a>
    <div class="lg:hidden"></div>
    <menu class="hidden lg:block">
      <ul class="flex flex-row justify-between gap-x-4 text-text-nav">
        <li class="hover:text-button-primary">
          <router-link to="/">Conéctate</router-link>
        </li>
        <li class="hover:text-button-primary">
          <router-link to="/">Mis Muros</router-link>
        </li>
        <li class="hover:text-button-primary">
          <router-link to="/">Mis Listas</router-link>
        </li>
        <li class="hover:text-button-primary">
          <router-link to="/">Aprende</router-link>
        </li>
      </ul>
    </menu>
    <div
      class="hidden lg:flex flex-row justify-between items-center gap-x-4 text-text-nav"
    >
      <button
        class="bg-button-primary flex justify-center items-center gap-x-2 px-3 py-1 rounded"
      >
        Comenzar <IconPlus />
      </button>
      <IconMessage class="text-black" />
      <IconNotification />
      <ImageOnly :src="profile" alt="User Profile" width="41"/>
      <IconArrowDown class="mr-4" />
    </div>
  </nav>
</template>
