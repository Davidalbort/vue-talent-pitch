<template>
  <div>
    <CarouselMain @next="next" @prev="prev">
      <CarouselSlide
        v-for="(slide, index) in slides"
        :key="slide.id"
        :index="index"
        :visibleSlide="visibleSlide"
      >
        <VacancyItem 
          :key="slide.id"
          :nameVacancy="slide.nameVacancy"
          :description="slide.description"
          :watch="slide.watch"
          :comments="slide.comments"
          :pitches="slide.pitches"
        />
      </CarouselSlide>
    </CarouselMain>
  </div>
</template>

<script>
import CarouselMain from './CarouselMain.vue'
import CarouselSlide from './CarouselSlide.vue'
import VacancyItem from './VacancyItem.vue'
export default {
  data() {
    return {
      
      visibleSlide: 0
    }
  },
  computed: {
    slidesLength() {
      return this.slides.length
    }
  },
  methods: {
    next() {
      if (this.visibleSlide >= this.slidesLength - 2) return
      this.visibleSlide++
    },
    prev() {
      if (this.visibleSlide <= 0) return
      this.visibleSlide--
    }
  },
  props:{
    slides:{
      type: Array
    }
  },
  components: {
    CarouselMain,
    CarouselSlide,
    VacancyItem
}
}
</script>
