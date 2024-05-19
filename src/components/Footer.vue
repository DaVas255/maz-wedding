<script setup></script>

<template>
  <footer class="footer">
    <div class="footer__content">
      <p class="footer__text">
        Нам важно провести этот день с близкими, и мы будем счастливы видеть вас на своем празднике,
        слышать теплые слова, танцевать и радоваться вместе с вами.
      </p>
      <p>Ведь вместе – лучше!</p>
    </div>

    <div class="footer__photo">
      <!-- <img src="./../assets/img/photo1.png" alt="" />
      <img src="./../assets/img/photo2.png" alt="" />
      <img src="./../assets/img/photo3.png" alt="" />
      <img src="./../assets/img/photo4.png" alt="" /> -->
    </div>
  </footer>
</template>

<style scoped lang="scss">
.footer {
  &__content {
    padding: 0 4rem;
    margin-bottom: 7rem;
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
