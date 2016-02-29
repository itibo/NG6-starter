import angular from 'angular';
import uiRouter from 'angular-ui-router';
import <%= name %>Component from './<%= name %>.component';
import Translate from 'angular-translate';
import TranslateEnDictionary from './translations-en';

let <%= name %>Module = angular.module('<%= name %>', [
  uiRouter,
  Translate
])

.config(['$translateProvider', ($translateProvider) => {
  $translateProvider
    .translations('en', TranslateEnDictionary);
}])

.component('<%= name %>', <%= name %>Component);

export default <%= name %>Module;
