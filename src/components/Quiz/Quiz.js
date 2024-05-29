import Questions from '@/components/Quiz/Questions.js'


const Quiz = new class {
  Questions = Questions
  state = 0

  render() {
    let target_question = this.Questions[this.state];
    target_question.text;

  }
}

export default Quiz