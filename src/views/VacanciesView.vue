<script >
import { mapState, mapGetters} from 'vuex'
import CarouselSlide from '../components/CarouselSlide.vue';
export default {
  components:{
    CarouselSlide,
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
    <CarouselSlide 
     v-if="vacanciesData"
     :vacancies="vacanciesData.vacancies"
    />
  
</template>
