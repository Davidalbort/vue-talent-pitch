<script setup>
 defineProps({
    nameButton: {
        type: String,
        required: true
    }
 })
</script>
<template>
    <button class="hover:shadow-md">
      <slot name="left"></slot>
      <span><slot>{{ nameButton }}</slot></span>
      <slot name="right"></slot>
    </button>
  </template>