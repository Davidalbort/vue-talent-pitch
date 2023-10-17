<template>
    <div>
      <p class="w-36 text-text-nav text-xs font-semibold">Match con la cultura</p>
      <span class="text-green-primary text-xs">{{ percentage*10 }}%</span>
      <div class="w-full bg-gray-primary rounded-full h-3">
        <div :style="`width: ${percentage*10}%`" class="h-3 bg-green-primary rounded-full"></div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    props: {
      percentage: {
        type: Number,
        required: true,
        validator: (value) => value >= 0 && value <= 10, // Validate that the percentage is within the 0-100 range
      },
    },
  };
  </script>