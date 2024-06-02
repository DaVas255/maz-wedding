<script>
import Five from '@/assets/img/quiz/5.jpg'
import Four from '@/assets/img/quiz/4.png'
import Three from '@/assets/img/quiz/3.jpg'
import Two from '@/assets/img/quiz/2.jpg'
import Questions from '@/components/Quiz/Questions.js'

export default {
  name: 'Main',
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
  <div class="quiz__wrapper">
    <div>

      <p>
        {{ Questions[this.state].text }}
      </p>
      <p v-for="(answer, index) in Questions[this.state].answers">
        <label>
          <input v-model="user_answer" name="answers" type="radio" :value="index" :checked="Processed">
          {{ answer.text }}
          <p v-if="this.user_answer == index && feedback">{{ answer.feedback }}</p>
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
      <!--      <p>{{ this.feedback }}</p>-->
    </div>
    <div v-if="!feedback && user_answer !== -1" class="form__map">
      <button class="quiz-link" @click="answer">Ответить</button>
    </div>

    <div v-if="feedback && !the_end" class="form__map">
      <button class="quiz-link" @click="next">Далее</button>
    </div>
  </div>
</template>

<style scoped lang="scss">
.quiz {
  &__wrapper {
    border: 1px solid black;
  }
}
</style>