<script setup>
import Animate from './Animate.vue'
</script>

<template>
  <Animate animationClass="animate__fadeInUp" class="form" id="form">
    <h2 class="form__title">Анкета</h2>
    <p class="form__text">
      Для того чтобы по максимуму учесть ваши вкусы и предпочтения в еде и напитках, предлагаем
      пройти короткий опрос. Это поможет нам организовать такое мероприятие, на котором вам будет
      уютно, кайфово и весело. Опрос займет не более 5 минут.
    </p>
  </Animate>
</template>

<style lang="scss">
.form {
  padding: 0 4rem;
  margin-bottom: 7rem;

  &__title {
    margin-bottom: 1rem;
  }
}
</style>
