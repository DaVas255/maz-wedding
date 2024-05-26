<script setup>
import Animate from './Animate.vue'
</script>

<template>
  <Animate animationClass="animate__fadeInUp" class="footer">
    <footer>
      <div class="footer__content">
        <p class="footer__text">
          Нам важно провести этот день с&nbsp;близкими, и&nbsp;мы будем счастливы видеть вас на своем
          празднике, слышать теплые слова, танцевать и&nbsp;радоваться вместе с&nbsp;вами.
        </p>
        <p>Ведь вместе – лучше!</p>
      </div>

      <div class="footer__photos">
        <img src="./../assets/img/photo1.jpg" alt="" class="footer__photo" />
        <img src="./../assets/img/photo2.jpg" alt="" class="footer__photo" />
        <img src="./../assets/img/photo3.jpg" alt="" class="footer__photo" />
      </div>
    </footer>
  </Animate>
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

  &__photos {
    height: 14rem;
    width: 100%;
    display: flex;
    justify-content: space-between;
  }

  &__photo {
    height: 100%;
    object-fit: contain;

    @media screen and (max-width: 500px) {
      object-fit: cover;
    }

    &:nth-child(1) {
      width: 24%;
    }

    &:nth-child(2) {
      width: 50%;
    }

    &:nth-child(3) {
      width: 24%;
    }
  }
}
</style>
