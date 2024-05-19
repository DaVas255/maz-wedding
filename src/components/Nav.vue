<script setup></script>

<template>
  <div class="nav">
    <a href="#date">Дата</a> | <a href="#place">Место</a> | <a href="#table">Ваш столик</a> |
    <a href="#color">Цветовая палитра</a> |
    <a href="#form">Анкета</a>
  </div>
</template>

<style scoped lang="scss">
.nav {
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
