<script setup>
import Animate from './Animate.vue'
</script>

<template>
  <Animate animationClass="animate__fadeInUp" class="nav">
    <a href="#date">Дата</a> | <a href="#place">Место</a> | <a href="#table">Ваш столик</a> |
    <a href="#color">Цветовая палитра</a> |
    <a href="#form">Анкета</a>
  </Animate>
</template>

<style scoped lang="scss">
.nav {
  position: sticky;
  top: 0;
  z-index: 10;
  height: fit-content;
  padding: 0 1.5rem;
  margin-bottom: 3rem;

  font-size: 1rem;
  color: var(--main-color);

  a {
    text-decoration: none;
  }
}
</style>
