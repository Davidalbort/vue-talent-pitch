<template>
    <img :src="src" :alt="alt" :width="width" :height="height" />
  </template>
  
  <script>
  export default {
    props: {
      src: {
        type: String,
        required: true,
      },
      alt: {
        type: String,
        required: true,
      },
      width: {
        type: [String, Number],
        default: "auto", // Set a default value if needed
      },
      height: {
        type: [String, Number],
        default: "auto", // Set a default value if needed
      },
    },
  };
  </script>