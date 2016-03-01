import angular from 'angular';
import uiRouter from 'angular-ui-router';
import page405Component from './page405.component';
import Translate from 'angular-translate';
import TranslateEnDictionary from './translations-en';

let page405Module = angular.module('page405', [
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
    .state('error.405', {
      url: '/405',
      template: "<page405></page405>"
    });
})

.component('page405', page405Component);

export default page405Module;
