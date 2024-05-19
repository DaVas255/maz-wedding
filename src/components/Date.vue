<script setup>
import Calendar from './icons/Calendar.vue'
import Heart from './icons/Heart.vue'
</script>

<template>
  <div class="date" id="date">
    <h2 class="date__title">Дата</h2>
    <div class="date__content">
      <Calendar />
      <Heart class="date__heart" />
    </div>
  </div>
</template>

<style lang="scss">
.date {
  padding: 0 4rem;

  &__title {
    margin-bottom: 1.5rem;
  }

  &__content {
    position: relative;
  }

  &__heart {
    position: absolute;
    top: 18.1rem;
    right: 6.7rem;
  }
}
</style>
