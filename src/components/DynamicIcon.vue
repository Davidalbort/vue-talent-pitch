<template>
    <component :is="getIconComponent(iconName)" />
  </template>
  
  <script>
  import {iconComponents} from './icons'
  export default {
    props: {
      iconName: String,
    },
    methods: {
      getIconComponent(iconName) {
          
        return iconComponents[iconName]|| null
      
      },
    },
   
   
  };
  </script>