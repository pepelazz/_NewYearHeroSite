(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
var data, ngModule;

ngModule = angular.module('app', [require('./quiz/quiz.coffee')]);

ngModule.config([
  '$locationProvider', (function($locationProvider) {
    $locationProvider.html5Mode(true);
  })
]);

ngModule.controller('mainCtrl', [
  '$scope', '$window', '$location', (function($scope, $window, $location) {
    var pathList;
    $scope.step = 0;
    $scope.score = [0, 0, 0, 0];
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
    $scope.nextQstn = (function(i) {
      var max, path, result;
      $scope.score[i]++;
      console.log($scope.score);
      if ($scope.step < 4) {
        $scope.step++;
      } else {
        max = _.max($scope.score);
        result = max > 1 ? _.findIndex($scope.score, function(v) {
          return v === max;
        }) : i;
        console.log('max', max, 'result', result);
        path = pathList[$scope.sex][result];
        $location.path("/" + path + ".html");
        $window.location.reload();
      }
    });
    $scope.toQuizStart = (function() {
      $location.path("/");
      $window.location.reload();
    });
    pathList = {
      man: ['eWRhpRV', '23TplPdS', '46Juzcyx', 'dBvJIh-H'],
      girl: ['2WEKaVNO', '7oet_d9Z', 'dogPzIz8', 'nYrnfYEv']
    };
  })
]);

data = [
  {
    text: 'Как вы готовитесь к новогодней вечеринке?',
    man: [
      {
        text: 'Подбираете модный look, в котором пойдете на тусовку.',
        score: '0'
      }, {
        text: 'Ищите, где отпраздновать. Желательно – за границей.',
        score: '1'
      }, {
        text: 'Отправляетесь на оптовый склад закупиться вином.',
        score: '2'
      }, {
        text: 'Тщательно планируете вечеринку. Без вас не справятся.',
        score: '3'
      }
    ],
    girl: [
      {
        text: 'Выбираете, в какой компании отметить.',
        score: '0'
      }, {
        text: 'Воспринимаете все философски: пусть все пройдет так, как должно быть.',
        score: '1'
      }, {
        text: 'Выбираете новогодний наряд. Вы должны всех затмить.',
        score: '2'
      }, {
        text: 'Ищите турбазу или домик в лесу.',
        score: '3'
      }
    ]
  }, {
    text: 'Что вы обычно дарите на новый год?',
    man: [
      {
        text: 'Оригинальные сувениры.',
        score: '1'
      }, {
        text: 'Бутылку. Хорошую. Дорогую.',
        score: '2'
      }, {
        text: 'Все, что угодно. Главное красиво упаковать.',
        score: '0'
      }, {
        text: 'Я люблю большие подарки. Главное дотащить их до места…',
        score: '3'
      }
    ],
    girl: [
      {
        text: 'Что-то практичное. Например, теплый шарф или лыжную маску.',
        score: '3'
      }, {
        text: 'Мне нравится дарить красивые подарки.',
        score: '2'
      }, {
        text: 'Люблю подарки со скрытым смыслом.',
        score: '1'
      }, {
        text: 'Я сама – лучший подарок. ',
        score: '0'
      }
    ]
  }, {
    text: 'Где вы любите встречать новый год?',
    man: [
      {
        text: 'Неважно где. Лишь бы в дружной компании.',
        score: '2'
      }, {
        text: 'На море или в горах. В общем, за рубежом.',
        score: '1'
      }, {
        text: 'Где угодно. Главное, чтобы все шло по плану.',
        score: '3'
      }, {
        text: 'В клубе. Должно быть весело и многолюдно.',
        score: '0'
      }
    ],
    girl: [
      {
        text: 'Всегда по-разному. На городской площади или в лесу.',
        score: '3'
      }, {
        text: 'В клубе. Должно быть весело и многолюдно. ',
        score: '0'
      }, {
        text: 'У себя дома. И позову побольше гостей.',
        score: '2'
      }, {
        text: 'Место не имеет значение. Главное – люди, которые рядом.',
        score: '1'
      }
    ]
  }, {
    text: 'Что вам нужно для новогоднего настроения?',
    man: [
      {
        text: 'Билет на самолет. Обожаю новогодние путешествия.',
        score: '1'
      }, {
        text: 'Бокальчик красного вина или глинтвейна.',
        score: '2'
      }, {
        text: 'Пара-другая бодрящих коктейлей. ',
        score: '0'
      }, {
        text: 'Текила с лимоном и солью. Можно без лимона. Можно без текилы.',
        score: '3'
      }
    ],
    girl: [
      {
        text: 'Шампанское. Чтоб пузырьки в голову ударили!',
        score: '0'
      }, {
        text: 'Хорошо бы снег пошел. Должно быть много снега!',
        score: '3'
      }, {
        text: 'Настроение появится, как только открою первый подарок. ',
        score: '2'
      }, {
        text: 'Ароматные запахи новогодних блюд на столе.',
        score: '1'
      }
    ]
  }
];


},{"./quiz/quiz.coffee":2}],2:[function(require,module,exports){
var ngModule;

module.exports = (ngModule = angular.module('quiz/quiz', [])).name;


},{}]},{},[1]);
