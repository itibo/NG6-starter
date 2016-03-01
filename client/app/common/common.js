import angular from 'angular';
import Navbar from './navbar/navbar';
import Hero from './hero/hero';
import User from './user/user';

import Footer from './footer/footer';
import ErrorPages from './errorPages/errorPages';


let commonModule = angular.module('app.common', [
  Navbar.name,
  Hero.name,
  User.name,

  Footer.name,

  ErrorPages.name
]);

export default commonModule;
