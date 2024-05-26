<script setup>
import Animate from './Animate.vue'
</script>

<template>
  <div id="color" class="offset-anchor__color"></div>
  <Animate animationClass="animate__fadeInUp" class="colors">
    <div class="colors__content">
      <h2 class="colors__title">Цветовая палитра</h2>
      <p class="colors__text">
        На свадьбе будет доминировать зелёный цвет, но особого дресс-кода для гостей нет. Вы можете
        надеть любую одежду любого цвета, которая вам идет, нравится и соответствует торжественному
        стилю.
      </p>

      <p>
        Единственное <span class="colors__accent accent-text-main-color">но </span>– будем
        признательны, если белое платье будет только у невесты.
      </p>
    </div>
  </Animate>
</template>

<style lang="scss">
.colors {
  background-image: url('./../assets/img/branch.png');
  background-position: right;
  background-repeat: no-repeat;
  margin-bottom: 8rem;

  &__content {
    padding: 0 4rem;
  }

  &__title {
    margin-bottom: 1rem;
  }

  &__text {
    margin-bottom: 1rem;
  }

  &__accent {
    font-weight: 700;
  }
}
</style>
