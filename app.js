(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
var ngModule;

ngModule = angular.module('app', [require('./quiz/quiz.coffee')]);

ngModule.controller('mainCtrl', [
  '$scope', (function($scope) {
    var step;
    step = 0;
    $scope.getBg = (function() {
      return "bg0" + step;
    });
    $scope.quizStart = (function(isMan) {
      step = 1;
    });
  })
]);


},{"./quiz/quiz.coffee":2}],2:[function(require,module,exports){
var ngModule;

module.exports = (ngModule = angular.module('quiz/quiz', [])).name;


},{}]},{},[1]);
