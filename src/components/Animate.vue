<template>
  <div
    ref="animatedElement"
    :class="['animate__animated', { [animationClass]: animated, 'initial-hidden': !animated }]"
  >
    <slot></slot>
  </div>
</template>

<script>
import { ref, onMounted, onBeforeUnmount } from 'vue'

export default {
  props: {
    animationClass: {
      type: String,
      default: 'animate__fadeIn' // По умолчанию используем fadeIn анимацию
    }
  },
  setup(props) {
    const animatedElement = ref(null)
    const animated = ref(false)
    let observer = null

    onMounted(() => {
      observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              animated.value = true
              observer.unobserve(animatedElement.value) // Отменяем наблюдение после первой анимации
            }
          })
        },
        { threshold: 0.1 } // Порог 10%
      )

      observer.observe(animatedElement.value)
    })

    onBeforeUnmount(() => {
      if (observer) {
        observer.disconnect()
      }
    })

    return {
      animatedElement,
      animated
    }
  }
}
</script>

<style scoped>
.initial-hidden {
  opacity: 0;
}
</style>
