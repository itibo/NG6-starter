import angular from 'angular';
import uiRouter from 'angular-ui-router';
import signupComponent from './signup.component';
import Translate from 'angular-translate';
import TranslateEnDictionary from './translations-en';

let signupModule = angular.module('signup', [
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
    .state('signup', {
      url: '/signup',
      template: '<signup></signup>'
    });
})

.component('signup', signupComponent);

export default signupModule;
