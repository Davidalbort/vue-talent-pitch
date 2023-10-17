<script setup>
import ImageOnly from './ImageOnly.vue'
import ButtonWithIconVue from './ButtonWithIcon.vue'
import HistoryCompany from './HistoryCompany.vue'
import IconLocation from './icons/IconLocation.vue'
import IconStarOn from './icons/IconStarOn.vue'
import IconStarOff from './icons/IconStarOff.vue'
import IconFacebook from './icons/IconFacebook.vue'
import IconInstagram from './icons/IconInstagram.vue'
import IconTwitter from './icons/IconTwitter.vue'
import IconLinkedin from './icons/IconLinkedin.vue'
import IconLink from './icons/IconLink.vue'
import IconShare from './icons/IconShare.vue'
import IconDownload from './icons/IconDownload.vue'
import qr from '../assets/qr.png'
import aside from '../assets/aside.png'
defineProps({
  titleCompany: {
    type: String,
    required: true
  },
  nameCompany: {
    type: String,
    required: true
  },
  nickNameCompany: {
    type: String,
    required: true
  },
  typeCompany: {
    type: String,
    required: true
  },
  active: {
    type: Boolean,
    required: true
  },
  city: {
    type: String,
    required: true
  },
  country: {
    type: String,
    required: true
  },
  reviews: {
    type: Number,
    required: true
  },
  linkCompany: {
    type: String,
    required: true
  },
  historyCompany: {
    type: Array,
    required: true
  }
})
</script>
<template>
  <aside
    class="w-80 mx-auto bg-white-primary border border-gray-primary rounded-xl px-6 py-8 sm:w-3/4 lg:w-80"
  >
    <div class="flex flex-col gap-y-4 justify-around items-center">
      <section class="flex justify-center">
        <div
          class="w-44 h-44 bg-gray-primary rounded-full flex justify-center items-center"
        >
          <span class="w-28 h-28 text-8xl text-blue-primary font-bold">{{
            titleCompany
          }}</span>
        </div>
      </section>
      <section class="flex flex-col items-center gap-y-2">
        <span class="text-2xl text-blue-primary font-semibold">{{
          nameCompany
        }}</span>
        <span class="text-xs font-normal text-gray-secondary leading-4">{{
          nickNameCompany
        }}</span>
        <span class="text-xs font-semibold text-text-nav">{{
          typeCompany
        }}</span>
        <span v-if="active" class="text-xs text-green-primary font-normal"
          >Empresa activa</span
        >
        <span v-else class="text-xs text-text-nav">Empresa no activa</span>
        <div class="flex items-center">
          <IconLocation />
          <span class="text-xs text-gray-secondary">{{ city }} -</span>
          <span class="text-xs text-gray-secondary">{{ country }}</span>
        </div>
        <div class="text-gray-secondary flex flex-row items-center gap-x-1">
          <div class="flex flex-row">
            <IconStarOn />
            <IconStarOn />
            <IconStarOn />
            <IconStarOn />
            <IconStarOff />
          </div>
          ( {{ reviews }} Reviews)
        </div>
        <div class="flex flex-row">
          <IconFacebook />
          <IconInstagram />
          <IconTwitter />
          <IconLinkedin />
        </div>
        <div class="flex flex-row gap-x-1">
          <IconLink />
          <a class="text-button-primary">{{ linkCompany }}</a>
        </div>
      </section>
      <section class="flex justify-center">
        <ImageOnly
          :src="aside"
          alt="Image Aside company"
          width="288"
          height="288"
          class="rounded-xl"
        />
      </section>
      <section
        class="w-72 h-64 flex justify-center items-center border border-gray-primary rounded-xl"
      >
        <ImageOnly
          :src="qr"
          alt="Image QR company"
          width="204"
          height="204"
        />
      </section>
      <section class="w-72 flex flex-col gap-y-4">
        <ButtonWithIconVue
          class="w-full h-10 bg-button-primary flex justify-center items-center text-white-primary gap-x-2 font-semibold rounded-md hover:text-text-nav shadow-md"
          nameButton="Compartir Perfil"
        >
          <template #left>
            <IconShare />
          </template>
        </ButtonWithIconVue>
        <div
          class="w-full h-12 flex items-center gap-x-2 border border-gray-primary rounded-md"
        >
          <a
            class="w-12 h-12 bg-button-primary flex items-center justify-center rounded-md rounded-r-none"
            href=""
          >
            <IconDownload />
          </a>
          <span class="text-gray-secondary text-xs">Descargar resumen</span>
        </div>
      </section>
      <section>
        <HistoryCompany
          v-for="(company, index) in historyCompany"
          :key="index"
          :icon="company.icon"
          :header="company.header"
          :number="company.number"
          class="w-72 h-14 border-b border-gray-primary"
        />
      </section>
    </div>
  </aside>
</template>
