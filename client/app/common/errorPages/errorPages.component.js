import template from './errorPages.html';
import controller from './errorPages.controller';
import './errorPages.styl';

let errorPagesComponent = {
  restrict: 'E',
  bindings: {},
  template,
  controller,
  controllerAs: 'vm'
};

export default errorPagesComponent;
