import angular from 'angular';
import uiRouter from 'angular-ui-router';
import navbarComponent from './navbar.component';
import Translate from 'angular-translate';
import TranslateEnDictionary from './translations-en';
import TranslateRuDictionary from './translations-ru';


let navbarModule = angular.module('navbar', [
  uiRouter,
  Translate
])

.config(['$translateProvider', ($translateProvider) => {
  $translateProvider
    .translations('en', TranslateEnDictionary)
    .translations('ru', TranslateRuDictionary);
}])
.component('navbar', navbarComponent);

export default navbarModule;
