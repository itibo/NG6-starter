import angular from 'angular';
import uiRouter from 'angular-ui-router';
import authComponent from './auth.component';
import Translate from 'angular-translate';
import TranslateEnDictionary from './translations-en';

import authFactory from './auth.factory';
import Login from './login/login';
import SignUp from './signup/signup';


let authModule = angular.module('auth', [
  uiRouter,
  Translate,

  Login.name,
  SignUp.name
])

.config(['$translateProvider', ($translateProvider) => {
  $translateProvider
    .translations('en', TranslateEnDictionary);
}])

.factory('authService', authFactory)

.component('auth', authComponent);

export default authModule;
