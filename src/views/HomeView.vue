<script >
import { mapState, mapGetters} from 'vuex'
import SummaryCompany from '../components/SummaryCompany.vue';
export default {
  components:{
    SummaryCompany,

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
  <main>
    <!-- <TheWelcome /> -->
    <SummaryCompany
      v-if="companyData"
      :description="companyData.description"
      :email="companyData.email"
      :phone="companyData.phone"
      :states="companyData.states"
      :jobMoreSeeking="companyData.jobMoreSeeking"
    >
    </SummaryCompany>
  </main>
</template>
