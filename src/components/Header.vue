<script setup>
import Animate from './Animate.vue'
</script>

<template>
  <header class="header">
    <img src="./../assets/img/headerPhoto.jpg" alt="" class="header__photo" />
  </header>
</template>

<style scoped lang="scss">
.header {
  height: 178px;
  width: 100%;
  margin-bottom: 2.5rem;

  &__photo {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
}
</style>
