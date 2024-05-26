<script setup>
import Camera from './icons/Camera.vue'
import Canape from './icons/Canape.vue'
import WifeHusband from './icons/WifeHusband.vue'
import Cake from './icons/Cake.vue'
import Firework from './icons/Firework.vue'
import Animate from './Animate.vue'
</script>

<template>
  <div class="program">
    <Animate animationClass="animate__fadeInUp" class="program__item">
      <div class="program__camera">
        <Camera class="program__camera-icon" />
        <div class="program__line"></div>
      </div>
      <div class="program__content">
        <h2 class="program__time">15.00</h2>
        <p class="program__text">
          <span class="accent-text-bold">Фотопрогулка. Театральный сквер</span><br />
          Если вы хотите сфотографироваться с&nbsp;нами, подходите
          к&nbsp;<a target="_blank"
                    href="https://2gis.ru/tomsk/geo/70030076184912166?m=84.947942%2C56.483265%2F18.93"
                    class="accent-text-main-color"
        >театральному скверу</a>
          в&nbsp;15.00. Сделаем несколько классных снимков на память,
          а&nbsp;потом пойдем в&nbsp;ресторан – он находится в&nbsp;3&nbsp;минутах ходьбы.
        </p>
      </div>
    </Animate>

    <Animate animationClass="animate__fadeInUp" class="program__item">
      <div class="program__canape">
        <Canape class="program__canape-icon" />
        <div class="program__line"></div>
      </div>
      <div>
        <h2 class="program__time">16.30</h2>
        <p class="program__text">
          <span class="accent-text-bold">Сбор гостей. Ресторан «Кухтерин»</span><br />
          Если вы не любитель фотографироваться и&nbsp;вам
          достаточно фото из ресторана, приходите сразу в&nbsp;«Кухтерин».
          Для вас будет организован фуршет, где можно перекусить перед началом мероприятия,
          пообщаться с&nbsp;гостями и&nbsp;где ведущий расскажет основные правила.
        </p>
      </div>
    </Animate>

    <Animate animationClass="animate__fadeInUp" class="program__item">
      <div class="program__family">
        <WifeHusband class="program__family-icon" />
        <div class="program__line"></div>
      </div>
      <div>
        <h2 class="program__time">16.30</h2>
        <p class="program__text">
          <span class="accent-text-bold">Начало банкета</span><br />
          Банкет начнется в&nbsp;17.00, но просим вас прийти раньше, чтобы не
          опоздать и&nbsp;не упустить ценную информацию от&nbsp;ведущего.
        </p>
      </div>
    </Animate>

    <Animate animationClass="animate__fadeInUp" class="program__item">
      <div class="program__cake">
        <Cake class="program__cake-icon" />
        <div class="program__line"></div>
      </div>
      <div>
        <h2 class="program__time">21.30</h2>
        <p class="program__text">
          <span class="accent-text-bold">Тортик</span><br />
          Даже тем, кто не ест после шести, рекомендуем попробовать вкуснейший тортик. А&nbsp;чтобы
          он не отложился на талии, го&nbsp;танцевать!
        </p>
      </div>
    </Animate>

    <Animate animationClass="animate__fadeInUp" class="program__item">
      <div class="program__firework">
        <Firework class="program__firework-icon" />
      </div>
      <div>
        <h2 class="program__time">23.00</h2>
        <p class="program__text">
          <span class="accent-text-bold">Окончание банкета</span><br />
          Даже такой прекрасный день когда-то заканчивается… Мы очень надеемся, что у&nbsp;вас
          останутся самые теплые воспоминания о&nbsp;нашем празднике!
        </p>
      </div>
    </Animate>
  </div>
</template>

<style lang="scss">
.program {
  padding: 0 3.5rem;
  margin-bottom: 8rem;

  font-family: 'Inter', Arial, Helvetica, sans-serif;
  font-size: 1.3rem;

  &__item {
    display: flex;
    margin-bottom: 4rem;
  }

  &__camera {
    margin-right: 1.9rem;
    margin-top: 0.4rem;
  }

  &__camera-icon {
    margin-bottom: 1.3rem;
  }

  &__line {
    height: 90%;
    margin: 0 auto 0 auto;
    border-left: 1px solid var(--main-color);
    width: 0.01rem;
  }

  &__time {
    line-height: 2.2rem;
    font-size: 1.6rem;
  }

  &__text {
    line-height: 2.2rem;
  }

  &__canape {
    margin-right: 1.5rem;
    margin-left: -0.3rem;
  }

  &__canape-icon {
    margin-bottom: 0.8rem;
  }

  &__family {
    margin-right: 1.5rem;
    margin-left: -0.3rem;
  }

  &__cake {
    margin-right: 1.8rem;
  }

  &__cake-icon {
    margin-bottom: 1.2rem;
  }

  &__firework {
    margin-right: 1.4rem;
  }

  &__firework-icon {
    margin-top: 0.3rem;
  }
}
</style>
