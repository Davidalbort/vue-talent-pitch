<script >
import { mapState, mapGetters} from 'vuex'

import CarouselFintech from '../components/CarouselFintech.vue';

export default {
  components:{
    CarouselFintech,
   
},
  computed: {
    ...mapState(['companyId']),
    ...mapGetters('vacancies',['getVacanciesByIdCompany']),
    
    vacanciesData (){
     const vacancies = this.getVacanciesByIdCompany(this.companyId)
     return vacancies
    }
  }
}
</script> 
<template>
  <main>
    <h2 class="text-xl text-blue-primary font-bold leading-4 mb-4">Publicadas recientemente</h2>
    <CarouselFintech 
      v-if="vacanciesData"
      :slides="vacanciesData.vacancies"
    />

  </main>
  <!-- <VacancyItem /> -->
  <div>t</div>
</template>
