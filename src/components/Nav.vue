<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import Animate from './Animate.vue'

const scrolledPastHeader = ref(false)

const handleScroll = () => {
  const headerHeight = document.querySelector('.header')?.offsetHeight || 0
  scrolledPastHeader.value = window.scrollY > headerHeight
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
  handleScroll()
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>

<template>
  <Animate
    animationClass="animate__fadeInUp"
    class="nav"
    :style="{ backgroundColor: scrolledPastHeader ? '#8AAF7A' : ' white' }"
  >
    <div class="nav__content">
      <nav class="nav__links" :style="{ color: scrolledPastHeader ? 'white' : '#8AAF7A' }">
        <a href="#date" :style="{ color: scrolledPastHeader ? 'white' : '#8AAF7A' }">Дата</a> |
        <a href="#place" :style="{ color: scrolledPastHeader ? 'white' : '#8AAF7A' }">Место</a> |
        <a href="#table" :style="{ color: scrolledPastHeader ? 'white' : '#8AAF7A' }">Ваш столик</a>
        |
        <a href="#color" :style="{ color: scrolledPastHeader ? 'white' : '#8AAF7A' }"
          >Цветовая палитра</a
        >
        |
        <a href="#form" :style="{ color: scrolledPastHeader ? 'white' : '#8AAF7A' }">Анкета</a>
      </nav>
      <div v-if="!scrolledPastHeader" class="nav__text">Better together</div>
    </div>
  </Animate>
</template>

<style scoped lang="scss">
.nav {
  position: sticky;
  top: 0;
  z-index: 10;

  display: flex;
  justify-content: center;
  align-items: center;

  padding: 0 2rem;
  height: 5rem;
  margin-bottom: 3rem;

  font-size: 1rem;
  color: var(--main-color);

  &__content {
    display: flex;
    width: 100%;
    column-gap: 3rem;
    justify-content: space-around;
    align-items: center;
  }

  &__text {
    font-family: Raleway;
    font-size: 3.2rem;
    font-weight: 200;
    line-height: 37.57px;
    text-align: left;
  }

  a {
    text-decoration: none;
  }
}
</style>
