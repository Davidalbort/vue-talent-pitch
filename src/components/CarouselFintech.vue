<template>
  <div class="flex items-stretch gap-2">
    <button @click="prev" class="hidden sm:flex w-6 h-auto bg-gray-primary flex justify-center items-center pointer">
      <DynamicIcon 
        iconName="IconArrowLeft"
      />
    </button>
    <CarouselMain >
      <CarouselSlide
        v-for="(slide, index) in slides"
        :key="slide.id"
        :index="index"
        :visibleSlide="visibleSlide"
        :direction="direction"
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
    <button @click="next" class="hidden sm:flex w-6 h-auto bg-gray-primary flex justify-center items-center pointer">
      <DynamicIcon 
        iconName="IconArrowRight"
      />
    </button>
  </div>
</template>

<script>
import CarouselMain from './CarouselMain.vue'
import CarouselSlide from './CarouselSlide.vue'
import DynamicIcon from './DynamicIcon.vue'
import VacancyItem from './VacancyItem.vue'
export default {
  data() {
    return {
      
      visibleSlide: 0,
      direction: 'left'
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
      this.direction = 'right'
      console.log(this.direction)
    },
    prev() {
      if (this.visibleSlide <= 0) return
      this.visibleSlide--
      this.direction = 'left'
      console.log(this.direction)

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
    VacancyItem,
    DynamicIcon
}
}
</script>

<style scoped>


</style>