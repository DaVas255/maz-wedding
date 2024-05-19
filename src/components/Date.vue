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
  max-width: 28rem;
  margin: 0 auto 7.4rem auto;

  &__title {
    margin-bottom: 1.5rem;
  }

  &__content {
    position: relative;
    display: flex;
    justify-content: center;
  }

  &__heart {
    position: absolute;
    top: 18.1rem;
    left: 17.3rem;
  }
}
</style>
