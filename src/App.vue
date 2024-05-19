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
      <Date />
      <Place />
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
</style>
