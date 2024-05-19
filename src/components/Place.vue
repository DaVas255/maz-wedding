<script setup></script>

<template>
  <div class="place" id="place">
    <h2 class="place__title">Место</h2>
    <p class="place__text">
      Ресторан «Кухтерин» <br />
      (г. Томск, пер. Нахановича, 9)
    </p>
    <div class="place__map">
      <a href="#" class="place__map-link">Смотреть на карте</a>
    </div>
  </div>
</template>

<style lang="scss">
.place {
  width: 100%;
  padding: 0 4rem;

  &__title {
    margin-bottom: 1rem;
  }

  &__text {
    margin-bottom: 2.5rem;

    line-height: 2.4rem;
  }

  &__map {
    display: flex;
    justify-content: center;
  }

  &__map-link {
    width: 16rem;
    height: 3rem;
    display: flex;
    justify-content: center;
    align-items: center;

    text-decoration: none;
    color: #ffffff;
    font-weight: 700;
    line-height: 2.4rem;
    font-size: 1.2rem;
    background-color: var(--main-color);
  }
}
</style>
