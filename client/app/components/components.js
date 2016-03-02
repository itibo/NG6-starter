import angular from 'angular';
import Home from './home/home';
import About from './about/about';
import Auth from './auth/auth';

let componentModule = angular.module('app.components', [
  Home.name,
  About.name,

  Auth.name
]);

export default componentModule;
