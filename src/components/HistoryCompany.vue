<script setup>
 defineProps({
    number: {
        type:[String,Number],
        required: true
    }
 })
</script>
<template>
  <div class="flex flex-row justify-between items-center">
    <div class="flex items-center gap-x-1">
      <slot name="icon"></slot>
      <span class="text-xs text-gray-secondary font-semibold uppercase">
        <slot name="header"></slot>
      </span>
    </div>
    <span class="text-lg text-gray-secondary font-bold">
      <slot name="number"></slot>
    </span>

  </div>
</template>
