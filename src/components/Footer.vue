<script>
import Calendar from './icons/Calendar.vue'
</script>

<template>
  <footer class="footer">
    <div class="footer__content">
      <p class="footer__text">
        Нам важно провести этот день с близкими, и мы будем счастливы видеть вас на своем празднике,
        слышать теплые слова, танцевать и радоваться вместе с вами.
      </p>
      <p>Ведь вместе – лучше!</p>
    </div>

    <div class="footer__photo"></div>
  </footer>
</template>

<style scoped lang="scss">
.footer {
  &__content {
    max-width: 28rem;
    margin: 0 auto 7.9rem auto;
  }

  &__text {
    margin-bottom: 1.2rem;
  }

  &__photo {
    display: flex;
    justify-content: space-between;
  }
}
</style>
