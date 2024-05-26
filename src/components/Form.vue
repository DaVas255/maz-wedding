<script setup>
import Animate from './Animate.vue'
</script>

<template>
  <div id="form" class="offset-anchor__form"></div>
  <Animate animationClass="animate__fadeInUp" class="form">
    <h2 class="form__title">Анкета</h2>
    <p class="form__text">
      Для того чтобы по максимуму учесть ваши вкусы и&nbsp;предпочтения в&nbsp;еде и&nbsp;напитках, предлагаем заполнить
      небольшую анкету. Это поможет нам организовать такое мероприятие, на котором вам будет уютно, кайфово и&nbsp;весело.
      Анкета займет не&nbsp;более 3&nbsp;минут.
    </p>
    <div class="form__map">
      <a href="https://forms.yandex.ru/u/664cbe7b90fa7bf3c2556831/" target="_blank" class="form__map-link">Перейти к
        анкете</a>
    </div>
  </Animate>
</template>

<style lang="scss">
.form {
  padding: 0 4rem;
  margin-bottom: 8rem;

  &__title {
    margin-bottom: 1rem;
  }

  &__text {
    margin-bottom: 2.5rem;
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
