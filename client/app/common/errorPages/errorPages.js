import angular from 'angular';
import uiRouter from 'angular-ui-router';
import errorPagesComponent from './errorPages.component';
import Translate from 'angular-translate';
import TranslateEnDictionary from './translations-en';

import template from './errorPages.html';

import page401 from './page401/page401';
import page404 from './page404/page404';
import page405 from './page405/page405';

let errorPagesModule = angular.module('errorPages', [
  uiRouter,
  Translate,

  page401.name,
  page404.name,
  page405.name

])

.config(['$translateProvider', ($translateProvider) => {
  $translateProvider
    .translations('en', TranslateEnDictionary);
}])

.config(($stateProvider) => {
  "ngInject";

  $stateProvider
    .state('error', {
      abstract: true,
      url: '/error',
      template: template
    });
})

.component('errorPages', errorPagesComponent);

export default errorPagesModule;
