import angular from 'angular';
import uiRouter from 'angular-ui-router';
import page401Component from './page401.component';
import Translate from 'angular-translate';
import TranslateEnDictionary from './translations-en';

let page401Module = angular.module('page401', [
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
    .state('error.401', {
      url: '/401',
      template: "<page401></page401>"
    });
})

.component('page401', page401Component);

export default page401Module;
