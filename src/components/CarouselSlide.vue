
<template>
  <div v-show="visibleSlide <= index">
    <slot></slot>
  </div>
</template>

<script>
export default {
  props:['visibleSlide','index'],
  data() {
    return {}
  }
}
</script>

<style scoped></style>
