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
import IconUser from './icons/IconUser.vue'
import IconEye from './icons/IconEye.vue'
import IconVideo from './icons/IconVideo.vue'
import IconTransporter from './icons/IconTransporter.vue'
import IconFileUser from './icons/IconFileUser.vue'
import IconPhotoVideo from './icons/IconPhotoVideo.vue'
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
  numberTalent: {
    type: String,
    required: true
  },
  lookProfile: {
    type: String,
    required: true
  },
  pitchReceived: {
    type: String,
    required: true
  },
  exhibitions: {
    type: String,
    required: true
  },
  vacancies: {
    type: String,
    required: true
  },
  contents: {
    type: String,
    required: true
  }
})
</script>
<template>
  <aside class="w-80 mx-auto bg-white-primary border border-gray-primary rounded-xl px-6 py-8 sm:w-3/4 lg:w-80">
    <div class="flex flex-row flex-wrap gap-y-4 gap-x-4 justify-around items-center">
      <section class="flex justify-center">
        <div
          class="w-44 h-44 bg-gray-primary rounded-full flex justify-center items-center"
        >
          <span class="w-28 h-28 text-8xl text-blue-primary font-bold">{{
            titleCompany
          }}</span>
        </div>
      </section>
      <section class="flex flex-col items-center gap-y-2 ">
        <span class="text-2xl text-blue-primary font-semibold">{{ nameCompany }}</span>
        <span class="text-xs font-normal text-gray-secondary leading-4">{{ nickNameCompany }}</span>
        <span class="text-xs font-semibold text-text-nav">{{ typeCompany }}</span>
        <span v-if="active" class="text-xs text-green-primary font-normal">Empresa activa</span> 
        <span v-else class="text-xs text-text-nav">Empresa no activa</span> 
        <div class="flex items-center">
          <IconLocation />
          <span class="text-xs text-gray-secondary">{{ city }} -</span>
          <span class="text-xs text-gray-secondary">{{ country }}</span>
        </div>
        <div class="text-gray-secondary flex flex-row items-center gap-x-1">
          <div class="flex flex-row" >
            <IconStarOn />
            <IconStarOn />
            <IconStarOn />
            <IconStarOn />
            <IconStarOff />
          </div >
          ( {{ reviews }} Reviews)
        </div>
        <div class="flex flex-row" >
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
        <div class="bg-aside w-72 h-72 rounded-xl"></div>
      </section>
      <section class="w-72 h-64 flex justify-center items-center border border-gray-primary rounded-xl">
        <ImageOnly src="src/assets/qr.png" alt="Image QR company" width="204" height="204" />
      </section>
      <section class="w-72 flex flex-col gap-y-4">
        <ButtonWithIconVue class="w-full h-10 bg-button-primary flex justify-center items-center text-white-primary gap-x-2 font-semibold rounded-md" nameButton="Compartir Perfil">
            <template #left>
                <IconShare />
            </template>
        </ButtonWithIconVue>
        <div class="w-full h-12 flex items-center gap-x-2 border border-gray-primary rounded-md">
            <a class="w-12 h-12 bg-button-primary flex items-center justify-center rounded-md rounded-r-none " href="">
                <IconDownload />
            </a>
            <span class="text-gray-secondary text-xs">Descargar resumen</span>
        </div>
      </section>
      <section>
        <HistoryCompany class="w-72 h-14 border-b border-gray-primary">
            <template #icon>
                <IconUser />
            </template>
            <template #header>
               Talentos
            </template>
            <template #number>
                {{numberTalent}}
            </template>
           
        </HistoryCompany>
        <HistoryCompany class="w-72 h-14 border-b border-gray-primary">
            <template #icon>
                <IconEye />
            </template>
            <template #header>
                vistas del perfil
            </template>
            <template #number>
                {{lookProfile}}
            </template>
           
        </HistoryCompany>
        <HistoryCompany class="w-72 h-14 border-b border-gray-primary">
            <template #icon>
                <IconVideo />
            </template>
            <template #header>
                Pitches recibidos
            </template>
            <template #number>
                {{pitchReceived}}
            </template>
           
        </HistoryCompany>
        <HistoryCompany class="w-72 h-14 border-b border-gray-primary">
            <template #icon>
                <IconTransporter />
            </template>
            <template #header>
                Exhibiciones
            </template>
            <template #number>
                {{exhibitions}}
            </template>
           
        </HistoryCompany>
        <HistoryCompany class="w-72 h-14 border-b border-gray-primary">
            <template #icon>
                <IconFileUser />
            </template>
            <template #header>
                Vacantes
            </template>
            <template #number>
                {{vacancies}}
            </template>
           
        </HistoryCompany>
        <HistoryCompany class="w-72 h-14 border-b border-gray-primary">
            <template #icon>
                <IconPhotoVideo />
            </template>
            <template #header>
                Contenidos
            </template>
            <template #number>
                {{contents}}
            </template>
           
        </HistoryCompany>
      </section>
    </div>
  </aside>
</template>
