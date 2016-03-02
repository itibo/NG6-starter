import angular from 'angular';
import uiRouter from 'angular-ui-router';
import loginComponent from './login.component';
import Translate from 'angular-translate';
import TranslateEnDictionary from './translations-en';

let loginModule = angular.module('login', [
  uiRouter,
  Translate
])

.config(['$translateProvider', ($translateProvider) => {
  $translateProvider
    .translations('en', TranslateEnDictionary);
}])

.config(($stateProvider) => {
  "ngInject";

  $stateProvider
    .state('login', {
      url: '/login',
      template: '<login></login>'
    });
})

.component('login', loginComponent);

export default loginModule;
