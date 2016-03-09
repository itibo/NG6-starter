import angular from 'angular';
import uiRouter from 'angular-ui-router';
import authComponent from './auth.component';
import Translate from 'angular-translate';
import TranslateEnDictionary from './translations-en';
import Store from 'angular-storage';

import storeService from './store.service';
import HttpInterceptor from './auth.httpinterceptor'
import authService from './auth.service';


import Login from './login/login';
import SignUp from './signup/signup';


let authModule = angular.module('auth', [
  uiRouter,
  Translate,
  Store,

  Login.name,
  SignUp.name
])

.config(['$translateProvider', ($translateProvider) => {
  $translateProvider
    .translations('en', TranslateEnDictionary);
}])
.config(['$httpProvider', ($httpProvider)=>{
  $httpProvider.interceptors.push('HttpInterceptor');
}])

.run(['$rootScope', 'Auth', '$state', ($rootScope, Auth, $state)=>{

  $rootScope.$on('$stateChangeStart', function (event, toState, toParams) {
    let requireLogin = toState.hasOwnProperty('data') && toState.data.requireLogin;

    if (requireLogin && !Auth.isAuthenticated) {
      event.preventDefault();
      $state.go('login', {toState, toParams});
    } else if (Auth.isAuthenticated && ['login', 'signup'].indexOf(toState.name) > -1){
      event.preventDefault();
      $state.go('home');
    }
  })

}])


.service('StoreService', storeService)
.factory('HttpInterceptor', HttpInterceptor.createInstance)
.service('Auth', authService)


.component('auth', authComponent);

export default authModule;
