<script setup>
import Calendar from './icons/Calendar.vue'
import Heart from './icons/Heart.vue'
import Animate from './Animate.vue'
</script>

<template>
  <div id="date" class="offset-anchor"></div>
  <Animate animationClass="animate__fadeInUp" class="date">
    <h2 class="date__title">Дата</h2>
    <div class="date__content">
      <Calendar />
    </div>
  </Animate>
</template>

<style lang="scss">
.date {
  padding: 0 4rem;
  margin-top: -4rem;

  &__title {
    margin-bottom: 1.5rem;
  }

  &__content {
    position: relative;
    @media screen and (min-width: 580px) {
      margin-left: 2rem;
    }
  }

  &__heart {
    position: absolute;
    top: 18.1rem;
    right: 6.7rem;
  }
}
</style>
