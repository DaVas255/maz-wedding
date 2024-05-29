<script>
import Radio from '@/components/Quiz/Type/Radio.vue'
import Animate from '@/components/Animate.vue'
import Questions from '@/components/Quiz/Questions.js'

export default {
  components: { Radio, Animate },
  data() {
    return {
      Questions: Questions,
      state: 0,
      feedback: false,
      the_end: false,
      answers: [],
      user_answer: -1,
      grade: 0
    }
  },
  methods: {
    answer() {
      this.feedback = Questions[this.state].answers[this.user_answer].feedback
      if (Questions[this.state].answers[this.user_answer].is_true) {
        this.grade++
      }
      console.log(this.user_answer, this.feedback)
    },
    next() {
      if ((this.state + 1) < Questions.length) {
        ++this.state
        this.feedback = false
      } else {
        this.the_end = true
        this.feedback = 'Конец! Оценка: ' + this.grade
      }
      // && ((Questions.length -1 ) != state)
    }
  }
}
</script>

<template>
  <Animate animationClass="animate__fadeInUp" class="test">
    <h2 class="test__title">Тест <span class="accent-text-main-color">Какой вы гость?</span></h2>
    <p>
      Шуточный тест о&nbsp;том, насколько хорошо вы нас знаете. Не бойтесь, он не проверяет знания, и&nbsp;оценки за
      него не ставятся. Это просто интерактивчик, который поможет узнать нас чуть лучше 🙂
    </p>
    <hr>
    <!--    //-->
    <div v-if="!feedback">

      <p>
        {{ Questions[this.state].text }}
      </p>
      <p v-for="(answer, index) in Questions[this.state].answers">
        <label>
          <input v-model="user_answer" name="answers" type="radio" :value="index"> {{ answer.text }}
        </label>
      </p>

    </div>
    <!--    //-->
    <div v-if="feedback">
      {{ this.feedback }}
    </div>
    <div v-if="!feedback && user_answer !== -1" class="form__map">
      <button class="quiz-link" @click="answer">Ответить</button>
    </div>

    <div v-if="feedback && !the_end" class="form__map">
      <button class="quiz-link" @click="next">Далее</button>
    </div>
    <hr>
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
