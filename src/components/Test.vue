<script>
import Radio from '@/components/Quiz/Type/Radio.vue'
import Animate from '@/components/Animate.vue'
import Questions from '@/components/Quiz/Questions.js'
import Five from '@/assets/img/quiz/5.jpg'
import Four from '@/assets/img/quiz/4.png'
import Three from '@/assets/img/quiz/3.jpg'
import Two from '@/assets/img/quiz/2.jpg'

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
      grade: 0,
      grade_title: '',
      Processed: false,
      img: Five
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
        if (this.grade > 8) {
          this.img = Five
          this.grade_title = 'Вы – довольный кот'
          this.feedback = 'Вы знаете нас лучше всех! Вот кто будет искренне радоваться за нас, говорить теплые слова и растрогается от переполнения чувств. Возможно, вы кто-то из наших родителей или лучших друзей. Но это не точно.'
        } else if (this.grade > 5) {
          this.img = Four
          this.grade_title = 'Вы – кот Степан'
          this.feedback = 'Вы верно ответили на большую часть вопросов, довольны собой и уже готовы к празднику. Отлично! Ждать осталось совсем немного.'
        } else if (this.grade > 2) {
          this.img = Three
          this.grade_title = 'Вы – кот Бендер'
          this.feedback = 'Вы ответили правильно меньше чем на половину вопросов и, возможно, не согласны с результатами. Да лаадно, вы все равно хорошо справились. Мы будем рады видеть вас на нашем празднике!'
        } else {
          this.img = Two
        }
      }
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
          <input v-model="user_answer" name="answers" type="radio" :value="index" :checked="Processed">
          {{ answer.text }}
        </label>
      </p>

    </div>
    <!--    //-->
    <div v-if="feedback">
      <div v-if="the_end">
        <img class="quiz__img_grade" :src="img" alt="!">
        <p><b>{{ this.grade }} из {{ Questions.length }}&nbsp;&nbsp;&nbsp;&nbsp;{{ this.grade_title }}</b></p>
      </div>
      <p><b></b></p>
      <p>{{ this.feedback }}</p>
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
  &__img_grade {
    max-width: 300px;
  }

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
