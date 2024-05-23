<script setup>
import Header from './components/Header.vue'
import Nav from './components/Nav.vue'
import Title from './components/Title.vue'
import Date from './components/Date.vue'
import Place from './components/Place.vue'
import Program from './components/Program.vue'
import Tables from './components/Tables.vue'
import Colors from './components/Colors.vue'
import Form from './components/Form.vue'
import Test from './components/Test.vue'
import Footer from './components/Footer.vue'
</script>

<template>
  <div class="container">
    <Header />
    <main>
      <Nav />
      <Title />
      <div class="main__date">
        <Date />
        <Place />
      </div>
      <Program />
      <Tables />
      <Colors />
      <Form />
      <Test />
    </main>
    <Footer />
  </div>
</template>

<style lang="scss">
@import './assets/styles/index';
@import url('https://fonts.googleapis.com/css2?family=Open+Sans:ital,wdth,wght@0,75..100,300..800;1,75..100,300..800&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@100..900&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Raleway:ital,wght@0,100..900;1,100..900&display=swap');

.main__date {
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  // margin-left: 8rem;
  margin-bottom: 9rem;
  position: relative;

  @media screen and (max-width: 580px) {
    flex-direction: column;
    row-gap: 7rem;
    margin-left: 0rem;
  }
}
</style>
