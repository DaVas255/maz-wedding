<script>
import Animate from '@/components/Animate.vue'
import Main from '@/components/Quiz/Main.vue'

export default {
  components: { Main, Animate }
}
</script>

<template>
  <Animate animationClass="animate__fadeInUp" class="test">
    <Main />
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

.quiz {

  &-link {
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
