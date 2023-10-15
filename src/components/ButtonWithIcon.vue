<script setup>
 defineProps({
    nameButton: {
        type: String,
        required: true
    }
 })
</script>
<template>
    <button class="">
      <slot name="left"></slot>
      <span><slot>{{ nameButton }}</slot></span>
      <slot name="right"></slot>
    </button>
  </template>