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


.service('StoreService', storeService)
.service('HttpInterceptor', HttpInterceptor)
.service('Auth', authService)


.component('auth', authComponent);

export default authModule;
