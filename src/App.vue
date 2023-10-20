<script>
import { RouterView } from 'vue-router'
import HeaderBanner from './components/HeaderBanner.vue'
import SidebarFintech from './components/SidebarFintech.vue'
import PercentageBar from './components/PercentageBar.vue'
import ButtonPrimary from './components/ButtonPrimary.vue'
import ButtonWithIcon from './components/ButtonWithIcon.vue'
import IconUserPlus from './components/icons/IconUserPlus.vue'
import { mapState ,mapGetters } from 'vuex'

export default {
  components: {
    RouterView,
    HeaderBanner,
    SidebarFintech,
    PercentageBar,
    ButtonPrimary,
    ButtonWithIcon,
    IconUserPlus,
  },
  computed: {
    ...mapState(['companyId']),
    ...mapGetters('company',['getCompanyById']),
    
    companyData (){
      return this.getCompanyById(this.companyId)
    }
  }
}
</script>

<template>
  <HeaderBanner />
  <div class="flex flex-col lg:flex-row">
    <SidebarFintech
    v-if="companyData"
      :titleCompany="companyData.titleCompany"
      :nameCompany="companyData.nameCompany"
      :nickNameCompany="companyData.nickNameCompany"
      :typeCompany="companyData.typeCompany"
      :active="companyData.active"
      :city="companyData.city"
      :country="companyData.country"
      :reviews="companyData.reviews"
      :linkCompany="companyData.linkCompany"
      :historyCompany="companyData.historyCompany"
      
      class="lg:absolute top-40 right-2/3 xl:left-32"
    />
    <div
      class="block w-full pl-2 pr-2  lg:w-2/3 lg:pr-8 lg:absolute left-1/3 xl:pl-4 pr-20"
    >
      <header class="my-6">
        <div
          class="flex flex-row flex-wrap items-center gap-2 justify-between lg:justify-center xl:justify-between"
        >
          <PercentageBar :percentage=companyData.percentage class="w-2/3 flex items-center gap-1" />
          <div class="flex gap-x-2.5">
            <ButtonPrimary nameButton="Enviar Pitch" />
            <ButtonWithIcon
              nameButton="Seguir"
              class="flex flex-row gap-1 justify-center items-center text-button-primary py-2 px-3 font-medium border border-button-primary rounded-md"
            >
              <template #left>
                <IconUserPlus class="w-6 h-6" />
              </template>
            </ButtonWithIcon>
          </div>
        </div>
        <nav class="w-full h-12 flex border-b border-gray-primary">
          <RouterLink to="/">
              Home
          </RouterLink>
          <RouterLink to="/vacantes">Vacantes</RouterLink>
        </nav>
      </header>
      <RouterView />
    </div>
  </div>
</template>

<style scoped>


nav a {
  font-weight: 600;
  padding: 16px;
  height: 48px;
  align-items: center;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #9fa8da;
  
}
nav a.router-link-exact-active {
  color: #de1c7d; /* You can set your desired color here */
  border-bottom: #de1c7d solid;
}
</style>

