import angular from 'angular';
import uiRouter from 'angular-ui-router';
import Common from './common/common';
import Components from './components/components';
import AppComponent from './app.component';
import 'normalize.css';
import Translate from 'angular-translate'

angular.module('app', [
    uiRouter,
    Common.name,
    Components.name,
    Translate
  ])
  .config(($locationProvider) => {
    "ngInject";
    // @see: https://github.com/angular-ui/ui-router/wiki/Frequently-Asked-Questions
    // #how-to-configure-your-server-to-work-with-html5mode
    $locationProvider.html5Mode(true).hashPrefix('!');
  })
  .config(['$translateProvider', ($translateProvider) => {
    "ngInject";

    $translateProvider
      .preferredLanguage('en')
      .fallbackLanguage('en')
  }])
  .config(($stateProvider, $urlRouterProvider) => {
    "ngInject";

    $stateProvider
      .state('404', {
        url: '/404',
        template: '<page404></page404>'
      });

    $urlRouterProvider
      .otherwise('404');
  })


  .component('app', AppComponent);
