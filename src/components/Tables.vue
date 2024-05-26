<script setup>
import Animate from './Animate.vue'
</script>

<template>
  <div id="table" class="offset-anchor__tables"></div>
  <Animate animationClass="animate__fadeInUp" class="tables">
    <h2 class="tables__title">Ваш столик</h2>
    <p class="tables__text">
      Для каждого гостя предусмотрено конкретное место, чтобы вы чувствовали себя комфортно в
      окружении знакомых и близких вам людей.
    </p>
    <p class="tables__text">
      Найдите и кликните на свое имя в списке ниже, чтобы узнать номер своего столика.
    </p>
  </Animate>
</template>
<style lang="scss">
.tables {
  display: flex;
  flex-direction: column;
  padding: 0 4rem;
  margin-bottom: 6.5rem;

  &__title {
    margin-bottom: 1rem;
  }

  &__text {
    margin-bottom: 1.5rem;
  }
}
</style>
