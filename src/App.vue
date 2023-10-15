<script setup>
import { RouterView } from 'vue-router'
import HeaderBanner from './components/HeaderBanner.vue';
import SidebarFintech from './components/SidebarFintech.vue';
</script>

<template>

    <HeaderBanner />
    <div>

      <SidebarFintech 
        titleCompany="AC"
        nameCompany="A.C. Telecom"
        nickNameCompany="@ac-telecom"
        typeCompany="Startup - tecnología"
        active="true"
        city="Floridablanca"
        country="Colombia"
        reviews="10"
        linkCompany="https://www.actelecom.net/telecom"
        numberTalent="20"
        lookProfile="20"
        pitchReceived="20"
        exhibitions="20"
        vacancies="20"
        contents="20"
        class="lg:absolute top-40 left-24"
      />
      <!-- <img alt="Vue logo" class="logo" src="@/assets/logo.svg" width="125" height="125" />
  
      <div class="wrapper">
        <HelloWorld msg="You did it!" />
  
        <nav>
          <RouterLink to="/">Home</RouterLink>
          <RouterLink to="/about">About</RouterLink>
        </nav>
      </div> -->
   
  
    <RouterView />
    </div>
</template>
