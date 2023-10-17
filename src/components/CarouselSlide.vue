<template>
    <div class="vacancy-carousel">
      <carousel :per-page="1" :perPageCustom="perSlide" >
        <slide v-for="(vacancy) in vacancies" :key="vacancy.id">
          <div class="vacancy-card">
            <!-- Display vacancy details here -->
            <h2>{{ vacancy.nameVacancy }}</h2>
            <p>Experience: {{ vacancy.experience }} years</p>
            <p>Watch: {{ vacancy.watch }}</p>
            <p>Comments: {{ vacancy.comments }}</p>
            <p>Pitches: {{ vacancy.pitches }}</p>
          </div>
        </slide>
      </carousel>
      <button @click="prevSlide">Previous</button>
      <button @click="nextSlide">Next</button>
    </div>
  </template>
  
  <script>
  import VueCarousel from 'vue-carousel';
  
  export default {
    components: {
      Carousel: VueCarousel.Carousel,
      Slide: VueCarousel.Slide,
    },
    data() {
      return {
        perSlide: 1, // Number of slides to display at once
        currentSlide: 0,
      };
    },
    props: {
      vacancies: Array,
    },
    methods: {
      prevSlide() {
        if (this.currentSlide > 0) {
          this.currentSlide--;
        }
      },
      nextSlide() {
        if (this.currentSlide < this.vacancies.length - this.perSlide) {
          this.currentSlide++;
        }
      },
    },
  };
  </script>
  
  <style>
  .vacancy-carousel {
    position: relative;
  }
  
  .vacancy-card {
    border: 1px solid #ddd;
    padding: 20px;
    margin: 10px;
    background-color: #f9f9f9;
  }
  
  button {
    margin: 10px;
  }
  </style>