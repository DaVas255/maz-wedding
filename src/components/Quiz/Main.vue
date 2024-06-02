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
      is_start: false,
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
    start() {
      this.is_start = true
    },
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
        this.Processed = false
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
          this.grade_title = 'Вы – плачущий котик'
          this.feedback = 'Вам известно о нас совсем немного, но не расстраивайтесь, этот тест сделан как раз для того, чтобы вы узнали нас лучше и познакомились с нашей историей! Мы будем рады видеть вас на празднике.'
        }
      }
    }
  }
}
</script>

<template>
  <div class="quiz">
    <div class="quiz__wrapper">
      <div v-if="!is_start" class="quiz__introduction">
        <div class="quiz__state"><span></span><span>Тест</span></div>
        <div v-if="!is_start" class="quiz__introduction__title">
          Какой вы гость?
        </div>
        <div v-if="!is_start" class="quiz__introduction__text">
          Шуточный тест о&nbsp;том, насколько хорошо вы нас знаете. Не бойтесь, он не проверяет знания, и&nbsp;оценки за
          него не ставятся. Это просто интерактивчик, который поможет узнать нас чуть лучше 🙂
        </div>
      </div>
      <div v-if="is_start">
        <div class="quiz__state"><span>{{ (state + 1) }}</span><span>/</span><span>{{ Questions.length }}</span></div>
        <div class="quiz__text">{{ Questions[this.state].text }}</div>
        <div class="quiz__answers">
          <div class="quiz__answer" v-for="(answer, index) in Questions[this.state].answers">
            <label>
              <input v-model="user_answer" name="answers" type="radio" :value="index" :checked="Processed"
                     :disabled="feedback">
              {{ answer.text }}
            </label>
            <div class="quiz__answer__feedback" v-if="this.user_answer === index && feedback">
              {{ answer.feedback }}
            </div>
          </div>
        </div>
        <div class="quiz__grade" v-if="the_end">
          <img class="quiz__grade__img" :src="img" alt="!">
          <p><b>{{ this.grade }} из {{ Questions.length }}&nbsp;&nbsp;&nbsp;&nbsp;{{ this.grade_title }}</b></p>
        </div>
      </div>
      <div class="quiz__btn">
        <div v-if="!is_start">
          <button class="quiz-link" @click="start">Начать тест</button>
        </div>
        <div v-if="!feedback && user_answer !== -1">
          <button class="quiz-link" @click="answer">Ответить</button>
        </div>
        <div v-if="feedback && !the_end">
          <button class="quiz-link" @click="next">Далее</button>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.quiz {
  padding: 0 10%;

  &__introduction {
    text-align: center;

    &__title {
      margin-bottom: 20px;
      font-size: 28px;
      line-height: 1.17;
      font-weight: 600;
    }

    &__text {
      font-size: 16px;
      line-height: 1.55;
      font-weight: 300;
    }
  }

  &__wrapper {
    background-color: #ffffff;
    border-width: 1px;
    border-color: #9c9c9c;
    //border-radius: 30px;
    padding: 45px 45px 45px;
  }

  &__state {
    margin-bottom: 15px;
    font-size: 16px;
    font-weight: 600;
    letter-spacing: 2.5px;
    text-align: center;

    span:first-child {
      opacity: .7;
    }

    span {
      opacity: .3;
    }
  }

  &__text {
    margin-bottom: 20px;
    text-align: left;
    font-weight: 600;
  }

  &__answers {
  }

  &__answer {
    padding: 15px 0;

    &__feedback {
      padding-left: 30px;
      opacity: .8;
      font-size: 14px;
    }

    input[type='radio'],
    label {
      cursor: pointer;
    }

    $size: 18px;

    input[type='radio'] {
      top: 2px;
      position: relative;
      height: $size;
      width: $size;
      -webkit-appearance: none;
      -moz-appearance: none;
      appearance: none;
      outline: none;
    }

    input[type='radio']::before {
      content: '';
      position: absolute;
      top: 50%;
      left: 50%;
      width: $size;
      height: $size;
      border-radius: 50%;
      transform: translate(-50%, -50%);
      background-color: white;
      border: 1px solid #8aaf7a;
    }

    input[type='radio']:checked::after {
      content: '';
      position: absolute;
      top: 50%;
      left: 50%;
      width: $size / 2;
      height: $size / 2;
      border-radius: 50%;
      background-color: #8aaf7a;
      transform: translate(-50%, -50%);
      visibility: visible;
    }

    input[type='radio']:disabled {
      opacity: .3;
    }
  }

  &__grade {
    &__img {
      max-width: 300px;
    }
  }

  &__btn {
    padding-top: 10px;
    display: flex;
    justify-content: center;
  }

}
</style>