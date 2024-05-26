<script setup>
import Animate from './Animate.vue'
</script>

<template>
  <Animate animationClass="animate__fadeInUp" class="test">
    <h2 class="test__title">Тест <span class="accent-text-main-color">Какой вы гость?</span></h2>
    <p>
      Шуточный тест о&nbsp;том, насколько хорошо вы нас знаете. Не бойтесь, он не проверяет знания, и&nbsp;оценки за
      него не ставятся. Это просто интерактивчик, который поможет узнать нас чуть лучше 🙂
    </p>
  </Animate>
</template>

<style lang="scss">
.test {
  margin-bottom: 8rem;
  padding: 0 4rem;

  &__title {
    margin-bottom: 1rem;
  }
}
</style>
