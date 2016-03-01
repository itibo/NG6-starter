import angular from 'angular';
import uiRouter from 'angular-ui-router';
import page404Component from './page404.component';
import Translate from 'angular-translate';
import TranslateEnDictionary from './translations-en';

let page404Module = angular.module('page404', [
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
    .state('error.404', {
      url: '/404',
      template: "<page404></page404>"
    });
})

.component('page404', page404Component);

export default page404Module;
