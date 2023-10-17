<script setup>
defineProps({
  nameButton: {
    type: String,
    required: true
  }
})
</script>

<template>
  <button
    class="bg-button-primary text-white-primary font-semibold py-2 px-3 rounded-md tracking-wider hover:shadow-md "
  >
    {{ nameButton }}
  </button>
</template>
