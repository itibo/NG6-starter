import angular from 'angular';
import uiRouter from 'angular-ui-router';
import aboutComponent from './about.component';

let aboutModule = angular.module('about', [
  uiRouter
])

.config(($stateProvider) => {
  "ngInject";
  $stateProvider
    .state('about', {
      url: '/about',
      template: '<about></about>',
      resolve: {
        tst: function($http){
          return $http.get('/somewhere').then(()=>{}, ()=>{});
        }
      }
    });
})

.component('about', aboutComponent);

export default aboutModule;
