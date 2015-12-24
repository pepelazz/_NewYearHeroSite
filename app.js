(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
var data, ngModule;

ngModule = angular.module('app', [require('./quiz/quiz.coffee')]);

ngModule.controller('mainCtrl', [
  '$scope', (function($scope) {
    $scope.step = 0;
    $scope.getBg = (function() {
      return "bg0" + $scope.step;
    });
    $scope.getAnswrClass = (function(i) {
      return "answer-" + i;
    });
    $scope.data = data;
    $scope.quizStart = (function(sex) {
      $scope.step = 1;
      $scope.sex = sex;
    });
    $scope.nextQstn = (function(score) {
      $scope.step++;
      console.log(score);
    });
  })
]);

data = [
  {
    text: 'Как вы готовитесь к новогодней вечеринке?',
    man: [
      {
        text: 'Подбираете модный look, в котором пойдете на тусовку.',
        score: '1'
      }, {
        text: 'Ищите, где отпраздновать. Желательно – за границей.',
        score: '2'
      }, {
        text: 'Отправляетесь на оптовый склад закупиться вином.',
        score: '3'
      }, {
        text: 'Тщательно планируете вечеринку. Без вас не справятся.',
        score: '4'
      }
    ],
    girl: [
      {
        text: 'Выбираете, в какой компании отметить.',
        score: '5'
      }, {
        text: 'Воспринимаете все философски: пусть все пройдет так, как должно быть.',
        score: '6'
      }, {
        text: 'Выбираете новогодний наряд. Вы должны всех затмить.',
        score: '7'
      }, {
        text: 'Ищите турбазу или домик в лесу.',
        score: '8'
      }
    ]
  }, {
    text: 'Что вы обычно дарите на новый год?',
    man: [
      {
        text: 'Оригинальные сувениры.',
        score: '2'
      }, {
        text: 'Бутылку. Хорошую. Дорогую.',
        score: '3'
      }, {
        text: 'Все, что угодно. Главное красиво упаковать.',
        score: '1'
      }, {
        text: 'Я люблю большие подарки. Главное дотащить их до места…',
        score: '4'
      }
    ],
    girl: [
      {
        text: 'Что-то практичное. Например, теплый шарф или лыжную маску.',
        score: '8'
      }, {
        text: 'Мне нравится дарить красивые подарки.',
        score: '7'
      }, {
        text: 'Люблю подарки со скрытым смыслом.',
        score: '6'
      }, {
        text: 'Я сама – лучший подарок. ',
        score: '5'
      }
    ]
  }, {
    text: 'Где вы любите встречать новый год?',
    man: [
      {
        text: 'Неважно где. Лишь бы в дружной компании.',
        score: '3'
      }, {
        text: 'На море или в горах. В общем, за рубежом.',
        score: '2'
      }, {
        text: 'Где угодно. Главное, чтобы все шло по плану.',
        score: '4'
      }, {
        text: 'В клубе. Должно быть весело и многолюдно.',
        score: '1'
      }
    ],
    girl: [
      {
        text: 'Всегда по-разному. На городской площади или в лесу.',
        score: '8'
      }, {
        text: 'В клубе. Должно быть весело и многолюдно. ',
        score: '5'
      }, {
        text: 'У себя дома. И позову побольше гостей.',
        score: '7'
      }, {
        text: 'Место не имеет значение. Главное – люди, которые рядом.',
        score: '6'
      }
    ]
  }, {
    text: 'Что вам нужно для новогоднего настроения?',
    man: [
      {
        text: 'Билет на самолет. Обожаю новогодние путешествия.',
        score: '2'
      }, {
        text: 'Бокальчик красного вина или глинтвейна.',
        score: '3'
      }, {
        text: 'Пара-другая бодрящих коктейлей. ',
        score: '1'
      }, {
        text: 'Текила с лимоном и солью. Можно без лимона. Можно без текилы.',
        score: '4'
      }
    ],
    girl: [
      {
        text: 'Шампанское. Чтоб пузырьки в голову ударили!',
        score: '5'
      }, {
        text: 'Хорошо бы снег пошел. Должно быть много снега!',
        score: '8'
      }, {
        text: 'Настроение появится, как только открою первый подарок. ',
        score: '7'
      }, {
        text: 'Ароматные запахи новогодних блюд на столе.',
        score: '6'
      }
    ]
  }
];


},{"./quiz/quiz.coffee":2}],2:[function(require,module,exports){
var ngModule;

module.exports = (ngModule = angular.module('quiz/quiz', [])).name;


},{}]},{},[1]);
