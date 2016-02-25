import angular from 'angular';
import uiRouter from 'angular-ui-router';
import page404Component from './page404.component';

let page404Module = angular.module('page404', [
  uiRouter
])

.component('page404', page404Component);

export default page404Module;
