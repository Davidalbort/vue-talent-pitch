<script setup>
import DynamicIcon from './DynamicIcon.vue';
defineProps(['icon','header','number'])
</script>
<template>
  <div class="flex flex-row justify-between items-center">
    <div class="flex items-center gap-x-1">
      <DynamicIcon :iconName="icon"/>
      <span class="text-xs text-gray-secondary font-semibold uppercase">
       {{ header }}
      </span>
    </div>
    <span class="text-lg text-gray-secondary font-bold">
      {{number}}
    </span>

  </div>
</template>
