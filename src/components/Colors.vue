<template>
  <div class="colors" id="color">
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
  </div>
</template>

<style lang="scss">
.colors {
  background-image: url('./../assets/img/branch.png');
  background-position: right;
  background-repeat: no-repeat;

  &__content {
    max-width: 28rem;
    margin: 0 auto 7.9rem auto;
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
