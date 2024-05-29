const Questions = [
  // {
  //   type: 'text',
  //   text: 'Как зовут жениха?',
  //   answers: [
  //     'Артем',
  //     'Артём',
  //     'Тёма',
  //     'Тема'
  //   ],
  //   feedback: {
  //     true: 'Поздравляем, на первый вопрос вы ответили верно. Посмотрим, что будет дальше!',
  //     false: 'Жениха зовут Артём. Запомните это, чтобы не попасть впросак 🙂'
  //   }
  // },
  // {
  //   type: 'text',
  //   text: 'Как зовут невесту?',
  //   answers: [
  //     'Екатерина',
  //     'Катя'
  //   ],
  //   feedback: {
  //     is_true: 'Правильно! Не расслабляйтесь, дальше будет сложнее.',
  //     is_false: 'Невесту зовут Катя. Запомните это, чтобы не попасть впросак 🙂'
  //   }
  // },
  {
    type: 'Radio',
    text: 'Сколько лет разница между нами?',
    answers: [
      {
        text: '3 года',
        is_true: false,
        feedback: 'Маловато. Артём старше Кати на 6 лет.'
      },
      {
        text: '6 лет',
        is_true: true,
        feedback: 'Да! Надеемся, вы это знали, а не тыкнули просто наугад.'
      },
      {
        text: '8 лет',
        is_true: false,
        feedback: 'Нее, это перебор. Артём старше Кати на 6 лет.'
      }
    ]
  },
  {
    type: 'Radio',
    text: 'Как мы познакомились?',
    answers: [
      {
        text: 'На работе',
        is_true: true,
        feedback: 'Правильно! Такие вот дела, ТУСУР объединяет сердца.'
      },
      {
        text: 'На сайте знакомств',
        is_true: false,
        feedback: 'Нет, это как-то слишком просто. Мы познакомились на работе.'
      },
      {
        text: 'В баре',
        is_true: false,
        feedback: 'В параллельной вселенной это могло бы быть правдой, но нет. Мы познакомились на работе.'
      }
    ]
  },
  {
    type: 'Radio',
    text: 'Артём понял, что хочет перевести отношения из рабочих в личные после…',
    answers: [
      {
        text: 'корпоратива',
        is_true: false,
        feedback: 'Похоже на правду, но нет. На корпоративах мы общались исключительно как коллеги. А потом случайно встретились на обеде и понеслось…'
      },
      {
        text: 'случайной встречи на обеде',
        is_true: true,
        feedback: 'Верно! Мы пообедали вместе и понравились друг другу.'
      },
      {
        text: 'просьбы Кати помочь донести тяжелые пакеты до дома',
        is_true: false,
        feedback: 'Катя не любит что-то просить, особенно у коллеги – просто Артёма из ЛИСМО. Отношения завязались после того, как мы случайно встретились на обеде и понравились друг другу.'
      }
    ]
  },
  {
    type: 'Radio',
    text: 'Что сказал Артём, когда предложил Кате жить вместе?',
    answers: [
      {
        text: 'Давай жить вместе?',
        is_true: false,
        feedback: 'Это слишком просто для такого творческого человека, как Артём. На самом деле он сказал, что нам нужно серьезно поговорить: в наших отношениях его не устраивает одна вещь – мы живем раздельно.'
      },
      {
        text: 'Меня не устраивает в наших отношениях одна вещь. Нам надо серьезно поговорить.',
        is_true: true,
        feedback: 'Верно! Вот зачем так пугать, согласны??'
      },
      {
        text: 'Собирай вещи, с завтрашнего дня ты будешь жить со мной.',
        is_true: false,
        feedback: 'Нее, это какой-то абьюз, не похоже на Артёма. На самом деле он сказал, что нам нужно серьезно поговорить: в наших отношениях его не устраивает одна вещь – мы живем раздельно.'
      }
    ]
  },
  {
    type: 'Radio',
    text: 'Сколько лет мы в отношениях?',
    answers: [
      {
        text: '1 год',
        is_true: false,
        feedback: 'Близко, но не верно. Мы вместе около 1,5 лет.'
      },
      {
        text: '1,5 года',
        is_true: true,
        feedback: 'Правильно! Срок небольшой, но и нам уже не по 15 лет.'
      },
      {
        text: '3 года',
        is_true: false,
        feedback: 'До 3-х лет мы еще не дожили, но всё впереди! Мы вместе около 1,5 лет.'
      },
      {
        text: '5 лет',
        is_true: false,
        feedback: 'Эту высоту мы еще не достигли, но всё впереди! Мы вместе около 1,5 лет.'
      }
    ]
  },
  {
    type: 'Radio',
    text: 'Где Артём сделал предложение?',
    answers: [
      {
        text: 'На колесе обозрения',
        is_true: false,
        feedback: 'Было бы круто! Но на улице стоял февраль. Колесо обозрения – не наш случай. Артём сделал предложение в нашем любимом ресторане «Антрекот».'
      },
      {
        text: 'В ресторане',
        is_true: true,
        feedback: 'Да! Артём сделал предложение в ресторане «Антрекот». Теперь это место полюбилось нам еще больше.'
      },
      {
        text: 'Дома',
        is_true: false,
        feedback: 'Нуу нет, это скучно. Артём сделал предложение в нашем любимом ресторане «Антрекот».'
      },
      {
        text: 'На море',
        is_true: false,
        feedback: 'Классная идея, но нет. Если бы мы дождались отпуска, чтобы поехать на море, свадьба была бы точно не летней. На самом деле Артём сделал предложение в нашем любимом ресторане «Антрекот».'
      }
    ]
  },
  {
    type: 'Radio',
    text: 'Что в первую очередь ответила Катя, когда Артём сделал предложение?',
    answers: [
      {
        text: 'Да!',
        is_true: false,
        feedback: 'Наверное, надо было ответить «да», но Катя ответила «конечно». Ну конечно она согласна, что за странные вопросы вообще))'
      },
      {
        text: 'Конечно!',
        is_true: true,
        feedback: 'Ну конечно!'
      },
      {
        text: 'Ты уверен?',
        is_true: false,
        feedback: 'Да, такой вопрос тоже звучал в тот вечер (как же без этого). Но на предложение руки и сердца Катя ответила «конечно»!'
      }

    ]
  },
  {
    type: 'Radio',
    text: 'Вы будете веселиться на полную катушку?',
    answers: [

      {
        text: 'Да',
        is_true: true,
        feedback: 'Правильный ответ! Давайте тусить!'
      },
      {
        text: 'Нет',
        is_true: false,
        feedback: 'Как это?'
      },
      {
        text: 'Зависит от количества выпитого',
        is_true: false,
        feedback: 'Ну лаадно, но вообще-то правильный ответ  «да»))'
      }
    ]
  }
]

export default Questions