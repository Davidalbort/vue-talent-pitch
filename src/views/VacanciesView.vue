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
     console.log(vacancies)
     return vacancies
    }
  }
}
</script> 
<template>
  <CarouselFintech 
    v-if="vacanciesData"
    :slides="vacanciesData.vacancies"
  />
  <!-- <VacancyItem /> -->
  <div>t</div>
</template>
